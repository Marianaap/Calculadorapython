from flask import *
import SalarioNew as calc
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)


@app.route('/calculo', methods=['POST', 'OPTIONS', 'GET', ])
@cross_origin(supports_credentials=True, origins="http://localhost:3000")
def calculo():
    content = request.get_json()
    print(request.get_json())
    salario = content['salario']
    NrDependentes = content['dependentes']
    print("salario recebido {} Nr Dependentes {} ".format(salario, NrDependentes))

    
    calc.calcular_inss(salario)
    SomaDescontoINSS = calc.calcular_inss(salario)
    calc.calcular_irrf(salario,SomaDescontoINSS,NrDependentes)
    descontoCalculadoIRRF = calc.calcular_irrf(salario,SomaDescontoINSS,NrDependentes)
    valor_liquido = float(salario) - SomaDescontoINSS - descontoCalculadoIRRF 

    valor = round(abs(valor_liquido),2)  
    
    return jsonify({"valorliquido":valor})






app.run(debug=True)



