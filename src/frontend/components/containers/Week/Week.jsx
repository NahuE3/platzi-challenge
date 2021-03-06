//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//Import de layout.
import Layout from '../../layout/Layout';
//Import de componentes.
import Days from './Days';
import ButtonDefault from '../../shared/buttons/ButtonDefault';
import CheckboxDefault from '../../shared/inputs/CheckboxDefault';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';
import useLanguage from '../../../hooks/useLanguage';
import { useStateValue } from '../../../context';
// import useRecipes from '../../../hooks/useRecipes';

// FIXME: Borrar estos datos cuando se conecte a la API
const userLoged = true;


const Steps = ({ step, setStep }) => {
  const { categories } = useStateValue();
  // const { recipeList } = useRecipes({ search, category });
  const { getText } = useLanguage();
  // const categories = [
  //   getText('programming.category1'),
  //   getText('programming.category2'),
  //   getText('programming.category3'),
  //   getText('programming.category4'),
  // ];
  const countries = ['Argentina', 'Colombia', 'Mexico', 'Estados Unidos'];
  return (
    <>
      {step === 1 && (
        <StyledWrapper>
          <StyledCont>
            <h3>{getText('programming.title2')}</h3>
            {[
              getText('programming.people1'),
              getText('programming.people2'),
              getText('programming.people3'),
            ].map((item, index) => (
              <CheckboxDefault
                key={index}
                title={item}
                name="amount"
                //checked={}
                //manageChecked={}
              />
            ))}
            <ButtonDefault
              primary
              width="100%"
              height="48px"
              margin="16px 0 0"
              onClick={() => setStep(2)}
            >
              {getText('programming.button')}
            </ButtonDefault>
          </StyledCont>
        </StyledWrapper>
      )}
      {step === 2 && (
        <StyledWrapper>
          <StyledCont>
            <h3>{getText('programming.title3')}</h3>
            {[
              getText('programming.time1'),
              getText('programming.time2'),
              getText('programming.time3'),
            ].map((item, index) => (
              <CheckboxDefault
                key={index}
                title={item}
                name="amount"
                //checked={}
                //manageChecked={}
              />
            ))}
            <ButtonDefault
              primary
              width="100%"
              height="48px"
              margin="16px 0 0"
              onClick={() => setStep(3)}
            >
              {getText('programming.button')}
            </ButtonDefault>
          </StyledCont>
        </StyledWrapper>
      )}
      {step === 3 && (
        <StyledWrapper>
          <StyledCont>
            <h3>{getText('programming.title4')}</h3>
            {categories?.results?.map((item) => (
              <CheckboxDefault
                key={item.id}
                title={item.name}
                name={item.name}
                //checked={}
                //manageChecked={}
              />
            ))}
            <ButtonDefault
              primary
              width="100%"
              height="48px"
              margin="16px 0 0"
              onClick={() => setStep(4)}
            >
              {getText('programming.button')}
            </ButtonDefault>
          </StyledCont>
        </StyledWrapper>
      )}
    </>
  );
};

const Week = () => {
  const { getText } = useLanguage();
  const [step, setStep] = useState(1);

  return (
    <Layout
      title="Programacion"
      subtitle="Crea un plan de comidas a tu gusto para toda la semana!"
    >
      {step < 4 && <h1>{getText('programming.title')}</h1>}
      {userLoged ? (
        <>
          {step === 4 ? (
            <StyledContDays>
              <h1>{getText('programming.title')}</h1>
              <h3>{getText('programming.subtitle1')}</h3>
              <h3>{getText('programming.subtitle2')}</h3>
              <Days />
              <StyledButtons>
                <Link to="/recipes">
                  <ButtonDefault
                    secondary
                    width="100%"
                    height="48px"
                    margin="16px 0 0"
                    //onClick={redirect}
                  >
                    {getText('programming.button3')}
                  </ButtonDefault>
                </Link>
                <ButtonDefault
                  primary
                  width="100%"
                  height="48px"
                  margin="16px 0 0"
                  //onClick={redirect}
                >
                  {getText('programming.button2')}
                </ButtonDefault>
              </StyledButtons>
            </StyledContDays>
          ) : (
            <Steps step={step} setStep={setStep} />
          )}
        </>
      ) : (
        <>
          <ButtonDefault primary width="100%" height="48px" margin="12px 0 0">
            Iniciar sesión
          </ButtonDefault>
          <StyledSeparator></StyledSeparator>

          <h3>¿Que es la Programacion semanal?</h3>
          <StyledParrafo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quas
            aliquam adipisci nisi qui suscipit voluptates ab dolorum
            perspiciatis est quidem repellat, facere, nemo sed nam numquam
            repellendus voluptatum quisquam? Soluta maiores quo consequatur.
          </StyledParrafo>
          <p>
            ¡Inicia sesión y aprovecha al maximo todo el potencial de Foody!
          </p>
        </>
      )}
    </Layout>
  );
};

// =================== ESTILOS CSS ===================
const StyledParrafo = styled.p`
  margin: 10px 0;
`;
const StyledSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--light-gray);
  margin: 20px 0;
`;
const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid var(--light-gray);

  ${media.tab} {
    display: flex;
    justify-content: center;
  }
`;
const StyledCont = styled.div`
  width: 100%;
  max-width: 500px;

  h3 {
    text-align: center;
  }
`;
const StyledContDays = styled.div`
  width: 100%;
  max-width: 870px;

  ${media.tab} {
    margin: 0 auto;
  }

  h1 {
    margin-bottom: 16px;
  }
  h3 {
    color: var(--bold-gray);
  }
`;
const StyledButtons = styled.div`
  display: flex;
  flex-direction: column-reverse;
  border-top: 2px solid var(--light-gray);

  ${media.tab} {
    display: grid;
    grid-gap: 16px;
    grid-template: 1fr / 1fr 1fr;
  }
`;

export default Week;
