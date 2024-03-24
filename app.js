
 
 // Datos de ejemplo de taxistas y pasajeros en diferentes áreas con sus datos de contacto
 const personasPorArea = {
    "ubicacion1": [
        { nombre: "Pasajero A", telefono: "123456789", email: "pasajeroa@example.com", ciudad: "Ciudad A" },
        { nombre: "Pasajero B", telefono: "987654321", email: "pasajerob@example.com", ciudad: "Ciudad B" },
        { nombre: "Pasajero C", telefono: "456789123", email: "pasajeroc@example.com", ciudad: "Ciudad C" }
    ],
    "ubicación2": [
        { nombre: "Pasajero D", telefono: "111222333", email: "pasajerod@example.com", ciudad: "Ciudad D" },
        { nombre: "Pasajero E", telefono: "444555666", email: "Pasajeroe@example.com", ciudad: "Ciudad E" },
        { nombre: "Pasajero F", telefono: "777888999", email: "Pasajerof@example.com", ciudad: "Ciudad F" }
    ],
    // Agregar el resto de áreas y datos de ejemplo
};

// Función para mostrar la lista de personas (pasajeros u taxistas) en una área
function mostrarPersonas(area, listaElemento) {
    listaElemento.innerHTML = '';
    personasPorArea[area].forEach(persona => {
        const li = document.createElement('li');
        li.textContent = `${persona.nombre}, Teléfono: ${persona.telefono}, Email: ${persona.email}, Ciudad: ${persona.ciudad}`;
        listaElemento.appendChild(li);
    });
}

// Función para mostrar la lista de pasajeros para los taxistas
document.getElementById('areaTaxistas').addEventListener('change', function() {
    const area = this.value;
    const listaPasajerosTaxistas = document.getElementById('listaPasajerosTaxistas');
    mostrarPersonas(area, listaPasajerosTaxistas);
});

// Función para mostrar la lista de taxistas para las pasajeros
document.getElementById('areaPasajeros').addEventListener('change', function() {
    const area = this.value;
    const listaTaxistasPasajeros = document.getElementById('listaTaxistasPasajeros');
    mostrarPersonas(area, listaTaxistasPasajeros);
});


    //formulario de pago

    const form = document.getElementById('paymentForm');
    const paymentDetails = document.getElementById('paymentDetails');
    
    form.addEventListener('change', function(event) {
        const paymentMethod = event.target.value;
        let paymentFormHtml = '';
    
        switch(paymentMethod) {
            case 'creditCard':
                paymentFormHtml = `
                    <h2>Formulario de Tarjeta de Crédito</h2>
                    <label for="creditCardNumber">Número de Tarjeta:</label>
                    <input type="text" id="creditCardNumber" name="creditCardNumber" required>
                    <!-- Agrega aquí los demás campos necesarios para el pago con tarjeta de crédito -->
                `;
                break;
            case 'debitCard':
                paymentFormHtml = `
                    <h2>Formulario de Tarjeta de Débito</h2>
                    <label for="debitCardNumber">Número de Tarjeta:</label>
                    <input type="text" id="debitCardNumber" name="debitCardNumber" required>
                    <!-- Agrega aquí los demás campos necesarios para el pago con tarjeta de débito -->
                `;
                break;
            case 'digitalCurrency':
                paymentFormHtml = `
                    <h2>Formulario de Moneda Digital</h2>
                    <label for="digitalCurrencyAddress">Dirección de Moneda Digital:</label>
                    <input type="text" id="digitalCurrencyAddress" name="digitalCurrencyAddress" required>
                    <!-- Agrega aquí los demás campos necesarios para el pago con moneda digital -->
                `;
                break;
            case 'bankTransfer':
                paymentFormHtml = `
                    <h2>Formulario de Transferencia Bancaria</h2>
                    <label for="bankAccountNumber">Número de Cuenta Bancaria:</label>
                    <input type="text" id="bankAccountNumber" name="bankAccountNumber" required>
                    <!-- Agrega aquí los demás campos necesarios para la transferencia bancaria -->
                `;
                break;
            default:
                paymentFormHtml = '';
        }
    
        paymentDetails.innerHTML = paymentFormHtml;
    });
    

    const taxistasPagados = ["taxista1", "taxista2", "taxista3"];// Aquí deberías tener una lista de los taxistas que han pagado
  
         // Función para verificar si un taxista ha pagado
        functiontaxistaPagado(nombreTaxista) 
        return taxistasPagados.includes(nombreTaxista);
        
  
             // Bloquear acceso si el taxista no ha pagado
            function bloquearAcceso() {
            document.getElementById("call-button").disabled = true;
            document.getElementById("message-input").disabled = true;
            document.getElementById("send-button").disabled = true;
        }


        // Verificar acceso cuando se inicia la aplicación
       window.onload = function() {
       const nombreTaxista = "nombre del taxista actual"; // Aquí deberías tener el nombre del taxista actual, puedes obtenerlo de la base de datos o de donde almacenes los datos de los usuarios

        if (!taxistaPagado(nombreTaxista)) {
        bloquearAcceso();
        }
        };

          // Ejemplo de cómo podrías permitir el acceso después de que el taxista ha pagado
        function taxistaPagoExitoso() {
    // Agregar el nombre del taxista a la lista de taxistas pagados
    taxistasPagados.push("nombre del taxista actual");
    // Permitir el acceso
    document.getElementById("call-button").disabled = false;
    document.getElementById("message-input").disabled = false;
    document.getElementById("send-button").disabled = false;
}


