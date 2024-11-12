document.getElementById('name').addEventListener('input', function() {
    document.getElementById('nameError').style.display = 'none';
});

document.getElementById('email').addEventListener('input', function() {
    document.getElementById('emailError').style.display = 'none';
});

document.getElementById('password').addEventListener('input', function() {
    document.getElementById('passwordError').style.display = 'none';
});

document.getElementById('repeat_password').addEventListener('input', function() {
    document.getElementById('repeatPasswordError').style.display = 'none';
});

function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeat_password').value;

    const missingError = document.getElementById('missingError');
   
    // Check if fields are empty
    if (!name || !email || !password || !repeatPassword) {
        missingError.style.display = 'block';
    }

    // Send registration data to server
    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            retrieveDatabase();
            alert('Registration successful!');
            window.location.href = 'http://127.0.0.1:3000/pages/login/login.html';
        } else {
            alert('Registration failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}

function retrieveDatabase() {
    fetch('http://localhost:3000/database.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}