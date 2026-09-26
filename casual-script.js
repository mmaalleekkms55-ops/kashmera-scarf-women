function getProductImage(product) {
  const img = product?.image || product?.img || product?.imgs?.[0] || 'images/placeholder.svg';
  return img;
}

function displayCasualProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const items = Object.values(products || {})
    .filter(p => p.category === 'كاجوال')
    .slice(0, 8);

  grid.innerHTML = items.map(p => `
    <div class="product-card">
      <div class="product-image">
        <img src="${getProductImage(p)}" alt="${p.name}" loading="lazy" onerror="this.onerror=null; this.src='images/placeholder.svg'">
        <span class="product-badge">${p.badge || p.category}</span>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="product-code">كود: ${p.id}</p>
        <div class="product-rating">⭐ ${p.rating || 4.7}</div>
        <p class="product-price">${p.price} جنيه</p>
        <div class="product-actions">
          <a href="product.html?id=${p.id}" class="btn-primary">عرض التفاصيل</a>
          <button class="btn-secondary" onclick="event.stopPropagation(); addToCart('${p.id}','${p.name}',${p.price})">أضف للسلة</button>
        </div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', displayCasualProducts);