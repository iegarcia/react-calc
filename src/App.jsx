/* eslint no-eval: 0*/

import React, { useState } from "react";
import words from "lodash.words";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";

const App = () => {
  console.log("Renderizado APP");

  const state = useState(""); // Funcion de React que permite manipular acceder al ciclo de vida del componente y manipular su estado
  const [stack, setStack] = state; // Array Destructuring: useState retorna un estado y una funcion que modificara ese estado

  const items = words(stack, /[^-^+^*^/]+/g); // Funcion proveniente del paquete lodash, esta separa los elementos en base a un patron, en este caso el regex que busca los simbolos matematicos

  const value = items.length > 0 ? items[items.length - 1] : "0";

  return (
    <main className="react-calculator">
      <Result value={value} />

      <Numbers
        onClickNumber={(number) => {
          console.log("Click in number", number);
          setStack(`${stack}${number}`);
        }}
      />
      <Functions
        onContentClear={() => {
          console.log("Content Clear");
          setStack("");
        }}
        onDelete={() => {
          if (stack.length > 0) {
            console.log("onDelete");
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          console.log("Operation", operation);
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={(equal) => {
          console.log("Equal", equal);
          setStack(eval(stack).toString());
        }}
      />
    </main>
  );
};

export default App;
