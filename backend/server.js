// ============================================
// SERVER.JS — Backend Akmal Jadid Hibrizi Portfolio
// Node.js + Express | SQLite (tanpa migration, tanpa .env)
// ============================================

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// ============ MIDDLEWARE ============
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files dari root folder (index.html, public/)
app.use(express.static(path.join(__dirname, '..')));

// ============ DATABASE SETUP (SQLite manual, no migration, no env) ============
// Menggunakan file JSON sebagai simple database untuk messages
// Bisa diganti dengan SQLite jika ingin database sesungguhnya

const DB_FILE = path.join(__dirname, 'db.json');

// Inisialisasi db.json jika belum ada
function initDB() {
  if (!fs.existsSync(DB_FILE)) {
    const initial = {
      messages: [],
      views: { count: 0 }
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2));
    console.log('✅ Database (db.json) initialized');
  }
}

function readDB() {
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
  } catch {
    return { messages: [], views: { count: 0 } };
  }
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

initDB();

// ============ ROUTES ============

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server berjalan normal ✅', timestamp: new Date().toISOString() });
});

// Terima pesan dari form kontak
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validasi server-side
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Semua field wajib diisi' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Format email tidak valid' });
  }

  if (name.trim().length < 2) {
    return res.status(400).json({ success: false, message: 'Nama terlalu pendek' });
  }

  if (message.trim().length < 10) {
    return res.status(400).json({ success: false, message: 'Pesan terlalu pendek' });
  }

  // Simpan ke db
  const db = readDB();
  const newMessage = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
    read: false
  };

  db.messages.push(newMessage);
  writeDB(db);

  console.log(`📩 Pesan baru dari: ${name} <${email}>`);

  res.json({
    success: true,
    message: 'Pesan berhasil dikirim! Terima kasih telah menghubungi saya.'
  });
});

// Ambil semua pesan (untuk admin — bisa diproteksi jika perlu)
app.get('/api/messages', (req, res) => {
  const db = readDB();
  res.json({
    success: true,
    data: db.messages,
    total: db.messages.length
  });
});

// Hapus pesan by ID
app.delete('/api/messages/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const db = readDB();
  const before = db.messages.length;
  db.messages = db.messages.filter(m => m.id !== id);
  writeDB(db);

  if (db.messages.length < before) {
    res.json({ success: true, message: 'Pesan dihapus' });
  } else {
    res.status(404).json({ success: false, message: 'Pesan tidak ditemukan' });
  }
});

// Track page views
app.post('/api/views', (req, res) => {
  const db = readDB();
  db.views.count += 1;
  db.views.lastVisit = new Date().toISOString();
  writeDB(db);
  res.json({ success: true, views: db.views.count });
});

app.get('/api/views', (req, res) => {
  const db = readDB();
  res.json({ success: true, views: db.views.count || 0 });
});

// Semua route yang tidak cocok → serve index.html (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// ============ START SERVER ============
app.listen(PORT, () => {
  console.log('');
  console.log('  ╔══════════════════════════════════════╗');
  console.log('  ║   AKMAL JADID HIBRIZI — PORTFOLIO    ║');
  console.log('  ║   Server berjalan di:                ║');
  console.log(`  ║   http://localhost:${PORT}              ║`);
  console.log('  ╚══════════════════════════════════════╝');
  console.log('');
});
