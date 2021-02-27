//USO DE VAR. (var es de scope global, en este ejemplo siempre va a tomar el ùltimo nombre)
// var nombre = "Alicia" 
// if ( true ){
//     nombre = "Luis";
// }
// console.log(nombre);


//USO DE LET (el uso de Let depende del scope)
// let nombre = "Alicia"
// if ( true ) {
//     let nombre = "Luis";
//     console.log(nombre);//con este console log imprime Luis, despues Alicia.
// }
// console.log(nombre); //sin console log anterior, imprime Alicia porque este console log está dentro del scope Alicia


//USO DE CONST (es una constante.  NO se puede modificar dentro del mismo scope)
const nombre = "Alicia"
//if ( true ) {
    const nombre = "Luis";
    //console.log(nombre);//
//}
console.log(nombre);