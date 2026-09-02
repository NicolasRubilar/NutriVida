document.addEventListener('DOMContentLoaded', () => {
    const formulario= document.querySelector('.tarjeta-formulario form');
    if(formulario){
        formulario.addEventListener('submit',(e)=>{
            const tipoAtencion = document.getElementById('TipoAtencion').value;
            const modalidad = document.getElementById('Modalidad').value;
            const fecha = document.getElementById('fecha').value;
            const hora = document.getElementById('hora').value

            if (tipoAtencion==='' || modalidad===''|| fecha===''|| hora===''){
                e.preventDefault();
                alert('Error! Debes completar los campos del formulario');
                return;
            }

            const fechaSeleccionada = new Date(fecha + 'T00:00:00');
            const hoy = new Date();
            hoy.setHours(0,0,0,0);

            if(fechaSeleccionada <hoy){
                e.preventDefault();
                alert('La fecha de reserva no puede ser en el pasado');
                return;
            }
            const horaNumero = parseInt(hora.split(':')[0]);

            if(horaNumero<9 || horaNumero >=20){
                e.preventDefault();
                alert('El horario de atencion es de 09:00 a 20:00 hrs.');
                return;
            }
            alert('Reserva válida. Redirigiendo al Inicio sesion')

        })
    }

})