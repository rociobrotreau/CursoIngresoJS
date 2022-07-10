/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	let sueldo;
	let resultado;
	let descuento;

	descuento = 25;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	resultado = sueldo - (sueldo * descuento / 100);
	document.getElementById("txtIdResultado").value = resultado;
}


/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO" 	
EJERCICIO 10BIS. Idem al 10 pero se pide el porcentaje por prompt*/

function mostrarAumento() {
	let sueldo;
	let resultado;
	let descuento;

	descuento = prompt('Ingrese aqui el descuento');
	descuento=parseInt (descuento);

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	resultado = sueldo - (sueldo * descuento / 100);
	document.getElementById("txtIdResultado").value = resultado;
}
