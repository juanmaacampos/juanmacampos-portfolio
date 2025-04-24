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
