const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const emailMessage = document.getElementById('emailMessage');

emailForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (!email) {
        emailInput.classList.add('border-2', 'border-red-500');
        emailMessage.innerText = 'Enter your email please!';
        emailMessage.style.display = 'block';
        emailMessage.style.marginTop = '5px';
        emailMessage.style.marginBottom = '5px';
        emailMessage.style.fontSize = '0.8rem';
        emailMessage.style.color = 'red';
        return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
        emailInput.classList.add('border-2', 'border-red-500');
        emailMessage.innerText = 'Check your email please!';
        emailMessage.style.display = 'block';
        emailMessage.style.marginTop = '5px';
        emailMessage.style.marginBottom = '5px';
        emailMessage.style.fontSize = '0.8rem';
        emailMessage.style.color = 'red';
        return;
    }

    emailForm.submit();
});

emailInput.addEventListener('input', function () {
    const email = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValidEmail) {
        emailInput.classList.remove('border-2', 'border-red-500');
    }
    emailMessage.innerText = '';
    emailMessage.style.display = 'none';
});