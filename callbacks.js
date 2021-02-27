// //función de JS que se ejecuta después de un determinado tiempo:

// setTimeout(() => {
//     console.log('Hola Mundo');
// },2000);


//otra forma de escribirla:
const saludar = () => {
    console.log('Hola Mundo');
}
setTimeout(saludar, 2000);