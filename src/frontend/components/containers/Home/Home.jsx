import React from 'react';
import { useStateValue } from '../../../context';

const Home = () => {
  const { theme, user, wishList } = useStateValue();
  return (
    <div>
      <h1>{`Home ${theme}`}</h1>
      {Object.keys(user).length !== 0 && (
        <>
          <h2>Bienvenido!!!!</h2>
          <p>{user.id}</p>
          <p>{user.email}</p>
          <p>{user.username}</p>
          <p>{user.account_type}</p>
          {wishList.length === 0 && (
            <h1>Sin favoritos</h1>
          )}
          {wishList.length !== 0 && (
            <>
            <p><strong>Favoritos</strong></p>
              {wishList.map((recipe) => (
                <p key={recipe.id}>{recipe.recipe}</p>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
