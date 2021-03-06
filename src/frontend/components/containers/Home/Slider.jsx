//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import styled from 'styled-components';
//Import de iconos.
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    //setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    //setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //if (!Array.isArray(slides) || slides.length <= 0) {
  //  return null;
  //}

   return (
    <>
      {/*<StyledButtonCont>
        <Button onClick={prevSlide} side="left">
          <HiChevronLeft size="3rem" onClick={prevSlide} />
        </Button>
        <div></div>
        <Button onClick={nextSlide} side="right">
          <HiChevronRight size="3rem" onClick={nextSlide} />
        </Button>
      </StyledButtonCont>
      <StyledWrapper>
      <Slider>
          {slides.map((slide, index) => {
            return (
              <StyledImgSection
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <StyledImg
                    src={slide.image}
                    alt="Imagen promocional"
                    className="image"
                  />
                )}
              </StyledImgSection>
            );
          })}
        </Slider>
      </StyledWrapper>*/}
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
