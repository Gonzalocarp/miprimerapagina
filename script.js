function showAlert() {alert (`Hola, esta es una alerta desde JavaScript`);
}

const  form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }

  document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function() {
         document.querySelector(".nav-links").
                    classList.toggle("nav-links-responsive")})



// Obtener los elementos <li>
var items = document.getElementsByTagName("li");

// Recorrer los elementos y agregar el evento 'mouseover'
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", function() {
    this.classList.add("animated");
  });

  // Agregar evento 'mouseout' para eliminar la animación cuando el mouse sale del elemento
  items[i].addEventListener("mouseout", function() {
    this.classList.remove("animated");
  });
}