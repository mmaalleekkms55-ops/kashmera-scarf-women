function copyHomeCoupon(button) {
  const code = 'KASH10';
  const copied = () => {
    button.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> تم النسخ';
    window.setTimeout(() => {
      button.innerHTML = '<i class="fas fa-copy" aria-hidden="true"></i> نسخ الكود';
    }, 1800);
  };
  const fallbackCopy = () => {
    const input = document.createElement('textarea');
    input.value = code;
    input.setAttribute('readonly', '');
    input.style.position = 'absolute';
    input.style.left = '-9999px';
    document.body.appendChild(input);
    input.select();
    const didCopy = document.execCommand('copy');
    input.remove();
    if (didCopy) copied();
    else window.prompt('انسخي كود الخصم', code);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(code).then(copied).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}

// ── PRODUCTS DATABASE (قاعدة البيانات الكاملة لجميع المنتجات) ──────────────────────
const products = {
  'ISD-SATAN-1': {
    id: 'ISD-SATAN-1',
    type: 'satin',
    category: 'الاسدالات',
    name: 'إسدال ستان مشجر -تايجر',
    price: 650,
    badge: 'الأكثر طلباً 🔥',
    rating: 4.8,
    desc: 'إسدال من الستان النقي المشجر، خامة ملكية ناعمة وباردة على الجسم، يتميز بقصة واسعة ومريحة جداً بنقشة الرسمة الأولى المميزة.',
    imgs: [
      'images/WhatsApp Image 2026-07-15 at 10.48.35 PM.jpeg',
      'images/WhatsApp Image 2026-07-15 at 10.48.35 PM (1).jpeg'
    ],
    img: 'images/WhatsApp Image 2026-07-15 at 10.48.35 PM.jpeg',
    image: 'images/WhatsApp Image 2026-07-15 at 10.48.35 PM.jpeg'
  },
  'ISD-SATAN-2': {
    id: 'ISD-SATAN-2',
    type: 'satin',
    category: 'الاسدالات',
    name: 'إسدال ستان مشجر -light',
    price: 650,
    badge: 'وصل حديثاً ✨',
    rating: 4.8,
    desc: 'إسدال من الستان النقي المشجر، خامة ملكية ناعمة وباردة على الجسم، يتميز بقصة واسعة ومريحة جداً بنقشة الرسمة الثانية المميزة.',
    imgs: [
      'images/WhatsApp Image 2026-07-15 at 10.48.37 PM (2).jpeg',
      'images/WhatsApp Image 2026-07-15 at 10.48.37 PM (3).jpeg'
    ],
    img: 'images/WhatsApp Image 2026-07-15 at 10.48.37 PM (2).jpeg',
    image: 'images/WhatsApp Image 2026-07-15 at 10.48.37 PM (2).jpeg'
  },
  'ISD-SATAN-3': {
    id: 'ISD-SATAN-3',
    type: 'satin',
    category: 'الاسدالات',
    name: 'إسدال ستان مشجر - الرسمة 3',
    price: 650,
    badge: 'تميزي الآن 🌟',
    rating: 4.8,
    desc: 'إسدال من الستان النقي المشجر، خامة ملكية ناعمة وباردة على الجسم، يتميز بقصة واسعة ومريحة جداً بنقشة الرسمة الثالثة المميزة.',
    imgs: [
      'images/WhatsApp Image 2026-07-15 at 10.48.38 PM.jpeg',
      'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (3).jpeg'
    ],
    img: 'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (3).jpeg',
    image: 'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (3).jpeg'
  },
  'ISD-SATAN-4': {
    id: 'ISD-SATAN-4',
    type: 'satin',
    category: 'الاسدالات',
    name: 'إسدال ستان مشجر - الرسمة 4',
    price: 650,
    badge: 'تشكيلة جديدة 💎',
    rating: 4.8,
    desc: 'إسدال من الستان النقي المشجر، خامة ملكية ناعمة وباردة على الجسم، يتميز بقصة واسعة ومريحة جداً بنقشة الرسمة الرابعة المميزة.',
    imgs: [
      'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (1).jpeg',
      'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (2).jpeg'
    ],
    img: 'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (2).jpeg',
    image: 'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (2).jpeg'
  },
  'ISD-SATAN-6': {
    id: 'ISD-SATAN-6',
    type: 'satin',
    category: 'الاسدالات',
    name: 'إسدال ستان مشجر - الرسمة 6',
    price: 650,
    badge: 'أناقة يومية 🌹',
    rating: 4.8,
    desc: 'إسدال من الستان النقي المشجر، خامة ملكية ناعمة وباردة على الجسم، يتميز بقصة واسعة ومريحة جداً بنقشة الرسمة السادسة المميزة.',
    imgs: [
      'images/WhatsApp Image 2026-07-15 at 10.48.37 PM (4).jpeg',
      'images/WhatsApp Image 2026-07-15 at 10.48.37 PM (5).jpeg'
    ],
    img: 'images/WhatsApp Image 2026-07-15 at 10.48.37 PM (4).jpeg',
    image: 'images/WhatsApp Image 2026-07-15 at 10.48.37 PM (4).jpeg'
  },
  'ISD-SATAN-7': {
    id: 'ISD-SATAN-7',
    type: 'satin',
    category: 'الاسدالات',
    name: 'إسدال ستان مشجر - الرسمة 7',
    price: 650,
    badge: 'إصدار خاص 🎨',
    rating: 4.8,
    desc: 'إسدال من الستان النقي المشجر، خامة ملكية ناعمة وباردة على الجسم، يتميز بقصة واسعة ومريحة جداً بنقشة الرسمة السابعة المميزة.',
    imgs: [
      'images/WhatsApp Image 2026-07-15 at 10.48.35 PM (2).jpeg',
      'images/WhatsApp Image 2026-07-15 at 10.48.36 PM.jpeg'
    ],
    img: 'images/WhatsApp Image 2026-07-15 at 10.48.38 PM.jpeg',
    image: 'images/WhatsApp Image 2026-07-15 at 10.48.38 PM.jpeg'
  },
  'ISD-SATAN-8': {
    id: 'ISD-SATAN-8',
    type: 'satin',
    category: 'الاسدالات',
    name: 'إسدال ستان مشجر - الرسمة 8',
    price: 650,
    badge: 'رونق عصري ✨',
    rating: 4.8,
    desc: 'إسدال من الستان النقي المشجر، خامة ملكية ناعمة وباردة على الجسم، يتميز بقصة واسعة ومريحة جداً بنقشة الرسمة الثامنة المميزة.',
    imgs: [
      'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (5).jpeg',
      'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (4).jpeg'
    ],
    img: 'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (5).jpeg',
    image: 'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (5).jpeg'
  },
  'ISD-SATAN-9': {
    id: 'ISD-SATAN-9',
    type: 'satin',
    category: 'الاسدالات',
    name: 'إسدال ستان مشجر - الرسمة 9',
    price: 650,
    badge: 'آخر قطع 🚨',
    rating: 4.8,
    desc: 'إسدال من الستان النقي المشجر، خامة ملكية ناعمة وباردة على الجسم، يتميز بقصة واسعة ومريحة جداً بنقشة الرسمة التاسعة المميزة.',
    imgs: [
      'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (6).jpeg',
      'images/WhatsApp Image 2026-07-15 at 10.48.38 PM (1).jpeg'
    ],
    img: 'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (6).jpeg',
    image: 'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (6).jpeg'
  },

  'T009-BEIGE': {
    id: 'T009-BEIGE',
    category: 'كاجوال',
    name: 'شميز مقلم - بيج',
    price: 390,
    badge: 'جديد',
    description: 'شميز مقلم بلون بيج دافئ وخامة قطنية مريحة لإطلالة كاجوال مميزة.',
    image: 'images/e718a65f-fd83-4e43-bc0d-decd3f90a967.jpg',
    imgs: [
      'images/e718a65f-fd83-4e43-bc0d-decd3f90a967.jpg',
      'images/60c25a6e-0251-411e-b43a-c8123fba7b7a.jpg'
      , 'images/22f04a7a-a642-40c8-9940-1d85ac5d5dbc.jpg'
    ],
    rating: 4.8
  },
  'T009-GRAY': {
    id: 'T009-GRAY',
    category: 'كاجوال',
    name: 'شميز مقلم - رمادي',
    price: 390,
    badge: 'جديد',
    description: 'شميز مقلم رمادي أنيق بخامة ناعمة تبدو رائعة مع أي إطلالة يومية.',
    image: 'images/f073317a-baf8-4199-9cc6-d7ad28367826.jpg',
    imgs: [
      'images/f073317a-baf8-4199-9cc6-d7ad28367826.jpg',
      'images/9cdba53d-5b02-4d1d-a9f3-df0aab70b559.jpg'
      , 'images/22f04a7a-a642-40c8-9940-1d85ac5d5dbc.jpg'
    ],
    rating: 4.8
  },
  'T009-BURGUNDY': {
    id: 'T009-BURGUNDY',
    category: 'كاجوال',
    name: 'شميز مقلم - برجندي',
    price: 390,
    badge: 'جديد',
    description: 'شميز مقلم بلون برجندي جذاب، مناسب للخروجات العصرية والمظهر المحتشم.',
    image: 'images/94e38593-5271-4782-aad2-5e2ac129266d.jpg',
    imgs: [
      'images/94e38593-5271-4782-aad2-5e2ac129266d.jpg',
      'images/2887d1a5-2221-4457-822d-b7b65115ace0.jpg'
      , 'images/22f04a7a-a642-40c8-9940-1d85ac5d5dbc.jpg'
    ],
    rating: 4.8
  },
  'T009-GREEN': {
    id: 'T009-GREEN',
    category: 'كاجوال',
    name: 'شميز مقلم - أخضر',
    price: 390,
    badge: 'جديد',
    description: 'شميز مقلم أخضر أنيق مصنوع من قماش مريح، مثالي لإطلالة طبيعية متجددة.',
    image: 'images/7a97cb68-ef93-4a40-82f6-b094f993264e.jpg',
    imgs: [
      'images/7a97cb68-ef93-4a40-82f6-b094f993264e.jpg',
      'images/WhatsApp Image 2026-07-15 at 10.48.36 PM (4).jpeg'
       ,'images/22f04a7a-a642-40c8-9940-1d85ac5d5dbc.jpg'
    ],
    rating: 4.8
  },
  'TSHIRT-OW': {
    id: 'TSHIRT-OW',
    category: 'كاجوال',
    name: 'تيشيرت نص كم - أوف وايت',
    price: 270,
    badge: 'جديد',
    description: 'تيشيرت نص كم بألوان حيادية - متوفر بأحجام M، L، XL، 2XL.',
    sizes: ['M','L','XL','2XL'],
    image: 'images/eba71943-c43a-4881-8e84-b0d63c7ba55e.jpg',
    imgs: ['images/eba71943-c43a-4881-8e84-b0d63c7ba55e.jpg',],
    rating: 4.6
  },
  'TSHIRT-BLK': {
    id: 'TSHIRT-BLK',
    category: 'كاجوال',
    name: 'تيشيرت نص كم - أسود',
    price: 270,
    badge: 'جديد',
    description: 'تيشيرت نص كم أسود كلاسيكي - متوفر بأحجام M، L، XL، 2XL.',
    sizes: ['M','L','XL','2XL'],
    image: 'images/3197db22-7423-49d1-88b2-fb496a2a0f06.jpg',
    imgs: ['images/3197db22-7423-49d1-88b2-fb496a2a0f06.jpg'],
    rating: 4.6
  },
  'TSHIRT-BURG': {
    id: 'TSHIRT-BURG',
    category: 'كاجوال',
    name: 'تيشيرت نص كم - برجندي',
    price: 270,
    badge: 'جديد',
    description: 'تيشيرت نص كم بلون برجندي أنيق - متوفر بأحجام M، L، XL، 2XL.',
    sizes: ['M','L','XL','2XL'],
    image: 'images/7dd47eb9-3ced-46cd-9e18-1a5b5a27ff37 (1).jpg',
    imgs: ['images/7dd47eb9-3ced-46cd-9e18-1a5b5a27ff37 (1).jpg'],
    rating: 4.6
  },
  'JAGUAR-BLACK': {
    id: 'JAGUAR-BLACK',
    category: 'الاسدالات',
    name: 'إسدال جاكار - أسود',
    price: 750,
    badge: 'مميز',
    rating: 4.9,
    desc: 'إسدال جاكار فاخر بلون أسود أنيق، خامة ناعمة ومناسبة للظهور بكل أناقة.',
    image: 'images/WhatsApp Image 2026-08-04 at 7.12.37 PM.jpeg',
    imgs: ['images/WhatsApp Image 2026-08-04 at 7.12.37 PM.jpeg'],
    img: 'images/placeholder.svg'
  },
  'JAGUAR-OLIVE': {
    id: 'JAGUAR-OLIVE',
    category: 'الاسدالات',
    name: 'إسدال جاكار - زيتي',
    price: 750,
    badge: 'مميز',
    rating: 4.9,
    desc: 'إسدال جاكار بلون زيتي دافئ، جذاب ومناسب للستايل العصري.',
    image: 'images/WhatsApp Image 2026-08-04 at 7.12.37 PM (1).jpeg'
  },
  'JAGUAR-YELLOW': {
    id: 'JAGUAR-YELLOW',
    category: 'الاسدالات',
    name: 'إسدال جاكار - أصفر',
    price: 750,
    badge: 'مميز',
    rating: 4.9,
    desc: 'إسدال جاكار بلون أصفر مشرق، إضافة لونية أنيقة ومميزة.',
    image: 'images/WhatsApp Image 2026-08-04 at 7.12.37 PM (2).jpeg',
    imgs: ['images/WhatsApp Image 2026-08-04 at 7.12.37 PM (2).jpeg'],
    img: 'images/placeholder.svg'
  },
  'JAGUAR-PINK': {
    id: 'JAGUAR-PINK',
    category: 'الاسدالات',
    name: 'إسدال جاكار - بينك',
    price: 750,
    badge: 'مميز',
    rating: 4.9,
    desc: 'إسدال جاكار بلون بينك ناعم، يناسب الإطلالات الراقية والناعمة.',
    image: 'images/WhatsApp Image 2026-08-04 at 7.12.37 PM (3).jpeg',
    imgs: ['images/WhatsApp Image 2026-08-04 at 7.12.37 PM (3).jpeg'],
    img: 'images/placeholder.svg'
  },

  'JAGUAR-BLUE': {
    id: 'JAGUAR-BLUE',
    category: 'الاسدالات',
    name: 'إسدال جاكار - أزرق',
    price: 750,
    badge: 'مميز',
    rating: 4.9,
    desc: 'إسدال جاكار بلون أزرق هادئ وراقي، يناسب جميع الأنماط.',
    image: 'images/WhatsApp Image 2026-08-04 at 7.12.38 PM.jpeg',
    imgs: ['images/WhatsApp Image 2026-08-04 at 7.12.38 PM.jpeg'],
    img: 'images/placeholder.svg'
  },

};
function generateColors(count) {
  const hexList = [
    '#F5E3C6', // بيج
    '#9B9B9B', // رمادي
    '#7B2035', // برجندي
    '#4B6F4A'  // أخضر
  ];
  return hexList.slice(0, Math.min(count, hexList.length)).map((hex, i) => ({ code:`color-${i+1}`, name:`لون ${i+1}`, hex }));
}

function generateImageOptions(prefix, count, label) {
  return Array.from({length:count}, (_,i) => ({ code:`${prefix}-O${i+1}`, name:`${label} ${i+1}`, image:`images/${prefix}-O${i+1}.jpg` }));
}

// ── CART ───────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('kash_cart') || '[]');
let selectedOption = null;

function saveCart() { localStorage.setItem('kash_cart', JSON.stringify(cart)); updateCartBadge(); }

function updateCartBadge() {
  const total = cart.reduce((s,i) => s + (i.qty||i.quantity||1), 0);
  document.querySelectorAll('#cart-count,.cart-badge').forEach(el => el.textContent = total);
}

function addToCart(productId, productName, price) {
  const product = products[productId] || {};
  const existing = cart.find(i => i.productId === productId && i.option === selectedOption);
  if (existing) { existing.qty = (existing.qty||1) + 1; }
  else {
    const uid = productId + '-' + Date.now();
    cart.push({
      uid, id: uid,
      productId, name: productName, price: Number(price)||0,
      img: product.image || product.img || (product.imgs && product.imgs[0]) || 'images/placeholder.jpg',
      image: product.image || product.img || (product.imgs && product.imgs[0]) || 'images/placeholder.jpg',
      qty: 1, option: selectedOption,
      color: selectedOption || null, colorHex: null,
    });
  }
  saveCart();
  openCart();
}

function removeFromCart(cartItemId) {
  cart = cart.filter(i => (i.uid||i.id) !== cartItemId);
  saveCart(); renderSideCart();
  showNotification('تمت الإزالة من السلة');
}

function changeQty(cartItemId, delta) {
  const item = cart.find(i => (i.uid||i.id) === cartItemId);
  if (!item) return;
  item.qty = Math.max(1, (item.qty||1) + delta);
  saveCart(); renderSideCart();
}

// ── SIDE CART UI ────────────────────────────────────────────
function openMobileSearch() {
  const overlay = document.getElementById('mobile-search-overlay');
  if (!overlay) return;
  overlay.classList.add('open');
  setTimeout(() => document.getElementById('mobile-search-input')?.focus(), 100);
}
function closeMobileSearch() {
  document.getElementById('mobile-search-overlay')?.classList.remove('open');
}

function setupSearch() {
  document.querySelectorAll('.search-area input').forEach(input => {
    const searchArea = input.closest('.search-area');
    if (!searchArea || searchArea.querySelector('.search-results')) return;

    const results = document.createElement('div');
    results.className = 'search-results';
    results.hidden = true;
    searchArea.appendChild(results);

    input.addEventListener('input', () => {
      const query = input.value.trim().toLowerCase();
      if (!query) {
        results.hidden = true;
        return;
      }

      const matches = Object.values(products).filter(product =>
        `${product.name} ${product.id} ${product.category}`.toLowerCase().includes(query)
      ).slice(0, 6);

      results.innerHTML = matches.length
        ? matches.map(product => `
            <a class="search-result" href="product.html?id=${encodeURIComponent(product.id)}">
              <strong>${product.name}</strong>
              <span>${product.price} جنيه · ${product.id}</span>
            </a>
          `).join('')
        : '<span class="search-empty">لا توجد منتجات مطابقة</span>';
      results.hidden = false;
    });

    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        results.querySelector('a')?.click();
      }
    });
  });
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'mobile-search-overlay') closeMobileSearch();
  document.querySelectorAll('.search-area').forEach(area => {
    if (!area.contains(e.target)) area.querySelector('.search-results')?.setAttribute('hidden', '');
  });
});

