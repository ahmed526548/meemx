/* MeeMX App - Cart, Products, UI Logic + Admin Support */

// ========== DEFAULT PRODUCTS ==========
const defaultProducts = [
  {
    id: 1,
    name: "شاحن سريع 65 واط GaN",
    category: "chargers",
    categoryAr: "شواحن",
    price: 249,
    oldPrice: 349,
    rating: 4.8,
    reviews: 312,
    emoji: "⚡",
    badge: "الأكثر مبيعاً",
    desc: "شاحن فائق السرعة بتقنية GaN يدعم الشحن المتعدد لأجهزة متعددة في نفس الوقت."
  },
  {
    id: 2,
    name: "سماعات لاسلكية Pro Max",
    category: "headphones",
    categoryAr: "سماعات",
    price: 599,
    oldPrice: 799,
    rating: 4.9,
    reviews: 521,
    emoji: "🎧",
    badge: "جديد",
    desc: "إلغاء ضوضاء نشط، بطارية 40 ساعة، صوت استريو عالي الجودة."
  },
  {
    id: 3,
    name: "كابل USB-C فائق السرعة",
    category: "cables",
    categoryAr: "كابلات",
    price: 79,
    oldPrice: null,
    rating: 4.7,
    reviews: 890,
    emoji: "🔌",
    badge: null,
    desc: "كابل مضفر عالي الجودة يدعم 100 واط وشحن سريع ونقل بيانات 10 جيجا."
  },
  {
    id: 4,
    name: "حافظة سيليكون فاخرة",
    category: "cases",
    categoryAr: "حافظات",
    price: 89,
    oldPrice: 129,
    rating: 4.6,
    reviews: 445,
    emoji: "📱",
    badge: "خصم 30%",
    desc: "حافظة ناعمة مضادة للصدمات مع حماية كاملة للكاميرا والحواف."
  },
  {
    id: 5,
    name: "باور بانك 20000 مللي أمبير",
    category: "chargers",
    categoryAr: "شواحن",
    price: 299,
    oldPrice: 399,
    rating: 4.8,
    reviews: 678,
    emoji: "🔋",
    badge: "عرض",
    desc: "بطارية خارجية سريعة مع شاشة رقمية ومنفذين USB-C و USB-A."
  },
  {
    id: 6,
    name: "سماعات أذن رياضية",
    category: "headphones",
    categoryAr: "سماعات",
    price: 349,
    oldPrice: null,
    rating: 4.5,
    reviews: 234,
    emoji: "🎵",
    badge: null,
    desc: "مقاومة للعرق والماء IPX7، تثبيت مثالي أثناء الرياضة."
  },
  {
    id: 7,
    name: "حامل سيارة مغناطيسي",
    category: "accessories",
    categoryAr: "إكسسوارات",
    price: 119,
    oldPrice: 159,
    rating: 4.7,
    reviews: 356,
    emoji: "🚗",
    badge: null,
    desc: "حامل مغناطيسي قوي للتثبيت على التهوية أو اللوحة."
  },
  {
    id: 8,
    name: "واقي شاشة زجاجي 9H",
    category: "cases",
    categoryAr: "حافظات",
    price: 49,
    oldPrice: 79,
    rating: 4.4,
    reviews: 1203,
    emoji: "🛡️",
    badge: "خصم",
    desc: "زجاج مقوى صلابة 9H مع طبقة مضادة للبصمات وسهولة التركيب."
  },
  {
    id: 9,
    name: "شاحن لاسلكي 15 واط",
    category: "chargers",
    categoryAr: "شواحن",
    price: 159,
    oldPrice: 199,
    rating: 4.6,
    reviews: 289,
    emoji: "📡",
    badge: null,
    desc: "شحن لاسلكي سريع متوافق مع جميع الأجهزة الداعمة لـ MagSafe و Qi."
  },
  {
    id: 10,
    name: "سماعات جيمنج RGB",
    category: "headphones",
    categoryAr: "سماعات",
    price: 449,
    oldPrice: 599,
    rating: 4.7,
    reviews: 167,
    emoji: "🎮",
    badge: "رائج",
    desc: "ميكروفون عازل للضوضاء، إضاءة RGB قابلة للتخصيص، صوت محيطي."
  },
  {
    id: 11,
    name: "كابل لايتنينج أصلي",
    category: "cables",
    categoryAr: "كابلات",
    price: 99,
    oldPrice: null,
    rating: 4.8,
    reviews: 712,
    emoji: "⚡",
    badge: null,
    desc: "كابل MFi معتمد من أبل، شحن سريع ونقل بيانات موثوق."
  },
  {
    id: 12,
    name: "حلقة مغناطيسية + حامل",
    category: "accessories",
    categoryAr: "إكسسوارات",
    price: 69,
    oldPrice: 99,
    rating: 4.5,
    reviews: 198,
    emoji: "💍",
    badge: "جديد",
    desc: "حلقة مغناطيسية قابلة للطي تستخدم كحامل وحلقة إصبع."
  }
];

