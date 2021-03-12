import React from 'react';
import styled from 'styled-components';
import useForm from '../../../hooks/useForm';

import ButtonLogin from '../../shared/buttons/ButtonLogin';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { media } from '../../../const/mediaQuerys';

const SocialMediaLogin = () => {
  const { registerUser } = useForm();
  const { loginUser } = useForm();

  const responseFacebook = (response) => {
    const { email, userID, name } = response;
    const parsedName = name.replace(' ', '-').toLowerCase();
    console.log(parsedName);

    registerUser({
      email,
      username: parsedName,
      password: userID,
      phone: 1234567890,
    }).catch((error) => loginUser({ email, password: userID }));
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <StyledButtonsContainer>
      <FacebookLogin
        appId="4057491890942052"
        fields="name,email,picture"
        callback={responseFacebook}
        render={(renderProps) => (
          <ButtonLogin
            icon="Facebook"
            width="100%"
            margin="16px 0 0"
            onClick={renderProps.onClick}
          >
            {innerWidth < 700 ? 'Continuar con Facebook' : 'Facebook'}
          </ButtonLogin>
        )}
      />
      <GoogleLogin
        clientId="518869662053-h96e4obfvsb27hrb182oo3j1djtbfgc8.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        render={(renderProps) => (
          <ButtonLogin
            icon="Google"
            width="100%"
            margin="16px 0 0"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            {innerWidth < 700 ? 'Continuar con Google' : 'Google'}
          </ButtonLogin>
        )}
      />
    </StyledButtonsContainer>
  );
};

const StyledButtonsContainer = styled.div`
  display: grid;
  margin-bottom: 2rem;

  ${media.mobile} {
    max-width: 400px;
    width: 100%;
  }

  ${media.tab} {
    margin-bottom: 8rem;
    width: 400px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }
`;

export default SocialMediaLogin;
