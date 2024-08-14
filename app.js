document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const passwordForm = document.getElementById('password-form');
    const passwordManagerSection = document.getElementById('password-manager');
    const authSection = document.getElementById('auth-section');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle login logic
        authSection.style.display = 'none';
        passwordManagerSection.style.display = 'block';
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle registration logic
        // For simplicity, let's assume registration is successful and show password manager
        authSection.style.display = 'none';
        passwordManagerSection.style.display = 'block';
    });

    passwordForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle password save logic
        // For now, just clear the form
        passwordForm.reset();
    });
});