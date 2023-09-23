/* eslint-disable react/prop-types */
import { MyContext } from "../../../context";
import { Button } from "../Button/Button";
import "./Card.css";
import { useContext } from "react";

import star from "../../assets/images/icon-star.svg";
export const Card = () => {
  const {
    handleVoto,
    handleHabilitar,
    habilitado,
    handleColor,
    btnColor,
    handleIsVisible,
  } = useContext(MyContext);

  const desabilitar = (valor) => {
    handleHabilitar();
    handleVoto(valor);
    handleColor();
  };

  return (
    <main>
      <div className="conteiner">
        <div className="image">
          <div>
            <img src={star} width="25" height="25" alt="icone de estrela" />
          </div>
        </div>

        <div className="content">
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="numbers">
          <button
            className={btnColor}
            onClick={() => {
              desabilitar(1);
            }}
            disabled={habilitado}
          >
            1
          </button>
          <button
            className={btnColor}
            onClick={() => {
              desabilitar(2);
            }}
            disabled={habilitado}
          >
            2
          </button>
          <button
            className={btnColor}
            onClick={() => {
              desabilitar(3);
            }}
            disabled={habilitado}
          >
            3
          </button>
          <button
            className={btnColor}
            onClick={() => {
              desabilitar(4);
            }}
            disabled={habilitado}
          >
            4
          </button>
          <button
            className={btnColor}
            onClick={() => {
              desabilitar(5);
            }}
            disabled={habilitado}
          >
            5
          </button>
        </div>
        <div className="btn">
          <Button onClick={() => handleIsVisible()} name="Submit" />
        </div>
      </div>
    </main>
  );
};
