 const defaultConfig = {
    hero_name: "Rudra Mojumder",
    hero_title: "web developer",
    hero_tagline: "I design and build fast, accessible, and thoughtfully-crafted digital experiences — turning ideas into interfaces that feel right.",
    about_text: "I'm a web developer with a passion for building interfaces that feel intentional — where every pixel, interaction, and line of code earns its place. I bridge the gap between design and engineering, shipping products that look beautiful and perform flawlessly.",
    contact_email: "r17.gfx@gmail.com",
    project_1_url: "",
    project_2_url: "",
    project_3_url: "",
    project_4_url: ""
  };

  const projects = [
    { num: "01", title: "Tourism Bangladesh", desc: "A platform for promoting tourism in Bangladesh with a focus on cultural experiences.", tags: ["JavaScript", "MongoDB", "Firebase"], year: "2026", url: "https://tourism-bangladesh.netlify.app/" },
    { num: "02", title: "Loom Studio", desc: "A collaborative writing tool with real-time sync and thoughtful typography.", tags: ["React", "WebSockets", "Postgres"], year: "2024", url: "" },
    { num: "03", title: "Ember Analytics", desc: "Privacy-first product analytics dashboard for indie makers.", tags: ["TypeScript", "D3", "Supabase"], year: "2024", url: "" },
    { num: "04", title: "Folio CMS", desc: "A minimal content management system built for designers and writers.", tags: ["Node.js", "MongoDB", "Tailwind"], year: "2023", url: "" }
  ];

  const skills = [
    { name: "Frontend Development", level: 95, tag: "React / Next / Vue" },
    { name: "UI / UX Design", level: 88, tag: "Figma / Design Systems" },
    { name: "Backend & APIs", level: 82, tag: "Node / Postgres / REST" },
    { name: "Animation & Motion", level: 78, tag: "GSAP / Framer Motion" },
    { name: "TypeScript", level: 90, tag: "Types / Generics" },
    { name: "Performance & SEO", level: 85, tag: "Core Web Vitals" }
  ];

  function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = projects.map((p, i) => `
      <a href="${p.url}" target="${p.url ? '_blank' : ''}" rel="${p.url ? 'noopener noreferrer' : ''}" onclick="${p.url ? 'return true' : 'return false;'}" class="project-card noise-border bg-[var(--surface)] rounded-2xl p-8 md:p-10 block group" style="animation-delay: ${0.1 * i}s">
        <div class="flex items-start justify-between mb-16">
          <span class="font-mono text-xs text-neutral-500">${p.num} — ${p.year}</span>
          <div class="arrow-btn w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all">
            <i data-lucide="arrow-up-right" class="w-4 h-4 text-neutral-300 group-hover:text-black"></i>
          </div>
        </div>
        <h3 class="font-display font-light text-3xl md:text-4xl tracking-tight mb-3 group-hover:text-[var(--accent)] transition-colors">${p.title}</h3>
        <p class="text-neutral-400 text-sm md:text-base mb-6 leading-relaxed">${p.desc}</p>
        <div class="flex flex-wrap gap-2">
          ${p.tags.map(t => `<span class="font-mono text-xs px-3 py-1 rounded-full border border-neutral-800 text-neutral-400">${t}</span>`).join('')}
        </div>
      </a>
    `).join('');
  }

  function renderSkills() {
    const grid = document.getElementById('skills-grid');
    grid.innerHTML = skills.map((s, i) => `
      <div class="py-4 border-b border-neutral-900">
        <div class="flex items-baseline justify-between mb-2">
          <div>
            <span class="font-display text-xl">${s.name}</span>
            <span class="font-mono text-xs text-neutral-600 ml-3">${s.tag}</span>
          </div>
          <span class="font-mono text-xs text-[var(--accent)]">${s.level}%</span>
        </div>
        <div class="h-[2px] bg-neutral-900 rounded-full overflow-hidden">
          <div class="skill-bar-fill h-full bg-[var(--accent)]" style="width: ${s.level}%; animation-delay: ${0.1 * i}s"></div>
        </div>
      </div>
    `).join('');
  }

  function updateUI(config) {
    const name = config.hero_name || defaultConfig.hero_name;
    const firstName = name.split(' ')[0];

    document.getElementById('nav-name').textContent = firstName.toLowerCase() + '.dev';
    document.getElementById('hero-name').textContent = firstName;
    document.getElementById('hero-title').textContent = config.hero_title || defaultConfig.hero_title;
    document.getElementById('hero-tagline').textContent = config.hero_tagline || defaultConfig.hero_tagline;
    document.getElementById('about-text').textContent = config.about_text || defaultConfig.about_text;
    document.getElementById('footer-name').textContent = name;

    const email = config.contact_email || defaultConfig.contact_email;
    document.getElementById('contact-email-text').textContent = email;
    document.getElementById('contact-email-big').href = `mailto:${email}`;
    document.getElementById('hero-email-link').href = `mailto:${email}`;

    // Update project URLs
    projects.forEach((p, i) => {
      p.url = config[`project_${i + 1}_url`] || p.url;
    });
    renderProjects();

    document.title = `${name} — Web Developer`;
  }

  // Init
  renderProjects();
  renderSkills();
  updateUI(defaultConfig);
  lucide.createIcons();

  // Copy email
  document.getElementById('copy-btn').addEventListener('click', async () => {
    const email = document.getElementById('contact-email-text').textContent;
    try {
      await navigator.clipboard.writeText(email);
      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    } catch (e) {}
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuBtn = document.getElementById('close-menu-btn');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
  });

  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
  });

  // Close menu when clicking a nav link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Element SDK
  if (window.elementSdk) {
    window.elementSdk.init({
      defaultConfig,
      onConfigChange: async (config) => {
        updateUI(config);
        lucide.createIcons();
      },
      mapToCapabilities: (config) => ({
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
      }),
      mapToEditPanelValues: (config) => new Map([
        ["hero_name", config.hero_name || defaultConfig.hero_name],
        ["hero_title", config.hero_title || defaultConfig.hero_title],
        ["hero_tagline", config.hero_tagline || defaultConfig.hero_tagline],
        ["about_text", config.about_text || defaultConfig.about_text],
        ["contact_email", config.contact_email || defaultConfig.contact_email],
        ["project_1_url", config.project_1_url || defaultConfig.project_1_url],
        ["project_2_url", config.project_2_url || defaultConfig.project_2_url],
        ["project_3_url", config.project_3_url || defaultConfig.project_3_url],
        ["project_4_url", config.project_4_url || defaultConfig.project_4_url]
      ])
    });
  }