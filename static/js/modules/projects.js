function initializeProjects() {
  const projects = document.querySelectorAll('.project');
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
          initializeTabs();
        } catch (error) {
          console.error('Error loading project content:', error);
        }
      }
    });
  });

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
}
