/*6. Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el
usuario de la siguiente forma : (suponiendo que indica 30).
30303030303030303030303030303030303
2828282828282828282828282
.....
333
1*/
let num = prompt("Introduce el numero que indica");
    for(let i=num; i>=1;i--){
        for(j=num;j>0;j--){
            document.write(i);
        }
        document.write("<br>");
    }