// Category mapping
const categoryMap = {
  chargers: "شواحن",
  headphones: "سماعات",
  cables: "كابلات",
  cases: "حافظات",
  accessories: "إكسسوارات"
};

// ========== PRODUCTS STATE (localStorage) ==========
function getProducts() {
  const stored = localStorage.getItem('meemx_products');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      return [...defaultProducts];
    }
  }
  // First time: seed defaults
  localStorage.setItem('meemx_products', JSON.stringify(defaultProducts));
  return [...defaultProducts];
}

function saveProducts(products) {
  localStorage.setItem('meemx_products', JSON.stringify(products));
}

function getNextId() {
  const products = getProducts();
  if (products.length === 0) return 1;
  return Math.max(...products.map(p => p.id)) + 1;
}

// Global products reference (updated dynamically)
let products = getProducts();

function refreshProducts() {
  products = getProducts();
}

// ========== CART STATE ==========
let cart = JSON.parse(localStorage.getItem('meemx_cart')) || [];

function saveCart() {
  localStorage.setItem('meemx_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, qty = 1) {
  refreshProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  saveCart();
  showToast(`تم إضافة "${product.name}" إلى السلة`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// ========== UI HELPERS ==========
function formatPrice(price) {
  return price.toLocaleString('ar-EG') + ' ج.م';
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function updateCartUI() {
  const countEls = document.querySelectorAll('.cart-count');
  countEls.forEach(el => {
    const count = getCartCount();
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });

  const container = document.querySelector('.cart-items');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="icon">🛒</div>
        <p>السلة فارغة حالياً</p>
        <p style="font-size:0.9rem;margin-top:0.5rem">أضف منتجات رائعة من المتجر</p>
      </div>`;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">${item.emoji}</div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="price">${formatPrice(item.price)}</div>
          <div class="cart-item-actions">
            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
            <button class="remove-item" onclick="removeFromCart(${item.id})">حذف</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  const totalEl = document.querySelector('.cart-total-value');
  if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
}

// ========== RENDER PRODUCTS ==========
function renderProducts(containerSelector, filterCat = 'all', limit = null, searchTerm = '') {
  refreshProducts();
  const container = document.querySelector(containerSelector);
  if (!container) return;

  let filtered = filterCat === 'all' 
    ? [...products] 
    : products.filter(p => p.category === filterCat);

  if (searchTerm) {
    const term = searchTerm.trim().toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(term) || 
      (p.categoryAr && p.categoryAr.includes(term)) ||
      (p.desc && p.desc.toLowerCase().includes(term))
    );
  }

  if (limit) filtered = filtered.slice(0, limit);

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted)">
      <div style="font-size:3rem;margin-bottom:1rem">🔍</div>
      <p>لا توجد منتجات مطابقة</p>
    </div>`;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img" style="background: linear-gradient(145deg, #1e293b 0%, #0f172a 50%, #1a2234 100%);">
        <span style="font-size:4.5rem;filter:drop-shadow(0 8px 16px rgba(0,0,0,0.4))">${p.emoji || '📦'}</span>
        ${p.badge ? `<span class="product-badge ${p.badge.includes('خصم') || p.badge.includes('عرض') ? 'sale' : ''}">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-cat">${p.categoryAr || categoryMap[p.category] || p.category}</div>
        <h3>${p.name}</h3>
        <div class="product-rating">
          ★★★★${(p.rating || 4.5) >= 4.8 ? '★' : '☆'} 
          <span>(${p.reviews || 0})</span>
        </div>
        <div class="product-bottom">
          <div class="product-price">
            ${p.oldPrice ? `<span class="old">${formatPrice(p.oldPrice)}</span>` : ''}
            ${formatPrice(p.price)}
          </div>
          <button class="add-to-cart" onclick="addToCart(${p.id})" title="أضف للسلة">
            +
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ========== CART SIDEBAR ==========
function openCart() {
  document.querySelector('.cart-overlay')?.classList.add('open');
  document.querySelector('.cart-sidebar')?.classList.add('open');
  updateCartUI();
}

function closeCart() {
  document.querySelector('.cart-overlay')?.classList.remove('open');
  document.querySelector('.cart-sidebar')?.classList.remove('open');
}

// ========== MOBILE MENU ==========
function openMobileNav() {
  document.querySelector('.mobile-nav')?.classList.add('open');
  document.querySelector('.mobile-overlay')?.classList.add('open');
}

function closeMobileNav() {
  document.querySelector('.mobile-nav')?.classList.remove('open');
  document.querySelector('.mobile-overlay')?.classList.remove('open');
}

// ========== FILTERS ==========
function setupFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      const searchInput = document.querySelector('.search-box input');
      const term = searchInput ? searchInput.value : '';
      renderProducts('#shop-products', cat, null, term);
    });
  });
}

// ========== SEARCH ==========
function setupSearch() {
  const searchInputs = document.querySelectorAll('.search-box input');
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const term = e.target.value;
      const shopContainer = document.querySelector('#shop-products');
      if (shopContainer) {
        const activeFilter = document.querySelector('.filter-btn.active');
        const cat = activeFilter ? activeFilter.dataset.cat : 'all';
        renderProducts('#shop-products', cat, null, term);
      }
    });
  });
}

// ========== CHECKOUT ==========
function renderCheckoutSummary() {
  const container = document.querySelector('.summary-items');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted);text-align:center">لا توجد منتجات</p>';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="summary-item">
      <span>${item.name} × ${item.qty}</span>
      <span>${formatPrice(item.price * item.qty)}</span>
    </div>
  `).join('');

  const subtotal = getCartTotal();
  const shipping = subtotal > 500 ? 0 : 40;
  const total = subtotal + shipping;

  document.querySelector('.summary-subtotal').textContent = formatPrice(subtotal);
  document.querySelector('.summary-shipping').textContent = shipping === 0 ? 'مجاني' : formatPrice(shipping);
  document.querySelector('.summary-total').textContent = formatPrice(total);
}

function handleCheckout(e) {
  e.preventDefault();
  if (cart.length === 0) {
    showToast('السلة فارغة!');
    return;
  }
  cart = [];
  saveCart();
  window.location.href = 'success.html';
}

// ========== ADMIN FUNCTIONS ==========
function adminAddProduct(productData) {
  const products = getProducts();
  const newProduct = {
    id: getNextId(),
    name: productData.name,
    category: productData.category,
    categoryAr: categoryMap[productData.category] || productData.category,
    price: Number(productData.price),
    oldPrice: productData.oldPrice ? Number(productData.oldPrice) : null,
    rating: 4.5,
    reviews: 0,
    emoji: productData.emoji || '📦',
    badge: productData.badge || null,
    desc: productData.desc || ''
  };
  products.push(newProduct);
  saveProducts(products);
  refreshProducts();
  return newProduct;
}

function adminDeleteProduct(id) {
  let products = getProducts();
  products = products.filter(p => p.id !== id);
  saveProducts(products);
  refreshProducts();
  // Also remove from cart if exists
  cart = cart.filter(item => item.id !== id);
  saveCart();
}

function adminResetProducts() {
  localStorage.setItem('meemx_products', JSON.stringify(defaultProducts));
  refreshProducts();
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  refreshProducts();
  updateCartUI();

  if (document.querySelector('#featured-products')) {
    renderProducts('#featured-products', 'all', 8);
  }

  if (document.querySelector('#shop-products')) {
    renderProducts('#shop-products', 'all');
    setupFilters();
  }

  setupSearch();

  if (document.querySelector('.checkout-form')) {
    renderCheckoutSummary();
    document.querySelector('.checkout-form')?.addEventListener('submit', handleCheckout);
  }

  document.querySelector('.cart-overlay')?.addEventListener('click', closeCart);
  document.querySelector('.mobile-overlay')?.addEventListener('click', closeMobileNav);
});
