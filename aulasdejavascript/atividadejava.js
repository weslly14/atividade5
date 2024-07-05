"use script"


//Faça um programa que entre com um nome, um dia e um mês.
 //Se o Nome for Celso Portiolli, o dia 11 e o mês 9, imprima "O Celso Portiolli não tem nada a ver com o 11 de Setembro". Se o dia e o mês corresponderem à data de hoje (04/07) e o nome for o seu, imprima "Faça a prova com atenção".

var nome, datadia,datames

nome=prompt("qual seu nome ?")
datadia=prompt("qual dia ?")
datames=prompt("qual mes ?")

if(nome=="celso portioli" && datadia=="11" && datames=="9"){
    window.alert("celso portioli nao tem nada haver com o 11 de setembro")
}
else if(nome=="weslly"&&datadia=="4" && datames=="7"){
    window.alert("faça a prova com atenção")
}


//Faça um programa que calcule a média de 3 notas e diga se a pessoa foi aprovada
// (média maior ou igual a 60) ou reprovada (média menor que 60). Não existe recuperação nesse enunciado.

var n1,n2,n3,media
n1=parseFloat(prompt("digite a primeira nota"));
n2=parseFloat(prompt("digite a segunda nota"));
n3=parseFloat(prompt("digite a terceira nota"));
media=(n1+n2+n3)/2

if(media >= 60){
    //if e o "se" que utilizamos no java
    window.alert("voce esta aprovado")
}
else if( media<60){
    window.alert("voce esta reprovado")

}

//Faça um programa que calcule o peso de n gados, até que o peso informado seja 0 (não deve ser contabilizado).
// Ao final da leitura, imprima o peso do menor o gado, do maior gado e a média do peso de gados.

var num1,num2,resultado
window.alert("vamos calcular a potencia de dois numeros ")
num1= parseFloat(prompt("digite o primeiro numero"))
num2=parseFloat(prompt("digite o segundo numero"))
resultado= num1 ** num2
window.alert("o resultado e:"+ resultado)




