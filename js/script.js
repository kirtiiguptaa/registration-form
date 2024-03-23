const form = document.getElementsByClassName('form');

const username = form.elements.username.value;
const email = form.elements.email.value;

if (!username || !email) {
    alert('All fields are required');
    return;
};