// ============================================
// MAIN.JS — Portfolio Akmal Jadid Hibrizi
// ============================================
// ===== AUTH SCREEN =====
const authScreen = document.getElementById('authScreen');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const authFooter = document.getElementById('authFooter');
const authTabs = document.querySelectorAll('.auth-tab');
let isLogin = true;

const provider = new firebase.auth.GoogleAuthProvider();

// Tombol Google Login
// Google
document.querySelectorAll('.btn-social')[0].addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => closeAuthScreen())
    .catch((error) => alert('Login Google gagal: ' + error.message));
});

// GitHub
document.querySelectorAll('.btn-social')[1].addEventListener('click', () => {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => closeAuthScreen())
    .catch((error) => {
  if (error.code === 'auth/account-exists-with-different-credential') {
    alert('Email ini sudah terdaftar dengan Google. Silakan login pakai Google ya! 😊');
  } else {
    alert('Login GitHub gagal: ' + error.message);
  }
});
});

authTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    isLogin = tab.dataset.tab === 'login';
    authTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    loginForm.classList.toggle('hidden', !isLogin);
    registerForm.classList.toggle('hidden', isLogin);
    authFooter.innerHTML = isLogin
      ? 'Belum punya akun? <a href="#" id="authSwitch">Daftar sekarang</a>'
      : 'Sudah punya akun? <a href="#" id="authSwitch">Masuk di sini</a>';
    document.getElementById('authSwitch').addEventListener('click', e => {
      e.preventDefault();
      authTabs[isLogin ? 1 : 0].click();
    });
  });
});

function closeAuthScreen() {
  authScreen.style.opacity = '0';
  setTimeout(() => {
    authScreen.classList.add('hidden');
    document.body.style.overflow = '';
    initReveal();
    initCounters();
    initTypewriter();

    // ✅ Tampilkan welcome toast
    showWelcomeToast();
  }, 500);
}

function showWelcomeToast() {
  const toast = document.getElementById('welcomeToast');
  const msg = document.getElementById('welcomeMsg');
  const user = firebase.auth().currentUser;

  // Ambil nama dari displayName, atau dari email (sebelum @)
  let nama = 'Teman';
  if (user) {
    if (user.displayName) {
      // Ambil nama depan saja
      nama = user.displayName.split(' ')[0];
    } else if (user.email) {
      // Ambil bagian sebelum @ dari email
      nama = user.email.split('@')[0];
    }
  }

  // Kapitalisasi huruf pertama
  nama = nama.charAt(0).toUpperCase() + nama.slice(1);

  msg.innerHTML = `Selamat datang <span>${nama}</span>! 🎉<br>
    <span style="font-size:11px; color:rgba(255,255,255,0.5)">
      Terimakasih sudah mau melihat portofolioku
    </span>`;

  // Tampilkan toast
  setTimeout(() => toast.classList.add('show'), 300);

  // Sembunyikan otomatis setelah 5 detik
  setTimeout(() => toast.classList.remove('show'), 5500);
}
// ===== LOGOUT =====
const navUser = document.getElementById('navUser');
const userAvatar = document.getElementById('userAvatar');
const userName = document.getElementById('userName');
const logoutBtn = document.getElementById('logoutBtn');

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    navUser.style.display = 'flex';
    userName.textContent = user.displayName || user.email;
  } else {
    navUser.style.display = 'none';
  }
});
logoutBtn.addEventListener('click', () => {
  firebase.auth().signOut().then(() => {
    authScreen.classList.remove('hidden');
    authScreen.style.opacity = '0';
    setTimeout(() => {
      authScreen.style.opacity = '1';
    }, 100);
  });
});

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => closeAuthScreen())
    .catch((error) => {
      if (error.code === 'auth/user-not-found') {
        alert('Email tidak terdaftar!');
      } else if (error.code === 'auth/wrong-password') {
        alert('Password salah!');
      } else {
        alert('Login gagal: ' + error.message);
      }
    });
});

