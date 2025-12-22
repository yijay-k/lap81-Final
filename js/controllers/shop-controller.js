// Shop Controller
// Use the global `products` array (from js/data.js) and the shared `createProductCard` in main.js.
// Avoid redeclaring products or createProductCard here so the Shop uses the single source of truth.

// If you'd like a custom short card for the shop, we can use the global one. Otherwise we could
// define a specialized `renderShopCard(product)` function here — for now the controller will
// assume `createProductCard(product)` is available globally.


const ShopController = {
  currentCategory: "all",
  currentSort: "newest",

  init() {
    this.bindEvents()
    this.renderProducts()
  },

  bindEvents() {
    // Category filters
    const filterTabs = document.querySelectorAll(".filter-tab")
    filterTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        filterTabs.forEach((t) => t.classList.remove("active"))
        tab.classList.add("active")
        this.currentCategory = tab.dataset.category
        this.renderProducts()
      })
    })

    // Sort select
    const sortSelect = document.getElementById("sortSelect")
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.currentSort = e.target.value
        this.renderProducts()
      })
    }

    // Check URL params
    const params = new URLSearchParams(window.location.search)
    const category = params.get("category")
    if (category) {
      this.currentCategory = category
      filterTabs.forEach((tab) => {
        tab.classList.toggle("active", tab.dataset.category === category)
      })
    }
  },

  getFilteredProducts() {
    let filtered = [...products]

    // Filter by category
    if (this.currentCategory !== "all") {
      const categoryMap = {
        hoodies: "Hoodies",
        tshirts: "T-Shirts",
        pants: "Pants",
        outerwear: "Outerwear",
        accessories: "Accessories",
      }
      filtered = filtered.filter((p) => p.category === categoryMap[this.currentCategory])
    }

    // Sort
    switch (this.currentSort) {
      case "price-low":
        filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price))
        break
      case "price-high":
        filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price))
        break
      default:
        // Newest - keep original order
        break
    }

    return filtered
  },

  renderProducts() {
    const grid = document.getElementById("productGrid")
    if (!grid) return

    const filtered = this.getFilteredProducts()
    grid.innerHTML = filtered.map((product) => createProductCard(product)).join("")
  },
}

document.addEventListener("DOMContentLoaded", () => {
  ShopController.init()
})
