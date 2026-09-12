
const themeBtn = document.getElementById('themeBtn');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeBtn.textContent = document.body.classList.contains('light') ? '☾' : '☀';
});
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
function sendMessage(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    window.location.href = `mailto:mahfujurrahman1319@gmail.com?subject=Portfolio message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\\n\\nFrom: ' + email)}`;
}
