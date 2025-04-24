let translations = {};

function initializeTranslations() {
  fetch('static/other_statics/translations.json')
    .then(response => response.json())
    .then(data => {
      translations = data;
      const savedLanguage = localStorage.getItem('language') || 'en';
      document.getElementById('language-select').value = savedLanguage;
      updateLanguage(savedLanguage);
    })
    .catch(error => console.error('Error loading translations:', error));

  const languageSelect = document.getElementById('language-select');
  languageSelect.addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;
    localStorage.setItem('language', selectedLanguage);
    updateLanguage(selectedLanguage);
  });
}

function updateLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      if (key === 'footer') {
        const year = new Date().getFullYear();
        element.innerHTML = translations[lang][key].replace('{year}', year);
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  document.querySelector('nav').setAttribute('aria-label', 
    translations[lang]['nav_contact'] === 'Contacto' ? 'Menú principal' : 'Main Menu');
  document.getElementById('language-select').setAttribute('aria-label', 
    translations[lang]['nav_contact'] === 'Contacto' ? 'Seleccionar idioma' : 'Select language');
}
