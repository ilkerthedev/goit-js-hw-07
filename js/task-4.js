const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.elements.email;
    const password = form.elements.password;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '' || passwordValue === '') {
        return alert('All form fields must be filled in');
    }
    
    const formData = {
        email: emailValue,
        password: passwordValue,
    };

    form.reset();
    console.log(formData);
});