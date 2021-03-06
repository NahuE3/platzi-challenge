//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';
//Import de layout.
import Layout from '../../layout/Layout';
//Import de icons.
import { HiOutlineShoppingCart, HiOutlineShare } from 'react-icons/hi';
import { MdTimer, MdFavoriteBorder, MdFavorite } from 'react-icons/md';
//Import de components.
import Spinner from '../../shared/Spinner';
import CollapseList from '../../shared/cards/CollapseList';
import AddComment from '../../shared/cards/AddComment';
import Comment from '../../shared/cards/Comment';
import ButtonDefault from '../../shared/buttons/ButtonDefault';
import ModalCart from '../../containers/Modal/ModalCart';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';
import axios from 'axios';
import usePreparationTime from '../../../hooks/usePreparationTime';
import useTimer from '../../../hooks/useTimer';
import useFavorites from '../../../hooks/useFavorites';

const Recipe = () => {
  const [modalCart, setModalCart] = useState(false);
  const { name } = useParams();
  const [recipe, setRecipe] = useState();
  const { formatTime } = usePreparationTime();
  const { setTimer, getTimer, active, setActive } = useTimer();
  const { isFavorite, addToFavorite, removeToFavorite } = useFavorites();
  // console.log('====================================');
  // console.log(params.name);
  // console.log('====================================');

  const openModalCart = () => setModalCart(true);
  const closeModalCart = () => setModalCart(false);

  const addFavorite = () => {
    //Funcion de agregar a favoritos
  };

  const getRecipe = async () => {
    const { data } = await axios({
      url: '/api/recipes',
      method: 'post',
      data: { search: name },
    }).then(({ data }) => {
      return data;
    });
    const [aux] = data.results;
    setTimer({ time: aux.total_time });
    setRecipe(aux);
  }

  useEffect(() => {
    getRecipe();
  }, [])

  return (
    <>
      {!recipe && (
        <Spinner/>
      )}
      {recipe && (
        <Layout title={recipe.name} subtitle={recipe.description} center={true}>
          <StyledImgSection>
            <StyledImg src={recipe.picture} alt={`Foto del plato ${recipe.name}`} />
          </StyledImgSection>
          <StyledButtons>
            <button onClick={addFavorite}>
              {isFavorite({ recipe }) ? (
                <MdFavorite size="2rem" onClick={() => removeToFavorite({ recipe })} />
              ) : (
                <MdFavoriteBorder size="2rem" onClick={() => addToFavorite({ recipe })} />
              )}
            </button>
            <button onClick={openModalCart}>
              <HiOutlineShoppingCart size="2rem" />
            </button>
            <FacebookShareButton url={`https://foodyplus.co/recipes/recipe/${recipe.name}`}>
              <FacebookIcon size={32} round={false} />
            </FacebookShareButton>
            {/* <TwitterShareButton url={`https://foodyplus.co/recipes/recipe/${recipe.name}`}>
              <TwitterIcon size={32} round={false} />
            </TwitterShareButton> */}
            {/* <button>
              <HiOutlineShare size="2rem" />
            </button> */}
          </StyledButtons>
          <h1>{recipe.name}</h1>
          <StyledTime onClick={() => setActive(!active)}>
            <MdTimer size="2.2rem" />
            {active && (
              <h2>{getTimer()}</h2>
            )}
            {!active && (
              <h2>{formatTime({ time: recipe.total_time })}</h2>
            )}
          </StyledTime>

          <CollapseList icon="3" title="Ingredientes">
            {recipe?.detail?.map((product) => (
              <div key={product?.id}>
                {product?.name}
              </div>
            ))}
          </CollapseList>
          <CollapseList icon="3" title="Utencilios">
            {recipe?.utensils?.map((utensils) => {
              <div key={utensils?.id}>
                {utensils?.name}
              </div>
            })}
          </CollapseList>
          <CollapseList icon="3" title="Instrucciones">
            {recipe?.preparation?.split('&')?.map((preparation) => (
              <div key={preparation}>
                {preparation}
              </div>
            ))}
          </CollapseList>
    
          <ButtonDefault
            onClick={openModalCart}
            primary
            width="100%"
            height="50px"
            margin="16px 0 0"
          >
            Comprar ingredientes
          </ButtonDefault>
          <ButtonDefault secondary width="100%" height="50px" margin="16px 0 0">
            <Link to="/recipes">Volver a recetas</Link>
          </ButtonDefault>
    
          <StyledSeparator></StyledSeparator>
          <h2>Comentarios</h2>
    
          {/* Mostrar 5 comentarios, si hay mas cargar al hacer click en "cargar mas" */}
          {recipe?.comment?.map((item) => (
            <Comment key={item?.user} user={item?.user} comment={item?.comment} />
          ))}
    
          <StyledLoadMore>
            <div></div>
            <span>Cargar mas</span>
            <div></div>
          </StyledLoadMore>
    
          <AddComment/>
    
          <ModalCart isOpen={modalCart} closeModal={closeModalCart} recipe={recipe} />
        </Layout>
      )}
    </>
  );
};

// =================== ESTILOS CSS ===================
const StyledImgSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 220px;
  margin: 2rem auto 0;
  overflow: hidden;
  border-radius: 50%;

  ${media.mobile} {
    margin-left: none;
  }
  ${media.tab} {
    width: 300px;
    height: 300px;
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background-color: var(--mid-gray);
`;
const StyledTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  margin: 6px 0 0;
  color: var(--first-color);
`;
const StyledButtons = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 40px);
  height: 40px;
  margin: 1.6rem 0 0;

  button {
    height: 40px;
    width: 40px;
    padding: 10px;
    color: var(--white-color);
    border-radius: var(--normal-radius);
    border: none;
    background-color: var(--first-color);
    outline: none;
  }
`;
const StyledSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--light-gray);
  margin: 16px 0;
`;
const StyledLoadMore = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max-content 1fr;
  width: 100%;
  height: 40px;
  margin: 10px 0;

  span {
    margin: 0 10px;
    font-size: var(--normal-font-size);
    font-weight: 600;
    color: var(--bold-gray);
  }
  div {
    width: 100%;
    height: 2px;
    background-color: var(--light-gray);
  }
`;

export default Recipe;
