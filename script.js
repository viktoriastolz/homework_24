"use strict";

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  const nameError = document.getElementById('nameError');
  const messageError = document.getElementById('messageError');
  const phoneError = document.getElementById('phoneError');
  const emailError = document.getElementById('emailError');

  let isValid = true;

  nameError.textContent = '';
  messageError.textContent = '';
  phoneError.textContent = '';
  emailError.textContent = '';

  if (!name) {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  if (message.length < 5) {
    messageError.textContent = 'Message must be at least 5 characters long.';
    isValid = false;
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phone)) {
    phoneError.textContent = 'Phone number must start with +380 and have 9 digits.';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (isValid) {
    console.log({
      name,
      message,
      phone,
      email,
    });
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
  }
});
