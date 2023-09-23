/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const MyContext = createContext(0);

export const MyContextProvider = ({ children }) => {
  const [voto, setVoto] = useState(0);
  const [habilitado, setHabilitado] = useState(false);
  const [btnColor, setColor] = useState("number");
  const [isVisible, setIsVisible] = useState(true);

  const handleIsVisible = ()=>{
    setIsVisible(false);
  } 
  const handleColor = () => {
    setColor("btn-disabilitado");
  };
  const handleHabilitar = () => {
    setHabilitado(true);
  };
  const handleVoto = (valor) => {
    setVoto(valor);
  };
  return (
    <MyContext.Provider
      value={{
        voto,
        handleVoto,
        habilitado,
        handleHabilitar,
        btnColor,
        handleColor,
        isVisible,
        handleIsVisible,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
