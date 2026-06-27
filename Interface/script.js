const defaultConfig = {
    hero_name: "Rudra Mojumder",
    hero_title: "web developer",
    hero_tagline: 
    "I design and build fast, accessible, and thoughtfully-crafted digital experiences — turning ideas into interfaces that feel right.",
    about_text: 
    "I'm a web developer with a passion for building interfaces that feel intentional — where every pixel, interaction, and line of code earns its place. I bridge the gap between design and engineering, shipping products that look beautiful and perform flawlessly.",
    cp_text: 
    "Beyond web development, I actively participate in competitive programming challenges. I enjoy solving complex algorithmic problems, optimizing for time and space complexity, and competing in contests that sharpen my problem-solving skills.",
    contact_email: 
    "r17.gfx@gmail.com",
    cv_url: 
    "Assets/Rudra_Mojumder_CV.png",
    codeForces_url: "https://leetcode.com/u/TheRudraBro/",
    leetCode_url: "https://leetcode.com/u/TheRudraBro/",
    hackerRank_url: "https://leetcode.com/u/TheRudraBro/",
    codeChef_url: "https://leetcode.com/u/TheRudraBro/",

    project_1_url: "https://tourism-bangladesh.netlify.app/",
    project_2_url: "https://english-vocabularies-learning-janala.netlify.app/",
    project_3_url: "https://payooo-mobile-bank-project.netlify.app/",
    project_4_url: "https://emergency-services-bd.netlify.app/"
  };

  const projects = [
  {
    num: "01",
    title: "Tourism Bangladesh",
    desc: "A platform for promoting tourism in Bangladesh with a focus on user experience and accessibility.",
    tags: ["JavaScript", "MongoDB", "Firebase"],
    year: "2026",
    url: "https://tourism-bangladesh.netlify.app/",
    image: "https://i.ibb.co.com/FMWrhF6/Screenshot-2026-05-06-210424.png",
    type: "website"
  },
  {
    num: "02",
    title: "English Janala",
    desc: "An interactive platform for learning English vocabulary through engaging exercises.",
    tags: ["JavaScript", "HTML", "TailwindCSS"],
    year: "2025",
    url: "https://english-vocabularies-learning-janala.netlify.app/",
    image: "https://i.ibb.co.com/zWcJthss/Screenshot-2026-05-06-211012.png",
    type: "website"
  },
  {
    num: "03",
    title: "Mobile Banking",
    desc: "A secure and user-friendly mobile banking application.",
    tags: ["JavaScript", "HTML", "TailwindCSS"],
    year: "2025",
    url: "https://payooo-mobile-bank-project.netlify.app/",
    image: "https://i.ibb.co.com/1JfKw563/Screenshot-2026-05-06-211437.png",
    type: "website"
  },
  {
    num: "04",
    title: "Emergency Services BD",
    desc: "A platform for connecting users with emergency services in Bangladesh.",
    tags: ["JavaScript", "HTML", "TailwindCSS"],
    year: "2025",
    url: "https://emergency-services-bd.netlify.app/",
    image: "https://i.ibb.co.com/hRWf75g0/Screenshot-2026-05-06-211333.png",
    type: "website"
  },
    {
    num: "05",
    title: "Expense Tracker - Mobile App (Under Development)",
    desc: "A web application for tracking personal expenses and managing budgets effectively.",
    tags: ["JavaScript", "React native"],
    year: "2025",
    url: "https://emergency-services-bd.netlify.app/",
    image: "https://i.ibb.co.com/67MK6KM3/expensetracker.png",
    type: "app"
  },
   {
    num: "06",
    title: "Orbric Clothes - Website (Under Development)",
    desc: "A web application for tracking personal expenses and managing budgets effectively.",
    tags: ["JavaScript", "HTML"],
    year: "2026",
    url: "https://emergency-services-bd.netlify.app/",
    image: "https://ibb.co.com/RTG3088f",
    type: "website"
  }
];

  const skills = [
    { name: "Frontend Development", level: 95, tag: "React / Next / Vue" },
    { name: "UI / UX Design", level: 88, tag: "Figma / Design Systems" },
    { name: "Backend & APIs", level: 82, tag: "Node / Postgres / REST" },
    { name: "Animation & Motion", level: 78, tag: "GSAP / Framer Motion" },
    { name: "TypeScript", level: 90, tag: "Types / Generics" },
    { name: "Performance & SEO", level: 85, tag: "Core Web Vitals" }
  ];

