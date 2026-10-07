/* ==========================================================
   HELPER
   ========================================================== */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const toast = (message) => {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('show'), 2200);
};

$('#yr').textContent = new Date().getFullYear();


/* ==========================================================
   DATA PRESTASI  (tambah baris baru di sini)
   Format: [judul, acara, tempat, tanggal, tahun, kategori, medali]
   Medali: gold | silver | bronze | star
   ========================================================== */
const CAT = {
  sempoa:     ['Sempoa dan Abacus', '🧮'],
  akademik:   ['Akademik dan Olimpiade', '🎓'],
  bahasa:     ['Bahasa Inggris', '🔤'],
  seni:       ['Seni', '🎨'],
  komputer:   ['Komputer', '💻'],
  organisasi: ['Organisasi', '🏛']
};

const MED = { gold: '🥇', silver: '🥈', bronze: '🥉', star: '⭐' };

const A = [
  ['Juara Umum 1 SMA Kelas 11', 'Tahun Pelajaran 2024-2025', '', '', '2025', 'akademik', 'gold'],
  ['Ranking 1 Berturut-turut', 'Kelas 10 sampai 12 SMA', '', '', '2025', 'akademik', 'gold'],
  ['Top 100 Mathematics', 'International Science Olympiad', '', '', '2023', 'akademik', 'star'],
  ['Medali Emas KS2N Bahasa Inggris', 'Kompetisi Sains', '', '', '2023', 'bahasa', 'gold'],
  ['Finalis Olimpiade Bahasa Inggris', 'International Science Qualification Olympiad', '', '', '2023', 'bahasa', 'star'],
  ['2nd Winner English Olympic Competition', 'EFC', '', '', '2025', 'bahasa', 'silver'],
  ['Peserta Bidang Bahasa Inggris', 'Methodist-2 Education Expo', '', '', '2025', 'bahasa', 'star'],
  ['Peserta Lomba Bahasa Inggris', 'Sutomo 1 Education Expo', '', '', '2023', 'bahasa', 'star'],
  ['Top 10 TryOut UN Matematika SD', 'SD Dr. Wahidin Sudirohusodo', '', '', '2019', 'akademik', 'star'],
  ['Juara 1 Lomba Excel', 'Anniversary Victory Education Center', '', '', '2024', 'komputer', 'gold'],
  ['Juara 2 Lomba Mengetik Cepat', 'Typing Master, Anniversary Victory Education Center', '', '', '2024', 'komputer', 'silver'],
  ['Koordinator OSIS Sekbid Olimpiade', 'SMAS Brigjend Katamso II, T.P 2024-2025', '', '', '2024', 'organisasi', 'star'],
  ['Anggota OSIS Sekbid Olimpiade', 'SMAS Brigjend Katamso II, T.P 2023-2024', '', '', '2023', 'organisasi', 'star'],
  ['Sekretaris OSIS SMP', 'SMP Negeri 20 Medan, T.P 2021-2022', '', '', '2021', 'organisasi', 'star'],
  ['Juara 2 Lomba Kaligrafi', 'Gebyar Festival Islami SMP', '', '', '2022', 'seni', 'silver'],
  ['Juara 3 Lomba Menggambar', 'Diselenggarakan oleh Faber-Castell', '', '', '2017', 'seni', 'bronze'],
  ['Juara 1 P. Tangan Kelas 4', 'Peringatan Hari Kartini 2017/2018', '', '', '2018', 'seni', 'gold'],
  ['Juara 1 Scratch Art Kategori 3', '', '', '', '', 'seni', 'gold'],
  ['Champion II Advanced 3', 'Lomba Sempoa Valentines Day', 'Medan', '9 Februari 2020', '2020', 'sempoa', 'silver'],
  ['Champion Advanced 3 New', 'Kualifikasi Best of The Best Sumut dan Aceh 2020', 'Medan', '3 November 2019', '2019', 'sempoa', 'gold'],
  ['Champion III Advanced 3', 'Lomba Sempoa', 'Medan', '29 September 2019', '2019', 'sempoa', 'bronze'],
  ['3rd Winner Advance 2 New', 'National BOB Student Competition', 'Semarang', '22 Juni 2019', '2019', 'sempoa', 'bronze'],
  ['Champion Advanced 2 New', 'Kualifikasi BOBNAS 2019', 'Medan', '31 Maret 2019', '2019', 'sempoa', 'gold'],
  ['1st Winner Advance 1 New', 'Chinese New Year Celebration', 'Medan', '17 Februari 2019', '2019', 'sempoa', 'gold'],
  ['Juara 2 Advanced 1 New', 'Friendship Competition', 'Medan', '25 November 2018', '2018', 'sempoa', 'silver'],
  ['Juara 2 Advanced 1 New', 'Prakualifikasi BOBNAS 2019', 'Medan', '11 November 2018', '2018', 'sempoa', 'silver'],
  ['2nd Winner Intermediate 3 New', 'Hari Kartini', 'Medan', '21 April 2018', '2018', 'sempoa', 'silver'],
  ['1st Winner Intermediate 3 New', 'Kualifikasi BOBNAS 2018', 'Medan', '25 Maret 2018', '2018', 'sempoa', 'gold'],
  ['Juara 1 Intermediate 2 New', 'Valentine dan Chinese New Year', 'Medan', '4 Februari 2018', '2018', 'sempoa', 'gold'],
  ['Juara 1 Intermediate 2 New', 'Prakualifikasi BOBNAS 2018', 'Medan', '5 November 2017', '2017', 'sempoa', 'gold'],
  ['Best of The Best Intermediate II', 'Lomba Sempoa', 'Medan', '8 Oktober 2017', '2017', 'sempoa', 'gold'],
  ['Champion Advanced 2', 'Lomba Sempoa HUT RI 2019', 'Medan', '4 Agustus 2017', '2017', 'sempoa', 'gold'],
  ['2nd Winner Intermediate 1 New', 'National BOB Student Competition', 'Bali', '8 Juli 2017', '2017', 'sempoa', 'silver'],
  ['International Certificate of Abacus and Mental Calculation Ability', 'Sertifikat internasional', 'Taiwan', '', '2017', 'sempoa', 'star'],
  ['1st Winner Foundation 3', 'Kualifikasi BOBNAS 2017', 'Medan', '28 Maret 2017', '2017', 'sempoa', 'gold'],
  ['Juara 2 Tingkat Foundation 2', 'Peringatan Hari Kartini', 'Medan', '21 April 2017', '2017', 'sempoa', 'silver'],
  ['Juara 1 Foundation 2', 'Prakualifikasi BOBNAS 2017', 'Medan', '13 November 2016', '2016', 'sempoa', 'gold'],
  ['Juara 1 Foundation 1', 'Lomba Sempoa', 'Medan', '2 Oktober 2016', '2016', 'sempoa', 'gold']
].sort((a, b) => (b[4] || 0) - (a[4] || 0));


