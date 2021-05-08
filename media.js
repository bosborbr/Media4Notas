alert("Digite as suas notas abaixo.")
let valorInicial = 0;

let nota1 = prompt("nota1:", valorInicial);

let nota2 = prompt("nota2:", valorInicial);

let nota3 = prompt("nota3:", valorInicial);

let nota4 = prompt("nota4:", valorInicial);

parseInt(nota1)
parseInt(nota2)
parseInt(nota3)
parseInt(nota4)

let resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4; /* errado */



if(resultado<5){
    alert("-- Média -- \n nota1: "+nota1+" \n nota2: "+nota2+" \n nota3: "+nota3+" \n nota4: "+nota4+" \n\n Você ficou com média " +resultado +". Resultado: Reprovado")
}
if(resultado > 6){
    alert("-- Média -- \n nota1: "+nota1+" \n nota2: "+nota2+" \n nota3: "+nota3+" \n nota4: "+nota4+"  \n\n Você ficou com média " +resultado +". Resultado: Aprovado")
}
if(5 <= resultado && resultado <= 6){
    alert("-- Média -- \n nota1: "+nota1+" \n nota2: "+nota2+" \n nota3: "+nota3+" \n nota4: "+nota4+"  \n\n Você ficou com média " +resultado +". Resultado: Em Recuperação")
}
if(resultado < 0 && resultado >10){
    alert("Digite somente notas entre 0 e 10.")
}


