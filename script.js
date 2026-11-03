const official = 'https://gitmgurgaon.com/';
const apply = 'https://admissions.gitmgurgaon.com/global-application-form';
const programmeGroups = [
 {category:'engineering', number:'01', icon:'✳', title:'Engineering & Technology', description:'B.Tech & M.Tech programmes', url:'?page=academics#engineering'},
 {category:'management', number:'02', icon:'◈', title:'Business & Management', description:'BBA & MBA programmes', url:'?page=academics#management'},
 {category:'applications', number:'03', icon:'⌘', title:'Computer Applications', description:'BCA & MCA programmes', url:'?page=academics#applications'},
 {category:'pharmacy', number:'04', icon:'✣', title:'Pharmacy', description:'B.Pharmacy & D.Pharmacy programmes', url:'?page=academics#pharmacy'}
];
const courses = [
 ['engineering','B.Tech in Computer Science & Engineering','4 years','b-tech-cse/'],
 ['engineering','B.Tech in AI & Data Science','4 years','artificial-intelligence-and-data-science-in-b-tech/'],
 ['engineering','B.Tech in AI & Machine Learning','4 years','artificial-intelligence-and-machine-learning/'],
 ['engineering','B.Tech in Electronics & Communication','4 years','b-tech-ece/'],
 ['engineering','B.Tech in Mechanical Engineering','4 years','b-tech-me/'],
 ['engineering','B.Tech in Civil Engineering','4 years','b-tech-ce/'],
 ['engineering','B.Tech Lateral Entry','3 years','courses-offered/'],
 ['engineering','M.Tech in Computer Science & Engineering','2 years','m-tech-cse/'],
 ['engineering','M.Tech in Electronics & Communication','2 years','courses-offered/'],
 ['management','Bachelor of Business Administration','3 years','bba/'],
 ['management','Master of Business Administration','2 years','mba/'],
 ['applications','Bachelor of Computer Applications','3 years','bca/'],
 ['applications','Master of Computer Applications','2 years','mca/'],
 ['pharmacy','Bachelor of Pharmacy','4 years','b-pharmacy/'],
 ['pharmacy','Bachelor of Pharmacy (Lateral Entry)','3 years','b-pharmacy-leet/'],
 ['pharmacy','Diploma in Pharmacy','2 years','courses-offered/']
];
const eye = text => `<div class="eyebrow"><span></span> ${text}</div>`;
const pageHero = (label,title,description) => `<section class="page-hero"><div class="crumb"><a href="./">Home</a> &nbsp; / &nbsp; ${label}</div><div class="eyebrow light"><span></span> GLOBAL INSTITUTE OF TECHNOLOGY & MANAGEMENT</div><h1>${title}</h1><p>${description}</p></section>`;
const cta = `<section class="admissions"><div><div class="eyebrow light"><span></span> YOUR NEXT STEP</div><h2>Let’s build your <em>future.</em></h2><p>Have questions? Our admissions team is here to help.</p></div><div class="admission-actions"><a class="btn btn-gold" href="${apply}">Apply to GITM <span>↗</span></a><a class="white-link" href="?page=contact">Talk to us ↗</a></div></section>`;
const about = `${pageHero('About GITM','A place to learn.<br><em>A place to belong.</em>','Get to know the people, purpose and possibilities behind Global Institute of Technology & Management.')}
<section class="page-section split"><div>${eye('OUR STORY')}<h2>Building futures<br><em>since 2008.</em></h2><p>Global Institute of Technology & Management, Farrukhnagar, was established in 2008 with a commitment to technical and management education. Located in Gurugram, our campus brings learning, innovation and opportunity together.</p><p>The institute states that it is approved by AICTE and the Directorate of Technical Education, Haryana, and affiliated to Gurugram University.</p><a class="text-link" href="${official}approvals-affiliation/">View approvals & affiliation <span>↗</span></a></div><img src="assets/campus-building.webp" alt="A building on the GITM campus"></section>
<section class="soft"><div class="page-section"><div class="section-heading"><div>${eye('WHAT GUIDES US')}<h2>A global outlook.<br><em>A grounded purpose.</em></h2></div><p>Education is more than a degree. It’s the confidence to make a difference.</p></div><div class="mini-grid"><div class="mini-card"><span class="icon">✳</span><h3>Our vision</h3><p>To be a globally recognized institution fostering innovation, research excellence and socially responsible professionals.</p></div><div class="mini-card"><span class="icon">◈</span><h3>Our mission</h3><p>Quality education, experiential learning, industry collaboration and ethical leadership for a changing world.</p></div><div class="mini-card"><span class="icon">↗</span><h3>Our community</h3><p>A diverse campus where students learn together, develop new skills and find their own path forward.</p></div></div><div class="quick-links"><a href="${official}founders-message/">Founder’s message ↗</a><a href="${official}chairmans-message/">Chairman’s message ↗</a><a href="${official}directors-message/">Director’s message ↗</a><a href="${official}vision-mission-goal/">Vision & mission ↗</a></div></div></section>${cta}`;
const academics = `${pageHero('Academics','Find your direction.<br><em>Make it yours.</em>','From engineering and technology to management and pharmacy, discover an education built around your ambitions.')}
<section class="page-section">${eye('EXPLORE PROGRAMMES')}<div class="section-heading"><div><h2>A path for every <em>possibility.</em></h2><p>Explore undergraduate, postgraduate, diploma and lateral-entry programmes.</p></div><a class="text-link" href="?page=admissions#eligibility">Eligibility & admissions <span>↗</span></a></div><div class="course-tools" aria-label="Filter programmes"><button class="active" data-filter="all" aria-pressed="true">All programmes</button><button data-filter="engineering" aria-pressed="false">Engineering</button><button data-filter="management" aria-pressed="false">Management</button><button data-filter="applications" aria-pressed="false">Computer applications</button><button data-filter="pharmacy" aria-pressed="false">Pharmacy</button></div><div class="course-grid" id="course-grid"></div><p class="source-note">Programme durations are based on the institute’s published course list. Please confirm current availability with admissions.</p></section>
<section class="soft"><div class="page-section split"><img src="assets/learning.webp" alt="Students attending a session at GITM"><div>${eye('LEARNING AT GLOBAL')}<h2>Curiosity meets <em>real-world experience.</em></h2><p>Learning extends beyond lectures through practical sessions, workshops, projects, seminars, industry visits and internships.</p><div class="quick-links"><a href="${official}central-library/">Central library ↗</a><a href="${official}fully-equipped-lab/">Labs & facilities ↗</a><a href="${official}scheme-syllabus/">Scheme & syllabus ↗</a><a href="${official}academic-calendar-3/">Academic calendar ↗</a></div></div></div></section>${cta}`;
const admissions = `${pageHero('Admissions','Your next chapter<br><em>starts here.</em>','Everything you need to take the first step towards studying at GITM Gurgaon.')}
<section class="page-section">${eye('HOW TO APPLY')}<h2>Start with a <em>simple step.</em></h2><p>Choose your programme, check its requirements and complete your application online.</p><div class="steps"><div class="step"><strong>01</strong><h3>Explore your options</h3><p>Find the programme that matches your interests and career goals.</p><a class="text-link" href="?page=academics">Explore programmes ↗</a></div><div class="step"><strong>02</strong><h3>Check eligibility</h3><p>Review the academic requirements for your chosen programme and have your certificates ready.</p><a class="text-link" href="#eligibility">View criteria ↗</a></div><div class="step"><strong>03</strong><h3>Apply online</h3><p>Complete the application form and follow the instructions provided by the admissions team.</p><a class="text-link" href="${apply}">Start your application ↗</a></div></div><div class="notice">The institute lists a ₹1,000 registration fee and a ₹11,000 provisional admission fee including registration. Confirm current fees and payment details with the admissions office before paying.</div></section>
<section class="soft" id="eligibility"><div class="page-section">${eye('AT A GLANCE')}<h2>Eligibility <em>by programme.</em></h2><div class="eligibility-list"><div><h3>B.Tech</h3><p>10+2 with Physics and Mathematics and an eligible third subject; minimum marks as per institute and university norms.</p></div><div><h3>B.Tech lateral entry</h3><p>Three-year diploma or B.Sc. with Mathematics; minimum 50% aggregate according to the published criteria.</p></div><div><h3>BBA / BCA</h3><p>10+2 from a recognised board; minimum 45% marks. The site lists relaxation for eligible Haryana-domicile SC candidates for BBA.</p></div><div><h3>MBA / MCA</h3><p>Graduation from a recognised university; minimum 50% marks. The site lists additional conditions for MBA.</p></div><div><h3>M.Tech</h3><p>B.Tech, MCA or M.Sc. with minimum 50% marks; a valid GATE score is preferred.</p></div><div><h3>Pharmacy</h3><p>Relevant 10+2 science subjects for B.Pharmacy and D.Pharmacy; D.Pharmacy for lateral-entry B.Pharmacy.</p></div></div><div class="notice">Eligibility and relaxation rules can change. Please verify the latest detailed criteria with the institute or on its <a href="${official}eligibility-criteria/"><u>official eligibility page</u></a>.</div></div></section>
<section class="page-section faq">${eye('GOOD TO KNOW')}<h2>Questions? <em>Start here.</em></h2><details><summary>Are scholarships available?</summary><p>GITM lists merit-based and other scholarship schemes, subject to conditions and availability. <a href="${official}scholarship/"><u>See the official scholarship page</u></a> and confirm the current scheme with admissions.</p></details><details><summary>What documents do I need?</summary><p>The admission instructions state that original certificates should be produced at admission. Contact the admissions office for the complete current document checklist.</p></details><details><summary>Can I apply for a hostel?</summary><p>Yes. Hostel accommodation is optional, subject to availability, and allotted on a yearly basis. Contact the hostel office for current fees.</p></details><details><summary>Who can help with my application?</summary><p>Call <a href="tel:+919555100100"><u>+91 95551 00100</u></a> or email <a href="mailto:admission@gitmgurgaon.com"><u>admission@gitmgurgaon.com</u></a>.</p></details></section>${cta}`;
const placements = `${pageHero('Placements','A strong start to<br><em>what comes next.</em>','Career preparation, industry exposure and opportunities to turn your learning into a meaningful career.')}
<section class="page-section split"><div>${eye('CAREER DEVELOPMENT')}<h2>From classroom<br><em>to career.</em></h2><p>The Training and Placement Cell works to connect academic learning with the world of work. Its activities include aptitude training, mock interviews, group discussions, résumé workshops and interactions with industry.</p><p>Internships, expert talks, live projects and industrial visits are part of the institute’s approach to helping students prepare for their next step.</p><a class="text-link" href="${official}placement-cell/">About the placement cell <span>↗</span></a></div><img src="assets/workshop.png" alt="GITM students and faculty at an industry workshop"></section>
<section class="soft"><div class="page-section">${eye('OPPORTUNITIES')}<h2>Connections that <em>open doors.</em></h2><p>The institute’s website lists organisations including these among its recruiters.</p><div class="recruiters"><span>Microsoft</span><span>Amazon</span><span>Google</span><span>Accenture</span><span>Capgemini</span><span>HCL</span><span>Wipro</span><span>IBM</span><span>Genpact</span><span>Flipkart</span></div><div class="quick-links"><a href="${official}placements-highlights/">Placement highlights ↗</a><a href="${official}internship-training/">Internship & training ↗</a><a href="${official}batch-wise-placement/">Batch-wise placements ↗</a><a href="${official}our-leading-recruiters/">Our recruiters ↗</a></div><p class="source-note">Recruiter names and historical figures are institute-reported and do not guarantee future outcomes.</p></div></section>${cta}`;
const campus = `${pageHero('Campus life','Find your people.<br><em>Find your place.</em>','A community for big ideas, new friendships and the moments that make your college years yours.')}
<section class="page-section split"><div>${eye('LIFE AT GLOBAL')}<h2>There’s more to<br><em>the journey.</em></h2><p>On an 18-acre campus in Farrukhnagar, GITM brings together spaces to study, create, collaborate and unwind. From clubs and cultural celebrations to sports and student activities, there are opportunities to connect beyond the classroom.</p><a class="text-link" href="${official}clubs-and-societies/">Explore clubs & societies <span>↗</span></a></div><img src="assets/students-campus.jpg" alt="Students spending time together on the GITM campus"></section>
<section class="soft"><div class="page-section">${eye('A PLACE TO THRIVE')}<h2>Make yourself <em>at home.</em></h2><div class="mini-grid"><div class="mini-card"><span class="icon">⌂</span><h3>Hostels</h3><p>Separate on-campus accommodation for boys and girls, with AC and non-AC options, subject to availability.</p><a href="${official}hostel-facilities/">Hostel facilities ↗</a></div><div class="mini-card"><span class="icon">↗</span><h3>Getting here</h3><p>The institute describes transport services across parts of Delhi, Gurugram, Bhiwadi and Rewari.</p><a href="${official}transport-service/">Transport information ↗</a></div><div class="mini-card"><span class="icon">✳</span><h3>Beyond the classroom</h3><p>Explore student clubs, sports, celebrations, workshops and a wide range of campus activities.</p><a href="${official}news-events/">News & events ↗</a></div></div><div class="photo-grid"><img src="assets/campus-building.webp" alt="GITM campus building"><img src="assets/student-event.png" alt="A student event at GITM"><img src="assets/learning.webp" alt="A learning session at GITM"></div></div></section>${cta}`;
const contact = `${pageHero('Contact','Let’s start a<br><em>conversation.</em>','Whether you’re exploring a programme or planning a visit, the GITM team is here to help.')}
<section class="page-section"><div class="section-heading"><div>${eye('GET IN TOUCH')}<h2>We’d love to <em>hear from you.</em></h2></div><p>Reach the right team directly using the details below.</p></div><div class="contact-grid"><div class="contact-card"><h3>Admissions</h3><p>For programme and application enquiries.</p><a href="tel:+919555100100">+91 95551 00100</a><a href="mailto:admission@gitmgurgaon.com">admission@gitmgurgaon.com</a></div><div class="contact-card"><h3>Campus office</h3><p>5 KM Milestone, Kheda Khurampur, Farrukhnagar, Haily Mandi Road, Gurugram – 122506</p><a href="tel:+918053980002">+91 80539 80002</a><a href="mailto:info@gitmgurgaon.com">info@gitmgurgaon.com</a></div><div class="contact-card"><h3>Delhi office</h3><p>Ch. Birkhe Ram Complex, D–96, 1st Floor, Munirka Village, Opp. Community Centre, New Delhi – 110067</p><a href="tel:+918800526886">+91 88005 26886</a><a href="mailto:info@gitmgurgaon.com">info@gitmgurgaon.com</a></div><div class="contact-card"><h3>Hostel</h3><a href="tel:+917404841737">+91 74048 41737</a><a href="mailto:hostelwarden@gitmgurgaon.com">hostelwarden@gitmgurgaon.com</a></div><div class="contact-card"><h3>Transport</h3><a href="tel:+918950718034">+91 89507 18034</a><a href="mailto:tptincharge@gitmgurgaon.com">tptincharge@gitmgurgaon.com</a></div><div class="contact-card"><h3>Corporate relations</h3><a href="tel:+918053980002">+91 80539 80002</a><a href="mailto:ccr@gitmgurgaon.com">ccr@gitmgurgaon.com</a></div></div></section>${cta}`;
const pages = {about, academics, admissions, placements, campus, contact};
const page = new URLSearchParams(location.search).get('page');
if(page && pages[page]) { document.querySelector('main').innerHTML = `<div class="page-body">${pages[page]}</div>`; document.title = `${page.charAt(0).toUpperCase()+page.slice(1)} | GITM Gurgaon`; document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href') === `?page=${page}`) a.setAttribute('aria-current','page')}); }
const cards = document.querySelector('#cards');
function renderHome(category){if(!cards)return; const items = category === 'all' ? programmeGroups.slice(0,3) : programmeGroups.filter(p=>p.category===category); cards.innerHTML = items.map(p=>`<a class="card" href="${p.url}"><div class="card-top"><span>AREA OF STUDY / ${p.number}</span><span class="card-icon">${p.icon}</span></div><h3>${p.title}</h3><p>${p.description}</p><div class="card-bottom"><span>EXPLORE PROGRAMMES</span><span>↗</span></div></a>`).join('')}
renderHome('all');
document.querySelectorAll('.programme-tabs button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.programme-tabs button').forEach(tab=>{tab.classList.remove('active');tab.setAttribute('aria-selected','false')});button.classList.add('active');button.setAttribute('aria-selected','true');renderHome(button.dataset.category)}));
const grid = document.querySelector('#course-grid');
function renderCourses(filter='all'){ if(!grid)return; const names={engineering:'Engineering',management:'Management',applications:'Computer applications',pharmacy:'Pharmacy'};grid.innerHTML = courses.filter(c=>filter==='all'||c[0]===filter).map(c=>`<div class="course-card"><small>${names[c[0]]} &nbsp; / &nbsp; ${c[2]}</small><h3>${c[1]}</h3><p>Full-time programme</p><a href="${official+c[3]}">Programme details <span>↗</span></a></div>`).join(''); }
if(grid){const hash=location.hash.slice(1);const filter=['engineering','management','applications','pharmacy'].includes(hash)?hash:'all';renderCourses(filter);document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b.dataset.filter===filter;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(t=>{t.classList.remove('active');t.setAttribute('aria-pressed','false')});b.classList.add('active');b.setAttribute('aria-pressed','true');renderCourses(b.dataset.filter)})})}
const menu = document.querySelector('.menu-toggle');const nav = document.querySelector('#navigation');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu')});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu')}));
if (page && location.hash && page !== 'academics') {
  requestAnimationFrame(() => document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView());
}

