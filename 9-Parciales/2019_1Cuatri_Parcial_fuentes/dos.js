/*Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx 
pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".*/

function mostrar() {
    let nombreUno;
    let pesoUno;

    let nombreDos;
    let pesoDos;

    let sumaPesos;
    let promedioPesos;

    nombreUno = prompt("ingrese aqui su nombre");
    nombreDos = prompt("ingrse aqui su nombre");


    pesoUno = prompt(nombreUno + ", ingrese aqui su pesaje en kilogramos");
    pesoDos = prompt(nombreDos + ", ingrese aqui su pesaje en kilogramos");

    pesoUno = parseFloat(pesoUno);
    pesoDos = parseFloat(pesoDos);


    sumaPesos = pesoUno + pesoDos;
    promedioPesos = sumaPesos / 2;

    alert(" ustedes se llaman"
        + nombreUno
        + " y "
        + nombreDos + ", pesan "
        + pesoUno
        + " y "
        + pesoDos
        + ", que sumados son "
        + sumaPesos
        + " kilos y el promedio de peso es "
        + promedioPesos);


}
