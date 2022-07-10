/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar()
 {
    let numeroUno;
    let numeroDos;
    let numeroTres;
    let resultado;

    numeroUno = document.getElementById ("txtIdPrecioUno").value;
    numeroDos = document.getElementById ("txtIdPrecioDos").value;
    numeroTres = document.getElementById ("txtIdPrecioTres").value;

    numeroUno = parseFloat (numeroUno);
    numeroDos = parseFloat (numeroDos);
    numeroTres = parseFloat (numeroTres);


    resultado= numeroUno+numeroDos+numeroTres;
    alert(resultado);
}

function Promedio() {

    let numeroUno;
    let numeroDos;
    let numeroTres;
    let resultado;
    let promedio;

    numeroUno = document.getElementById ("txtIdPrecioUno").value;
    numeroDos = document.getElementById ("txtIdPrecioDos").value;
    numeroTres = document.getElementById ("txtIdPrecioTres").value;

    numeroUno = parseFloat (numeroUno);
    numeroDos = parseFloat (numeroDos);
    numeroTres = parseFloat (numeroTres);


    resultado= (numeroUno+numeroDos+numeroTres);
    promedio= (resultado)/3;
    alert(promedio);


}
function PrecioFinal() {

    let numeroUno;
    let numeroDos;
    let numeroTres;
    let resultado;
    let iva;

    numeroUno = document.getElementById ("txtIdPrecioUno").value;
    numeroDos = document.getElementById ("txtIdPrecioDos").value;
    numeroTres = document.getElementById ("txtIdPrecioTres").value;

    numeroUno = parseFloat (numeroUno);
    numeroDos = parseFloat (numeroDos);
    numeroTres = parseFloat (numeroTres);

    resultado= (numeroUno+numeroDos+numeroTres);
    iva= (resultado*21)/100;
    /*hice regla de 3simple*/

    alert(resultado+iva);

  

}