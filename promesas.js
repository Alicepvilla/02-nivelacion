const empleados = [
    {
        id: 1,
        nombre: 'Alejandro Perez'
    },
    {
        id: 2,
        nombre: 'Manuel Santibañez'
    },
    {
        id: 3,
        nombre: 'Juan Olmedo'
    },
]

const sueldos = [
    {
        id: 1,
        sueldo: 250000
    },
    {
        id: 2,
        sueldo: 150000
    }
]
getEmpleadoById = (id) => {

    return new Promise((resolve, reject) => {

    const empleado = empleados.find( (e) => e.id ===id);

    if (empleado) {
        resolve(empleado);
        return;
    }
    reject(`El empleado con id ${id} no existe`);

    });
 }
 const id = 1;

 getEmpleadoById(id).then( empleado => {
     console.log(`El empleado con id ${id} es ${empleado.nombre}`);
 }).catch( err => console.log(err));


 getSueldoById = (id) => {

    return new Promise((resolve, reject) => {

    const sueldo = sueldos.find( (s) => s.id ===id);

    if (sueldo) {
        resolve(sueldo);
        return;
    }
    reject(`El sueldo no existe para el id ${id}`);
});
}
 
getSueldoById(id).then( sueldos => {
    console.log(`El empleado con id ${id} tiene un salario de $ ${sueldos.sueldo}`);
}).catch( err => console.log(err));
 