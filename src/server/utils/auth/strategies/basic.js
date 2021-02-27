import axios from 'axios';
import { use } from 'passport';
import { unauthorized } from '@hapi/boom';
import { BasicStrategy } from 'passport-http';
import { API_URL } from '../../../config';

use(
  new BasicStrategy((async (email, password, cb) => {
    try {
      const { data, status } = await axios({
        url: `${API_URL}/api/auth/sign-in`,
        method: 'post',
        auth: {
          username: email,
          password,
        },
      });

      if (!data || status !== 200) {
        return cb(unauthorized(), false);
      }

      return cb(null, data);
    } catch (error) {
      return cb(error);
    }
  })),
);