let previewMode = true;
let activeFilter = "all";
function renderProjects() {
  const grid = document.getElementById("projects-grid");

  let filtered = projects.filter(p => {
    if (activeFilter === "all") return true;
    return p.type === activeFilter;
  });

  // 👉 NEW: preview mode logic
  if (previewMode) {
    filtered = filtered.slice(0, 4);
  }

  grid.innerHTML = filtered.map((p, i) => `
    <a href="${p.url}" target="_blank"
      class="project-card relative noise-border bg-[var(--surface)] rounded-2xl overflow-hidden block group hover:-translate-y-2"
      style="opacity:0; transform:translateY(20px);">

      <div class="overflow-hidden">
        <img src="${p.image}"
          class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700">
      </div>

      <div class="p-8 md:p-10">

        <div class="flex justify-between mb-10">
          <span class="font-mono text-xs text-neutral-500">
            ${p.num} — ${p.year}
          </span>

          <div class="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all">
            <i data-lucide="arrow-up-right" class="w-4 h-4 group-hover:text-black"></i>
          </div>
        </div>

        <h3 class="font-display text-3xl mb-3 group-hover:text-[var(--accent)] transition-colors">
          ${p.title}
        </h3>

        <p class="text-neutral-400 text-sm mb-6">
          ${p.desc}
        </p>

        <div class="flex flex-wrap gap-2">
          ${p.tags.map(t => `
            <span class="font-mono text-xs px-3 py-1 rounded-full border border-neutral-800 text-neutral-400">
              ${t}
            </span>
          `).join("")}
        </div>

      </div>
    </a>
  `).join("");

  lucide.createIcons();
  animateCards();
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
    document.getElementById('cp-text').textContent = config.cp_text || defaultConfig.cp_text;
    document.getElementById('footer-name').textContent = name;

    const email = config.contact_email || defaultConfig.contact_email;
    document.getElementById('contact-email-text').textContent = email;
    document.getElementById('hero-email-link').href = `mailto:${email}`;

    // CV Download (force image download)
const cvUrl = config.cv_url || defaultConfig.cv_url;
const cvBtn = document.getElementById('cv-download-btn');
const cvBtnMobile = document.getElementById('cv-download-mobile-btn');

function downloadCV(url) {
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Rudra-Mojumder-CV.png'; // file name when downloaded
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

if (cvUrl) {
  cvBtn.onclick = () => downloadCV(cvUrl);
  cvBtnMobile.onclick = () => downloadCV(cvUrl);
} else {
  cvBtn.onclick = null;
  cvBtnMobile.onclick = null;
  cvBtn.classList.add('cursor-not-allowed', 'opacity-50');
  cvBtnMobile.classList.add('cursor-not-allowed', 'opacity-50');
}

    // Update project URLs
    projects.forEach((p, i) => {
      p.url = config[`project_${i + 1}_url`] || '';
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
      const toastText = document.getElementById('toast-text');
      toastText.textContent = 'Email copied!';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    } catch (e) {
      console.error('Failed to copy');
    }
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

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formStatus = document.getElementById('form-status');
    const sendBtn = contactForm.querySelector('button[type="submit"]');
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const message = document.getElementById('form-message').value;
    
    // Disable button and show loading
    sendBtn.disabled = true;
    const originalText = document.getElementById('send-btn-text').textContent;
    document.getElementById('send-btn-text').textContent = 'sending...';
    formStatus.textContent = '';
    
    // Since we can't actually send emails from frontend, we'll show success
    // In production, you'd send this to a backend service
    setTimeout(() => {
      formStatus.textContent = 'Message received! I\'ll get back to you soon.';
      formStatus.style.color = 'var(--accent)';
      contactForm.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        sendBtn.disabled = false;
        document.getElementById('send-btn-text').textContent = originalText;
        formStatus.textContent = '';
      }, 3000);
    }, 1500);
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
        ["cp_text", config.cp_text || defaultConfig.cp_text],
        ["contact_email", config.contact_email || defaultConfig.contact_email],
        ["cv_url", config.cv_url || defaultConfig.cv_url],
        ["project_1_url", config.project_1_url || defaultConfig.project_1_url],
        ["project_2_url", config.project_2_url || defaultConfig.project_2_url],
        ["project_3_url", config.project_3_url || defaultConfig.project_3_url],
        ["project_4_url", config.project_4_url || defaultConfig.project_4_url]
      ])
    });
  }


 function setActiveButton(activeId) {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => {
    btn.classList.remove(
      "border-[var(--accent)]",
      "text-[var(--accent)]"
    );

    btn.classList.add(
      "border-neutral-700",
      "text-neutral-400"
    );
  });

  const activeBtn = document.getElementById(activeId);

  activeBtn.classList.remove(
    "border-neutral-700",
    "text-neutral-400"
  );

  activeBtn.classList.add(
    "border-[var(--accent)]",
    "text-[var(--accent)]"
  );
}
function animateCards() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px) scale(0.98)";

    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
    }, i * 80);
  });
}

document.getElementById("filter-all").addEventListener("click", () => {
  previewMode = false;
  activeFilter = "all";
  setActiveButton("filter-all");
  renderProjects();
});

document.getElementById("filter-website").addEventListener("click", () => {
  previewMode = false;
  activeFilter = "website";
  setActiveButton("filter-website");
  renderProjects();
});

document.getElementById("filter-app").addEventListener("click", () => {
  previewMode = false;
  activeFilter = "app";
  setActiveButton("filter-app");
  renderProjects();
});

window.addEventListener("load", () => {
  previewMode = true;
  activeFilter = "all";
  renderProjects();
});