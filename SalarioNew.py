import sqlite3

def calcular_inss(salario):
   con = sqlite3.connect('CalculoSalario.db')
   sql = "SELECT * FROM INSS WHERE {} BETWEEN FaixaMinima AND FaixaMaxima ".format(salario)
   cur = con.cursor()
   calculo = cur.execute(sql).fetchone()
   descontoInss = (float(salario) * calculo[3]) - calculo[4]  +   calculo[5]         
   return descontoInss

def calcular_irrf(salario,SomaDescontoINSS,NrDependentes):
   con = sqlite3.connect('CalculoSalario.db')
   cur = con.cursor()
   dependentes = cur.execute("Select dependentes FROM IRRF where ID_IRRF = 1").fetchone()[0]
   if NrDependentes == '':
      descontoDependentes = 0
   else:
      descontoDependentes = dependentes * int(NrDependentes)
   salarioBase = float(salario) - SomaDescontoINSS - descontoDependentes
   print (salarioBase)
   calculo = cur.execute("SELECT * FROM IRRF WHERE " + str(salarioBase) + " BETWEEN FaixaMin AND FaixaMax ").fetchone()   
   descontoirrf = salarioBase * calculo[3] - calculo[4]
   IRRF = descontoirrf
   return IRRF   


 









