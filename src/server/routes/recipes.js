import express from 'express';
import axios from 'axios';
import { API_URL } from '../config';

const Recipes = (app) => {
  const router = express.Router();
  app.use('/api', router);

  router.post('/recipes', async (req, res, next) => {
    const { search, category, page } = req.body;
    let url = search ?
      `${API_URL}/recipes/?search=${search}` :
      category ?
        `${API_URL}/recipes/?recipe_category=${category}` :
        `${API_URL}/recipes/`;

    if (parseInt(page, 10) > 0) {
      url = url.concat((category || search) ? `&offset=${page * 20}` : `?offset=${page * 20}`);
    }

    try {
      const { data } = await axios({
        url,
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
