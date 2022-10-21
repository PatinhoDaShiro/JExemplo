//Ao quadrado
let numero= document.querySelector("#numeroaoquadrado");
let resultado=document.querySelector("#result")
function vezesdois(){
    resultado.innerHTML="Quadrado: ";
    resultado.append(numero.value*numero.value)
    numero.value=""
}

//Cinco numeros
let cinconumeros = document.querySelector("#cinconumero");
let cont=1
let numeros=[];
function cincovezes(){
    
    if(cont<=5){
        numeros.push(cinconumeros.value)
        document.querySelector("#n"+cont).append(numeros[cont-1])
        cont++
        document.querySelector("#resultado").innerHTML="Maior numero: "
    }
    if(cont>5){
        document.querySelector("#resultado").append(Math.max(...numeros))
        numeros=[]
        cont=1
        for(i=1;i<6;i++){
            document.querySelector("#n"+i).innerHTML=i+"º Numero :"
        }
      }
}
//IDADES
let idade=document.getElementById("idadeInput")
let menores=document.getElementById("menores")
let maiores=document.getElementById("maiores")
cont1=0;
cont2=0;
function idades(){
    if(idade.value>=18){
        cont1++
        maiores.innerHTML="Há um total de "+cont1+" pessoas com idade maiores que 18 anos"
    }
    else if(idade.value<18 && idade.value>0){
        cont2++
        menores.innerHTML="Há um total de "+cont2+" pessoas com idade menores que 18 anos"
    }
    else {
        alert("idade invalida")
    }
}
function reiniciar(){
    cont1=0
    cont2=0
    menores.innerHTML=""
    maiores.innerHTML=""  
}
//Nomes invertidos
let nick=document.getElementById("nome")
let aviso=document.getElementById("aviso")
let lista =document.getElementById("lista")
let nomes=[]
function addList(){
    nomes.push(nick.value)
    aviso.innerHTML="Você possui um total de "+nomes.length+" nomes adicionados."
}
function mLista(){
aviso.innerHTML="Sua lista invertida"


for(i=nomes.length-1;i>=+0;i--){

   lista.append(nomes[i]+" ")
}
}




