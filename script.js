(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const loader = $('#loader');
  window.addEventListener('load', () => setTimeout(() => loader.classList.add('hide'), 450));
  setTimeout(() => loader.classList.add('hide'), 2500);

  // Decorative ambient particles and petals are generated locally; no image assets required.
  const ambient = $('#ambient');
  for (let i = 0; i < 34; i++) {
    const p = document.createElement('i'); p.className = 'particle';
    p.style.left = `${Math.random() * 100}%`; p.style.top = `${Math.random() * 100}%`;
    p.style.animationDelay = `${Math.random() * 5}s`; p.style.animationDuration = `${3 + Math.random() * 5}s`;
    ambient.appendChild(p);
  }
  for (let i = 0; i < 13; i++) {
    const p = document.createElement('i'); p.className = 'petal';
    p.style.left = `${Math.random() * 100}%`; p.style.animationDelay = `${Math.random() * 16}s`;
    p.style.animationDuration = `${13 + Math.random() * 13}s`; p.style.transform = `scale(${.55 + Math.random() * .8})`;
    ambient.appendChild(p);
  }

  const menu = $('#navMenu'), menuBtn = $('#menuToggle');
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', String(open));
  });
  $$('#navMenu a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }));
  $('#enterBtn').addEventListener('click', () => $('#welcome').scrollIntoView({ behavior: 'smooth' }));

  let language = 'en';
  const langBtn = $('#langToggle');
  langBtn.addEventListener('click', () => {
    language = language === 'en' ? 'ta' : 'en';
    document.documentElement.lang = language; document.body.classList.toggle('tamil', language === 'ta');
    $$('[data-en][data-ta]').forEach(el => { el.innerHTML = el.dataset[language]; });
    langBtn.innerHTML = language === 'en' ? '文 <span>தமிழ்</span>' : '文 <span>English</span>';
    document.title = language === 'en' ? 'V. Rajeshwari ♥ D. Gowtham | Wedding Invitation' : 'வி. ராஜேஸ்வரி ♥ டி. கௌதம் | திருமண அழைப்பிதழ்';
  });

  // Wedding muhurtham: 22 November 2026, 07:30 AM India Standard Time (UTC+05:30).
  const target = new Date('2026-11-22T07:30:00+05:30').getTime();
  const countdownMessage = $('#countdownMessage');
  function updateCountdown() {
    const now = Date.now(), diff = target - now;
    if (diff <= 0) {
      ['days','hours','minutes','seconds'].forEach(id => $('#' + id).textContent = '00');
      countdownMessage.textContent = language === 'en' ? 'The wedding celebration has begun. Bless the couple!' : 'திருமண விழா இனிதே தொடங்கியுள்ளது. மணமக்களை வாழ்த்துங்கள்!';
      return;
    }
    const values = { days: Math.floor(diff / 86400000), hours: Math.floor(diff / 3600000) % 24, minutes: Math.floor(diff / 60000) % 60, seconds: Math.floor(diff / 1000) % 60 };
    Object.entries(values).forEach(([id, value]) => $('#' + id).textContent = String(value).padStart(2, '0'));
  }
  updateCountdown(); setInterval(updateCountdown, 1000);

  const music = $('#bgMusic'), musicBtn = $('#musicBtn'), musicLabel = $('#musicLabel');
  musicBtn.addEventListener('click', async () => {
    if (music.paused) {
      try { await music.play(); musicBtn.textContent = 'Ⅱ'; musicBtn.setAttribute('aria-label', 'Pause background music'); musicLabel.textContent = language === 'en' ? 'MUSIC ON' : 'இசை ஒலிக்கிறது'; }
      catch { musicLabel.textContent = language === 'en' ? 'ADD YOUR MUSIC FILE' : 'இசைக் கோப்பைச் சேர்க்கவும்'; }
    } else { music.pause(); musicBtn.textContent = '♫'; musicBtn.setAttribute('aria-label', 'Play background music'); musicLabel.textContent = language === 'en' ? 'MUSIC OFF' : 'இசை நிறுத்தம்'; }
  });

  const shareText = 'Wedding Invitation — V. Rajeshwari ♥ D. Gowtham\nReception: Saturday, 21 November 2026, 6:00 PM onwards\nMuhurtham: Sunday, 22 November 2026, 7:30 AM to 9:00 AM\nVenue: Kumarasamy Marriage Hall, Kottamedu';
  $('#shareBtn').addEventListener('click', async () => {
    const shareData = { title: 'V. Rajeshwari ♥ D. Gowtham | Wedding Invitation', text: shareText, url: location.href };
    if (navigator.share) { try { await navigator.share(shareData); } catch (err) { if (err.name !== 'AbortError') fallbackShare(); } }
    else fallbackShare();
  });
  function fallbackShare() {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText + '\n' + location.href)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
  $$('.reveal').forEach(el => observer.observe(el));
})();
