/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno
 rectangular y se debe alambra con tres hilos de alambre. //perimetrox3//
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular
 y se debe alambra con tres hilos de alambre. //radiox3//
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
 //area 1m2= 2cemento, 3cal
   
*/

function Rectangulo() {

    let largo;
    let ancho;
    let sumaLados;
    let alambreTotal;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);


    sumaLados = (largo + ancho) * 2;
    alambreTotal = (sumaLados) * 3;


    alert(alambreTotal);

}
function Circulo() {

    /*Perímetro de un círculo = 2. π x r*/
    /* π  --->  Math.PI*/

    let radio;
    let perimetro;
    let alambreTotal;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);

    perimetro = 2 * Math.PI * radio;
    alambreTotal = perimetro * 3;

    alert(alambreTotal);

}
function Materiales() {
    const cemento = 2;
    const cal = 3;

    let ancho;
    let largo;
    let areaRectangulo;
    let cementoRectangulo;
    let calRectangulo;

    let radio;
    let areaCirculo;
    let cementoCirculo;
    let calCirculo;


    /*para el rectangulo*/
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    areaRectangulo = largo * ancho;
    /*Aplico regla de 3 simple para calcular cant de cemento y cal*/

    cementoRectangulo = areaRectangulo * cemento;

    calRectangulo = areaRectangulo * cal;

    /*para el circulo*/

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);

    areaCirculo = Math.PI * (radio * radio);

    cementoCirculo = areaCirculo * cemento;
    calCirculo = areaCirculo * cal;

    alert('Cantidad de cemento en el rectangulo: '
        + cementoRectangulo
        + ', y la cantidad de cal es de: '
        + calRectangulo
        + '. Para el circulo, la cantidad de cal seria: '
        + calCirculo
        + ' y la cantidad de cemento: ' 
        + cementoCirculo);

 

}