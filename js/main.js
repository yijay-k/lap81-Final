// Main JavaScript
// Globals: `products` (from `js/data.js`) and `CartController` (from `js/controllers/cart-controller.js`)
// are provided by other scripts and should not be re-declared here.

document.addEventListener("DOMContentLoaded", () => {
  // Render featured products on homepage
  const featuredGrid = document.getElementById("featuredProducts")
  if (featuredGrid && typeof products !== "undefined") {
    const featured = products.slice(0, 4)
    featuredGrid.innerHTML = featured.map((product) => createProductCard(product)).join("")
  }

  // Newsletter form
  const newsletterForm = document.getElementById("newsletterForm")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Thanks for subscribing!")
      newsletterForm.reset()
    })
  }

  // Scroll animations
  initScrollAnimations()

  // Set correct active nav link based on URL (keeps tabs consistent across pages)
  const setActiveNavLink = () => {
    const current = location.pathname.split('/').pop() || 'index.html'
    document.querySelectorAll('.nav-links a').forEach((a) => {
      const href = a.getAttribute('href').split('/').pop()
      if (href === current) {
        a.classList.add('active')
      } else {
        a.classList.remove('active')
      }
    })
  }

  setActiveNavLink()
})

// Create product card HTML
function createProductCard(product, basePath = "pages/") {
  const priceHTML = product.salePrice
    ? `<span class="product-price-original">$${product.price}</span><span class="product-price-sale">$${product.salePrice}</span>`
    : `<span class="product-price">$${product.price}</span>`

  const tagHTML = product.tag
    ? `<span class="product-tag ${product.tag === "Sale" ? "sale" : ""}">${product.tag}</span>`
    : ""

  return `
    <a href="${basePath}product.html?id=${product.id}" class="product-card">
      <div class="product-img-wrapper">
        ${tagHTML}
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="product-overlay"></div>
        <button class="product-quick-add" onclick="event.preventDefault(); quickAdd(${product.id})">Quick Add</button>
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-meta">
          <span class="product-category">${product.category}</span>
          ${priceHTML}
        </div>
      </div>
    </a>
  `
}

// Quick add to cart
function quickAdd(productId) {
  const product = products.find((p) => p.id === productId)
  if (product) {
    CartController.addItem(product, product.sizes[1] || product.sizes[0])
  }
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  document.querySelectorAll(".product-card, .feature-card, .team-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Add visible class styles
const style = document.createElement("style")
style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`
document.head.appendChild(style)
