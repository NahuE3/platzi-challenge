import { useState } from 'react';
import { useStateValue } from '../context';
import {
  loginUser as login,
  registerUser as register,
} from '../context/actions';

const useForm = () => {
  const { dispatch } = useStateValue();
  const [loading, setLoading] = useState(false);
  const loginUser = async ({ email, password }) => {
    const user = { email, password };
    setLoading(true);
    await login({ user, dispatch });
    setLoading(false);
  };

  const registerUser = async ({ email, phone, username, password }) => {
    const user = {
      email,
      password,
      username,
      phone_number: phone,
    };
    setLoading(true);
    await register({ user, dispatch });
    setLoading(false);
  };

  return { loginUser, registerUser, loading };
};

export default useForm;
