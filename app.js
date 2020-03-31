// Punto1

/*let edad= prompt("Ingrese su edad")

if (edad>=18) {
    alert("Puede conducir");
    }else if (edad<18) {
    alert("Es menor de edad, no puede conducir");        
    }else{
    alert("No es una edad válida")
    }
        Tambien podría haber agregado edad== null y un alert "Has cancelado o introducido el nombre vacío"
        o if (edad =="") { alert ('No has introducido edad'); }
    */


// Punto2

/*let nota= prompt("Ingrese una nota de 0 a 10", )

switch (true) {
    case (nota=="") :
        console.log("No has introducido una nota")
        break;
    case (nota== null) :
        console.log("Has cancelado")
        break;
    case (nota>=0 && nota<=2):
        console.log("Muy deficiente")
        break;
    case(nota>=3 && nota<=4):
        console.log("Insuficiente")
        break;
    case(nota>=5 && nota<=6):
        console.log("Suficiente")
        break;    
    case(nota==7):
        console.log("Bien")
        break;
    case(nota>=8 && nota<=9):
        console.log("Notable")
        break;
    case(nota==10):
        console.log("Sobresaliente")
        break;
        default:
        console.log("Número erróneo")
        break;
}
*/

//Punto3: Código de Martin - revisar ejercicio para entender la lógica

let resultado = "";

/*do {
    let textos = prompt("Ingrese un texto:");
    if (resultado == "") {
        resultado = resultado + textos;
    } else {
        resultado = resultado + "-" + textos;
    }
} while (confirm("Desea seguir?")) {
    console.log(resultado)
}/*

//Punto4 

/*let resultado = ""
let number
do {
    let numeros = prompt("Ingrese un número:");
    if(isNaN(numeros)){
        alert("No es un numero");
    } else if (resultado == "") {
        resultado = resultado + numeros;
    } else{
        resultado= parseInt(resultado) + parseInt(numeros);
    }
} while (confirm("Desea seguir?")) {
    console.log(resultado)
}*/

//Punto5
/*let resto;
let dni = prompt("Ingrese su número de DNI");
if (isNaN(dni)) {
    alert("No es un numero válido");
} else if (dni > 0 && dni < 99999999) {
    resto = parseInt(dni) % 23;
    switch (true) {
        case (resto == 0):
            console.log("T")
            break;
        case (resto == 1):
            console.log("R")
            break;
        case (resto == 2):
            console.log("W")
            break;
        case (resto == 3):
            console.log("A")
            break;
        case (resto == 4):
            console.log("G")
            break;
        case (resto == 5):
            console.log("M")
            break;
        case (resto == 6):
            console.log("Y")
            break;
        case (resto == 7):
            console.log("F")
            break;
        case (resto == 8):
            console.log("P")
            break; 
        case (resto == 9):
            console.log("D")
            break;
        case (resto == 10):
            console.log("X")
            break; 
        case (resto == 11):
            console.log("B")
            break;
        case (resto==12):
            console.log("N")
            break;
        case (resto==13):
            console.log("J")
            break;
        case (resto==14):
            console.log("Z")
            break;
        case (resto==15):
            console.log("S")
            break;
        case (resto==16):
            console.log("Q")
            break;
        case (resto==17):
            console.log("V")
            break;
        case (resto==18):
            console.log("H")
            break;
        case (resto==19):
            console.log("L")
            break;
        case (resto==20):
            console.log("C")
            break;
        case (resto==21):
            console.log("K")
            break;
        case (resto==22):
            console.log("E")
            break;   
    }
}*/

//Punto6


