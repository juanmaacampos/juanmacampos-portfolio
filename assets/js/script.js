document.addEventListener('DOMContentLoaded', () => {
  // Load translations
  let translations = {};
  fetch('assets/translations.json')
    .then(response => response.json())
    .then(data => {
      translations = data;
      // Set initial language from localStorage or default to 'en'
      const savedLanguage = localStorage.getItem('language') || 'en';
      document.getElementById('language-select').value = savedLanguage;
      updateLanguage(savedLanguage);
    })
    .catch(error => console.error('Error loading translations:', error));

  // Language switcher
  const languageSelect = document.getElementById('language-select');
  languageSelect.addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;
    localStorage.setItem('language', selectedLanguage);
    updateLanguage(selectedLanguage);
  });

  // Function to update language
  function updateLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all elements with data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        // Handle footer with dynamic year
        if (key === 'footer') {
          const year = new Date().getFullYear();
          element.innerHTML = translations[lang][key].replace('{year}', year);
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      if (translations[lang] && translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });

    // Update ARIA labels if needed
    document.querySelector('nav').setAttribute('aria-label', translations[lang]['nav_contact'] === 'Contacto' ? 'Menú principal' : 'Main Menu');
    document.getElementById('language-select').setAttribute('aria-label', translations[lang]['nav_contact'] === 'Contacto' ? 'Seleccionar idioma' : 'Select language');
  }

  // Menu |||
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
    const isActive = navUl.classList.contains('active');
    menuToggle.innerHTML = `<i class="fas ${isActive ? 'fa-times' : 'fa-bars'}"></i>`;
  });

  // Animación de divisores al hacer scroll
  const dividers = document.querySelectorAll('.divider');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  dividers.forEach((divider) => observer.observe(divider));

  // Desplazamiento suave para enlaces de ancla
  document.querySelectorAll('nav ul li a').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Ajuste para la barra fija
          behavior: 'smooth',
        });
        // Cerrar el menú en móviles
        navUl.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  // EmailJS Form Submission
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    // Send email using EmailJS
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

  // Modal functionality
  const projects = document.querySelectorAll('.project');
  const modals = document.querySelectorAll('.modal');
  const closeBtns = document.querySelectorAll('.modal-close');

  // Open modal when clicking on project
  projects.forEach((project, index) => {
    project.addEventListener('click', (e) => {
      if (!e.target.matches('a[href^="https"]')) {
        e.preventDefault();
        modals[index].style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal when clicking on close button or outside
  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modals.forEach((modal) => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      });
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Info tabs functionality
  const infoButtons = document.querySelectorAll('.info-btn');
  infoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      const parent = button.closest('.info-section');
      
      // Remove active class from all buttons in this section
      parent.querySelectorAll('.info-btn').forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      
      // Hide all info boxes in this section
      parent.querySelectorAll('.info-display-box').forEach(box => {
        box.style.display = 'none';
        box.classList.add('fade');
      });
      
      // Show selected info box
      const selectedBox = parent.querySelector(`#${tabId}`);
      selectedBox.style.display = 'block';
      setTimeout(() => selectedBox.classList.remove('fade'), 10);
    });
  });

  // Project modal functionality
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content-container');
  const closeBtn = document.querySelector('.modal-close');

  projects.forEach(project => {
    project.addEventListener('click', async (e) => {
      if (!e.target.matches('a[href^="https"]')) {
        e.preventDefault();
        const projectId = project.getAttribute('data-project');
        try {
          const response = await fetch(`projects/${projectId}.html`);
          const content = await response.text();
          modalContent.innerHTML = content;
          modal.style.display = 'flex';
          document.body.style.overflow = 'hidden';
          
          // Initialize tab functionality for loaded content
          initializeTabs();
        } catch (error) {
          console.error('Error loading project content:', error);
        }
      }
    });
  });

  function initializeTabs() {
    const infoButtons = document.querySelectorAll('.info-btn');
    const displayBoxes = document.querySelectorAll('.info-display-box');
    
    infoButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        infoButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        displayBoxes.forEach(box => {
          box.style.display = 'none';
          box.classList.add('fade');
        });
        
        const selectedBox = document.getElementById(tabId);
        selectedBox.style.display = 'block';
        setTimeout(() => selectedBox.classList.remove('fade'), 10);
      });
    });
  }

  // Close modal functionality
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});