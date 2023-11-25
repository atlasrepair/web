document.getElementById('home').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('about').style.display = 'block';
    document.getElementById('serviceBlock').style.display = 'block';
    document.getElementById('reservationForm').style.display = 'none';
});

document.getElementById('services').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('serviceBlock').style.display = 'none';
    document.getElementById('reservationForm').style.display = 'block';
});

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var body = `Nombre: ${firstName}\nApellido: ${lastName}\nEmail: ${email}\nMensaje: ${message}`;
    window.open(`mailto:durandvegasluisdavid29@gmail.com?subject=Reservación&body=${encodeURIComponent(body)}`);
});

setTimeout(function() {
    document.getElementById('logoContainer').style.display = 'none';
}, 2000);