function openCart() {
  document.getElementById('side-cart')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('show');
  document.body.style.overflow = 'hidden';
  renderSideCart();
}

function closeCart() {
  document.getElementById('side-cart')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('show');
  document.body.style.overflow = '';
}

function renderSideCart() {
  const container = document.getElementById('side-cart-items');
  const totalEl = document.getElementById('side-cart-total');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<p style="text-align:center;padding:40px 20px;color:var(--gray)">السلة فارغة 🛒</p>';
    if (totalEl) totalEl.textContent = '0 جنيه';
    return;
  }

  const items = cart.map(i => ({...i, qty: i.qty ?? i.quantity ?? 1, img: i.img || i.image || 'images/placeholder.jpg'}));

  container.innerHTML = items.map(item => `
    <div class="side-cart-item">
      <img src="${item.img}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
      <div class="item-info">
        <h4>${item.name}</h4>
        ${item.color ? `<p class="item-option">${item.color}</p>` : ''}
        <p class="item-price">${(item.price||0) * (item.qty||1)} جنيه</p>
        <div class="qty-row">
          <button class="qty-btn" onclick="changeQty('${item.uid||item.id}',-1)">−</button>
          <span class="qty-val">${item.qty||1}</span>
          <button class="qty-btn" onclick="changeQty('${item.uid||item.id}',1)">+</button>
        </div>
      </div>
      <button class="rm-btn" onclick="removeFromCart('${item.uid||item.id}')"><i class="fas fa-trash-alt"></i></button>
    </div>
  `).join('');

  const total = items.reduce((s,i) => s + (i.price||0) * (i.qty||1), 0);
  if (totalEl) totalEl.textContent = total + ' جنيه';
}

