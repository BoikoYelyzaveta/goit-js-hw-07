
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }
  console.log({ email: emailValue, password: passwordValue });
  loginForm.reset();
});
