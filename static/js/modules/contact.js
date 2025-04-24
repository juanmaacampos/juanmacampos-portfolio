function initializeContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    emailjs.send('service_ypl3z4r', 'template_m41npsk', formData)
      .then(() => {
        formMessage.style.display = 'block';
        formMessage.style.color = '#1E90FF';
        formMessage.textContent = translations[document.documentElement.lang]['form_success'] || 'Message sent successfully!';
        contactForm.reset();
        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 5000);
      })
      .catch((error) => {
        formMessage.style.display = 'block';
        formMessage.style.color = '#FF4444';
        formMessage.textContent = translations[document.documentElement.lang]['form_error'] || 'Error sending message. Please try again later.';
        console.error('EmailJS error:', error);
      });
  });
}
