// Shared nav HTML — injected into all pages
const NAV_HTML = `
<nav class="nav">
  <div class="container nav__inner">
    <a href="/" class="nav__logo">Get<span>Bubble</span>Planet</a>
    <div class="nav__links">
      <a href="/pages/bubble-planet-tickets.html">All tickets</a>
      <a href="/pages/bubble-planet-prices.html">Prices</a>
      <a href="/pages/bubble-planet-discount-code.html">Discounts</a>
      <a href="/pages/what-is-bubble-planet.html">About</a>
    </div>
    <a href="/pages/bubble-planet-tickets.html" class="btn btn--primary nav__cta">Book tickets →</a>
    <button class="nav__mobile-btn" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <div class="footer__brand-name">Get<span>Bubble</span>Planet</div>
        <p class="footer__desc">Independent guide to Bubble Planet tickets, prices and availability worldwide.</p>
      </div>
      <div>
        <div class="footer__col-title">Top cities</div>
        <div class="footer__links">
          <a href="/pages/bubble-planet-london.html">London</a>
          <a href="/pages/bubble-planet-new-york.html">New York</a>
          <a href="/pages/bubble-planet-sydney.html">Sydney</a>
          <a href="/pages/bubble-planet-berlin.html">Berlin</a>
          <a href="/pages/bubble-planet-manchester.html">Manchester</a>
        </div>
      </div>
      <div>
        <div class="footer__col-title">Resources</div>
        <div class="footer__links">
          <a href="/pages/what-is-bubble-planet.html">What is Bubble Planet?</a>
          <a href="/pages/bubble-planet-tickets.html">All tickets</a>
          <a href="/pages/bubble-planet-prices.html">Price guide</a>
          <a href="/pages/bubble-planet-discount-code.html">Discount codes</a>
          <a href="/pages/bubble-planet-reviews.html">Reviews</a>
        </div>
      </div>
      <div>
        <div class="footer__col-title">Deutsch</div>
        <div class="footer__links">
          <a href="/pages/bubble-planet-berlin.html">Berlin</a>
          <a href="#">Köln</a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__copy">© 2025 GetBubblePlanet.com · Independent ticket guide</div>
      <div class="footer__disclosure"><strong>Affiliate disclosure:</strong> This site contains sponsored links. We may earn a small commission when you buy through our links, at no extra cost to you. We only link to official Bubble Planet booking pages.</div>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if(navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;
  if(footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
});
