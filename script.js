document.addEventListener('DOMContentLoaded', () => {
  // Safe listener for CTA button (if it exists on other pages)
  const ctaBtn = document.getElementById('cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      const contactSection = document.getElementById('services');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Toast references
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  // Handle Order Now buttons
  const orderButtons = document.querySelectorAll('.btn-order');
  orderButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent card expansion toggle when clicking order button
      const itemName = e.target.getAttribute('data-item');

      // Update toast message and show it
      if (toast && toastMessage) {
        toastMessage.textContent = `${itemName} chosen successfully!`;
        toast.classList.add('show');

        // Auto-hide toast after 2.5 seconds
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2500);
      }
    });
  });

  // Handle Card Expansion
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent immediate closing from document listener
      const isCurrentlyExpanded = card.classList.contains('expanded');

      // Collapse all cards first to ensure only one is expanded
      document.querySelectorAll('.card.expanded').forEach(c => {
        c.classList.remove('expanded');
      });

      // Toggle current card
      if (!isCurrentlyExpanded) {
        card.classList.add('expanded');
      }
    });
  });

  // Collapse active card when clicking anywhere outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.card.expanded').forEach(c => {
      c.classList.remove('expanded');
    });
  });
});