/* ==========================================================
   PRELOADER
   ========================================================== */
let progress = 0;

const preloader = setInterval(() => {
  progress += Math.ceil(Math.random() * 9);

  if (progress >= 100) {
    progress = 100;
    clearInterval(preloader);
    setTimeout(() => {
      $('#pre').classList.add('go');
      scramble();
    }, 350);
  }

  $('#pn').textContent = progress;
}, 45);


/* ==========================================================
   EFEK ACAK HURUF PADA NAMA
   ========================================================== */
function scramble() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  [$('#nm').firstChild, $('#nm em')].forEach((el, i) => {
    const final = i ? el.dataset.t : el.textContent.trim();
    let frame = 0;

    const timer = setInterval(() => {
      const out = [...final]
        .map((ch, k) => {
          if (ch === ' ') return ' ';
          return k < frame / 2 ? ch : letters[Math.random() * 26 | 0];
        })
        .join('');

      el.textContent = i ? out : out + ' ';
      frame++;

      if (frame > final.length * 2 + 2) {
        clearInterval(timer);
        el.textContent = i ? final : final + ' ';
      }
    }, 40);
  });
}


/* ==========================================================
   TEKS KETIK OTOMATIS
   ========================================================== */
const roles = [
  'Mahasiswa Ilmu Komputer USU',
  'Ketua English Club',
  'Koordinator Olimpiade',
  'Calon Front End Developer'
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

(function typewriter() {
  const word = roles[roleIndex];
  $('#ty').textContent = word.slice(0, charIndex);

  if (!deleting && charIndex === word.length) {
    deleting = true;
    return setTimeout(typewriter, 1500);
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  charIndex += deleting ? -1 : 1;
  setTimeout(typewriter, deleting ? 35 : 75);
})();


/* ==========================================================
   MARQUEE
   ========================================================== */
const marqueeWords = [
  'Kepemimpinan', 'Administrasi', 'Front End', 'Analisis Kritis', 'Komunikasi',
  'Ketelitian', 'Olimpiade', 'Bahasa Inggris', 'Sempoa', 'Ranking 1'
];

$('#mq').innerHTML = Array(2)
  .fill(marqueeWords.map((word) => `<span>✦ ${word}</span>`).join(''))
  .join('');


/* ==========================================================
   LATAR KONSTELASI (canvas)
   ========================================================== */
const bg = $('#bg');
const bgCtx = bg.getContext('2d');
let W, H;
let particles = [];
const mouse = { x: -999, y: -999 };

function resizeCanvas() {
  W = bg.width = innerWidth;
  H = bg.height = innerHeight;

  particles = Array.from({ length: Math.min(90, W / 14 | 0) }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - .5) * .35,
    vy: (Math.random() - .5) * .35
  }));
}

