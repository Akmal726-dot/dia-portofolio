// ============================================
// DATA.JS — Portfolio Content for Akmal Jadid Hibrizi
// Edit here to update all portfolio content
// ============================================

const PORTFOLIO_DATA = {

  // ---- SKILLS ----
  skills: {
    frontend: [
      { name: "HTML5", icon: "🌐", level: 95 },
      { name: "CSS3 / SCSS", icon: "🎨", level: 90 },
      { name: "JavaScript", icon: "⚡", level: 88 },
      { name: "React.js", icon: "⚛️", level: 85 },
      { name: "Vue.js", icon: "💚", level: 75 },
      { name: "Tailwind CSS", icon: "💨", level: 88 },
      { name: "TypeScript", icon: "🔷", level: 72 },
      { name: "Next.js", icon: "◆", level: 78 },
    ],
    backend: [
      { name: "Node.js", icon: "🟢", level: 85 },
      { name: "Express.js", icon: "🚂", level: 85 },
      { name: "PHP", icon: "🐘", level: 80 },
      { name: "Laravel", icon: "🔴", level: 78 },
      { name: "MySQL", icon: "🗄️", level: 82 },
      { name: "MongoDB", icon: "🍃", level: 75 },
      { name: "PostgreSQL", icon: "🐘", level: 70 },
      { name: "REST API", icon: "🔌", level: 88 },
    ],
    tools: [
      { name: "Git & GitHub", icon: "🐙", level: 90 },
      { name: "Figma", icon: "🎭", level: 80 },
      { name: "Docker", icon: "🐋", level: 65 },
      { name: "VS Code", icon: "💻", level: 95 },
      { name: "Postman", icon: "📬", level: 85 },
      { name: "Linux", icon: "🐧", level: 72 },
      { name: "Vercel", icon: "▲", level: 82 },
      { name: "Firebase", icon: "🔥", level: 75 },
    ]
  },

  // ---- PROJECTS ----
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      desc: "Platform belanja online full-stack dengan fitur cart, payment gateway, dan admin dashboard yang lengkap.",
      longDesc: "Platform e-commerce yang dibangun dengan React.js di frontend dan Node.js + Express di backend. Dilengkapi dengan sistem autentikasi JWT, integrasi payment gateway Midtrans, real-time inventory management, dan admin dashboard dengan analitik penjualan.",
      emoji: "🛒",
      category: "web",
      year: "2024",
      tags: ["React", "Node.js", "MongoDB", "Express", "Midtrans"],
      features: [
        "Autentikasi JWT & OAuth Google",
        "Integrasi Payment Gateway Midtrans",
        "Real-time Cart & Inventory",
        "Admin Dashboard dengan analitik",
        "Responsive design mobile-first",
        "Search & Filter produk canggih"
      ],
      github: "https://github.com/",
      demo: "https://example.com/",
      badge: "Web App"
    },
    {
      id: 2,
      title: "Task Management App",
      desc: "Aplikasi manajemen tugas kolaboratif dengan fitur drag-and-drop, notifikasi real-time, dan laporan produktivitas.",
      longDesc: "Aplikasi project management bergaya Kanban board yang dibangun dengan Vue.js dan Laravel. Mendukung kolaborasi tim, komentar pada tugas, deadline tracking, dan laporan produktivitas mingguan.",
      emoji: "📋",
      category: "web",
      year: "2024",
      tags: ["Vue.js", "Laravel", "MySQL", "Pusher", "Tailwind"],
      features: [
        "Kanban board dengan drag-and-drop",
        "Real-time collaboration via WebSocket",
        "Notifikasi push browser",
        "Laporan produktivitas mingguan",
        "Role-based access control",
        "Dark/Light mode toggle"
      ],
      github: "https://github.com/",
      demo: "https://example.com/",
      badge: "Web App"
    },
    {
      id: 3,
      title: "Finance Tracker Mobile",
      desc: "Aplikasi tracking keuangan personal dengan kategorisasi otomatis, grafik pengeluaran, dan goals saving.",
      longDesc: "Aplikasi mobile React Native untuk tracking keuangan personal. Fitur meliputi kategorisasi transaksi otomatis dengan AI, visualisasi pengeluaran dengan chart interaktif, dan sistem goals saving dengan reminder otomatis.",
      emoji: "💰",
      category: "mobile",
      year: "2023",
      tags: ["React Native", "Firebase", "Redux", "Chart.js"],
      features: [
        "Input transaksi cepat & mudah",
        "Kategorisasi otomatis dengan AI",
        "Chart pengeluaran interaktif",
        "Goals saving & progress tracker",
        "Export laporan ke PDF",
        "Backup data ke cloud"
      ],
      github: "https://github.com/",
      demo: "https://example.com/",
      badge: "Mobile"
    },
    {
      id: 4,
      title: "UI Design System",
      desc: "Design system komprehensif untuk startup tech dengan 200+ komponen, dark/light mode, dan dokumentasi lengkap.",
      longDesc: "Design system yang dibangun di Figma dan dikembangkan dengan Storybook. Mencakup 200+ komponen UI yang dapat digunakan kembali, panduan tipografi, palet warna, serta dokumentasi penggunaan yang komprehensif untuk tim developer.",
      emoji: "🎨",
      category: "ui",
      year: "2023",
      tags: ["Figma", "Storybook", "React", "SCSS", "TypeScript"],
      features: [
        "200+ komponen siap pakai",
        "Dark & Light mode support",
        "Dokumentasi Storybook lengkap",
        "Accessibility WCAG 2.1 AA",
        "Design tokens terpusat",
        "Panduan branding & tipografi"
      ],
      github: "https://github.com/",
      demo: "https://example.com/",
      badge: "UI/UX"
    },
    {
      id: 5,
      title: "Blog Platform CMS",
      desc: "Platform blogging dengan CMS custom, SEO optimizer, dan dukungan markdown untuk penulis konten.",
      longDesc: "Platform blogging full-stack yang dibangun dengan Next.js dan custom CMS. Dilengkapi dengan SEO optimizer otomatis, editor markdown dengan preview langsung, manajemen media, dan analitik pembaca terintegrasi.",
      emoji: "✍️",
      category: "web",
      year: "2023",
      tags: ["Next.js", "PostgreSQL", "Prisma", "MDX", "Vercel"],
      features: [
        "CMS custom dengan editor visual",
        "SEO optimizer otomatis",
        "Editor Markdown + MDX support",
        "Manajemen media terpusat",
        "Analitik pembaca",
        "RSS feed & sitemap otomatis"
      ],
      github: "https://github.com/",
      demo: "https://example.com/",
      badge: "Web App"
    },
    {
      id: 6,
      title: "Food Delivery App UI",
      desc: "Desain UI/UX aplikasi food delivery yang modern dengan alur pemesanan yang intuitif dan animasi smooth.",
      longDesc: "Proyek desain UI/UX untuk aplikasi food delivery yang komprehensif. Mencakup user research, wireframing, prototype interaktif di Figma, dan panduan animasi untuk developer. Alur pemesanan dioptimalkan berdasarkan usability testing dengan 20 responden.",
      emoji: "🍔",
      category: "ui",
      year: "2024",
      tags: ["Figma", "Prototyping", "User Research", "Animation"],
      features: [
        "User research & persona",
        "Wireframe low & high fidelity",
        "Prototype interaktif Figma",
        "Alur pemesanan 3 langkah",
        "Animasi micro-interaction",
        "Usability testing report"
      ],
      github: "https://github.com/",
      demo: "https://example.com/",
      badge: "UI/UX"
    }
  ],

  // ---- BLOG ----
  blogs: [
    {
      id: 1,
      title: "Membangun REST API yang Scalable dengan Node.js dan Express",
      excerpt: "Panduan lengkap membangun API yang robust, mulai dari struktur folder hingga best practices autentikasi dan error handling.",
      category: "Backend",
      date: "5 Jan 2025",
      emoji: "🚀",
      readTime: "8 menit",
      content: `
        <p>Membangun REST API yang scalable adalah keterampilan fundamental setiap backend developer. Dalam artikel ini, kita akan membahas pendekatan terbaik menggunakan Node.js dan Express.js.</p>
        
        <h4>1. Struktur Folder yang Baik</h4>
        <p>Struktur folder yang baik adalah fondasi aplikasi yang mudah dipelihara. Pisahkan concerns: routes, controllers, services, dan models masing-masing punya tanggung jawab yang jelas. Gunakan pola MVC atau layered architecture untuk aplikasi yang lebih besar.</p>
        
        <h4>2. Middleware dan Error Handling</h4>
        <p>Global error handler adalah wajib. Tangkap semua uncaught errors dan kembalikan response yang konsisten dengan format JSON yang terstandarisasi. Gunakan middleware untuk validasi input, autentikasi, logging, dan rate limiting.</p>
        
        <h4>3. Autentikasi dengan JWT</h4>
        <p>JWT (JSON Web Token) adalah standar de facto untuk API authentication. Implementasikan access token yang berumur pendek (15 menit) dan refresh token yang berumur panjang (7 hari) untuk pengalaman pengguna yang baik sekaligus keamanan yang terjaga.</p>
        
        <h4>4. Versioning API</h4>
        <p>Selalu versi API Anda dari awal: /api/v1/users. Ini memungkinkan Anda melakukan breaking changes di versi baru tanpa mematikan klien yang menggunakan versi lama. Dokumentasikan setiap perubahan dengan changelog yang jelas.</p>
        
        <h4>Tips Performa</h4>
        <p>Gunakan connection pooling untuk database, implementasikan caching dengan Redis untuk endpoint yang sering diakses, dan aktifkan compression untuk response body. Monitor performa dengan tools seperti Prometheus atau Datadog.</p>
      `
    },
    {
      id: 2,
      title: "CSS Modern: Grid, Flexbox, dan Container Queries di 2025",
      excerpt: "Eksplorasi fitur CSS modern yang membuat layout kompleks menjadi lebih mudah dan kode lebih bersih tanpa framework.",
      category: "Frontend",
      date: "18 Des 2024",
      emoji: "🎨",
      readTime: "6 menit",
      content: `
        <p>CSS terus berkembang dengan pesat. Di 2025, kita punya arsenal tools yang luar biasa untuk membangun layout yang kompleks tanpa bergantung pada framework CSS eksternal.</p>
        
        <h4>CSS Grid: Lebih dari Sekedar Layout</h4>
        <p>CSS Grid bukan hanya untuk layout dua dimensi. Dengan subgrid, kita bisa membuat komponen yang selaras dengan grid induknya. Ini memecahkan masalah alignment yang dulu membutuhkan JavaScript atau hack CSS yang rumit.</p>
        
        <h4>Container Queries: Responsif Berdasarkan Parent</h4>
        <p>Container Queries mengubah cara kita berpikir tentang responsive design. Alih-alih merespons ukuran viewport, komponen kini bisa merespons ukuran container-nya sendiri. Ini membuat komponen lebih reusable dan kontekstual.</p>
        
        <h4>CSS Custom Properties yang Powerful</h4>
        <p>CSS Variables bukan hanya untuk warna. Gunakan untuk spacing, typography scale, animation timing, dan bahkan logic sederhana dengan calc(). Kombinasikan dengan :root dan scope untuk theming yang fleksibel.</p>
        
        <h4>Flexbox vs Grid: Kapan Menggunakan Mana</h4>
        <p>Aturan praktisnya: Flexbox untuk distribusi item dalam satu dimensi (baris atau kolom), Grid untuk layout dua dimensi yang lebih kompleks. Tapi aturan ini bukan harga mati — gunakan apa yang paling masuk akal untuk konteksnya.</p>
      `
    },
    {
      id: 3,
      title: "Perjalanan Menjadi Full Stack Developer: Tips dari Pengalaman Nyata",
      excerpt: "Refleksi jujur perjalanan belajar programming dari nol hingga menjadi developer profesional, lengkap dengan resource terbaik.",
      category: "Career",
      date: "2 Des 2024",
      emoji: "🗺️",
      readTime: "10 menit",
      content: `
        <p>Tiga tahun lalu, saya tidak tahu apa itu variabel. Hari ini, saya membangun aplikasi full-stack yang digunakan ratusan orang setiap hari. Ini adalah cerita perjalanan saya, dengan harapan bisa membantu Anda yang sedang di awal jalan.</p>
        
        <h4>Mulai dari Mana?</h4>
        <p>Kesalahan terbesar yang saya lihat dari pemula adalah paralysis of choice — terlalu lama memilih bahasa atau framework. Mulai dari HTML, CSS, dan JavaScript. Ini fondasi yang tidak bisa dilewati. Kuasai ketiganya sebelum melompat ke framework apapun.</p>
        
        <h4>Belajar dengan Membangun</h4>
        <p>Tutorial adalah awal yang baik, tapi hanya membuat proyek nyata yang membuat skill benar-benar berkembang. Setelah menyelesaikan setiap tutorial, tantang diri untuk membangun versi modifikasi dari apa yang baru dipelajari. Sedikit diubah, sedikit ditambahkan.</p>
        
        <h4>Komunitas adalah Aset</h4>
        <p>Bergabung dengan komunitas developer lokal maupun online. Discord, forum, GitHub discussions — semua itu bukan hanya tempat bertanya, tapi tempat belajar cara berpikir seperti seorang developer. Baca pertanyaan orang lain, coba jawab walau belum yakin.</p>
        
        <h4>Konsistensi di Atas Intensitas</h4>
        <p>Belajar 1 jam setiap hari selama setahun jauh lebih efektif daripada marathon 10 jam setiap weekend. Konsistensi membangun habit, habit membangun skill. Track progress Anda, celebrate small wins, dan jangan bandingkan diri dengan orang lain.</p>
        
        <h4>Resource yang Benar-benar Membantu</h4>
        <p>The Odin Project untuk fundamental web, freeCodeCamp untuk praktek, MDN Web Docs untuk referensi, dan YouTube (Traversy Media, Kevin Powell, Fireship) untuk visual learner. Dan yang terpenting: dokumentasi resmi dari teknologi yang sedang dipelajari.</p>
      `
    }
  ]

};