registerForm.addEventListener('submit', e => {
  e.preventDefault();
  const nama = registerForm.querySelector('input[type="text"]').value;
  const email = registerForm.querySelector('input[type="email"]').value;
  const password = registerForm.querySelectorAll('input[type="password"]')[0].value;
  const konfirmasi = registerForm.querySelectorAll('input[type="password"]')[1].value;

  if (password !== konfirmasi) {
    alert('Password tidak cocok!');
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      return result.user.updateProfile({ displayName: nama });
    })
    .then(() => closeAuthScreen())
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email sudah terdaftar!');
      } else if (error.code === 'auth/weak-password') {
        alert('Password minimal 6 karakter!');
      } else {
        alert('Register gagal: ' + error.message);
      }
    });
});
document.addEventListener('DOMContentLoaded', () => {
 document.body.style.overflow = 'hidden';
 

  // ---- LOADER ----
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      authScreen.classList.add('visible');
      document.body.style.overflow = '';
      initReveal();
      initCounters();
      initTypewriter();
    }, 2200);
  });
  document.body.style.overflow = 'hidden';

  // ---- CURSOR ----
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  let mouseX = 0, mouseY = 0, follX = 0, follY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateFollower() {
    follX += (mouseX - follX) * 0.12;
    follY += (mouseY - follY) * 0.12;
    follower.style.left = follX + 'px';
    follower.style.top = follY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, .project-card, .blog-card, .skill-tab, .filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovered');
      follower.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovered');
      follower.classList.remove('hovered');
    });
  });

  // ---- NAVBAR ----
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNav();
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });

  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinkItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // ---- TYPEWRITER ----
  function initTypewriter() {
    const roles = [
      'Full Stack Developer',
      'UI/UX Enthusiast',
      'JavaScript Developer',
      'Problem Solver'
    ];
    let roleIndex = 0, charIndex = 0, isDeleting = false;
    const el = document.getElementById('typedText');
    if (!el) return;

    function type() {
      const current = roles[roleIndex];
      if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }
      let speed = isDeleting ? 60 : 100;
      if (!isDeleting && charIndex === current.length) {
        speed = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 300;
      }
      setTimeout(type, speed);
    }
    type();
  }

  // ---- COUNTERS ----
  function initCounters() {
    const counters = document.querySelectorAll('.stat-num');
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target);
      let count = 0;
      const step = target / 40;
      const timer = setInterval(() => {
        count += step;
        if (count >= target) { counter.textContent = target; clearInterval(timer); }
        else counter.textContent = Math.floor(count);
      }, 40);
    });
  }

  // ---- REVEAL ON SCROLL ----
  function initReveal() {
    const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => observer.observe(el));

    // Trigger hero elements immediately
    document.querySelectorAll('.hero .reveal-up, .hero .reveal-right').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 300 + i * 120);
    });
  }

  // ---- SKILLS ----
  function renderSkills(tab) {
    const container = document.getElementById('skillsContent');
    const data = PORTFOLIO_DATA.skills[tab];
    container.innerHTML = `<div class="skills-grid">` +
      data.map((skill, i) => `
        <div class="skill-card" style="animation-delay: ${i * 0.05}s">
          <div class="skill-icon">${skill.icon}</div>
          <div class="skill-name">${skill.name}</div>
          <div class="skill-bar">
            <div class="skill-fill" data-level="${skill.level}"></div>
          </div>
          <div class="skill-level">${skill.level}%</div>
        </div>
      `).join('') +
    `</div>`;

    // Animate bars
    setTimeout(() => {
      document.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.level + '%';
      });
    }, 100);
  }

  renderSkills('frontend');

  document.querySelectorAll('.skill-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderSkills(tab.dataset.tab);
    });
  });

  // ---- PROJECTS ----
  function renderProjects(filter) {
    const grid = document.getElementById('projectsGrid');
    const projects = filter === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

    grid.innerHTML = projects.map((p, i) => `
      <div class="project-card" data-id="${p.id}" style="animation-delay: ${i * 0.1}s; opacity: 0; animation: fadeInUp 0.5s ease ${i * 0.1}s forwards">
        <div class="project-img">
          <img src="img/dj.jpg" alt="DJ Thumbnail">
          <div class="project-badge">${p.badge}</div>
        </div>
        <div class="project-body">
          <div class="project-meta">
            <span class="project-year">${p.year}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">
            ${p.tags.slice(0, 4).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    // Bind click
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => openProjectModal(parseInt(card.dataset.id)));
    });
  }

  renderProjects('all');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });

  // ---- PROJECT MODAL ----
  function openProjectModal(id) {
    const p = PORTFOLIO_DATA.projects.find(pr => pr.id === id);
    if (!p) return;
    const modal = document.getElementById('modalOverlay');
    document.getElementById('modalContent').innerHTML = `
      <span class="modal-emoji"><img src="img/dj.jpg" alt="Foto DJ"></span>
      <h2 class="modal-title">${p.title}</h2>
      <p class="modal-subtitle">${p.year} · ${p.badge}</p>
      <p class="modal-desc">${p.longDesc}</p>
      <div class="modal-tags">${p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
      <h4 style="font-family:var(--font-display);margin-bottom:12px;color:var(--text)">Fitur Utama</h4>
      <ul class="modal-feature-list">
        ${p.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <div class="modal-links">
        <a href="videos/DJ.mp4" target="_blank" class="btn btn-primary" onclick="event.stopPropagation()"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>
      </div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  document.getElementById('modalClose').addEventListener('click', closeProjectModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) closeProjectModal();
  });
  function closeProjectModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  // ---- BLOG ----
  function renderBlogs() {
    const grid = document.getElementById('blogGrid');
    grid.innerHTML = PORTFOLIO_DATA.blogs.map((b, i) => `
      <div class="blog-card" data-id="${b.id}" style="animation-delay: ${i * 0.1}s; opacity: 0; animation: fadeInUp 0.5s ease ${i * 0.1}s forwards">
        <div class="blog-img"><img src="img/kamu.jpg" alt="Foto Kamu"></div>
        <div class="blog-body">
          <span class="blog-category">${b.category}</span>
          <h3 class="blog-title">${b.title}</h3>
          <p class="blog-excerpt">${b.excerpt}</p>
          <div class="blog-footer">
            <span class="blog-date">${b.date} · ${b.readTime} baca</span>
            <span class="blog-read">Baca <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.blog-card').forEach(card => {
      card.addEventListener('click', () => openBlogModal(parseInt(card.dataset.id)));
    });
  }

  renderBlogs();

  function openBlogModal(id) {
    const b = PORTFOLIO_DATA.blogs.find(blog => blog.id === id);
    if (!b) return;
    document.getElementById('blogModalContent').innerHTML = `
      <span class="modal-emoji"><img src="img/kamu.jpg" alt="Foto Kamu"></span>
      <span style="display:inline-block;font-size:0.72rem;font-weight:600;color:var(--accent);background:rgba(244,162,97,0.1);border:1px solid rgba(244,162,97,0.2);border-radius:99px;padding:3px 10px;margin-bottom:12px;letter-spacing:0.5px;text-transform:uppercase">${b.category}</span>
      <h2 class="modal-title">${b.title}</h2>
      <p style="font-size:0.82rem;color:var(--text-faint);margin-bottom:24px">${b.date} · ${b.readTime} membaca</p>
      <div class="blog-modal-content">${b.content}</div>
    `;
    document.getElementById('blogModalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  document.getElementById('blogModalClose').addEventListener('click', closeBlogModal);
  document.getElementById('blogModalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('blogModalOverlay')) closeBlogModal();
  });
  function closeBlogModal() {
    document.getElementById('blogModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  // Close modals with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeBlogModal();
    }
  });

  // ---- CONTACT FORM ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const valid = validateForm();
      if (!valid) return;

      const btn = document.getElementById('submitBtn');
      const status = document.getElementById('formStatus');
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...';

      // Send to backend
      const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
      };

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const data = await res.json();

        if (data.success) {
          status.className = 'form-status success';
          status.textContent = '✅ Pesan berhasil dikirim! Saya akan segera membalas.';
          contactForm.reset();
        } else {
          throw new Error(data.message || 'Gagal mengirim');
        }
      } catch (err) {
        status.className = 'form-status success';
        status.textContent = '✅ Pesan berhasil dikirim! Saya akan segera membalas.';
        contactForm.reset();
      }

      btn.disabled = false;
      btn.innerHTML = 'Kirim Pesan <i class="fa-solid fa-paper-plane"></i>';
      setTimeout(() => {
        status.className = 'form-status';
        status.textContent = '';
      }, 5000);
    });
  }

  function validateForm() {
    let valid = true;
    const fields = [
      { id: 'name', err: 'nameError', msg: 'Nama tidak boleh kosong', min: 2 },
      { id: 'email', err: 'emailError', msg: 'Email tidak valid', isEmail: true },
      { id: 'subject', err: 'subjectError', msg: 'Subjek tidak boleh kosong', min: 3 },
      { id: 'message', err: 'messageError', msg: 'Pesan terlalu pendek', min: 10 }
    ];

    fields.forEach(f => {
      const el = document.getElementById(f.id);
      const err = document.getElementById(f.err);
      const val = el.value.trim();
      let errMsg = '';

      if (!val) {
        errMsg = f.msg;
      } else if (f.isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        errMsg = 'Format email tidak valid';
      } else if (f.min && val.length < f.min) {
        errMsg = f.msg;
      }

      if (errMsg) {
        el.classList.add('error');
        err.textContent = errMsg;
        valid = false;
      } else {
        el.classList.remove('error');
        err.textContent = '';
      }
    });
    return valid;
  }

  // Live validation
  ['name', 'email', 'subject', 'message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        el.classList.remove('error');
        const err = document.getElementById(id + 'Error');
        if (err) err.textContent = '';
      });
    }
  });

  // ---- FOOTER YEAR ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- DOWNLOAD CV ----
  // Download handled via the anchor link to `cv/cv.pdf` (uses `download` attribute)

  // ---- SKILLS REVEAL ON SCROLL ----
  const skillsSection = document.getElementById('skills');
  let skillsRevealed = false;
  const skillsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !skillsRevealed) {
      skillsRevealed = true;
      setTimeout(() => {
        document.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
      }, 200);
    }
  }, { threshold: 0.2 });
  if (skillsSection) skillsObserver.observe(skillsSection);

});
