document.querySelector('.php-email-form').addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent form from refreshing the page
  const form = e.target;
  const formData = new FormData(form);

  document.querySelector('.loading').style.display = 'block';
  document.querySelector('.error-message').style.display = 'none';
  document.querySelector('.sent-message').style.display = 'none';

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData
    });
    const text = await response.text();

    document.querySelector('.loading').style.display = 'none';

    if (text.trim() === 'success') {
      document.querySelector('.sent-message').style.display = 'block';
      form.reset(); // Clear the form
    } else {
      document.querySelector('.error-message').style.display = 'block';
      document.querySelector('.error-message').textContent = text;
    }
  } catch (error) {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.error-message').style.display = 'block';
    document.querySelector('.error-message').textContent = 'An error occurred. Please try again.';
  }
});

