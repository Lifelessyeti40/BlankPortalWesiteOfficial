// Select all FAQ items
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      // Close any open FAQ item
      const openItem = document.querySelector('.faq-item.active');
      if (openItem && openItem !== item) {
        openItem.classList.remove('active');
      }
  
      // Toggle the clicked FAQ item
      item.classList.toggle('active');
    });
  });
  