// ── OPTION SELECTION ────────────────────────────────────────
function selectOption(optionCode, el) {
  selectedOption = optionCode;
  document.querySelectorAll('.color-option,.image-option').forEach(e => e.classList.remove('selected'));
  if (el) el.classList.add('selected');
}

// ── BUY NOW ─────────────────────────────────────────────────
function buyNow(productId) {
  addToCart(productId, products[productId]?.name, products[productId]?.price);
  setTimeout(() => window.location.href = 'checkout.html', 800);
}

// ── PRODUCTS DISPLAY (index.html) ───────────────────────────
function displayProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  let items = Object.values(products);
  if (filter !== 'all') {
    if (filter === 'الاسدالات') {
       items = items.filter(p => p.category === 'الاسدالات');
    } else if (filter === 'كاجوال') {
       items = items.filter(p => p.category === 'كاجوال');
    }
  }
  grid.innerHTML = items.map(p => `
    <div class="product-card" onclick="if(!event.target.closest('.stop-propagation')){ window.location.href='product.html?id=${p.id}'; }">
      <div class="product-image">
        <img src="${p.image || p.img || p.imgs?.[0] || 'images/placeholder.jpg'}" alt="${p.name}" onerror="this.src='images/placeholder.jpg'" loading="lazy">
        <span class="product-badge">${p.badge || p.category || ''}</span>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="product-code">كود: ${p.id}</p>
        <div class="product-rating">${p.rating ? `⭐ ${p.rating}` : ''}</div>
        <p class="product-price">${p.price} جنيه</p>
        <div class="product-actions">
          <a href="product.html?id=${p.id}" class="btn-primary stop-propagation">عرض التفاصيل</a>
          <button class="btn-secondary stop-propagation" onclick="addToCart('${p.id}','${p.name}',${p.price})">أضف للسلة</button>
        </div>
      </div>
    </div>
  `).join('');

  // ── زر "اكتشف المزيد" أسفل الشبكة ──
  document.getElementById('explore-more-container')?.remove();

  let targetPage = 'cagual.html'; // الافتراضي للكاجوال
  if (filter === 'الاسدالات' || filter === 'all') {
    targetPage = 'isdals.html';
  }

  const moreContainer = document.createElement('div');
  moreContainer.id = 'explore-more-container';
  moreContainer.style.cssText = 'text-align: center; margin-top: 40px; width: 100%; grid-column: 1 / -1;';
  moreContainer.innerHTML = `
    <a href="${targetPage}" class="btn-explore-more">
      اكتشف المزيد في قسم ${filter === 'all' ? 'الاسدالات' : filter} <i class="fas fa-arrow-left" style="margin-right: 8px; font-size: 12px;"></i>
    </a>
  `;
  grid.after(moreContainer);
}

