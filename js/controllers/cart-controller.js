// Cart Controller
const CartController = {
  cart: [],

  init() {
    this.cart = JSON.parse(localStorage.getItem("noirCart")) || []
    this.updateCartUI()
    this.bindEvents()
  },

  bindEvents() {
    const cartBtn = document.getElementById("cartBtn")
    const cartClose = document.getElementById("cartClose")
    const cartOverlay = document.getElementById("cartOverlay")

    if (cartBtn) {
      cartBtn.addEventListener("click", () => this.openCart())
    }

    if (cartClose) {
      cartClose.addEventListener("click", () => this.closeCart())
    }

    if (cartOverlay) {
      cartOverlay.addEventListener("click", () => this.closeCart())
    }
  },

  openCart() {
    document.getElementById("cartDrawer")?.classList.add("open")
    document.getElementById("cartOverlay")?.classList.add("open")
    document.body.style.overflow = "hidden"
  },

  closeCart() {
    document.getElementById("cartDrawer")?.classList.remove("open")
    document.getElementById("cartOverlay")?.classList.remove("open")
    document.body.style.overflow = ""
  },

  addItem(product, size = "M", qty = 1) {
    const existingIndex = this.cart.findIndex((item) => item.id === product.id && item.size === size)

    if (existingIndex > -1) {
      this.cart[existingIndex].qty += qty
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.salePrice || product.price,
        image: product.image,
        size: size,
        qty: qty,
      })
    }

    this.saveCart()
    this.updateCartUI()
    this.openCart()
  },

  removeItem(index) {
    this.cart.splice(index, 1)
    this.saveCart()
    this.updateCartUI()
  },

  updateQty(index, delta) {
    this.cart[index].qty += delta
    if (this.cart[index].qty < 1) {
      this.removeItem(index)
    } else {
      this.saveCart()
      this.updateCartUI()
    }
  },

  saveCart() {
    localStorage.setItem("noirCart", JSON.stringify(this.cart))
  },

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  },

  getItemCount() {
    return this.cart.reduce((sum, item) => sum + item.qty, 0)
  },

  clearCart() {
    this.cart = []
    this.saveCart()
    this.updateCartUI()
  },

  updateCartUI() {
    // Update cart count
    const cartCount = document.getElementById("cartCount")
    if (cartCount) {
      const count = this.getItemCount()
      cartCount.textContent = count
      cartCount.classList.toggle("show", count > 0)
    }

    // Update cart items
    const cartItems = document.getElementById("cartItems")
    if (cartItems) {
      if (this.cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>'
      } else {
        cartItems.innerHTML = this.cart
          .map(
            (item, index) => `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-variant">Size: ${item.size}</div>
              <div class="cart-item-bottom">
                <span class="cart-item-price">$${item.price}</span>
                <div class="cart-item-qty">
                  <button class="qty-btn" onclick="CartController.updateQty(${index}, -1)">-</button>
                  <span>${item.qty}</span>
                  <button class="qty-btn" onclick="CartController.updateQty(${index}, 1)">+</button>
                </div>
              </div>
              <button class="cart-item-remove" onclick="CartController.removeItem(${index})">Remove</button>
            </div>
          </div>
        `,
          )
          .join("")
      }
    }

    // Update cart total
    const cartTotal = document.getElementById("cartTotal")
    if (cartTotal) {
      cartTotal.textContent = `$${this.getTotal()}`
    }

    // Update cart footer visibility
    const cartFooter = document.getElementById("cartFooter")
    if (cartFooter) {
      cartFooter.style.display = this.cart.length > 0 ? "block" : "none"
    }
  },
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  CartController.init()
})
