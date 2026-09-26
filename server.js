const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

// ── بيانات دخول لوحة الطلبات ──
// غيّري القيم دي قبل ما ترفعي الموقع (أو استخدمي متغيرات بيئة ADMIN_USER / ADMIN_PASS على الاستضافة)
const ADMIN_USER = process.env.ADMIN_USER || 'kashmera';
const ADMIN_PASS = process.env.ADMIN_PASS || 'change-this-password';

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// ── حماية بسيطة بباسورد لصفحة ولـ API الطلبات (عشان مش أي حد يشوف أو يمسح طلبات العملاء) ──
// لازم يتسجل قبل أي static serving عشان يقدر يمنع الوصول المباشر لملف orders.html
function requireAdmin(req, res, next) {
  const auth = req.headers.authorization;
  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic' && encoded) {
      const [user, pass] = Buffer.from(encoded, 'base64').toString('utf8').split(':');
      if (user === ADMIN_USER && pass === ADMIN_PASS) return next();
    }
  }
  res.set('WWW-Authenticate', 'Basic realm="Kashmera Orders"');
  return res.status(401).send('Authentication required');
}

app.get('/orders.html', requireAdmin, (req, res) => {
  res.sendFile(path.join(__dirname, 'orders.html'));
});

// ── حماية بيانات العملاء وملفات السيرفر من الوصول العام ──
// من غير الجزء ده، أي حد كان يقدر يفتح /data/orders.json ويشوف كل بيانات
// العملاء (الاسم، التليفون، العنوان)، أو يفتح server.js/package.json/orders.html مباشرة.
const BLOCKED_PATHS = ['/data', '/server.js', '/package.json', '/package-lock.json', '/node_modules', '/orders.html'];
app.use((req, res, next) => {
  const p = req.path.toLowerCase();
  if (BLOCKED_PATHS.some(blocked => p === blocked || p.startsWith(blocked + '/'))) {
    return res.status(404).send('Not found');
  }
  next();
});

app.use(express.static(path.join(__dirname), { dotfiles: 'ignore', index: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function loadOrders() {
  ensureDataDir();
  if (!fs.existsSync(ORDERS_FILE)) {
    fs.writeFileSync(ORDERS_FILE, '[]', 'utf8');
  }
  const raw = fs.readFileSync(ORDERS_FILE, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse orders.json:', err);
    return [];
  }
}

function saveOrders(orders) {
  ensureDataDir();
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2), 'utf8');
}

// فتح الطلب (POST) متاح للجميع عشان العميلة تقدر تأكد طلبها من غير تسجيل دخول
app.post('/api/orders', (req, res) => {
  const order = req.body;
  if (!order || !order.id || !order.customer || !Array.isArray(order.items)) {
    return res.status(400).json({ error: 'Invalid order payload' });
  }

  order.createdAt = new Date().toISOString();
  order.status = 'new';

  const orders = loadOrders();
  orders.push(order);
  saveOrders(orders);

  return res.status(201).json({ message: 'Order saved', orderId: order.id });
});

// عرض وحذف الطلبات محمي بباسورد الأدمن
app.get('/api/orders', requireAdmin, (req, res) => {
  const orders = loadOrders();
  res.json(orders);
});

app.delete('/api/orders/:id', requireAdmin, (req, res) => {
  const orderId = req.params.id;
  if (!orderId) {
    return res.status(400).json({ error: 'Order id is required' });
  }
  const orders = loadOrders();
  const filtered = orders.filter(order => order.id !== orderId);
  if (filtered.length === orders.length) {
    return res.status(404).json({ error: 'Order not found' });
  }
  saveOrders(filtered);
  return res.json({ message: 'Order deleted', orderId });
});

app.listen(PORT, () => {
  console.log(`Kashmera backend running at http://localhost:${PORT}`);
  console.log('Serving static files and /api/orders endpoint');
  if (ADMIN_PASS === 'change-this-password') {
    console.warn('⚠️  تحذير: باسورد لوحة الطلبات لسه الافتراضي. غيّريه من متغير البيئة ADMIN_PASS قبل الرفع للاستضافة.');
  }
});