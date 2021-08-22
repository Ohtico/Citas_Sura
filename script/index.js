
document.addEventListener('DOMContentLoaded', () => {
    getLocalStorage()
    citas = (JSON.parse(localStorage.getItem('Citas')));

});

let formulario = document.querySelector('form')
let listarCita = document.getElementById('listarCita');
let buscar = document.getElementById('btnBuscar');
let busqueda = document.getElementById('busqueda')

let citas = []

const cargarData = () => {

    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;

    let datos = {
        nombre,
        fecha,
        hora,
        sintomas
    }
    citas.unshift(datos)
    localStorage.setItem('Citas', JSON.stringify(citas));
    getLocalStorage();
}

formulario.addEventListener('submit', e => {
    e.preventDefault();
    cargarData();
});

const getLocalStorage = () => {

    listarCita.innerHTML = '';
    let citasLocalStorage = JSON.parse(localStorage.getItem('Citas'));
    // console.log(citasLocalStorage);
    citasLocalStorage.map(cita => {
        const { nombre, fecha, hora, sintomas } = cita;
        listarCita.innerHTML += `
                                <td> ${nombre} </td>
                                <td> ${fecha} </td>
                                <td> ${hora} </td>
                                <td> ${sintomas} </td>`
    })

}

buscar.addEventListener('click', e => {
    e.preventDefault();

    let input = document.getElementById('inputBuscar').value;
    let data = JSON.parse(localStorage.getItem('Citas'));
    let filtro = data.filter(cita => cita.nombre.toLowerCase() === input.toLowerCase())
    busqueda.innerHTML = '';
    // console.log(filtro)

    if (filtro.length === 0) {
        swal.fire({
            title: `El nombre ${input} no existe `,
            icon: 'info'
        })
    }
    filtro.map((cita, index) => {
        const { nombre, fecha, hora, sintomas } = cita;
        swal.fire({
            title: `Paciente: ${nombre}`,
            html:
                `Fecha de Ingreso: ${fecha}<br>
                 Hora de Ingreso: ${hora}<br>
                 Sintomas: ${sintomas}`,
            icon: 'success',
            confirmButtonText: 'Borrar Historial',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Borrado!',
                    'El historia fue borrado con Exito!.',
                    'success'
                )
                // data.map(wey => {
                //     console.log(wey);
                // })
                // pirmer parametro es la posicion el segunto es cuanto se va a borrar y el tercero es si queremos agregar algo
                data.splice(index,1);
                console.log(data);
            }
        })
    })
})
