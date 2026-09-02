        document.getElementById('form-login').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const correoInput = document.getElementById('correo');
            const errorCorreo = document.getElementById('error-correo');
            const correo = correoInput.value.trim().toLowerCase();

            errorCorreo.textContent = '';

            if (correo.endsWith('@gmail.com')) {
                window.location.href = 'paciente.html';
            } else if (correo.endsWith('@secret.com')) {
                window.location.href = 'secretaria.html';
            } else if (correo.endsWith('@nutri.com')) {
                window.location.href = 'nutricionista.html';
            } else {
                errorCorreo.textContent = 'Dominio no reconocido. Debe ser @gmail.com, @secret.com o @nutri.com';
            }
        });