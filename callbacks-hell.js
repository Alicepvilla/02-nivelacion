const empleados = [
    {
        id: 1,
        nombre: 'Alejandro'
    },
    {
        id: 2,
        nombre: 'Manuel'
    },
    {
        id: 3,
        nombre: 'Juan'
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
getEmpleadoById = (id, callback) => {

    const empleado = empleados.find( (e) => e.id ===id);

    if (empleado) {
        callback(null, empleado);
        return;
    }
    callback(new Error("El empleado no existe"));
}
const id = 1;
getEmpleadoById(id, (error, empleado) => {

    if(error) {
        console.log("ERROR!!!!!");
        console.log(error);
        return
    }
    console.log(`El empleado: ${empleado.nombre}....`);
});