import { useStateValue } from '../context';
import { loginUser as login, registerUser as register } from "../context/actions";

const useForm = () => {
  const { dispatch } = useStateValue();
  const loginUser = (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };
    login({ user , dispatch });
  }

  const registerUser = (data) => {
    // console.log(data);
    const user = {
      email: data.email,
      password: data.password,
      username: data.username,
      phone_number: data.phone_number,
    };
    register({ user , dispatch });
  }

  return { loginUser, registerUser };
};

export default useForm;