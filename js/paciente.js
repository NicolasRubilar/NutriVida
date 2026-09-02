        const accionesPaciente = document.querySelectorAll('.acciones-paciente button');
        accionesPaciente[0].addEventListener('click', () => alert('Indicaciones previas disponibles en tu ficha.'));
        accionesPaciente[1].addEventListener('click', () => alert('Solicitud de reagendamiento enviada.'));
        accionesPaciente[2].addEventListener('click', () => alert('La descarga de la pauta estará disponible al conectar el sistema.'));
        accionesPaciente[3].addEventListener('click', () => alert('Historial completo disponible al conectar el sistema.'));