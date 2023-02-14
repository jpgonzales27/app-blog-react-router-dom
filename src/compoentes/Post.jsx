import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { posts } from "../data/posts";

const Post = () => {
  /**
   * hacienndo uso del hook useParams para acceder a los parametros
   * que estamos enviando en el path the nuestro Route
   *
   * seria un objerto con los valores de los path en este caso es solo
   * el id {id:valor}
   *
   * por tal motivo estamos haciendo uso de destructiong el objeto
   * para obtener solo su valor
   */
  const { id } = useParams();
  return (
    <>
      {/*como pusimos de key nuestro id y estos empiezan en 1,2,3... 
      y ese es el valor que estamos pasando en el path le restamos -1
      para que nos muestra las pociones correcta ya que es un array debemos 
      empezar desde 0 como el primer valor
    */}
      {posts[id - 1] ? (
        <div>
          <h1>{posts[id - 1].titulo}</h1>
          <p>{posts[id - 1].texto}</p>
        </div>
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
};

export default Post;
