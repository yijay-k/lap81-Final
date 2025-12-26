/**
 * CartDrawer Component
 * Handles the injection and behavior of the shopping cart drawer.
 */
class CartDrawer {
  constructor() {
    this.inject();
    this.closeBtn = document.getElementById('cartClose');
    this.overlay = document.getElementById('cartOverlay');
    this.drawer = document.getElementById('cartDrawer');
    this.itemsContainer = document.getElementById('cartItems');
    this.totalEl = document.getElementById('cartTotal');
    this.countEl = document.getElementById('cartCount');

    this.initEvents();
  }

  inject() {
    // Only inject if not already present
    if (document.getElementById('cartDrawer')) return;

    const html = `
      <!-- Cart Drawer -->
      <div class="cart-overlay" id="cartOverlay"></div>
      <div class="cart-drawer" id="cartDrawer">
        <div class="cart-header">
          <h3 class="cart-title">Your Cart</h3>
          <button class="cart-close" id="cartClose">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="cart-items" id="cartItems">
          <!-- Items will be injected by CartController -->
        </div>
        <div class="cart-footer" id="cartFooter">
          <div class="cart-total">
            <span>Total</span>
            <span id="cartTotal">$0</span>
          </div>
          <a href="/pages/checkout.html" class="btn btn-primary btn-full checkout-link">Checkout</a>
        </div>
      </div>
    `;

    // Append to body
    document.body.insertAdjacentHTML('beforeend', html);
  }

  initEvents() {
    // Close events
    const close = () => {
      this.overlay.classList.remove('open');
      this.drawer.classList.remove('open');
    };

    if (this.closeBtn) this.closeBtn.addEventListener('click', close);
    if (this.overlay) this.overlay.addEventListener('click', close);

    // Open event is handled by CartController toggling the class
  }

  static init() {
    return new CartDrawer();
  }
}

// Auto-initialize if not using a module system
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => CartDrawer.init());
} else {
  CartDrawer.init();
}
