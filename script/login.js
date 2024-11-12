document.getElementById('email').addEventListener('input', function() {
    document.getElementById('emailError').style.display = 'none';
});

document.getElementById('password').addEventListener('input', function() {
    const passwordError = document.getElementById('passwordError');
    if (passwordError) {
        passwordError.style.display = 'none';
    }
});

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Check if email is empty
    if (!email) {
        emailError.style.display = 'block';
        return;
    } else {
        emailError.style.display = 'none';
    }

    // Check if password is empty
    if (!password) {
        passwordError.style.display = 'block';
        return;
    } else {
        passwordError.style.display = 'none';
    }

    console.log('Email:', email); // Debugging step
    console.log('Password:', password); // Debugging step

    if (email && password) {
        authenticate(email, password);
    }
}

//Authenticate function
function authenticate(email, password) {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful!');
            window.location.href = 'http://127.0.0.1:3000/index.html';
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');}
    );
}