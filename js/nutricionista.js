        document.querySelector('.form-mediciones').addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Mediciones guardadas correctamente.');
        });

        document.querySelector('.btn-secundario').addEventListener('click', function () {
            this.form.requestSubmit();
        });

        document.querySelector('.form-pauta').addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Pauta guardada y asignada al paciente.');
        });