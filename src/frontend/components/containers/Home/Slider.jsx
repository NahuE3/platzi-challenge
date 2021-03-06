//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import styled from 'styled-components';
//Import de iconos.
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const ImageSlider = () => {
   return (
    <>
      <StyledButtonCont></StyledButtonCont>
      <StyledWrapper>
        <Slider>
          <StyledImgSection>
            <StyledImg
              srcset="https://dl.dropboxusercontent.com/s/kir8ssl4ylsgpep/Banner_smartphone_1.png?dl=0 320w,
        https://dl.dropboxusercontent.com/s/kuxcs934gk4aur2/Banner_tablet_1.png?dl=0 600w,
        https://dl.dropboxusercontent.com/s/w9eupyevsq43ocv/Banner_desktop_1.png?dl=0 1100w"
              alt="Imagen promocional"
            />
          </StyledImgSection>
        </Slider>
      </StyledWrapper>
    </>
  );
};

// =================== ESTILOS CSS ===================
const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
const Slider = styled.section`
  position: relative;
  height: 400px;
  max-width: 100vw;
  margin-top:56px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tab} {
    height: 500px;
  }

  .image {
    max-width: 100vw;
    min-width: 100vw;
    height: 400px;

    ${media.tab} {
      height: 500px;
    }
  }

  .slide {
    opacity: 0.2;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
  }
`;
const StyledButtonCont = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  height: 400px;
  width: 100%;
  margin-bottom: 1rem;

  ${media.tab} {
    height: 500px;
  }
  ${media.desktop} {
    margin-bottom: 3rem;
  }
`;
const Button = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60px;
  color: #fff;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: linear-gradient(to ${props => props.side && props.side}, rgb(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  }

  ${media.tab} {
    height: 500px;
  }
`;
const StyledImgSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default ImageSlider;

