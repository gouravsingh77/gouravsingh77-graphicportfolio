// Example: Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Modal functionality for portfolio items
const portfolioLinks = document.querySelectorAll('.portfolio-link');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

portfolioLinks.forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const modalContent = `
          <div class="modal-content">
              <span class="close">&times;</span>
              <img src="${this.querySelector('img').src}" alt="Portfolio Item">
              <h3>${this.nextElementSibling.innerText}</h3>
              <p>${this.nextElementSibling.nextElementSibling.innerText}</p>
          </div>
      `;
      modal.innerHTML = modalContent;
      modal.style.display = 'block';
  });
});

// Close modal on click
modal.addEventListener('click', function (e) {
  if (e.target.classList.contains('close') || e.target === modal