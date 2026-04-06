// ========== DATA ==========
const POSTS = [
  {id:1,cat:'Essay',emoji:'🌿',bg:'#e8ddd0',title:'The Lost Art of Doing Nothing Productively',excerpt:"We've medicalised boredom, gamified rest, and optimised leisure until it exhausted us. What if idleness was the point all along?",date:'March 28, 2025',read:'8 min',reads:'14k',body:`<p>It begins, as most modern malaises do, with an app. Somewhere between the meditation timer and the habit tracker, between the "intentional rest" podcast and the sleep-score dashboard, we managed to turn doing nothing into one more thing to optimise.</p><p>I became aware of this during a weekend in February when, unable to decide what to do, I sat very still on my sofa for approximately forty-five minutes. No phone. No podcast. No <em>enriching</em> ambient soundscape selected by an algorithm trained on the sleeping habits of Scandinavians.</p><blockquote>Boredom, properly understood, is not an absence. It is a pressure — the productive discomfort of a mind searching for itself.</blockquote><h2>The invention of idle time</h2><p>Leisure, historically speaking, is new. For most of human history, the idea that you might have hours — whole unmolested hours — in which nothing was required of you would have been absurd. The aristocratic classes had it, of course. But even they filled time with elaborate rituals of nothing: calling cards, country walks, the formal presentation of doing very little in a very structured way.</p><p>What we have now is different. We have leisure democratised and immediately corrupted. The eight-hour working day was fought for so that humans might have time to exist beyond their labour. We responded by monetising existence.</p><h2>What boredom actually does</h2><p>The neuroscientists who study the default mode network — the part of the brain active when we're not focused on a specific task — have produced findings that should alarm anyone who hasn't been bored in six months. This network is responsible for self-referential thinking, future planning, creative insight, moral reasoning. It is, in other words, the part of the brain that makes you distinctly you.</p><p>It activates most fully when we are doing nothing in particular. When we stare out of windows. When we let the mind wander without a destination. When we are, in the old-fashioned sense, bored. We have spent the last decade systematically preventing this from happening.</p><h2>A modest proposal</h2><p>I am not suggesting that you throw your phone into the nearest body of water, though I have entertained the thought. I am suggesting something simpler and, frankly, harder: that you make time, regularly, to do nothing that could be called useful, productive, optimised, or intentional. Sit somewhere. Look at something. Think, or don't. Let the mind drift to wherever it goes when no one is steering it.</p><p>The capacity for genuine idleness is not laziness. It is, I would argue, one of the last forms of resistance available to the chronically over-scheduled. It is also, incidentally, where most of my best ideas have come from.</p>`},
  {id:2,cat:'Culture',emoji:'🗞',bg:'#d8e8e0',title:'On Rereading Books You Hated in School',excerpt:'The texts we were forced through at sixteen carry different weight at thirty-four. An argument for second chances.',date:'Feb 14, 2025',read:'6 min',reads:'8.2k',body:`<p>I hated <em>The Great Gatsby</em> the first time I read it. I was sixteen, it was June, and the sun was making a sincere effort to come through the classroom windows. Gatsby seemed foolish. Daisy seemed boring. The green light seemed like the sort of thing English teachers liked and nobody else did.</p><p>I reread it at thirty-two, on a train from Edinburgh to London, and I nearly wept at Carraway's closing lines. Something had changed. Not the book.</p><blockquote>"So we beat on, boats against the current, borne back ceaselessly into the past." I finally understood what it cost Fitzgerald to write that sentence.</blockquote><h2>What changes</h2><p>The obvious answer is that we change. We accumulate experience that the books were always already about. Gatsby's longing for a past that can't be recovered is not an idea a sixteen-year-old has much use for — their past is last week. At thirty, it resonates differently.</p><p>But there's something else too. When a book is assigned, it comes pre-loaded with obligation. You are reading it to pass a test, to please an adult, to get through something. The text becomes associated with those pressures in ways that are genuinely hard to separate from the words themselves.</p><h2>The recommendation</h2><p>Pick one book you had to read at school that you remember disliking. Give it fifty pages. If it's still not working, put it down — you've given it a fair hearing. But in my experience, the success rate of this experiment is surprisingly high. The books assigned in secondary schools are not, as a rule, there by accident.</p>`},
  {id:3,cat:'Craft',emoji:'✍️',bg:'#ddd8e8',title:"First Drafts Are Supposed to Be Bad",excerpt:"Every writer knows this. Almost no writer believes it. Here's how to finally make peace with the mess.",date:'Jan 9, 2025',read:'5 min',reads:'11k',body:`<p>The most repeated piece of writing advice in existence is also the most consistently ignored. Every writer has heard it. Most writers nod along when they hear it. Almost no writer actually believes it at the moment of sitting down to write.</p><blockquote>The problem is not knowing that first drafts should be bad. The problem is feeling, in the body, that this particular bad draft is evidence of a fundamental failure of intelligence or talent.</blockquote><h2>Why we don't believe it</h2><p>The issue is that when we read finished writing — even writing we know has been through many drafts — we experience it as something that must have arrived whole. We can't see the crossed-out lines, the discarded paragraphs, the three-page detour that got deleted. We see only the final shape, and it looks inevitable.</p><p>Our own first drafts, by contrast, look exactly like first drafts. And the gap between those two things can feel damning in a way that doesn't respond well to rational reassurance.</p><h2>A practical suggestion</h2><p>Write the bad version on purpose. Make an explicit decision, before you begin, that what you're about to write will be bad and wrong and probably unsalvageable. Then write it anyway. What you'll often find is that some of it is actually fine, and the rest of it is fixable. The shift is small but real: you are no longer surprised by imperfection, because you ordered it.</p>`},
  {id:4,cat:'Notebook',emoji:'☕',bg:'#e8e0d0',title:"What Cafés Know That Offices Don't",excerpt:'Ambient noise, strangers, and impermanence — the accidental genius of third spaces.',date:'Dec 2, 2024',read:'4 min',reads:'6.8k',body:`<p>I wrote my first published essay in a café in Edinburgh's New Town. I went there because my flat was too quiet, and home is where all my displacement activities live.</p><blockquote>The café solves a problem that open-plan offices created and libraries never quite managed: it provides company without demands, noise without obligation, presence without performance.</blockquote><h2>The science of "just enough"</h2><p>Research on ambient noise and cognitive performance suggests there is a sweet spot — roughly 70 decibels — at which moderate background noise enhances creative thinking without disrupting it. A busy café sits comfortably in this range. An open-plan office, with its sudden outbursts of conversation and the specific acoustic anxiety of being overheard, often does not.</p><h2>The impermanence factor</h2><p>There's something else: the knowledge that you will leave. The café is not your space to colonise. You are a temporary resident, which concentrates the mind pleasantly. The two-hour window before your parking runs out, or your coffee cools past drinkability, has a clarifying effect that the infinite availability of your home desk does not.</p>`},
  {id:5,cat:'Essay',emoji:'🌙',bg:'#dde0e8',title:'In Praise of the Unfinished',excerpt:'Abandoned novels, half-filled notebooks, started paintings. Why some of the most interesting creative work never gets done.',date:'Nov 18, 2024',read:'7 min',reads:'5.1k',body:`<p>In a drawer somewhere there is a novel. It is 40,000 words long, which sounds like a lot until you consider that most novels are at least twice that, and that I wrote those 40,000 words six years ago and have not touched them since.</p><blockquote>The unfinished work contains multitudes. It is still capable of becoming anything. Its unfixedness is not a failure but a kind of permanent potential.</blockquote><h2>The freedom of incompletion</h2><p>Finished work is fixed. It has committed to being one thing, which means it has given up being all other things. The moment you type "The End," you have foreclosed on every other version of the story — all the different endings, the unexplored characters, the structural experiments you didn't attempt. The unfinished work contains all of them, still.</p>`},
  {id:6,cat:'Culture',emoji:'📻',bg:'#e8e4d0',title:'The Quiet Return of Long-Form Audio',excerpt:'Before podcasts optimised themselves to death, there was radio. Something is coming back.',date:'Oct 5, 2024',read:'6 min',reads:'4.3k',body:`<p>My grandmother listened to the radio the way people now listen to podcasts — constantly, devotedly, across the span of a day. I thought about this recently when I found myself, for the first time in years, listening to a proper radio documentary: an hour long, produced with care, built around a subject that didn't need to be "relevant" or "trending" or positioned for algorithmic discovery.</p><blockquote>The best radio has always understood something that podcasting forgot in its gold rush years: that the listener's attention is not something to be captured. It is something to be deserved.</blockquote><h2>What got lost</h2><p>The podcast boom brought with it a set of assumptions that weren't always useful. That content needed to be searchable, that episodes needed to be regular, that hosts needed personal brands, that everything needed a growth strategy. The medium became anxious about its own metrics in a way that radio never had to be.</p>`}
];

