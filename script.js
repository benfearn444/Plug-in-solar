document.getElementById('signup-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email');
  const consent = document.getElementById('consent');
  const message = document.querySelector('.form-message');
  if (!consent.checked) {
    message.textContent = 'Please confirm that you would like launch updates.';
    return;
  }
  message.textContent = `Thanks — ${email.value} is on the launch list.`;
  email.value = '';
  consent.checked = false;
});
