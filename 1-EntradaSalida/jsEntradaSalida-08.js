/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroDividendo;
	let numeroDivisor;
	let resultado;
	let primerResultado;

	numeroDividendo= document.getElementById ("txtIdNumeroDividendo").value;
	numeroDividendo= parseInt (numeroDividendo)
	numeroDivisor= document.getElementById ( "txtIdNumeroDivisor").value;
	numeroDivisor= parseInt (numeroDivisor);
    
	resultado=numeroDividendo%numeroDivisor; 
	primerResultado= numeroDividendo/numeroDivisor;
	alert("el resto es" +resultado "y el resultado es " +primerResultado);
}