const SERVICES = [
  {icon:'✦',name:'Essay Commission',desc:'A single long-form essay written to your brief, researched and crafted with the care it deserves.',price:'£650',unit:'/ essay',features:['Up to 3,000 words','Two rounds of revisions','Research included','Publication-ready copy','Rights negotiable']},
  {icon:'✉',name:'Newsletter Package',desc:'Four newsletters per month written in your voice. Includes strategy, structure, and editing.',price:'£1,200',unit:'/ month',features:['4 issues per month','Voice matching interview','Subject line options','Unlimited revisions','Monthly strategy call']},
  {icon:'◈',name:'Brand Voice & Copy',desc:'Voice guide, tone of voice document, and three pieces of copy to demonstrate it in the wild.',price:'£2,400',unit:'/ project',features:['Brand voice audit','Tone of voice guide','3 sample copy pieces','Team workshop (virtual)','30-day support']},
  {icon:'◉',name:'Ghostwriting Retainer',desc:'Ongoing partnership for founders, executives, and creative directors. Your byline, my keyboard.',price:'From £3,000',unit:'/ month',features:['Bespoke monthly scope','Weekly check-ins','Priority turnaround','All formats covered','Full confidentiality']}
];

const TESTI = [
  {i:'JL',n:'Jamie Liu',r:'Features Editor, Aeon Magazine',t:'"Maren has an uncanny ability to take a vague brief and return something that feels like it was the only way the piece could ever have been written. She\'s the best writer I\'ve worked with in fifteen years of commissioning."'},
  {i:'SB',n:'Sofia Brennan',r:'Co-founder, Harbour & Co.',t:'"We came to Maren with a voice problem — our copy sounded like every other DTC brand. Six weeks later, we had something genuinely ours. The emails she writes for us have our highest open rates ever."'},
  {i:'RT',n:'Ronan Tully',r:'Subscriber & Senior Editor',t:'"I\'ve been reading Maren\'s newsletter for two years and it\'s the only one that reliably makes me stop scrolling. There\'s a quality of attention in her work that\'s increasingly rare."'}
];

