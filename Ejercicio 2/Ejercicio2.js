/*2. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con 
“cancelar” deben mostrarse todas las cadenas concatenadas con un - (guión).*/
let final;
do{
    let cadena = prompt("Ingrese una cadena de texto: ");
    if (final == undefined) {
        final = final + cadena;
    }
    else {
        final = final + "-" + cadena;
    }
}while(confirm("Desea seguir?"));

console.log(final);