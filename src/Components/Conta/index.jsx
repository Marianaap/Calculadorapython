import React, { Component ,toggleHandler,toggleState} from "react";
import dinheiro from "../../assets/images/dinheiro.svg";
import $ from "jquery";

class Conta extends Component {
  constructor() {
    super();
    this.state = { salario: "", dependentes: "",valor:"" };
    this.Calculo = this.Calculo.bind(this);
    this.setSalario = this.setSalario.bind(this);
    this.setDependentes = this.setDependentes.bind(this);
  }

  Calculo(event) {
    event.preventDefault();

    $.ajax({
      url: "http://127.0.0.1:5000/calculo",
      contentType: "application/json",
      dataType: "json",
      type: "post",
      data: JSON.stringify({
        salario: this.state.salario,
        dependentes: this.state.dependentes,
      }),
      success: function (response) {
        this.setState({valor:response.valorliquido});
        console.log(response)
      }.bind(this),
    });
  }

  setSalario(event) {
    this.setState({ salario: event.target.value });
  }

  setDependentes(event) {
    this.setState({ dependentes: event.target.value });
  }

  render() {
    return (
      <div className="box">
        <h5>
          Este cálculo demostra como obter um valor de salário líquido a partir
          do salário bruto e dos principais descontos do salário (INSS e IRRF)
        </h5>
        <div style={{ fontSize: "26px", padding: "20px 0" }}>
          <span>
            <img className="imagem-icone" src={dinheiro} alt="Ícone Saldo" />
          </span>
          
            <form className="inputs" onSubmit={this.Calculo} method="post">
              <div style={{ fontSize: "15px", padding: "15px 0" }}>
                <span className="detalhe">Digite seu salário: </span>
                <input type="number" step="0.01" min="0" value={this.state.salario} onChange={this.setSalario}/>

                <div style={{ fontSize: "15px", padding: "15px 0" }}>
                  <span className="detalhe">Número De Dependentes: </span>
                  <input type="number" step="0.01" min="0" value={this.state.dependentes} onChange={this.setDependentes}/>
                </div>
                <button className="btn" Type="submit">
                  Calcular
                </button>
                <br></br>
                <h1> Valor Liquido = {this.state.valor}</h1>
              </div>
            </form>
          
        </div>

        
      </div>
    );
  }
}

export default Conta;
