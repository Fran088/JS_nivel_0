/*4. Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento
nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
○ El número debe ser entre 0 y 99999999
○ Debemos calcular el resto de la división entera entre el número y el número 23.
○ Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M,
Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
○ Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
○ Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/
const vector = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V',
'H', 'L', 'C', 'K', 'E'];
let resto=0, final="", finald=""; 
do{
    let dni = prompt("Introduce tu dni");
    if (Number(dni) == dni) {
        dni = Number(dni);
        if (dni >= 0 && dni <= 99999999) {
            resto = dni % 23;
            vector[resto];
            if (final == "") {
                final = final + vector[resto];
            }
            else {
                final = final + "-" + vector[resto];
            }
            if (finald == "") {
                finald = finald + dni;
            }
            else {
                finald = finald + "-" + dni;
            }
    }
    else{
        alert("No es un numero");
    }
    }
}while(confirm("Desea seguir?"));
console.log(finald);
console.log(final);