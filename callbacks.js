// //setTimeout: función de JS que se ejecuta después de un determinado tiempo:

// setTimeout(() => {
//     console.log('Hola Mundo');
// },2000);


//otra forma de escribirla:
// const saludar = () => {
//     console.log('Hola Mundo');
// }
// setTimeout(saludar, 2000);



const getUsuarioById = (id, callback) => {

    const user = {
        id,
        nombre: 'Alicia'
    }
    setTimeout(() => {
       
        callback (user);

    },1000);
}

getUsuarioById(10, ({nombre, id}) => { //aqui usamos destructuracion
    console.log(`Nombre: ${nombre.toUpperCase()} Id: ${id}`); //aqui usamos template string
})

