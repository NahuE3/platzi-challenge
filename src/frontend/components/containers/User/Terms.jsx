//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de layout.
import Layout from '../../layout/Layout';

const Terms = () => {
  return (
    <Layout
      title="Terminos y Condiciones"
      subtitle="Informacion sobre Foody"
      center={true}
    >
      <StyledWrapper>
        <h1>Términos y Condiciones de uso</h1>
        <StyledSeparator>
          <h2>INFORMACIÓN RELEVANTE</h2>
          <div></div>
        </StyledSeparator>
        <p>
          Es requisito necesario para la adquisición de los productos que se
          ofrecen en este sitio, que lea y acepte los siguientes Términos y
          Condiciones que a continuación se redactan. El uso de nuestros
          servicios así como la compra de nuestros productos implicará que usted
          ha leído y aceptado los Términos y Condiciones de Uso en el presente
          documento. Todas los productos &nbsp;que son ofrecidos por nuestro
          sitio web pudieran ser creadas, cobradas, enviadas o presentadas por
          una página web tercera y en tal caso estarían sujetas a sus propios
          Términos y Condiciones. En algunos casos, para adquirir un producto,
          será necesario el registro por parte del usuario, con ingreso de datos
          personales fidedignos y definición de una contraseña.
        </p>
        <p>
          El usuario puede elegir y cambiar la clave para su acceso de
          administración de la cuenta en cualquier momento, en caso de que se
          haya registrado y que sea necesario para la compra de alguno de
          nuestros productos. foodyplus.co no asume la responsabilidad en caso
          de que entregue dicha clave a terceros.
        </p>
        <p>
          Todas las compras y transacciones que se lleven a cabo por medio de
          este sitio web, están sujetas a un proceso de confirmación y
          verificación, el cual podría incluir la verificación del stock y
          disponibilidad de producto, validación de la forma de pago, validación
          de la factura (en caso de existir) y el cumplimiento de las
          condiciones requeridas por el medio de pago seleccionado. En algunos
          casos puede que se requiera una verificación por medio de correo
          electrónico.
        </p>
        <p>
          Los precios de los productos ofrecidos en esta Tienda Online es válido
          solamente en las compras realizadas en este sitio web.
        </p>

        <StyledSeparator>
          <h2>LICENCIA</h2>
          <div></div>
        </StyledSeparator>
        <p>
          FoodyPlus&nbsp; a través de su sitio web concede una licencia para que
          los usuarios utilicen&nbsp; los productos que son vendidos en este
          sitio web de acuerdo a los Términos y Condiciones que se describen en
          este documento.
        </p>

        <StyledSeparator>
          <h2>USO NO AUTORIZADO</h2>
          <div></div>
        </StyledSeparator>

        <p>
          En caso de que aplique (para venta de software, templetes, u otro
          producto de diseño y programación) usted no puede colocar uno de
          nuestros productos, modificado o sin modificar, en un CD, sitio web o
          ningún otro medio y ofrecerlos para la redistribución o la reventa de
          ningún tipo.
        </p>
        <StyledSeparator>
          <h2>PROPIEDAD</h2>
          <div></div>
        </StyledSeparator>
        <p>
          Usted no puede declarar propiedad intelectual o exclusiva a ninguno de
          nuestros productos, modificado o sin modificar. Todos los productos
          son propiedad &nbsp;de los proveedores del contenido. En caso de que
          no se especifique lo contrario, nuestros productos se
          proporcionan&nbsp; sin ningún tipo de garantía, expresa o implícita.
          En ningún esta compañía será &nbsp;responsables de ningún daño
          incluyendo, pero no limitado a, daños directos, indirectos,
          especiales, fortuitos o consecuentes u otras pérdidas resultantes del
          uso o de la imposibilidad de utilizar nuestros productos.
        </p>
        <StyledSeparator>
          <h2>POLÍTICA DE REEMBOLSO Y GARANTÍA</h2>
          <div></div>
        </StyledSeparator>
        <p>
          En el caso de productos que sean&nbsp; mercancías irrevocables
          no-tangibles, no realizamos reembolsos después de que se envíe el
          producto, usted tiene la responsabilidad de entender antes de
          comprarlo. &nbsp;Le pedimos que lea cuidadosamente antes de comprarlo.
          Hacemos solamente excepciones con esta regla cuando la descripción no
          se ajusta al producto. Hay algunos productos que pudieran tener
          garantía y posibilidad de reembolso pero este será especificado al
          comprar el producto. En tales casos la garantía solo cubrirá fallas de
          fábrica y sólo se hará efectiva cuando el producto se haya usado
          correctamente. La garantía no cubre averías o daños ocasionados por
          uso indebido. Los términos de la garantía están asociados a fallas de
          fabricación y funcionamiento en condiciones normales de los productos
          y sólo se harán efectivos estos términos si el equipo ha sido usado
          correctamente. Esto incluye:
        </p>
        <StyledItems>
          <li>
            De acuerdo a las especificaciones técnicas indicadas para cada
            producto.
          </li>
          <li>
            En condiciones ambientales acorde con las especificaciones indicadas
            por el fabricante.
          </li>
          <li>
            En uso específico para la función con que fue diseñado de fábrica.
          </li>
          <li>
            En condiciones de operación eléctricas acorde con las
            especificaciones y tolerancias indicadas.
          </li>
        </StyledItems>
        <StyledSeparator>
          <h2>COMPROBACIÓN ANTIFRAUDE</h2>
          <div></div>
        </StyledSeparator>
        <p>
          La compra del cliente puede ser aplazada para la comprobación
          antifraude. También puede ser suspendida por más tiempo para una
          investigación más rigurosa, para evitar transacciones fraudulentas.
        </p>
        <StyledSeparator>
          <h2>PRIVACIDAD</h2>
          <div></div>
        </StyledSeparator>
        <p>
          Este foodyplus.co garantiza que la{' '}
          <a href="https://noticiasceltadevigo.es/" target="_blank">
            celta de vigo noticias
          </a>{' '}
          información personal que usted envía cuenta con la seguridad
          necesaria. Los datos ingresados por usuario o en el caso de requerir
          una validación de los pedidos no serán entregados a terceros, salvo
          que deba ser revelada en cumplimiento a una orden judicial o
          requerimientos legales.
        </p>
        <p>
          La suscripción a boletines de correos electrónicos publicitarios es
          voluntaria y podría ser seleccionada al momento de crear su cuenta.
        </p>
        <p>
          FoodyPlus reserva los derechos de cambiar o de modificar estos
          términos sin previo aviso.
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
  margin-top: 16px;
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

export default Terms;
