// const personaje = {
//     nombre : 'Pepe',
//     apellido : 'Argento',
//     profesion : 'Zapatero',
//     getDescripcion(){
//         return `${nombre} ${apellido} es ${profesion}` 
//     }

// }
//se definen las constantes indicadas arriba:
// const nombre = personaje.nombre;
// const apellido = personaje.apellido;
// const profesion = personaje.profesion; //estas 3 constantes se pueden reemplazar en una sola linea.

//const {nombre, apellido, profesion} = personaje;

// const {nombre, apellido, profesion, edad=50} = personaje;//tambien podemos definir nuevas variables en esta linea
// console.log(nombre, apellido, profesion, edad);


//OTRA FORMA DE HACERLO
// const imprimirPersonaje = ({nombre, apellido, profesion, edad=50}) => {
//     console.log(nombre, apellido, profesion, edad);
// }
// imprimirPersonaje(personaje)


//DESESTRUCTURACION DE ARRAYS
const personajes = ['Pepe', 'Moni', 'Koki'];
const [p1, p2, p3] = personajes
console.log(p1, p2, p3);

