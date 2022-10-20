//Ao quadrado
let numero= document.querySelector("#numeroaoquadrado");
let resultado=document.querySelector("#result")
function vezesdois(){
    resultado.innerHTML="Quadrado: ";
    resultado.append(numero.value*numero.value)
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


