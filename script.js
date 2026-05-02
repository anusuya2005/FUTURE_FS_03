// ── PAGE LOADER ──
// ── LOADER QUOTE TYPING ──
window.addEventListener('load', function () {
  const quote = '"Made with Hands, Served with Heart..."';
  const el = document.getElementById('loaderQuote');
  let i = 0;

  // Type the quote letter by letter
  function typeQuote() {
    if (i < quote.length) {
      el.textContent += quote[i];
      i++;
      setTimeout(typeQuote, 45);
    } else {
      // Quote fully typed — wait then erase
      setTimeout(eraseQuote, 800);
    }
  }

  // Erase the quote letter by letter
  function eraseQuote() {
    if (el.textContent.length > 0) {
      el.textContent = el.textContent.slice(0, -1);
      setTimeout(eraseQuote, 25);
    } else {
      // Quote fully erased — hide loader
      setTimeout(function () {
        document.getElementById('loader').classList.add('hidden');
      }, 300);
    }
  }

  // Start typing after short delay
  setTimeout(typeQuote, 600);
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
    if (i < val) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });
}

// Set default 5 stars when page loads
document.addEventListener('DOMContentLoaded', function () {
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
// ── PACK SELECTION ──
function selectPack(el, groupId) {
  // Remove selected from all in this group
  document.querySelectorAll('#' + groupId + ' .price-tag').forEach(function (tag) {
    tag.classList.remove('selected');
  });
  // Add selected to clicked
  el.classList.add('selected');
}

// ── ORDER WITH SELECTED PACK ──
function orderWithPack(groupId, productName) {
  const selected = document.querySelector('#' + groupId + ' .price-tag.selected');

  let packInfo = '';
  if (selected) {
    const size = selected.childNodes[0].textContent.trim();
    const price = selected.querySelector('span').textContent.trim();
    packInfo = size + ' pack at ' + price;
  } else {
    packInfo = 'pack size not selected — please confirm';
  }

  const msg =
    'Hi! I want to order *' + productName + '* from Kai Manam.\n' +
    'Pack: ' + packInfo + '\n' +
    'Please confirm availability and delivery details.';

  window.open(
    'https://wa.me/919486772630?text=' + encodeURIComponent(msg),
    '_blank'
  );
}
// ── TYPING ANIMATION ──
const phrases = [
  'Handcrafted with love in Pudukkottai, Tamil Nadu.',
  'Because real flavor cannot be factory made.',
  'From our kitchen directly to your home.',
  'Traditional recipes. Pure ingredients. Zero shortcuts.',
  'The aroma from the hand — that is Kai Manam.'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('heroTyping');

function typeText() {
  if (!typingEl) return;

  const current = phrases[phraseIndex];

  if (!isDeleting) {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeText, 2000);
      return;
    }
  } else {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeText, isDeleting ? 40 : 70);
}

// Start typing after loader finishes
setTimeout(typeText, 2200);