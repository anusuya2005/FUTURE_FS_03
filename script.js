// ── PAGE LOADER ──
window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loader').classList.add('hidden');
  }, 2000);
});

// ── PAGE SWITCHING ──
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(function (p) {
    p.classList.remove('active');
  });
  document.getElementById('page-' + pageId).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMenu();
}

// ── HAMBURGER ──
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// ── DROPDOWN ──
function toggleDropdown(e) {
  e.preventDefault();
  const menu = e.target.nextElementSibling;
  if (menu) menu.classList.toggle('open');
}

// ── NAVBAR SHADOW ──
window.addEventListener('scroll', function () {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 50 ? '0 4px 20px rgba(0,0,0,0.5)' : 'none';
});

// ── MARQUEE BANNER — works on all devices ──
(function () {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  // duplicate text so it loops seamlessly
  track.innerHTML += track.innerHTML;
  let pos = 0;
  const speed = 0.5;
  const totalWidth = track.scrollWidth / 2;
  function animate() {
    pos -= speed;
    if (Math.abs(pos) >= totalWidth) pos = 0;
    track.style.transform = 'translateX(' + pos + 'px)';
    requestAnimationFrame(animate);
  }
  animate();
})();

// ── STAR RATING ──
var selectedRating = 5;

function setRating(val) {
  selectedRating = val;
  const stars = document.querySelectorAll('.star-rating span');
  stars.forEach(function (s, i) {
    s.classList.toggle('active', i < val);
  });
}

// Set default 5 stars on load
window.addEventListener('DOMContentLoaded', function () {
  setRating(5);
});

// ── FAQ TOGGLE ──
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(function (a) { a.classList.remove('open'); });
  document.querySelectorAll('.faq-q').forEach(function (q) { q.classList.remove('open'); });
  if (!isOpen) {
    answer.classList.add('open');
    btn.classList.add('open');
  }
}

// ── REVIEW SUBMIT ──
function submitReview() {
  const name = document.getElementById('rname').value.trim();
  const product = document.getElementById('rproduct').value;
  const review = document.getElementById('rtext').value.trim();
  const stars = '★'.repeat(selectedRating) + '☆'.repeat(5 - selectedRating);

  if (!name || !review) {
    alert('Please fill your name and write your review!');
    return;
  }

  const msg =
    `Hi Kai Manam! I want to share my review.\n\n` +
    `Name: ${name}\n` +
    `Product: ${product}\n` +
    `Rating: ${stars}\n` +
    `Review: ${review}`;

  window.open(
    'https://wa.me/919486772630?text=' + encodeURIComponent(msg),
    '_blank'
  );
}

// ── CONTACT FORM ──
function submitForm() {
  const name = document.getElementById('fname').value.trim();
  const phone = document.getElementById('fphone').value.trim();
  const product = document.getElementById('fproduct').value;
  const msg = document.getElementById('fmsg').value.trim();

  if (!name || !phone) {
    alert('Please fill your name and phone number!');
    return;
  }

  const text =
    `Hi! I am ${name}.\n` +
    `My number is ${phone}.\n` +
    `I want to order: ${product}.\n` +
    (msg ? `Message: ${msg}` : '');

  window.open(
    'https://wa.me/919486772630?text=' + encodeURIComponent(text),
    '_blank'
  );
}