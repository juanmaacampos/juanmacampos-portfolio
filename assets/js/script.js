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
});