const FAQS = [
  {q:'How far in advance do you book?',a:'Typically 4–6 weeks for commissions and packages. For retainer work, I usually have a longer waitlist. Get in touch early if you have a deadline in mind.'},
  {q:'Do you sign NDAs?',a:'Yes, always for ghostwriting projects. For other work I\'m happy to sign an NDA if you prefer, though I rarely publicise client relationships without explicit permission anyway.'},
  {q:'What does the revision process look like?',a:'All projects include at least two rounds of revisions. I find that the first revision is usually about structure and direction, the second about language and tone. Most projects are in good shape by round two.'},
  {q:'Do you work with clients outside the UK?',a:'Absolutely — around half my clients are based in the US, EU, or elsewhere. I work entirely remotely and the process doesn\'t change by geography.'},
  {q:'Can you write about topics outside your usual areas?',a:'Probably, yes. I\'ve written about everything from fintech to fermentation to the history of public parks. If you\'re unsure, reach out and we can discuss.'}
];

const ISSUES = [
  {n:'#42',t:'The Pleasure of Unnecessary Knowledge',d:'March 23, 2025'},
  {n:'#41',t:"How to Read a Room You've Never Been In",d:'March 9, 2025'},
  {n:'#40',t:'In Defence of Changing Your Mind',d:'Feb 23, 2025'},
  {n:'#39',t:'The Particular Silence of Old Houses',d:'Feb 9, 2025'},
  {n:'#38',t:'Notes on Being a Generalist',d:'Jan 26, 2025'},
  {n:'#37',t:"What Experts Don't Know They Know",d:'Jan 12, 2025'}
];