function filterProducts(cat, btn) {
  document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  displayProducts(cat);
}

// ── PRODUCT DETAIL (product.html) ───────────────────────────
function displayProductDetail() {
  const id = new URLSearchParams(location.search).get('id');
  const product = products[id];
  const container = document.querySelector('.product-detail-container');
  if (!container) return;

  if (!product) { container.innerHTML = '<p style="text-align:center;padding:60px">المنتج غير موجود</p>'; return; }

  let optionsHTML = '';
  if (product.optionType === 'colors') {
    optionsHTML = `<div class="options-section">
      <h4>اختري اللون:</h4>
      <div class="color-options">${product.options.map(c =>
        `<div class="color-option" style="background:${c.hex}" title="${c.name}" onclick="selectOption('${c.code}',this)"></div>`
      ).join('')}</div></div>`;
  } else if (product.optionType === 'patternImages' || product.optionType === 'colorImages') {
    optionsHTML = `<div class="options-section">
      <h4>${product.optionType === 'patternImages' ? 'اختري الرسمة:' : 'اختري اللون:'}</h4>
      <div class="image-options">${product.options.map(o =>
        `<div class="image-option" onclick="selectOption('${o.code}',this)">
          <img src="${o.image}" alt="${o.name}" onerror="this.src='images/placeholder.jpg'">
          <p>${o.name}</p></div>`
      ).join('')}</div></div>`;
  }

  document.title = product.name + ' - Kashmera';
  container.innerHTML = `
    <div class="container">
      <div class="product-detail-grid">
        <div class="product-images-sticky">
          <img id="main-image" src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
        </div>
        <div class="product-details">
          <h1>${product.name}</h1>
          <p class="product-code">كود المنتج: <strong>${product.id}</strong></p>
          <div class="product-rating">⭐ ${product.rating} تقييم</div>
          <p class="product-price">${product.price} جنيه</p>
          <p class="product-description">${product.description || 'تصميم كشميرة المميّز والمصنوع من أجود الأقمشة.'}</p>
          ${optionsHTML}
          <div class="quantity-section">
            <label>الكمية:</label>
            <input type="number" id="quantity" min="1" value="1">
          </div>
          <button onclick="addToCart('${product.id}','${product.name}',${product.price})" class="btn-pink btn-large">🛒 أضف للسلة</button>
          <button onclick="buyNow('${product.id}')" class="btn-primary btn-large">اشتري الآن</button>
        </div>
      </div>
    </div>
  `;
}

// ── NOTIFICATION ────────────────────────────────────────────
function showNotification(msg) {
  const n = document.createElement('div');
  n.className = 'notification';
  n.textContent = msg;
  document.body.appendChild(n);
  setTimeout(() => n.classList.add('show'), 10);
  setTimeout(() => { n.classList.remove('show'); setTimeout(() => n.remove(), 300); }, 3000);
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setupSearch();
  updateCartBadge();
  const path = location.pathname;
  if (path.includes('index') || path === '/' || path.endsWith('/')) {
    displayProducts();
  }
  if (path.includes('product.html')) {
    displayProductDetail();
  }
});