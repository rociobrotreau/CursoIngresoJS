/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno= document.getElementById ("txtIdNumeroUno").value;
	numeroUno= parseInt (numeroUno)
	numeroDos= document.getElementById ("txtIdNumeroDos").value;
	numeroDos= parseInt (numeroDos);

	resultado= numeroUno+numeroDos;
	alert("el resultado es"+ resultado);
}

function restar()
{

	let numeroUno;
	let numeroDos;
	let resultado2;

	numeroUno= document.getElementById ("txtIdNumeroUno").value;
	numeroUno= parseInt (numeroUno)
	numeroDos= document.getElementById ("txtIdNumeroDos").value;
	numeroDos= parseInt (numeroDos);

	resultado2= numeroUno-numeroDos;
	alert("el resultado es"+ resultado2); 
	
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultado3;

	numeroUno= document.getElementById ("txtIdNumeroUno").value;
	numeroUno= parseInt (numeroUno)
	numeroDos= document.getElementById ("txtIdNumeroDos").value;
	numeroDos= parseInt (numeroDos);

	resultado3=numeroUno*numeroDos;
	alert("el resultado es"+ resultado3);
	
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultado4;

	numeroUno= document.getElementById ("txtIdNumeroUno").value;
	numeroUno= parseInt (numeroUno)
	numeroDos= document.getElementById ("txtIdNumeroDos").value;
	numeroDos= parseInt (numeroDos);

	resultado4= numeroUno/numeroDos;
	alert("el resultado es"+ resultado4);
	
}