const PRESS = [
  {pub:'The Atlantic',title:'The Weaponisation of Wellness',year:'2024'},
  {pub:'Aeon',title:'Against Optimism: A Defence of Melancholy',year:'2024'},
  {pub:'Delayed Gratification',title:'The Last Town With No Internet',year:'2023'},
  {pub:'The Believer',title:'Everything I Know I Learned From a Dog Eared Paperback',year:'2023'},
  {pub:'The Atlantic',title:'The Lost Art of Boredom',year:'2021'},
  {pub:'Aeon',title:"What We Mean When We Say We're Tired",year:'2020'},
  {pub:'Literary Hub',title:"On Writing About the Place You're From",year:'2019'},
  {pub:'Rumpus',title:'First Draft of a Life Not Yet Lived',year:'2018'}
];

// ========== RENDER FUNCTIONS ==========
function postCardHTML(p, featured = false) {
  return `<div class="post-card${featured ? ' featured' : ''}" onclick="nav('post',${p.id})">
    <div class="post-img" style="background:${p.bg}"><div class="post-img-inner">${p.emoji}</div></div>
    <div class="post-body">
      <span class="post-cat">${p.cat}</span>
      <h3 class="post-title">${p.title}</h3>
      <p class="post-excerpt">${p.excerpt.substring(0, 100)}${p.excerpt.length > 100 ? '…' : ''}</p>
      <div class="post-meta"><span>${p.date}</span><span>${p.read} read</span><span>${p.reads} reads</span></div>
      <span class="read-more">Read essay →</span>
    </div>
  </div>`;
}

function initHome() {
  const hp = document.getElementById('homePosts');
  if (hp) hp.innerHTML = POSTS.slice(0, 4).map((p, i) => postCardHTML(p, i === 0)).join('');
  const hs = document.getElementById('homeServices');
  if (hs) hs.innerHTML = SERVICES.map(s => `<div class="service-card-dark" onclick="nav('services')"><div class="service-icon">${s.icon}</div><div class="service-name-dark">${s.name}</div><p class="service-desc-dark">${s.desc}</p><div class="service-price-dark">${s.price}<span>${s.unit}</span></div><span class="service-cta-dark" style="color:var(--accent);font-size:0.8rem">Learn more →</span></div>`).join('');
  const ht = document.getElementById('homeTesti');
  if (ht) ht.innerHTML = TESTI.map(t => `<div class="testi-card fade-up"><div class="stars">★★★★★</div><p class="testi-text">${t.t}</p><div class="testi-author"><div class="testi-avatar">${t.i}</div><div><div class="testi-name">${t.n}</div><div class="testi-role" style="font-size:0.75rem;color:var(--ink-faint)">${t.r}</div></div></div></div>`).join('');
}

function initBlog(filter = 'All') {
  const fb = document.getElementById('filterBar');
  if (fb) {
    const cats = ['All', ...new Set(POSTS.map(p => p.cat))];
    fb.innerHTML = cats.map(c => `<button class="filter-btn${c === 'All' ? ' active' : ''}" onclick="filterPosts('${c}',this)">${c}</button>`).join('');
  }
  renderBlogGrid(filter);
}

