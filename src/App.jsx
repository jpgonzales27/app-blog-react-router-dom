import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import AcercaDe from "./compoentes/AcercaDe";
import Blog from "./compoentes/Blog";
import PaginaInicio from "./compoentes/PaginaInicio";

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
      <div>
        <header>
          <h1>Mi blog personal</h1>
          <nav>
            {/* para hacer uso de los links en react-router-dom debemos hacer uso del componente NavLink
              este componente reemplaza a la la etiquera <a> y la propiedad "to" reemplaza al href
              </a><a href="/">Inicio</a>
              <NavLink to="/">Inicio</NavLink>
            */}
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/acerca-de">Acerca de</NavLink>
          </nav>
        </header>
        <main>
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
             */}
            <Route path="/" element={<PaginaInicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
