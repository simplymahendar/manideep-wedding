(() => {
  const weddingTime = new Date('2026-08-27T11:05:00+05:30').getTime();
  const el = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
  };

  function updateCountdown() {
    const distance = weddingTime - Date.now();
    if (distance <= 0) {
      document.getElementById('countdown').innerHTML = '<div style="grid-column:1/-1"><strong>💐</strong><span>Wedding day has arrived</span></div>';
      return;
    }
    const d = Math.floor(distance / 86400000);
    const h = Math.floor((distance % 86400000) / 3600000);
    const m = Math.floor((distance % 3600000) / 60000);
    const s = Math.floor((distance % 60000) / 1000);
    el.days.textContent = String(d);
    el.hours.textContent = String(h).padStart(2, '0');
    el.minutes.textContent = String(m).padStart(2, '0');
    el.seconds.textContent = String(s).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  const shareBtn = document.getElementById('shareBtn');
  shareBtn.addEventListener('click', async () => {
    const shareData = {
      title: 'Manideep & Kusumakumari | Wedding Invitation',
      text: 'You are warmly invited to the wedding of Manideep & Kusumakumari on 27 August 2026 at A.M.R. Gardens, Kompally, Hyderabad.',
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        const small = shareBtn.querySelector('small');
        const old = small.textContent;
        small.textContent = 'Link copied';
        setTimeout(() => (small.textContent = old), 1800);
      }
    } catch (_) {
      // User cancelled sharing; no action needed.
    }
  });
})();