// Update a decorative progress line without interfering with page interaction.
const progressBar = document.querySelector('.reading-progress span');
const heroScene = document.querySelector('.hero');
const parallaxMotion = window.matchMedia('(prefers-reduced-motion: no-preference)');
const parallaxScreen = window.matchMedia('(min-width: 901px)');
let progressPending = false;
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
  if (heroScene) {
    const shift = parallaxMotion.matches && parallaxScreen.matches ? Math.min(window.scrollY * 0.12, 38) : 0;
    heroScene.style.setProperty('--hero-shift', `${shift}px`);
  }
  progressPending = false;
}
function requestProgressUpdate() {
  if (!progressPending) { progressPending = true; requestAnimationFrame(updateProgress); }
}
window.addEventListener('scroll', requestProgressUpdate, { passive: true });
window.addEventListener('resize', requestProgressUpdate, { passive: true });
requestProgressUpdate();

// Count up only when the statistics enter view; the original values remain available
// without JavaScript and to screen readers via the surrounding labels.
const statsToAnimate = document.querySelectorAll('.stat-value[data-count]');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const numberFormatter = new Intl.NumberFormat('en-IN');
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.count);
      const start = performance.now();
      const duration = 1100;
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = numberFormatter.format(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(element);
    });
  }, { threshold: 0.5 });
  statsToAnimate.forEach(element => counterObserver.observe(element));
}

