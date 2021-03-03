import express from 'express';
import axios from 'axios';
import { API_URL } from '../config';

const Favorites = (app) => {
  const router = express.Router();
  app.use('/api', router);

  router.post('/favorites/get', async (req, res, next) => {
    const { id, token } = req.body;
    try {
      const { data } = await axios({
        headers: { Authorization: `Bearer ${token}` },
        url: `${API_URL}/users/${id}/favorites/`,
        method: 'get',
      });
      res.status(201).json({
        data,
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/favorites', async (req, res, next) => {
    const { id, recipe, token } = req.body;
    try {
      const { data } = await axios({
        headers: { Authorization: `Bearer ${token}` },
        url: `${API_URL}/users/${id}/favorites/`,
        method: 'post',
        data: { recipe },
      });
      res.status(201).json({
        data,
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/favorites/remove', async (req, res, next) => {
    const { user_id, recipe_id, token } = req.body;
    try {
      const { data } = await axios({
        headers: { Authorization: `Bearer ${token}` },
        url: `${API_URL}/users/${user_id}/favorites/${recipe_id}`,
        method: 'delete',
      });
      res.status(201).json({
        data,
      });
    } catch (error) {
      next(error);
    }
  });
};

export default Favorites;
