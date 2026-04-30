// ── PAGE LOADER ──
window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loader').classList.add('hidden');
  }, 2000);
});

// ── PAGE SWITCHING ──
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(function (page) {
    page.classList.remove('active');
  });
  document.getElementById('page-' + pageId).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMenu();
}

// ── HAMBURGER ──
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const burger = document.getElementById('hamburger');
  nav.classList.toggle('open');
  burger.classList.toggle('open');
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
  const nav = document.getElementById('navbar');
  nav.style.boxShadow = window.scrollY > 50
    ? '0 4px 20px rgba(0,0,0,0.5)'
    : 'none';
});

// ── FAQ TOGGLE ──
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-a').forEach(function (a) {
    a.classList.remove('open');
  });
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.classList.remove('open');
  });

  // Open clicked one if it was closed
  if (!isOpen) {
    answer.classList.add('open');
    btn.classList.add('open');
  }
}

// ── CONTACT FORM ──
function submitForm() {
  const name = document.getElementById('fname').value;
  const phone = document.getElementById('fphone').value;
  const product = document.getElementById('fproduct').value;
  const msg = document.getElementById('fmsg').value;

  if (name === '' || phone === '') {
    alert('Please fill your name and phone number!');
    return;
  }

  const text = `Hi! I am ${name}. My number is ${phone}. I want to order ${product}. ${msg}`;
  window.open(`https://wa.me/919486772630?text=${encodeURIComponent(text)}`, '_blank');
}