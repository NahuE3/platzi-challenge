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

// FIXME: Borrar estos datos cuando se conecte a la API
const userLoged = true;

const countries = ['Argentina', 'Colombia', 'Mexico', 'Estados Unidos'];
const categories = ['Carnes', 'De mar', 'Comida Rapida', 'Postres'];

const Steps = ({ step, setStep }) => {
  return (
    <>
      {step === 1 && (
        <StyledWrapper>
          <StyledCont>
            <h3>¿De donde eres?</h3>
            {countries.map((item) => (
              <ButtonDefault
                secondary
                width="100%"
                height="48px"
                margin="16px 0 0"
                key={item}
                onClick={() => setStep(2)}
              >
                {item}
              </ButtonDefault>
            ))}
          </StyledCont>
        </StyledWrapper>
      )}
      {step === 2 && (
        <StyledWrapper>
          <StyledCont>
            <h3>¿Para cuantas personas sueles cocinar?</h3>
            {[
              'Entre 1 y 2 personas',
              'Entre 3 y 4 personas',
              'Mas de 5 personas',
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
              Continuar
            </ButtonDefault>
          </StyledCont>
        </StyledWrapper>
      )}
      {step === 3 && (
        <StyledWrapper>
          <StyledCont>
            <h3>¿Cuanto tiempo quieres cocinar?</h3>
            {[
              'Menos de una hora',
              'Menos de dos horas',
              'Mas de dos horas',
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
              onClick={() => setStep(4)}
            >
              Continuar
            </ButtonDefault>
          </StyledCont>
        </StyledWrapper>
      )}
      {step === 4 && (
        <StyledWrapper>
          <StyledCont>
            <h3>Selecciona las categorias que mas te gustan</h3>
            {categories.map((item) => (
              <CheckboxDefault
                key={item}
                title={item}
                name={item}
                //checked={}
                //manageChecked={}
              />
            ))}
            <ButtonDefault
              primary
              width="100%"
              height="48px"
              margin="16px 0 0"
              onClick={() => setStep(5)}
            >
              Continuar
            </ButtonDefault>
          </StyledCont>
        </StyledWrapper>
      )}
    </>
  );
};

const Week = () => {
  const [step, setStep] = useState(1);

  return (
    <Layout
      title="Programacion"
      subtitle="Crea un plan de comidas a tu gusto para toda la semana!"
    >
      {step < 5 && <h1>Programacion Semanal</h1>}
      {userLoged ? (
        <>
          {step === 5 ? (
            <StyledContDays>
              <h1>Programacion Semanal</h1>
              <h3>Esta es la programacion que hemos preparado para ti</h3>
              <h3>
                ¡Sientete libre de agregar, borrar y ordenarlos como quieras!
              </h3>
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
                    Seguir comprando
                  </ButtonDefault>
                </Link>
                <ButtonDefault
                  primary
                  width="100%"
                  height="48px"
                  margin="16px 0 0"
                  //onClick={redirect}
                >
                  Comprar ahora
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