resizeCanvas();
addEventListener('resize', resizeCanvas);
addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

(function drawBackground() {
  bgCtx.clearRect(0, 0, W, H);

  const gold = getComputedStyle(document.documentElement).getPropertyValue('--gold').trim();
  bgCtx.fillStyle = gold;
  bgCtx.strokeStyle = gold;

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;

    // Menjauh dari kursor
    const distMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
    if (distMouse < 140) {
      p.x += (p.x - mouse.x) * .02;
      p.y += (p.y - mouse.y) * .02;
    }

    // Titik
    bgCtx.globalAlpha = .7;
    bgCtx.beginPath();
    bgCtx.arc(p.x, p.y, 1.6, 0, 7);
    bgCtx.fill();

    // Garis antar titik
    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const dist = Math.hypot(p.x - q.x, p.y - q.y);

      if (dist < 120) {
        bgCtx.globalAlpha = (1 - dist / 120) * .25;
        bgCtx.beginPath();
        bgCtx.moveTo(p.x, p.y);
        bgCtx.lineTo(q.x, q.y);
        bgCtx.stroke();
      }
    }

    // Garis ke kursor
    if (distMouse < 170) {
      bgCtx.globalAlpha = (1 - distMouse / 170) * .5;
      bgCtx.beginPath();
      bgCtx.moveTo(p.x, p.y);
      bgCtx.lineTo(mouse.x, mouse.y);
      bgCtx.stroke();
    }
  });

  requestAnimationFrame(drawBackground);
})();


/* ==========================================================
   KURSOR KUSTOM
   ========================================================== */
const cursorDot = $('.cur');
const cursorRing = $('.ring');
let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;

addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

(function followCursor() {
  ringX += (mouseX - ringX) * .15;
  ringY += (mouseY - ringY) * .15;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  requestAnimationFrame(followCursor);
})();

document.addEventListener('mouseover', (e) => {
  cursorRing.classList.toggle('big', !!e.target.closest('a, button, .card, .seal'));
});


/* ==========================================================
   FOTO 3D (miring mengikuti mouse)
   ========================================================== */
const frame = $('.frame');
const tilt = $('#tilt');

frame.addEventListener('mousemove', (e) => {
  const rect = frame.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - .5;
  const y = (e.clientY - rect.top) / rect.height - .5;
  tilt.style.transform = `rotateY(${x * 22}deg) rotateX(${-y * 22}deg)`;
});

frame.addEventListener('mouseleave', () => {
  tilt.style.transform = '';
});


/* ==========================================================
   TOMBOL MAGNETIK
   ========================================================== */
$$('.mg').forEach((btn) => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) * .25;
    const dy = (e.clientY - rect.top - rect.height / 2) * .35;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});


/* ==========================================================
   CAHAYA KARTU MENGIKUTI KURSOR
   ========================================================== */
const spotlight = (card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', e.clientX - rect.left + 'px');
    card.style.setProperty('--my', e.clientY - rect.top + 'px');
  });
};

$$('.card').forEach(spotlight);


