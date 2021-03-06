//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de layout.
import Layout from '../../layout/Layout';

const About = () => {
  return (
    <Layout
      title="Sobre Nosotros"
      subtitle="Informacion sobre Foody"
      center={true}
    >
      <StyledWrapper>
        <h1>Sobre Nosotros</h1>
        <StyledSeparator>
          <p>
            Un gran Proyecto hecho por el equipo de <strong>Switch</strong> para
            la competencia “Olympia Challenge” de <strong>Platzi</strong>.
          </p>
          <div></div>
        </StyledSeparator>
        <p>
          Un equipo que inicio solo con dos personas,{' '}
          <strong>Encinas Nahuel</strong> y <strong>Oyarzabal Ivan</strong>, dos
          grandes visionarios que solo podían soñar con lanzar una app que
          cambiara la vida de los demás, pero… por circunstancias económicas se
          veian limitados a solo aprender e ir avanzado poco a poco con sus
          pequeños proyectos.
        </p>
        <p>
          No contentos con esto, fundaron su primer negocio a los 18 años, su
          propia cafetería en el instituto/colegio. Ya que era su ultimo año en
          el colegio, decidieron hacer algo distinto e ir en contra las reglas
          (literalmente porque no se podía tener una cafetería en un aula), de
          esta forma con la cafetería llegaron a facturar en ventas mas de{' '}
          <strong>$900</strong> dolares por mes, de los cuales el 50% eran
          costos, lo restante ganancia que se invertia en maquinaria y lo que
          restaba en ganancia para los founders y empleados. Pero todo tiene su
          fin, al siguiente año el colegio prohibio este mismo acto y nacio el
          covid, asique no pudieron continuar con la cafetería…
        </p>
        <p>
          Despues de tal acontecimiento y pasado un tiempo, platzi lanza sus{' '}
          <strong>olimpiadas</strong> esto a los ojos de nosotros era una gran
          oportunidad, ya que nos ofrecia la oportunidad de demostrar nuestras
          habilidades en el campo de la programación y mas aun ya que nos
          ofrecían un premio de $9.000 dolares, y visto lo visto no habían
          tantos participantes, asique era un premio fácil para nosotros, o eso
          pensamos…
        </p>
        <p>
          Despues de decidirse a competir en las olimpiadas crearon el equipo de
          Foody+, pero fue duro, de hecho los 2 dias previos a la competencia
          tuvieron que reclutar a los talentos de platzi, pero vaya eran muchas
          personas con las que hablar y encima debido al corto tiempo no sabían
          bien a quien elegir, debido a esto descubrieron el dolor de decirle
          que <strong>"no"</strong> a muchas personas, e incluso de sacar a
          personas del equipo, todo esto antes de que iniciara la competencia
          claro. Por suerte el equipo quedo con 8 intregrantes, todos muy
          habilidosos.
        </p>
        <StyledSeparator>
          <h2>El equipo esta conformado por:</h2>
          <div></div>
        </StyledSeparator>
        <StyledItems>
          <li>
            <span>Frontend:</span>
            <br />
            <div>Juan Daniel, Antonio Guzmán y Encinas Nahuel.</div>
          </li>
          <li>
            <span>Backend:</span>
            <br />
            <div>Oyarzabal Ivan.</div>
          </li>
          <li>
            <span>UI-UX:</span>
            <br />
            <div>Laura Ramirez y Diego Cusicanqui.</div>
          </li>
          <li>
            <span>Model Business:</span>
            <br />
            <div>Jeferson Pinilla.</div>
          </li>
          <li>
            <span>Marketing:</span>
            <br />
            <div>Diego González.</div>
          </li>
        </StyledItems>
        <p>
          Juntos creamos <strong>Foody+</strong>, un comercio electrónico
          enfocado en que <strong>tu</strong> ahorres tiempo y dinero al momento
          de cocinar. Porque? Porque sabemos que es molesto tener que salir
          todos los días de compras para hacer la comida, asique nosotros te
          enviamos todo lo necesario para que cocines en la semana, asi te
          ahorras muchísimo tiempo evitando tener que ir de compras, y no solo
          eso, sino que también ya que compras por semana, tienes precios
          exclusivos.
        </p>
        <p>
          Sabemos que es difícil o molesto tener que pensar que cocinar para
          toda la semana, asique creamos un apartado especial que basado en tus
          gustos crea una programación semanal para que no pienses tanto y
          cocines mas.
        </p>
        <p>
          Espera, que tienes muchos ingredientes en tu heladera pero no sabes
          que cocinar? Pues no hay problema, en Foody+ te recomendamos distintas
          recetas con sus ingredientes, cocinar mas y pensar menos.
        </p>
      </StyledWrapper>
    </Layout>
  );
};

// =================== ESTILOS CSS ===================
const StyledWrapper = styled.div`
  width: 100%;
  max-width: 900px;

  p {
    font-size: var(--xlarge-font-size);
    margin-top: 16px;
  }
`;
const StyledSeparator = styled.div`
  margin-top: 16px;

  div {
    width: 100%;
    height: 2px;
    background-color: var(--light-gray);
    margin: 10px 0 20px;
  }

  p {
    color: var(--bold-gray);
  }
`;
const StyledItems = styled.ul`
  padding-left: 3rem;

  li {
    list-style-type: disc;
    font-size: var(--xlarge-font-size);
    margin-bottom: 10px;

    span {
      font-weight: 600;
    }
  }
`;


export default About;
