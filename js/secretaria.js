      const buscador = document.querySelector('.Buscador-panel');
        const citas = document.querySelectorAll('.tarjeta-cita');

        buscador.addEventListener('input', function () {
            const consulta = this.value.trim().toLowerCase();
            citas.forEach(cita => {
                cita.hidden = !cita.textContent.toLowerCase().includes(consulta);
            });
        });

        document.querySelectorAll('.btn-atender').forEach(button => {
            button.addEventListener('click', function () {
                const estado = this.closest('.tarjeta-cita').querySelector('.badge');
                estado.textContent = 'Llegada anunciada';
                estado.className = 'badge badge-confirmado';
                alert('Llegada del paciente anunciada.');
            });
        });

        document.querySelectorAll('.btn-secundario').forEach(button => {
            button.addEventListener('click', () => alert('Reagendamiento pendiente de configurar en el sistema.'));
        });

        document.querySelector('.btn-nueva-cita').addEventListener('click', () => {
            alert('El formulario para agendar una nueva cita estará disponible al conectar el sistema.');
        });