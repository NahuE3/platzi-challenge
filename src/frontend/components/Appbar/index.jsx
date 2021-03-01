import React from 'react';
import { BsCalendar } from 'react-icons/bs';
import { RiBookReadLine } from 'react-icons/ri';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { Header, Nav, Logo, Link, Button, Divider } from './styles';
import { useStateValue } from '../../context';
import { changeTheme } from '../../context/actions';
import useLanguage from '../../hooks/useLanguage';
import useCurrency from '../../hooks/useCurrency';

const AppBar = () => {
  const { cart, wishList, dispatch, user } = useStateValue();
  const { getText, changeLanguage } = useLanguage();
  const { changeCurrency } = useCurrency();
  return (
    <Header>
      <Logo to='/' title='Go home'>
        <img src='logo_blanco.png' alt='' width='417' height='151' />
      </Logo>
      <Nav>
        <Link to='/user/menu'>
          <BsCalendar size={30} />
          <p>{getText('header.my-menu')}</p>
        </Link>
        <Link to='/menu'>
          <RiBookReadLine size={30} />
          <p>{getText('header.menu')}</p>
        </Link>
        <Link to='/favorites'>
          <AiOutlineHeart size={30} />
          <p>{getText('header.my-favorites')}</p>
          <span>{wishList.size || 0}</span>
        </Link>
        <Link to='/cart'>
          <AiOutlineShoppingCart size={30} />
          <p>{getText('header.my-cart')}</p>
          <span>{cart.size || 0}</span>
        </Link>
      </Nav>
      <div>
        {Object.keys(user).length !== 0 && (
          <Link to='/logout'>
            <AiOutlineUser size={30} />
            <p>{user.username}</p>
            <p>{getText('header.logout')}</p>
          </Link>
        )}
        {Object.keys(user).length === 0 && (
          <Link to='/login'>
            <AiOutlineUser size={30} />
            <p>{getText('header.login')}</p>
          </Link>
        )}
      </div>
      <div style={{ display: 'flex' }}>
        <Button type='button' onClick={() => changeTheme({ theme: 'light', dispatch })}>Light</Button>
        <Divider />
        <Button type='button' onClick={() => changeTheme({ theme: 'dark', dispatch })}>Dark</Button>
      </div>
      <div style={{ display: 'flex' }}>
        <Button
          type='button'
          onClick={() => changeLanguage({ language: 'es' })}
        >
          ES
        </Button>
        <Divider />
        <Button
          type='button'
          onClick={() => changeLanguage({ language: 'en' })}
        >
          EN
        </Button>
      </div>
      <div style={{ display: 'flex' }}>
        <Button
          type='button'
          onClick={() => changeCurrency({ currency: 'MXN' })}
        >
          MXN
        </Button>
        <Divider />
        <Button
          type='button'
          onClick={() => changeCurrency({ currency: 'COP' })}
        >
          COP
        </Button>
        <Divider />
        <Button
          type='button'
          onClick={() => changeCurrency({ currency: 'USD' })}
        >
          USD
        </Button>
      </div>
    </Header>
  );
}

export default AppBar;