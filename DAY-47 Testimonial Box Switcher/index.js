const testimonials = [
  { text: '"This is the best service I have ever used. Highly recommend to everyone looking for quality and reliability.', name: 'Sarah Johnson', role: 'Web Developer', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { text: '"Absolutely fantastic experience from start to finish. The team was professional and the results exceeded expectations.', name: 'James Carter', role: 'UI Designer', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { text: '"I was blown away by the quality of work. Will definitely be coming back for future projects without hesitation.', name: 'Emily Davis', role: 'Product Manager', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { text: '"Outstanding support and incredible attention to detail. This service has transformed the way our team works daily.', name: 'Michael Lee', role: 'Full Stack Developer', img: 'https://randomuser.me/api/portraits/men/75.jpg' },
];

const textEl    = document.getElementById('text');
const nameEl    = document.getElementById('name');
const roleEl    = document.getElementById('role');
const avatarEl  = document.getElementById('avatar');
const progress  = document.getElementById('progress');

let current = 0;
let width = 0;
let interval;

function loadTestimonial(index) {
  const t = testimonials[index];
  textEl.textContent   = t.text;
  nameEl.textContent   = t.name;
  roleEl.textContent   = t.role;
  avatarEl.src         = t.img;
}

function startProgress() {
  clearInterval(interval);
  width = 0;
  progress.style.width = '0%';

  interval = setInterval(() => {
    width += 0.5;
    progress.style.width = width + '%';

    if (width >= 100) {
      current = (current + 1) % testimonials.length;
      loadTestimonial(current);
      width = 0;
    }
  }, 30);
}

loadTestimonial(current);
startProgress();