/* ==========================================================
   PRESTASI: tampil, filter, dan pencarian
   ========================================================== */
let filterCat = 'all';
let filterYear = 'all';
let filterQuery = '';
let limit = 12;

const achGrid = $('#ag');

// Tombol kategori
$('#catf').innerHTML =
  '<button class="chip on" data-k="all">Semua</button>' +
  Object.entries(CAT)
    .map(([key, val]) => `<button class="chip" data-k="${key}">${val[1]} ${val[0]}</button>`)
    .join('');

// Dropdown tahun
const years = [...new Set(A.map((x) => x[4]).filter(Boolean))].sort().reverse();
$('#yf').innerHTML =
  '<option value="all">Semua tahun</option>' +
  years.map((y) => `<option>${y}</option>`).join('');

// Amankan teks sebelum masuk HTML
const escapeHtml = (str) =>
  str.replace(/[&<>"]/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  }[c]));

function renderAchievements() {
  const list = A.filter((x) =>
    (filterCat === 'all' || x[5] === filterCat) &&
    (filterYear === 'all' || x[4] === filterYear) &&
    (!filterQuery || x.join(' ').toLowerCase().includes(filterQuery))
  );

  achGrid.innerHTML = list
    .slice(0, limit)
    .map((x, i) => `
      <article class="card ach ${x[6]}" style="animation-delay:${i % 12 * .05}s">
        <div class="md">${MED[x[6]]}</div>
        <div>
          <h3>${escapeHtml(x[0])}</h3>
          ${x[1] ? `<p>${escapeHtml(x[1])}</p>` : ''}
          <div class="meta">
            <span>${CAT[x[5]][1]} ${CAT[x[5]][0]}</span>
            ${x[4] ? `<span>${x[4]}</span>` : ''}
            ${x[2] ? `<span>${escapeHtml(x[2])}</span>` : ''}
            ${x[3] ? `<span>${escapeHtml(x[3])}</span>` : ''}
          </div>
        </div>
      </article>`)
    .join('');

  $$('.ach', achGrid).forEach(spotlight);

  $('#empty').style.display = list.length ? 'none' : 'block';
  $('#more').style.display = list.length > limit ? 'inline-block' : 'none';
  $('#more').textContent = `Tampilkan lebih banyak (${list.length - limit} lagi)`;
}

$('#catf').onclick = (e) => {
  const btn = e.target.closest('.chip');
  if (!btn) return;

  filterCat = btn.dataset.k;
  limit = 12;
  $$('#catf .chip').forEach((chip) => chip.classList.toggle('on', chip === btn));
  renderAchievements();
};

$('#yf').onchange = (e) => {
  filterYear = e.target.value;
  limit = 12;
  renderAchievements();
};

$('#q').oninput = (e) => {
  filterQuery = e.target.value.trim().toLowerCase();
  limit = 12;
  renderAchievements();
};

$('#more').onclick = () => {
  limit += 12;
  renderAchievements();
};

// Angka statistik prestasi (dihitung otomatis dari data)
$('#pt').dataset.c = A.length;
$('#pg').dataset.c = A.filter((x) => x[6] === 'gold').length;
$('#pc').dataset.c = Object.keys(CAT).length;

renderAchievements();


/* ==========================================================
   REVEAL, ANGKA BERHITUNG, DAN BAR KEAHLIAN
   ========================================================== */
const countUp = (el) => {
  const target = +el.dataset.c;
  const decimals = +el.dataset.d || 0;
  const start = performance.now();

  (function step(now) {
    const t = Math.min((now - start) / 1600, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = (target * eased).toFixed(decimals).replace('.', ',');
    if (t < 1) requestAnimationFrame(step);
  })(start);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    el.classList.add('in');

    $$('[data-c]', el).forEach(countUp);
    $$('[data-v]', el).forEach((bar) => {
      bar.style.width = bar.dataset.v + '%';
    });

    observer.unobserve(el);
  });
}, { threshold: .2 });

$$('.rv').forEach((el) => observer.observe(el));


/* ==========================================================
   FILTER ORGANISASI
   ========================================================== */