function renderBlogGrid(filter) {
  const g = document.getElementById('allPosts');
  if (!g) return;
  const list = filter === 'All' ? POSTS : POSTS.filter(p => p.cat === filter);
  g.innerHTML = list.map(p => postCardHTML(p)).join('');
}

function filterPosts(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderBlogGrid(cat);
}

function initPost(id) {
  const p = POSTS.find(x => x.id === id);
  if (!p) return;
  const idx = POSTS.findIndex(x => x.id === id);
  const prev = POSTS[idx - 1], next = POSTS[idx + 1];
  document.getElementById('postContent').innerHTML = `
    <span class="back-link" onclick="nav('blog')">← All Writing</span>
    <span class="post-reader-cat" style="color:var(--accent);text-transform:uppercase;font-size:0.75rem;letter-spacing:1px">${p.cat}</span>
    <h1 class="post-reader-title" style="font-size:clamp(2rem,5vw,3rem);margin:0.5rem 0">${p.title}</h1>
    <div class="post-reader-meta"><span>By Maren Sollis</span><span>${p.date}</span><span>${p.read} read</span><span>${p.reads} reads</span></div>
    <div class="post-reader-hero" style="background:${p.bg};font-size:4rem;text-align:center;padding:3rem;border-radius:20px;margin:1.5rem 0">${p.emoji}</div>
    <div class="post-reader-body">${p.body}</div>
    <div class="post-tags" style="margin:2rem 0"><span class="pill">${p.cat}</span><span class="pill">Maren Sollis</span><span class="pill">Essay</span></div>
    <div class="post-nav">
      ${prev ? `<div class="post-nav-item"><div class="post-nav-label">← Previous</div><div class="post-nav-title" onclick="nav('post',${prev.id})">${prev.title}</div></div>` : '<div></div>'}
      ${next ? `<div class="post-nav-item next" style="text-align:right"><div class="post-nav-label">Next →</div><div class="post-nav-title" onclick="nav('post',${next.id})">${next.title}</div></div>` : '<div></div>'}
    </div>
    <div style="text-align:center;margin-top:3rem;padding-top:2rem;border-top:1px solid var(--parchment-mid)">
      <p style="color:var(--ink-muted);margin-bottom:1.25rem">Want more essays like this?</p>
      <button class="btn btn-primary" onclick="nav('newsletter')">Subscribe to The Marginal Note</button>
    </div>`;
}

function initServices() {
  const g = document.getElementById('servGrid');
  if (g) g.innerHTML = SERVICES.map(s => `<div class="service-page-card fade-up" style="border:1px solid var(--parchment-mid);border-radius:20px;padding:1.8rem;cursor:pointer" onclick="nav('contact')"><div class="spcard-icon" style="font-size:2rem">${s.icon}</div><h3 class="spcard-name" style="margin:1rem 0 0.5rem">${s.name}</h3><p style="font-size:.9rem;color:var(--ink-muted);line-height:1.7">${s.desc}</p><div class="spcard-price" style="font-size:1.4rem;font-weight:600;margin:1rem 0">${s.price}<span style="font-size:0.8rem;font-weight:normal"> ${s.unit}</span></div><ul class="spcard-features" style="list-style:none;margin:1rem 0">${s.features.map(f => `<li style="padding:0.2rem 0;font-size:0.85rem">✓ ${f}</li>`).join('')}</ul><button class="btn btn-primary" style="width:100%" onclick="event.stopPropagation();nav('contact')">Enquire →</button></div>`).join('');
  const a = document.getElementById('faqAcc');
  if (a) a.innerHTML = FAQS.map((f, i) => `<div class="faq-item" id="faq${i}"><div class="faq-q" onclick="toggleFaq(${i})"><span>${f.q}</span><span class="faq-icon">+</span></div><div class="faq-a">${f.a}</div></div>`).join('');
}

