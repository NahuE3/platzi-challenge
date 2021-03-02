import express from 'express';
import axios from 'axios';
import { API_URL } from '../config';

const Recipes = (app) => {
  const router = express.Router();
  app.use('/api', router);

  router.post('/recipes', async (req, res, next) => {
    const { search } = req.body;
    const url = search ? `${API_URL}/recipes/?search=${search}` : `${API_URL}/recipes/`;
    try {
      const { data } = await axios({
        url: url,
        method: 'get',
      });
      res.status(201).json({
        data,
      });
    } catch (error) {
      next(error);
    }
  });
};

export default Recipes;
