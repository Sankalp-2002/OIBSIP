function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Add your authentication logic here
    // For simplicity, let's assume username: "user" and password: "password"
    if (username === 'user' && password === 'password') {
        document.getElementById('error-message').innerText = 'Login successful!';
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
}
