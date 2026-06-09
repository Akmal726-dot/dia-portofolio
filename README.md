# 🚀 Akmal Jadid Hibrizi — Portfolio

Website portofolio pribadi Akmal Jadid Hibrizi, Full Stack Developer & UI/UX Enthusiast.

## 🌟 Fitur

- ✅ Desain modern dark theme dengan animasi premium
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Animasi scroll reveal & typewriter effect
- ✅ Filter proyek berdasarkan kategori
- ✅ Modal detail proyek & artikel blog
- ✅ Form kontak dengan validasi frontend & backend
- ✅ Counter statistik animasi
- ✅ Skills dengan progress bar animasi
- ✅ Custom cursor animasi
- ✅ Smooth scroll & active nav tracking

## 📁 Struktur Folder

```
portfolio/
├── index.html              # Halaman utama
├── package.json            # Konfigurasi Node.js
├── README.md               # Dokumentasi ini
├── .gitignore              # File yang diabaikan Git
│
├── public/
│   ├── css/
│   │   └── style.css       # Semua styling
│   ├── js/
│   │   ├── data.js         # Data konten (projects, skills, blog)
│   │   └── main.js         # Logic & interaksi
│   └── assets/             # Gambar & media (opsional)
│
└── backend/
    ├── server.js           # Express server
    └── db.json             # Database sederhana (auto-generated)
```

## 🛠️ Cara Menjalankan

### Mode Statis (GitHub Pages / tanpa backend)
Cukup buka `index.html` di browser atau upload ke GitHub Pages.

### Mode Full Stack (dengan backend Node.js)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Jalankan server:**
   ```bash
   npm start
   ```

3. **Buka browser:**
   ```
   http://localhost:3000
   ```

4. **Mode development (auto-reload):**
   ```bash
   npm run dev
   ```

## ✏️ Cara Edit Konten

Semua konten bisa diedit di file `public/js/data.js`:

- **Skills**: Edit array `skills.frontend`, `skills.backend`, `skills.tools`
- **Projects**: Edit array `projects`
- **Blog**: Edit array `blogs`

Untuk info personal (nama, email, sosmed), edit langsung di `index.html`.

## 🌐 Deploy ke GitHub Pages

1. Push semua file ke repository GitHub
2. Buka **Settings** → **Pages**
3. Pilih branch `main` dan folder `/ (root)`
4. Klik **Save** → website live!

> **Catatan**: GitHub Pages hanya serve file statis. Backend Node.js tidak akan berjalan di GitHub Pages. Untuk backend, gunakan platform seperti Railway, Render, atau Heroku.

## 🎨 Customisasi

Edit variabel CSS di `public/css/style.css` bagian `:root` untuk mengubah warna tema:

```css
:root {
  --primary: #7c6df4;    /* Warna utama (ungu) */
  --accent: #f4a261;     /* Warna aksen (oranye) */
  --accent-2: #00d4aa;   /* Warna aksen kedua (hijau) */
}
```

## 📝 Lisensi

MIT License — bebas digunakan dan dimodifikasi.

---

Dibuat dengan ❤️ oleh **Akmal Jadid Hibrizi**
