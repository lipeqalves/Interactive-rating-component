/* eslint-disable react/prop-types */

import { useContext } from "react";
import { MyContext } from "../../../context";
import "./CardFinal.css";

export const CardFinal = () => {
  const { voto } = useContext(MyContext);
  return (
    <main>
      <div className="conteiner">
        <div className="image">
          <img
            src="../../../images/illustration-thank-you.svg"
            alt="icon obrigado"
          />
        </div>
        <div className="resultados">
          <p className="resultado">You selected {voto} out of 5</p>
        </div>
        <div className="content">
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </main>
  );
};
