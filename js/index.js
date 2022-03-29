main = () => {
    activarEventsListener()
}

activarEventsListener = () => {
    document.getElementById("btn").addEventListener("click", jugar, false)
}

jugar = () => {
    cantidadJugadores()
}

cantidadJugadores = () => {
    Swal.fire({
        text: "Número de Jugadores:",
        input: 'number',
    })
        .then((value) => {
            let cant = parseInt(value.value)
            if (cant != "" && cant != null && cant > 0 && cant <= 20) {
                cantJugadores = cant
                console.log(cantJugadores)
                introducirJugadores(1)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese un número entre 1 y 20',
                })
            }
        })
}

introducirJugadores = (x) => {
    Swal.fire({
        text: "Introduzca los nombres de los jugadores "+x+"/"+cantJugadores+":",
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (nombre) => {
            if (nombre != "" && nombre != null) {
                jugadores.push(nombre)
                if (jugadores.length < cantJugadores) {
                    ++x
                    introducirJugadores(x)
                } else {
                    console.log(jugadores)
                    Swal.fire({
                        icon: 'success',
                        title: 'Jugadores cargados',
                        text: 'Jugadores: ' + jugadores.toString(),
                    })
                    iniciarJuego()
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese un nombre',
                })
            }
        }
    })
}

iniciarJuego = () => {
    localStorage.setItem("jugadores", jugadores)
    window.location.href = "./game.html"
}

var cantJugadores

var jugadores = new Array()

window.addEventListener("load", main, false)