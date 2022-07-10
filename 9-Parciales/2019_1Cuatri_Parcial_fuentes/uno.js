/*Enunciado:
Bienvenidos.
Realizar el algoritmo que pida los datos 
necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.*/

function mostrar()
{

let lados;
let sumaLados;

lados= prompt("ingrese aqui el valor de los lados para un triangulo equilatero");
lados= parseInt(lados);

sumaLados= lados*3

alert("El perimetro para el triangulo equilatero es " + sumaLados);




}