$('[data-f="org"]').addEventListener('click', (e) => {
  const btn = e.target.closest('.chip');
  if (!btn) return;

  $$('.chip', e.currentTarget).forEach((chip) => chip.classList.toggle('on', chip === btn));

  $$('.card', $('#orgg')).forEach((card) => {
    const hidden = btn.dataset.k !== 'all' && card.dataset.k !== btn.dataset.k;
    card.classList.toggle('hide', hidden);
  });
});


/* ==========================================================
   SCROLL: progress, menu aktif, timeline, tombol ke atas
   ========================================================== */
const navLinks = $$('#links a');
const sections = navLinks.map((a) => $(a.getAttribute('href')));

addEventListener('scroll', () => {
  const doc = document.documentElement;
  const percent = scrollY / (doc.scrollHeight - innerHeight);

  $('#bar').style.width = percent * 100 + '%';
  $('#top').classList.toggle('show', scrollY > 600);

  // Menu yang sedang aktif
  let current = 0;
  sections.forEach((section, i) => {
    if (section.getBoundingClientRect().top < innerHeight * .4) current = i;
  });
  navLinks.forEach((a, i) => a.classList.toggle('on', i === current));

  // Garis timeline terisi
  const rect = $('#tl').getBoundingClientRect();
  const filled = Math.max(0, Math.min(rect.height, innerHeight * .6 - rect.top));
  $('#fb').style.height = filled + 'px';
}, { passive: true });

$('#top').onclick = () => scrollTo({ top: 0 });


/* ==========================================================
   MENU HP DAN TEMA TERANG/GELAP
   ========================================================== */
$('#burger').onclick = () => $('#links').classList.toggle('open');

$('#links').onclick = (e) => {
  if (e.target.tagName === 'A') $('#links').classList.remove('open');
};

$('#theme').onclick = function () {
  const root = document.documentElement;
  const isDark = root.dataset.theme === 'dark';

  root.dataset.theme = isDark ? 'light' : 'dark';
  this.textContent = isDark ? '☀' : '☾';
};


/* ==========================================================
   CONFETTI
   ========================================================== */
const fxCanvas = $('#fx');
const fxCtx = fxCanvas.getContext('2d');
let confetti = [];

function boom(x, y) {
  const colors = ['#d4af62', '#f0dba5', '#6f8fe0', '#fff'];

  for (let i = 0; i < 110; i++) {
    confetti.push({
      x,
      y,
      vx: (Math.random() - .5) * 14,
      vy: Math.random() * -13 - 2,
      r: Math.random() * 5 + 2,
      c: colors[i % 4],
      l: 100
    });
  }
}

(function drawConfetti() {
  fxCanvas.width = innerWidth;
  fxCanvas.height = innerHeight;

  confetti = confetti.filter((p) => p.l > 0);

  confetti.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += .4;
    p.l--;

    fxCtx.globalAlpha = p.l / 100;
    fxCtx.fillStyle = p.c;
    fxCtx.fillRect(p.x, p.y, p.r, p.r * 1.6);
  });

  requestAnimationFrame(drawConfetti);
})();

$('#seal').onclick = (e) => {
  boom(e.clientX, e.clientY);
  toast('Nilai rata-rata 95,84!');
};


/* ==========================================================
   KONTAK
   ========================================================== */
const EMAIL = 'dafadwiandika2@gmail.com';

$('#cp').onclick = (e) => {
  e.preventDefault();
  navigator.clipboard?.writeText(EMAIL).then(
    () => toast('Email disalin'),
    () => toast(EMAIL)
  );
};

$('#fm').onsubmit = (e) => {
  e.preventDefault();

  const name = $('#nn').value.trim();
  const message = $('#ps').value.trim();

  if (!name || !message) return toast('Isi nama dan pesan dulu');

  const subject = encodeURIComponent('Pesan dari ' + name);
  const body = encodeURIComponent(message);
  location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
};


/* ==========================================================
   EASTER EGG (kode Konami)
   ========================================================== */
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

addEventListener('keydown', (e) => {
  konamiIndex = e.keyCode === konami[konamiIndex] ? konamiIndex + 1 : 0;

  if (konamiIndex === konami.length) {
    konamiIndex = 0;
    boom(innerWidth / 2, innerHeight / 2);
    boom(innerWidth / 4, innerHeight / 2);
    boom(innerWidth * .75, innerHeight / 2);
    toast('Kamu menemukan easter egg!');
  }
});