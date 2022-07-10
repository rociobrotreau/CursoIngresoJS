/*Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id.*/


function mostrar()
{

let precio;
let dto;
let precioFinal;
let dtoFinal;

precio= prompt("ingrese aqui el precio");
dto= prompt ("ingrese aqui el descuento");

precio= parseFloat(precio);
dto= parseFloat(dto);

dtoFinal= (dto*precio) /100;

precioFinal= precio-dtoFinal;

/*mostrar resultado por ID*/
document.getElementById("elPrecioFinal").value= precioFinal;

}
