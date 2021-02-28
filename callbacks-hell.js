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
    console.log(`El empleado: ${empleado.nombre} trabaja en esta empresa`);
});

getSueldoById = (id, callback) => {

    const sueldo = sueldos.find( (s) => s.id ===id);

    if (sueldo) {
        callback(null, sueldo);
        return;
    }
    callback(`El sueldo no existe para el id ${id}`);
}
getEmpleadoById(id, (error, empleado) => {
    if(error) {
        console.log("ATENCION!!!!!");
        console.log(error);
        return
    }

getSueldoById(id, (error, sueldos) => {

    if(error) {
        console.log("ATENCION!!!!!");
        console.log(error);
        return
    }
       console.log(`El empleado ${empleado.nombre} tiene un sueldo de ${sueldos.sueldo}`);
    });
});