function toggleFaq(i) {
  document.getElementById('faq' + i).classList.toggle('open');
}

function initNewsletter() {
  const g = document.getElementById('issuesGrid');
  if (g) g.innerHTML = ISSUES.map(is => `<div class="issue-card fade-up" onclick="toast('Opening: ${is.t}')"><div class="issue-num">${is.n}</div><div class="issue-title">${is.t}</div><div class="issue-date" style="font-size:0.75rem;color:var(--ink-faint)">${is.d}</div></div>`).join('');
}

function initPress() {
  const g = document.getElementById('pressGrid');
  if (g) g.innerHTML = PRESS.map(p => `<div class="press-item"><div class="press-pub">${p.pub}</div><div class="press-title">${p.title}</div><div style="display:flex;align-items:center;gap:1rem;justify-content:flex-end;flex-wrap:wrap"><span class="press-year" style="color:var(--ink-faint)">${p.year}</span><span class="press-link" onclick="toast('Opening article from ${p.pub}…')">Read →</span></div></div>`).join('');
}

// ========== NAVIGATION ==========
function nav(page, param) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  let id = 'page-' + page;
  if (page === 'post') id = 'page-post';
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });

  if (page === 'blog') { initBlog(param || 'All'); if (param) { setTimeout(() => { const b = Array.from(document.querySelectorAll('.filter-btn')).find(x => x.textContent === param); if (b) { document.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active')); b.classList.add('active'); renderBlogGrid(param); } }, 30); } }
  else if (page === 'post') initPost(param);
  else if (page === 'services') initServices();
  else if (page === 'newsletter') initNewsletter();
  else if (page === 'press') initPress();

  setTimeout(() => {
    el.querySelectorAll('.fade-up').forEach(x => { x.classList.remove('visible'); fadeObserver.observe(x); });
    if (page === 'home') document.querySelectorAll('#hero .fade-up').forEach((x, i) => setTimeout(() => x.classList.add('visible'), 80 + i * 110));
  }, 20);
}

function openExt(url, name) { toast(`Opening ${name}…`); setTimeout(() => window.open(url, '_blank'), 500); }
function toast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2800); }
function submitForm(e, sid, bid) { e.preventDefault(); const b = document.getElementById(bid); b.textContent = 'Sending…'; b.disabled = true; setTimeout(() => { e.target.reset(); document.getElementById(sid).style.display = 'block'; toast("Message sent! I'll be in touch soon."); b.textContent = 'Send Message'; b.disabled = false; }, 1300); }
function nlSignup(e) { e.preventDefault(); const b = document.getElementById('nlBtn'); b.textContent = 'Subscribing…'; b.disabled = true; setTimeout(() => { b.textContent = '✓ You\'re subscribed!'; toast('Welcome! First issue goes out Sunday.'); }, 1200); }
function closeMob() { document.getElementById('ham').classList.remove('open'); document.getElementById('mob').classList.remove('open'); }

// ========== SCROLL EFFECTS ==========
const navEl = document.getElementById('mainNav');
const rb = document.getElementById('readingBar');
window.addEventListener('scroll', () => {
  if (navEl) navEl.classList.toggle('scrolled', scrollY > 40);
  if (rb) {
    const d = document.documentElement;
    rb.style.width = Math.min((scrollY / (d.scrollHeight - d.clientHeight)) * 100, 100) + '%';
  }
});

const fadeObserver = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: .1, rootMargin: '0px 0px -30px 0px' });

// ========== INITIALIZATION ==========
document.getElementById('ham').addEventListener('click', () => { document.getElementById('ham').classList.toggle('open'); document.getElementById('mob').classList.toggle('open'); });

initHome();
document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));
document.querySelectorAll('#hero .fade-up').forEach((el, i) => setTimeout(() => el.classList.add('visible'), 80 + i * 110));