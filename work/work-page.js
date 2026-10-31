(function () {
  const slug = document.body.dataset.projectSlug;
  const project = window.PROJECTS_BY_SLUG ? window.PROJECTS_BY_SLUG[slug] : null;
  const siteTitle = 'Stella Cherotich';

  const setMetaTag = (attr, key, value) => {
    if (!value) return;
    let meta = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attr, key);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', value);
  };


  const navHtml = `
    <a class="skip" href="#case-study-root">Skip to content</a>
    <header class="site-nav" id="main-nav"><div class="wrap">
      <a href="/" class="brand">Stella Cherotich</a>
      <button class="nav-toggle" id="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links">Menu</button>
      <ul class="nav-links" id="nav-links">
        <li><a href="/#about">About</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#work">Work</a></li>
        <li><a href="/#education">Education</a></li>
        <li><a href="/#community">Community</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li><a class="cv" href="/Stella-Cherotich-Kitur-CV.pdf" target="_blank" rel="noopener">CV</a></li>
      </ul>
    </div></header>`;
  const addNav = () => {
    if (document.getElementById('main-nav')) return;
    document.body.insertAdjacentHTML('afterbegin', navHtml);
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    const setMenu = (open) => { links.classList.toggle('open', open); toggle.setAttribute('aria-expanded', String(open)); };
    toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
    links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  };
  addNav();

  if (!project) {
    document.title = `Project Not Found | ${siteTitle}`;
    const root = document.getElementById('case-study-root');
    root.innerHTML = '<section class="not-found"><h1>Project not found</h1><p>The case study you requested does not exist.</p><a href="/#projects">Back to Projects</a></section>';
    return;
  }

  const pageTitle = `${project.title} | Work | ${siteTitle}`;
  const description = project.problemStatement;
  const canonical = `${window.location.origin}/work/${project.slug}/`;

  document.title = pageTitle;
  setMetaTag('name', 'description', description);
  setMetaTag('property', 'og:title', pageTitle);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:type', 'article');
  setMetaTag('property', 'og:url', canonical);
  if (project.ogImage) setMetaTag('property', 'og:image', `${window.location.origin}${project.ogImage}`);
  setMetaTag('name', 'twitter:card', project.ogImage ? 'summary_large_image' : 'summary');
  setMetaTag('name', 'twitter:title', pageTitle);
  setMetaTag('name', 'twitter:description', description);
  if (project.ogImage) setMetaTag('name', 'twitter:image', `${window.location.origin}${project.ogImage}`);

  let canonicalLink = document.head.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonical);

  const root = document.getElementById('case-study-root');
  root.innerHTML = `
    <main class="case-study-page visible">
      <section class="cs-hero">
        <a class="cs-back" href="/#projects">&larr; Back to Projects</a>
        <div class="cs-hero-grid">
          <div>
            <span class="cs-tag">Case Study · ${project.year}</span>
            <h1>${project.title}</h1>
            <p>${project.summary}</p>
            ${(project.links || []).map((l) => `<a class="cs-link" href="${l.href}"${l.external ? ' target="_blank" rel="noopener"' : ''}>${l.label}</a>`).join('')}
          </div>
          <div class="cs-details">
            <div class="cs-detail-item"><span class="cs-detail-label">Client</span><span class="cs-detail-value">${project.client}</span></div>
            <div class="cs-detail-item"><span class="cs-detail-label">Problem</span><span class="cs-detail-value">${project.problemStatement}</span></div>
            <div class="cs-detail-item"><span class="cs-detail-label">Solution</span><span class="cs-detail-value">${project.solution}</span></div>
          </div>
        </div>
      </section>

      <section class="cs-content">
        <div class="cs-section">
          <h2>Problem Statement</h2>
          <p>${project.problemStatement}</p>
        </div>

        <div class="cs-section">
          <h2>Solution</h2>
          <p>${project.solution}</p>
          <ul>
            ${project.details.approach.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div class="cs-section">
          <h2>Context</h2>
          ${project.details.context.map((paragraph) => `<p>${paragraph}</p>`).join('')}
        </div>

        <div class="cs-impact-grid">
          ${project.details.impact
            .map((item) => `<div class="impact-card"><span class="impact-number">${item.value}</span><span class="impact-label">${item.label}</span></div>`)
            .join('')}
        </div>
      </section>
    </main>
  `;

  requestAnimationFrame(() => {
    document.body.classList.add('page-ready');
  });
})();