document.getElementById('paymentForm').addEventListener('submit', function(event) {
event.preventDefault(); // Evitar que el formulario se envíe

  // Aquí puedes procesar el pago según el método seleccionado

  alert('Pago procesado correctamente');
});

  // Mostrar u ocultar el formulario de pago según el método seleccionado
document.querySelectorAll('input[name="paymentMethod"]').forEach(function(radio) {
radio.addEventListener('change', function() {
const paymentDetails = document.getElementById('paymentDetails');
if (radio.checked) {
paymentDetails.style.display = 'block';
} else {
 paymentDetails.style.display = 'none';
}
});
});

 //formulario de pago
document.querySelectorAll('input[name="paymentMethod"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        document.getElementById('paymentDetails').style.display = this.checked ? 'block' : 'none';
    });
});


document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    var selectedOption = document.querySelector('input[name="paymentOption"]:checked').value;
  
    // Aquí puedes agregar lógica adicional dependiendo de la opción seleccionada
    if (selectedOption === 'creditCard') {
      alert('Has seleccionado pagar con tarjeta de crédito');
      // Aquí podrías redirigir a una página de pago con tarjeta de crédito
    } else if (selectedOption === 'paypal') {
      alert('Has seleccionado pagar con PayPal');
      // Aquí podrías redirigir a una página de pago con PayPal
    } else {
      alert('Por favor selecciona una opción de pago');
    }
  });
  



    
    // functions of formcontacts
    const contactos = document.getElementById('contact.php');
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    form.addEventListener('submit', function (e) {
        let isValid = true;

        // Validate name
        if (!name.value.trim()) {
            isValid = false;
            setErrorFor(name, 'tu nombre completo es obligatorio');
        } else {
            setSuccessFor(name);
        }

        // Validate city
        if (!city.value.trim()) {
            isValid = false;
            setErrorFor(city, 'Nombre de tu ciudad es obligatorio');
        } else {
            setSuccessFor(city);
        }

        // Validate phone
        if (!phone.value.trim()) {
            isValid = false;
            setErrorFor(phone, 'Número de teléfono es obligatorio');
        } else {
            setSuccessFor(phone);
        }

        // Validate email
        if (!email.value.trim()) {
            isValid = false;
            setErrorFor(email, 'Correo electronico es obligatorio');
        } else if (!isEmail(email.value.trim())) {
            isValid = false;
            setErrorFor(email, 'Correo electronico no es válido');
        } else {
            setSuccessFor(email);
        }

        // Validate municipality
        if (!municipality.value.trim()) {
            isValid = false;
            setErrorFor(municipality, 'barrio es obligatorio');
        } else {
            setSuccessFor(municipality);
        }

        // Validate message
        if (!message.value.trim()) {
            isValid = false;
            setErrorFor(message, 'Mensaje es obligatorio');
        } else {
            setSuccessFor(message);
        }

        if (!isValid) {
            e.preventDefault();
        }
    });

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('i');

        small.textContent = message;
        formControl.className = 'form__validation-estado error';
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('i');

        small.textContent = '';
        formControl.className = 'form__validation-estado success';
    }

    function isEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }  
    
    <script>
    const stripe = Stripe('tu_clave_publica_de_stripe');
    const elements = stripe.elements();
    const form = document.getElementById('formTaxistas');
    const botonPagar = document.getElementById('pagar');

    botonPagar.addEventListener('click', async (event) => {
        event.preventDefault();
        botonPagar.disabled = true;
        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement('card'),
        });
        
        if (error) {
            alert(error.message);
            botonPagar.disabled = false;
        } else {
            // Aquí puedes enviar el token de pago a tu servidor para procesar el pago
            alert('Pago exitoso. Ahora puedes ver la lista de pasajeros en tu área.');
            const area = document.getElementById('areaTaxistas').value;
            mostrarPersonas(area, document.getElementById('listaMujeresHombres'));
        }
    });

    // Función para mostrar la lista de mujeres para los hombres
    function mostrarPersonas(area, listaElemento) {
        listaElemento.innerHTML = '';
        personasPorArea[area].forEach(persona => {
            const li = document.createElement('li');
            li.textContent = `${persona.nombre}, Teléfono: ${persona.telefono}, Email: ${persona.email}, Ciudad: ${persona.ciudad}`;
            listaElemento.appendChild(li);
        });
    }
    </script>
  