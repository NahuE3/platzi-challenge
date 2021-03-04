import express from 'express';
import axios from 'axios';
import { API_URL } from '../config';

const Recipes = (app) => {
  const router = express.Router();
  app.use('/api', router);

  router.post('/sale', async (req, res, next) => {
    const { cart, user, payment, shipping, token } = req.body;
    if (!cart || !shipping || !payment) res.status(400).json({ data: 'ERROR!!'});
    const userEmail = 'exampel@exmaple.com';
    delete shipping?.email;

    const details = cart?.recipes?.map((item) => item.recipe.detail);
    const products = details?.reduce((a,b) => a.concat(b));

    try {
      const shippingInfo = await axios({
        url: `${API_URL}/shipping_infos/`,
        method: 'post',
        data: { ...shipping },
      });

      const sale = await axios({
        url: `${API_URL}/sales/`,
        method: 'post',
        data: {
          total: `${cart.total}`,
          payment_method: payment,
          delivery_charge: `${cart.delivery}`,
          shipping_info: shippingInfo.data.id,
        }
      });

      const saleUser = await axios({
        url: `${API_URL}/sales/email/`,
        method: 'post',
        data: {
          email: user?.email || userEmail,
          sale: sale.data.id,
        }
      });

      const saleDetail = await Promise.all(
        products.map((p) => {
          if (p.is_active) {
            return axios({
              url: `${API_URL}/sales/${sale.data.id}/details/`,
              method: 'post',
              data: {
                product: p.id,
                amount: 1,
                sub_total: 50.23,
              }
            });
          } else {
            return { data: null };
          }
        })
      );

      const saleDetailData = saleDetail.map(({ data }) => data);
      res.status(201).json({
        data: {
          user: saleUser.data,
          sale: sale.data,
          sale_detail: saleDetailData,

        },
      });
    } catch (error) {
      next(error);
    }
  });
};

export default Recipes;