// Animate elements as they enter view without hiding content if JS or animation
// support is unavailable. Each element is animated just once per page load.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const animatedElements = new WeakSet();
const activeAnimations = new Set();
const motionSelectors = [
  '.intro-copy', '.intro-aside', '.stat', '.stat-end',
  '.section-heading', '.future-left', '.future-right', '.campus > div',
  '.admissions > div', '.story-grid > a', '.page-section > .eyebrow',
  '.page-section > h2', '.page-section > p', '.split > div', '.split > img',
  '.mini-card', '.step', '.eligibility-list > div', '.contact-card',
  '.photo-grid > img', '.faq details', '.recruiters > span', '.quick-links > a',
  '.course-card', '.cards > .card', '.notice', '.footer-main > div'
].join(',');
let motionObserver;
function animateOnEntry(element) {
  if (motionPreference.matches || typeof element.animate !== 'function') return;
  const isPhoto = element.matches('.split > img, .photo-grid > img');
  const siblings = Array.from(element.parentElement.children);
  const delay = Math.min(siblings.indexOf(element) % 4, 3) * 75;
  const frames = isPhoto
    ? [{ opacity: 0.35, clipPath: 'inset(0 0 12% 0)', transform: 'translateY(14px)' }, { opacity: 1, clipPath: 'inset(0 0 0 0)', transform: 'translateY(0)' }]
    : [{ opacity: 0.15, transform: 'translateY(24px)' }, { opacity: 1, transform: 'translateY(0)' }];
  const animation = element.animate(frames, { duration: isPhoto ? 900 : 700, delay, easing: 'cubic-bezier(.22, 1, .36, 1)' });
  activeAnimations.add(animation);
  animation.onfinish = animation.oncancel = () => activeAnimations.delete(animation);
}
function observeMotionElements(root = document) {
  if (!motionObserver || motionPreference.matches) return;
  const elements = root.querySelectorAll(motionSelectors);
  elements.forEach(element => {
    if (animatedElements.has(element)) return;
    animatedElements.add(element);
    motionObserver.observe(element);
  });
}
if ('IntersectionObserver' in window && !motionPreference.matches) {
  motionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      animateOnEntry(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
  observeMotionElements();
  // Programme filters replace their cards. Observe the new cards as well.
  document.querySelectorAll('#cards, #course-grid').forEach(container => {
    new MutationObserver(() => observeMotionElements(container)).observe(container, { childList: true });
  });
}
if (typeof motionPreference.addEventListener === 'function') {
  motionPreference.addEventListener('change', event => {
    if (event.matches) {
      activeAnimations.forEach(animation => animation.cancel());
      if (motionObserver) motionObserver.disconnect();
    }
  });
}

// Give in-site navigation a short exit transition without intercepting external
// links, anchors on the same page, downloads, or modified clicks.
let navigating = false;
document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || motionPreference.matches) return;
  const link = event.target.closest('a[href]');
  if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
  const destination = new URL(link.href, location.href);
  if (destination.origin !== location.origin || !['http:', 'https:'].includes(destination.protocol)) return;
  if (destination.pathname === location.pathname && destination.search === location.search) return;
  if (navigating) { event.preventDefault(); return; }
  event.preventDefault();
  navigating = true;
  document.body.classList.add('is-leaving');
  window.setTimeout(() => location.assign(destination.href), 220);
});
window.addEventListener('pageshow', () => {
  navigating = false;
  document.body.classList.remove('is-leaving');
});

// A pointer-following highlight adds depth to cards on devices with a fine
// pointer. Event delegation also covers cards added by programme filters.
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const interactiveCards = '.card, .course-card, .mini-card, .contact-card, .eligibility-list > div';
document.addEventListener('pointermove', event => {
  if (!finePointer.matches || motionPreference.matches) return;
  const card = event.target.closest(interactiveCards);
  if (!card) return;
  const bounds = card.getBoundingClientRect();
  card.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
  card.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
}, { passive: true });
