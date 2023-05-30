let edades = [12,25,55,55,66,8,9,77,99,45];

edades.forEach(function(numero) {
    document.write("edad : "+numero+'<br>')
});
document.write("---------------------------------------------------------------------------------------"+'<br>')


let edad=prompt('ingrese edad')

if ( ! (edad >= 1 && edad <= 120)) {
    document.write("ingrese un rango devalor permitida")
    
  }
if (edad > 0 && edad <= 18 ) {
    document.write("es menor de edad")
}
if(edad>18  && edad <=60){
    document.write("es mayor de edad")
   
}if(edad >= 60 && edad <= 120){
    document.write("es un adulto mayor")
}else if (!edad){
    document.write("ERROR ingrese una edad valida")
}











 


let contadorMayores60 = 0;
let contadorMenores18 = 0;
let contadorEntre18y20 = 0;

for (let i = 0; i < edades.length; i++) {
  let edad = edades[i];
  
  if (edad > 60) {
    contadorMayores60++;
  } else if (edad < 18) {
    contadorMenores18++;
  } else if (edad >= 18 && edad <= 20) {
    contadorEntre18y20++;
  }
}

document.write("Cantidad de personas mayores de 60:"+'<br>', contadorMayores60);
document.write("Cantidad de personas menores de 18:"+'<br>', contadorMenores18);
document.write("Cantidad de personas entre 18 y 20:", contadorEntre18y20);