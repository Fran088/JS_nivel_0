/*3. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá
indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de
los números introducidos.*/
let suma=0;
do{
    let numeros = prompt("Ingrese un número: ");
    if (Number(numeros)==numeros) {
        numeros=Number(numeros);
        suma = suma + numeros;
    }
    else {
            alert("No es un numero");
        
    }
}while(confirm("Desea seguir?"));

console.log(suma);