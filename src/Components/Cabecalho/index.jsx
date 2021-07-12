import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";

const Cabecalho = () => {
  return (
    <div className="cabecalho">
      <img className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <h3>Calculadora Prática</h3>
      </div>
    </div>
  );
};

export default Cabecalho;
