import express from 'express';
import axios from 'axios';
import { ENV, API_URL } from '../config';

const Auth = (app) => {
  const router = express.Router();
  app.use('/auth', router);

  router.post('/login', async (req, res, next) => {
    const _user = req.body;
    try {
      const { data } = await axios({
        url: `${API_URL}/users/login/`,
        method: 'post',
        data: {
          ..._user,
        },
      });
      const { user, access_token } = data;
      res.cookie('token', access_token, {
        httpOnly: !(ENV === 'development'),
        secure: !(ENV === 'development'),
      });
      res.status(201).json({
        data: { ...user, token: access_token },
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/register', async (req, res, next) => {
    const user = req.body;
    try {
      const { data } = await axios({
        url: `${API_URL}/users/signup/`,
        method: 'post',
        data: { ...user },
      });
      res.status(201).json({
        data,
      });
    } catch (error) {
      next(error);
    }
  });
};

export default Auth;
