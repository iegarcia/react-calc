import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ type, text, clickHandler }) => (
  <button
    className={type}
    onClick={() => {
      clickHandler(text);
    }}
  >
    <span>{text}</span>
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;

/* 
componentes divididos en partes
1° Constante -> recomendado ya que este componente no cambiara su valor interno
2° Nombre -> Recomendado utilizar mismo nombre que componente para evitar confusiones
3° Arrow function -> manera mas practica para compactar el código () => {}
4° Parametros (opcionales) -> Dependiendo de si el componente recibe parametros colocarlos dentro de los parentesis aplicando destructuring (acceder puntualmente a propiedades) {valor}
5° Debe retornar bloque seudo-HTML correspondiente segun el caso
6° Exportar -> exportar componente para uso posterior
*/
