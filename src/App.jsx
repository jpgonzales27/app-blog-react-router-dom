import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import AcercaDe from "./compoentes/AcercaDe";
import Blog from "./compoentes/Blog";
import PaginaInicio from "./compoentes/PaginaInicio";
import styled from "styled-components";
import Post from "./compoentes/Post";
import Error404 from "./compoentes/Error404";

const App = () => {
  return (
    /**
     * Para usar react-router-dom debemos colocar nuestro componente <BroeserRouter>
     * en la parte mas alta de nuestro arbol de componentes
     *
     * se recomienda colocarlo envolvido al componente <App/> pero para este ejemplo
     * lo colocamos aqui para que envuela todos los componentes que seran manejados
     * con react-router-dom
     */
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header>
          <Titulo>Mi blog personal</Titulo>
          <Menu>
            {/* para hacer uso de los links en react-router-dom debemos hacer uso del componente NavLink
              este componente reemplaza a la la etiquera <a> y la propiedad "to" reemplaza al href
              </a><a href="/">Inicio</a>
              <NavLink to="/">Inicio</NavLink>
            */}
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/acerca-de">Acerca de</NavLink>
          </Menu>
        </Header>
        <Main>
          {/**
           * Ahora para el contenido que tendra que mostrarse cuando agamos click en nuestro NavLink
           * debemos hacer uso del compoente <Routes></Routes> dentro del cual debemos definir todas
           * las rutas que tendra nuestra aplicacion
           */}
          <Routes>
            {/**
             * Cada componente Route definie su propiedad path la cual se enlaza con la propiedad "to"
             * para saber que Route moestrar
             *
             * la propiedad element es el componente que se moestrar cuando ingresemos al path seleccionado
             *
             * el path * hace referencia a cualquier ruta que no este esepecificada en nuestros Route
             * en este caso la usamos para mostrar la pagina de error 404
             *
             * el path /post/:id el identificad id lo usaremos para enviar el valor en los parametros
             * el cual recuperaremos con el hook useParams como si fuera un objeto donde la key sera el
             * nombre que le asigamos en este caso id
             */}
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<PaginaInicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
};

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Titulo = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

const Menu = styled.nav`
  a {
    text-decoration: none;
    color: #165168;
    margin: 0 10px;
  }

  a:hover {
    color: #191681;
  }

  a.active {
    border-bottom: 2px solid #165168;
    padding-bottom: 3px;
  }
`;

export default App;
