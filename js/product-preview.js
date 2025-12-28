document.addEventListener('DOMContentLoaded', () => {
  const modal = document.createElement('div');
  modal.className = 'product-modal';
  modal.innerHTML = `
    <div class="modal-backdrop" tabindex="-1"></div>
    <div class="modal-content" role="dialog" aria-modal="true" aria-label="Product preview">
      <img src="" alt="" class="modal-image">
      <div class="modal-actions">
        <div>
          <button class="btn btn-primary btn-details">View Details</button>
        </div>
        <div>
          <button class="btn-close" aria-label="Close">Close</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalImage = modal.querySelector('.modal-image');
  const btnDetails = modal.querySelector('.btn-details');
  const btnClose = modal.querySelector('.btn-close');
  const backdrop = modal.querySelector('.modal-backdrop');

  let currentHref = null;

  function openModal(src, alt, href) {
    modalImage.src = src;
    modalImage.alt = alt || 'Product image';
    currentHref = href || null;
    if (currentHref) btnDetails.style.display = '';
    else btnDetails.style.display = 'none';
    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';
    // Focus for accessibility
    btnClose.focus();
  }

  function closeModal() {
    modal.classList.remove('visible');
    document.body.style.overflow = '';
    modalImage.src = '';
    currentHref = null;
  }

  btnClose.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  btnDetails.addEventListener('click', () => {
    if (currentHref) location.href = currentHref;
  });

  // Delegate clicks on product cards for mobile sizes
  document.addEventListener('click', (e) => {
    // If quick add button, let that handler run
    if (e.target.closest('.product-quick-add')) return;

    const card = e.target.closest('.product-card');
    if (!card) return;

    // Only intercept on mobile widths
    if (window.innerWidth > 768) return;

    e.preventDefault();

    const imgEl = card.querySelector('.product-img');
    const href = card.getAttribute('href');
    if (imgEl) openModal(imgEl.src, imgEl.alt, href);
  });
});