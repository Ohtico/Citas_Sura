
document.addEventListener('DOMContentLoaded', () => {
    guardarDatos()
    usuario = (JSON.parse(localStorage.getItem('usuario')));
});
let usuario = []
swal.fire({
    title: '<span class="white">Registrar Nuevo Usuario', //el titulo y le coloque una etiqueta span para darle estilos desde el archivo css
    imageUrl: 'https://www.segurossura.com.co/boletincovid191/Recomendaciones_COVID-19/images/logo_sura.png',
    imageWidth: '200px',
    // imageHeight:
    // icon: 'info', // tipo de icono
    background: `rgba(47, 203, 234`, //color de fondo
    grow: `column`, // en columnas se ordenara todas las caracteristicas de la alerta
    confirmButtonText: `Registrarse`,
    allowOutsideClick: false, // no permiter click afuera de la alerta
    allowEscapeKey: false, // no permiter tecla de esc
    allowEnterKey: false,
    stopKeydownPropagations: false,
    html: '<input id="swal-input1" class="swal2-input" placeholder="Nombre" type="text">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Apellido" type="text">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Email" type="email">' +
        '<input id="swal-input4" class="swal2-input" placeholder="Usuario" type="text">' +
        '<input id="swal-input5" class="swal2-input" placeholder="Contraseña" type="password">',
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonText: `Iniciar Sesion`,
}).then((result) => {
    if (result.isConfirmed) {

        let confir = document.getElementById('swal-input1').value;
        let confir1 = document.getElementById('swal-input2').value;
        let confir2 = document.getElementById('swal-input3').value;
        let confir3 = document.getElementById('swal-input4').value;
        let confir4 = document.getElementById('swal-input5').value;

        if (confir == 0 || confir1 == 0 || confir2 == 0 || confir3 == 0 || confir4 == 0) {
            swal.fire({
                title: 'Complete los campos',
                background: `rgba(47, 203, 234`, //color de fondo
                imageUrl: 'https://www.segurossura.com.co/boletincovid191/Recomendaciones_COVID-19/images/logo_sura.png',
                imageWidth: '200px'
            })
        } else {
            let registro = {
                confir,
                confir1,
                confir2,
                confir3,
                confir4
            }
            swal.fire({
                title: 'Registrado Con exito',
                background: `rgba(47, 203, 234`, //color de fondo
                imageUrl: 'https://www.segurossura.com.co/boletincovid191/Recomendaciones_COVID-19/images/logo_sura.png',
                imageWidth: '200px'
            })

            usuario.unshift(registro)
            localStorage.setItem('usuario', JSON.stringify(usuario));
            guardarDatos();
            console.log(usuario)
        }
    } else {
        swal.fire({
            title: '<span class="white">Ingrese su usuario',
            imageUrl: 'https://www.segurossura.com.co/boletincovid191/Recomendaciones_COVID-19/images/logo_sura.png',
            imageWidth: '200px',
            confirmButtonText: `Iniciar`,
            allowOutsideClick: false, // no permiter click afuera de la alerta
            allowEscapeKey: false, // no permiter tecla de esc
            allowEnterKey: false,
            stopKeydownPropagations: false,
            background: `rgba(47, 203, 234`, //color de fondo
            html: '<input id="swal-input4" class="swal2-input" placeholder="Usuario" type="text">' +
                '<input id="swal-input5" class="swal2-input" placeholder="Contraseña" type="password">',
        }).then(result => {
            if (result.isConfirmed) {
                if (result.isConfirmed) {
                    let ope = document.getElementById('swal-input4').value;
                    let pass = document.getElementById('swal-input5').value;
                    let recien = (JSON.parse(localStorage.getItem('usuario')));

                    let user = recien.find(key => key.confir3 == ope)
                    let pas = recien.find(key => key.confir4 == pass)

                    console.log(user.confir3 , pas.confir4)
                    if (ope == 0 || pass == 0) {
                        swal.fire({
                            title: 'Complete los campos',
                            imageUrl: 'https://www.segurossura.com.co/boletincovid191/Recomendaciones_COVID-19/images/logo_sura.png',
                            imageWidth: '200px',
                            background: `rgba(47, 203, 234` //color de fondo
                        })
                    } else if (ope == user.confir3 && pass == pas.confir4) {
                        swal.fire({
                            title: 'acceso permitido',
                            imageUrl: 'https://www.segurossura.com.co/boletincovid191/Recomendaciones_COVID-19/images/logo_sura.png',
                            imageWidth: '200px',
                            background: `rgba(47, 203, 234` //color de fondo
                        })
                    } else {
                        swal.fire({
                            title: 'Usuario Incorrecto',
                            imageUrl: 'https://www.segurossura.com.co/boletincovid191/Recomendaciones_COVID-19/images/logo_sura.png',
                            imageWidth: '200px',
                            background: `rgba(47, 203, 234` //color de fondo
                        })
                    }
                }
            }
        })
    }
})
const guardarDatos = () => {
    let datosGuardados = JSON.parse(localStorage.getItem('usuario'));
    // console.log(datosGuardados)
}