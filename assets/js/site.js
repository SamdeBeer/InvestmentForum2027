/* =========================================================
   THE INVESTMENT FORUM 2027 — site.js
   -----------------------------------------------------------
   EDIT THESE TWO BLOCKS. Everything below them is machinery.
   ========================================================= */

/* ---------- 1. REGISTRATION LINK -------------------------
   Paste the live registration URL between the quotes, e.g.
       const REGISTER_URL = "https://register.example.com";
   Every REGISTER NOW button on the page updates at once.

   Leave it EMPTY ("") and the buttons switch to a holding
   state reading REGISTRATION_SOON below — greyed out and
   not clickable, so nothing looks broken before the
   registration system is ready.                            */
const REGISTER_URL     = "https://register.thecollaborative.co.za/investment-forum/";
const REGISTRATION_SOON = "Registration Opens Soon";

/* ---------- 2. KEYNOTE SPEAKERS --------------------------
   Drop headshots into  assets/speakers/  and reference the
   filename in `photo`. Leave photo as "" for a placeholder.
   Blue-graded cut-outs on a transparent background work best
   (about 800 x 1000px, figure standing on the bottom edge).

   In `bio`:  blank line = new paragraph
              [text](https://url) = link

   Order does not matter — the site sorts speakers alphabetically
   by surname automatically, so just add new people at the end.  */
const SPEAKERS = [
  {
    name:    "Annika Larsen",
    role:    "Broadcast Journalist",
    company: "",
    photo:   "annika-larsen.webp",
    bio:     `Annika is an award winning broadcast journalist based in South Africa. With a career in journalism spanning 25 years, she has been a live 24 hour breaking news tv reporter and anchor on the 8pm news for eNCA. Annika initially worked in radio as a reporter at Eyewitness News for 702 and Cape Talk, before moving into television in 2005.

She has enjoyed positions as a presenter both at Carte Blanche and currently has her own show called, 'My Guest Tonight with Annika Larsen'. This programme is broadcast across both eTV and eNCA and has featured guests including Chief Justice Raymond Zondo, SARB Governor Lesetja Kganyago, Caster Semenya and former Eskom CEO, Andre de Ruyter.

Outside of her broadcasting career, Annika is a Fellow of the prestigious USA State Department International Leadership Programme for emerging Foreign Leaders, as well as a Fellow of Duke University NC. She has served on the Executive Committee of Parliament's Press Gallery Association. Beyond these roles, Annika regularly hosts and moderates discussions in the corporate and NGO sectors and trains business leaders on how to interface effectively with the media.`
  },
  {
    name:    "Prof Anton du Plessis",
    role:    "Chief Executive Officer",
    company: "Business Against Crime South Africa",
    photo:   "anton-du-plessis.webp",
    bio:     `Anton du Plessis is CEO of Business Against Crime South Africa and a globally recognised criminal justice and prosecutorial reform leader. A former Deputy National Director of Public Prosecutions, he has held senior executive roles in South Africa's National Prosecuting Authority, the United Nations, and the Institute for Security Studies (ISS).

His international roles include serving as Legal and Criminal Justice Coordinator at the United Nations Security Council Counter-Terrorism Executive Directorate in New York, and as a Criminal Justice Expert with the UN Office on Drugs and Crime in Vienna. He also served as Executive Director of the ISS, Africa's leading human security policy institute, where he led strategy, partnerships, fundraising and continental policy engagement.

With more than 25 years' experience across government, multilateral institutions and civil society, Anton has worked in over 20 African countries on complex crime, counter-terrorism, organised crime, prosecutorial reform and security-sector transformation. He has advised governments, Attorneys General, UN bodies and international organisations, and has contributed to major policy, legal and institutional reforms across Africa and globally.

Anton is an Advocate of the High Court of South Africa, holds three law degrees, and has completed executive leadership programmes at Harvard and Oxford. He is a World Economic Forum Young Global Leader, a member of the WEF Global Future Council on Governance, and co-author of the Oxford University Press Counter-Terrorism Law Handbook.`
  },
  {
    name:    "Pierre Du Plessis",
    role:    "Founder",
    company: "Be Brave",
    photo:   "pierre-du-plessis.webp",
    bio:     `Pierre is the founder of [Be Brave](https://be-brave.co.za/), a Strategy Design Lab that helps businesses and people find clarity in the chaos. With over two decades of experience developing people, building products, and designing strategies, Pierre blends ancient wisdom, systems thinking, and gut feels to create brave roadmaps for the future.

He's spoken on four TEDx stages, written four books, won the Desmond Tutu Gerrit Brand prize for literature, worked with global brands like Tencent, BP, Yum!, Allan Gray, and HATCH, and delivered keynotes all around the world, that feel more like conversations around a campfire than boardroom lectures.

Part strategist, part modern-day philosopher, Pierre's academic research focused on loneliness and belonging and he is fascinated by what it means to be human in an age of machines.

He lives in Cape Town with his wife, and two kids and when he is not reading or lifting weights, enjoys doom-scrolling.`
  },
  {
    name:    "Kevin Lings",
    role:    "Chief Economist",
    company: "STANLIB Asset Management",
    photo:   "kevin-lings.webp",
    bio:     `As STANLIB Asset Management's Chief Economist, Kevin is responsible for domestic and global economic research and forecasts. He also provides input into STANLIB Asset Management's asset allocation processes and provides relevant economic research for our Fixed Income, Property and Equity teams.

Kevin joined then-Liberty Asset Management in 2001 from J.P. Morgan Chase, where he was a member of their macroeconomic research team, providing economic research and analysis to the broader asset management industry in South Africa. Prior professional experience was built as a senior economist within the Nedcor group.

Kevin has an honours degree in economics from Wits University, specialising in international and public-sector finance. He is a widely sought-after media commentator, and has had a number of journal articles published, internationally as well as locally. From the mid-1990s to mid-2000s, Kevin lectured economics, part-time at Wits Business School.

Kevin is the author of a book, The Missing Pieces: Solving South Africa's Economic Puzzle.`
  },
  {
    name:    "Magda Wierzycka",
    role:    "Chief Executive Officer",
    company: "Sygnia Group",
    photo:   "magda-wierzycka.webp",
    bio:     `Magda qualified as a Fellow of the Faculty of Actuaries (Edinburgh) in 1994. She has over 20 years' experience in the South African asset management industry and has published widely in the field. She has also served as a board member of the Actuarial Society of South Africa.

Magda started her career as a product development and investments actuary at Southern Life in 1993, where she designed and managed index-tracking funds, followed by two years at Alexander Forbes as an investment consultant. In 1997 she joined Coronation Fund Managers as Head of Institutional Business and a director. While at Coronation she was responsible for growing the institutional assets under management of the company fivefold.

Magda left Coronation in 2003 to start IQvest, a fund of hedge funds company. Later that year, after selling IQvest to the African Harvest group, she was appointed to the position of CEO of African Harvest. Under her stewardship the assets under management of the company grew from R10 billion in 2003 to R35 billion in 2006.

After negotiating the sale of African Harvest Fund Managers to Cadiz Financial Services in 2006, she led the management buy-out of the remainder of the African Harvest group which resulted in the formation of Sygnia.

BBusSc (Actuarial), PhDip (Actuarial), FFA, FASSA, CFP`
  }
];

/* =========================================================
   MACHINERY
   ========================================================= */
(function () {
  "use strict";

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- register links ---------- */
  const hasRegister = REGISTER_URL && REGISTER_URL !== "#";

  $$("[data-register]").forEach(a => {
    if (!hasRegister) {
      // holding state: no link, no arrow, not focusable
      a.classList.add("cta-soon");
      a.removeAttribute("href");
      a.setAttribute("role", "text");
      a.setAttribute("aria-disabled", "true");
      const label = $("span", a);
      if (label) label.textContent = REGISTRATION_SOON;
      const arrow = $(".arrow", a);
      if (arrow) arrow.remove();
      return;
    }
    a.setAttribute("href", REGISTER_URL);
    if (/^https?:/i.test(REGISTER_URL)) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    }

    /* Analytics: registration is the point of the site, so record which
       button placement earned the click. Safe no-op if gtag is blocked. */
    a.addEventListener("click", () => {
      if (typeof window.gtag !== "function") return;
      const where = a.closest("#mobileMenu") ? "mobile_menu"
                  : a.closest(".nav")        ? "nav"
                  : a.closest(".hero")       ? "hero"
                  : a.closest("#contact")    ? "contact"
                  : "other";
      window.gtag("event", "register_click", {
        placement: where,
        link_url: REGISTER_URL
      });
    });
  });

  /* ---------- drifting image slideshows (hero + contact) ---------- */

  // serve the lighter 1200px crops to small screens
  const small = window.innerWidth <= 900 || (window.devicePixelRatio || 1) < 1.5 && window.innerWidth <= 1100;
  const srcFor = s => small ? s.dataset.src.replace(".webp", "@1200.webp") : s.dataset.src;

  const shows = [];

  function makeSlideshow(slides, opts) {
    opts = opts || {};
    if (!slides.length) return null;

    const dotsWrap = opts.dots || null;
    const dwell = opts.dwell || 7000;
    let idx = 0, timer = null;

    slides.forEach((s, i) => {
      const url = srcFor(s);
      const img = new Image();
      img.onload  = () => { s.style.backgroundImage = `url("${url}")`; };
      img.onerror = () => { s.style.backgroundImage = `url("${s.dataset.src}")`; };
      img.src = url;

      if (dotsWrap) {
        const b = document.createElement("button");
        b.setAttribute("role", "tab");
        b.setAttribute("aria-label", "Background image " + (i + 1));
        b.addEventListener("click", () => { show(i); restart(); });
        dotsWrap.appendChild(b);
      }
    });

    const dots = dotsWrap ? $$("button", dotsWrap) : [];

    function show(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach((s, i) => {
        if (i === idx) {
          s.classList.remove("on");
          void s.offsetWidth;          // restart the drift animation
          s.classList.add("on");
        } else {
          s.classList.remove("on");
        }
      });
      dots.forEach((d, i) => d.classList.toggle("on", i === idx));
    }
    function restart() {
      clearInterval(timer);
      if (!reduce) timer = setInterval(() => show(idx + 1), dwell);
    }
    function stop() { clearInterval(timer); }

    show(0); restart();
    const api = { show, restart, stop };
    shows.push(api);
    return api;
  }

  // landing
  makeSlideshow($$(".hero-slide"), { dots: $("#heroDots"), dwell: 7000 });

  // any section carrying its own background (currently Contact).
  // Slower dwell, and it only runs while the section is on screen.
  $$("[data-slideshow]").forEach(bg => {
    const show = makeSlideshow($$(".sec-slide", bg), { dwell: 9000 });
    if (!show) return;
    const section = bg.closest("section");
    if (!section || !("IntersectionObserver" in window)) return;
    new IntersectionObserver(entries => {
      entries.forEach(en => en.isIntersecting ? show.restart() : show.stop());
    }, { threshold: 0 }).observe(section);
  });

  document.addEventListener("visibilitychange", () => {
    shows.forEach(s => document.hidden ? s.stop() : s.restart());
  });

  /* ---------- sponsor ticker: clone for a seamless loop ---------- */
  const track = $("#tickerTrack"), list = $("#tickerList");
  if (track && list) {
    const clone = list.cloneNode(true);
    clone.removeAttribute("id");
    clone.setAttribute("aria-hidden", "true");
    $$("img", clone).forEach(i => i.setAttribute("alt", ""));
    track.appendChild(clone);
  }

  /* ---------- nav: solid on scroll + scrollspy ---------- */
  const nav = $("#nav"), progress = $("#progress");
  const links = $$("#navLinks a");
  const sections = links.map(a => $(a.getAttribute("href"))).filter(Boolean);

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("solid", y > 60);

    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";

    const line = y + window.innerHeight * 0.32;
    let active = sections[0];
    sections.forEach(s => { if (s.offsetTop <= line) active = s; });
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + active.id));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  const burger = $("#burger"), menu = $("#mobileMenu");
  function closeMenu() {
    burger.classList.remove("open");
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  burger.addEventListener("click", () => {
    const open = !menu.classList.contains("open");
    burger.classList.toggle("open", open);
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  $$("a", menu).forEach(a => a.addEventListener("click", closeMenu));

  /* ---------- key subject matter ---------- */
  const kmItems = $$(".km-item");
  const kmNum = $("#kmNum"), kmTitle = $("#kmTitle"), kmText = $("#kmText"), kmPanel = $("#kmPanel");
  // must match the stacked-layout breakpoint in style.css
  const isMobile = () => window.matchMedia("(max-width:1080px)").matches;

  /* backdrop images, one per chapter — preloaded, then cross-faded on select */
  const kmSlides = $$(".sec-slide", $("#kmBg") || document.createElement("div"));
  kmSlides.forEach(s => {
    const url = srcFor(s);
    const img = new Image();
    img.onload  = () => { s.style.backgroundImage = `url("${url}")`; };
    img.onerror = () => { s.style.backgroundImage = `url("${s.dataset.src}")`; };
    img.src = url;
  });
  function setChapterImage(i) {
    kmSlides.forEach((s, n) => {
      if (n === i) {
        s.classList.remove("on");
        void s.offsetWidth;                // restart the slow drift
        s.classList.add("on");
      } else {
        s.classList.remove("on");
      }
    });
  }
  setChapterImage(0);

  function setChapter(i) {
    const item = kmItems[i];
    const already = item.classList.contains("on");
    setChapterImage(i);

    if (isMobile()) {
      kmItems.forEach((it, n) => {
        const body = $(".km-body", it), btn = $(".km-btn", it);
        const open = n === i && !already;
        it.classList.toggle("on", open);
        btn.setAttribute("aria-expanded", String(open));
        body.style.height = open ? $(".km-body-inner", it).offsetHeight + "px" : "0px";
      });
      return;
    }

    kmItems.forEach((it, n) => {
      it.classList.toggle("on", n === i);
      $(".km-btn", it).setAttribute("aria-expanded", String(n === i));
      $(".km-body", it).style.height = "0px";
    });

    kmNum.textContent   = String(i + 1).padStart(2, "0");
    kmTitle.textContent = $(".ttl", item).textContent;
    kmText.textContent  = $(".km-body-inner", item).textContent.trim();

    kmPanel.classList.remove("km-fade");
    void kmPanel.offsetWidth;
    kmPanel.classList.add("km-fade");
  }

  kmItems.forEach((it, i) => $(".km-btn", it).addEventListener("click", () => setChapter(i)));

  let lastMobile = isMobile();
  window.addEventListener("resize", () => {
    const now = isMobile();
    if (now !== lastMobile) {
      lastMobile = now;
      kmItems.forEach(it => { $(".km-body", it).style.height = "0px"; });
      if (!now) setChapter(0);
      else kmItems.forEach((it, n) => it.classList.toggle("on", n === 0));
    } else if (now) {
      const open = kmItems.find(it => it.classList.contains("on"));
      if (open) $(".km-body", open).style.height = $(".km-body-inner", open).offsetHeight + "px";
    }
  });
  if (isMobile()) {
    kmItems.forEach((it, n) => {
      it.classList.toggle("on", n === 0);
      $(".km-body", it).style.height = n === 0 ? $(".km-body-inner", it).offsetHeight + "px" : "0px";
    });
  }

  /* ---------- speakers ---------- */
  const PLACEHOLDER = `<svg class="ph" viewBox="0 0 100 110" fill="currentColor" aria-hidden="true">
      <circle cx="50" cy="34" r="21"/>
      <path d="M50 62c-21 0-38 15-38 34v14h76V96c0-19-17-34-38-34Z"/>
    </svg>`;

  const grid = $("#speakerGrid");

  /* Alphabetical by surname. Strips any honorific first ("Prof Anton du
     Plessis" must sort under D, not P), keeps compound surnames together,
     and falls back to the given name when two people share a surname.
     TBA slots always sort to the end. */
  const TITLES = /^(prof|professor|dr|doctor|adv|advocate|mr|mrs|ms|miss|sir)\.?$/i;

  const nameParts = sp => {
    if (!sp.name) return { first: "￿", last: "￿" };
    const parts = sp.name.trim().split(/\s+/).filter(p => !TITLES.test(p));
    return {
      first: (parts[0] || "").toLocaleLowerCase("en-ZA"),
      last:  (parts.slice(1).join(" ") || parts[0] || "").toLocaleLowerCase("en-ZA")
    };
  };
  const ordered = SPEAKERS.slice().sort((a, b) => {
    const A = nameParts(a), B = nameParts(b);
    return A.last.localeCompare(B.last, "en-ZA")
        || A.first.localeCompare(B.first, "en-ZA");
  });

  // up to 5 across so a five-person line-up fills one row rather than
  // leaving a single orphan card below
  grid.style.setProperty("--cols", Math.min(Math.max(ordered.length, 1), 5));

  ordered.forEach((sp, i) => {
    // { tba: true } renders a muted, non-clickable "to be announced" card
    if (sp.tba) {
      const slot = document.createElement("div");
      slot.className = "speaker speaker-tba rv rv-d" + Math.min(i + 1, 4);
      slot.innerHTML = `
        <span class="speaker-photo">${PLACEHOLDER}</span>
        <span class="speaker-meta"><span class="nm">To Be Announced</span></span>`;
      grid.appendChild(slot);
      return;
    }

    const btn = document.createElement("button");
    btn.className = "speaker rv rv-d" + Math.min(i + 1, 4);
    btn.type = "button";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.innerHTML = `
      <span class="speaker-more" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M12 5v14M5 12h14"/></svg>
      </span>
      <span class="speaker-photo">
        ${sp.photo ? `<img src="assets/speakers/${sp.photo}" alt="${sp.name}" loading="lazy">` : PLACEHOLDER}
      </span>
      <span class="speaker-meta">
        <span class="nm">${sp.name}</span>
        <span class="co">${[sp.role, sp.company].filter(Boolean).join(", ")}</span>
      </span>`;
    btn.addEventListener("click", () => openLB(i));
    grid.appendChild(btn);
  });

  /* ---------- lightbox ---------- */
  const lb = $("#lb"), lbPhoto = $("#lbPhoto");
  let lastFocus = null;

  const esc = t => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* Blank line = new paragraph. [text](https://url) = link.
     Everything is escaped first, so only these two forms produce markup. */
  function renderBio(text) {
    return String(text).trim().split(/\n\s*\n/).map(para => {
      const body = esc(para.replace(/\s*\n\s*/g, " ").trim())
        .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
          '<a href="$2" target="_blank" rel="noopener">$1</a>');
      return `<p>${body}</p>`;
    }).join("");
  }

  function openLB(i) {
    const sp = ordered[i];        // must be the sorted list the cards were built from
    lbPhoto.innerHTML = sp.photo
      ? `<img src="assets/speakers/${sp.photo}" alt="${esc(sp.name)}">`
      : PLACEHOLDER;
    $("#lbName").textContent = sp.name;
    $("#lbRole").textContent = sp.role;
    $("#lbCo").textContent   = sp.company;
    $("#lbBio").innerHTML    = renderBio(sp.bio);

    lastFocus = document.activeElement;
    lb.hidden = false;
    requestAnimationFrame(() => lb.classList.add("open"));
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  }
  function closeLB() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => { lb.hidden = true; }, 380);
    if (lastFocus) lastFocus.focus();
  }
  $("#lbClose").addEventListener("click", closeLB);
  lb.addEventListener("click", e => { if (e.target === lb) closeLB(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { if (lb.classList.contains("open")) closeLB(); closeMenu(); }
  });

  /* ---------- countdown timers ----------
     Target dates live on the data-countdown attribute in index.html
     (ISO 8601 with the +02:00 SAST offset, so it is correct for
     visitors in any time zone).                                     */
  const UNITS = [["days", "Days"], ["hours", "Hours"], ["mins", "Mins"], ["secs", "Secs"]];

  $$("[data-countdown]").forEach(cd => {
    const target = new Date(cd.dataset.countdown).getTime();
    const city   = cd.dataset.city || "the Forum";
    const box    = $(".cd-units", cd);
    const cells  = {};

    UNITS.forEach(([key, label]) => {
      const el = document.createElement("div");
      el.className = "cd-unit";
      el.innerHTML = `<b>--</b><i>${label}</i>`;
      box.appendChild(el);
      cells[key] = el;
    });

    let prev = {};

    function tick() {
      let diff = target - Date.now();

      if (diff <= 0) {
        box.innerHTML = `<p class="cd-live">${city} is under way</p>`;
        clearInterval(handle);
        return;
      }

      const s = Math.floor(diff / 1000);
      const v = {
        days:  Math.floor(s / 86400),
        hours: Math.floor(s / 3600) % 24,
        mins:  Math.floor(s / 60) % 60,
        secs:  s % 60
      };

      UNITS.forEach(([key]) => {
        if (prev[key] === v[key]) return;
        const cell = cells[key];
        $("b", cell).textContent = key === "days"
          ? String(v[key])
          : String(v[key]).padStart(2, "0");
        if (!reduce && prev[key] !== undefined) {
          cell.classList.remove("tick");
          void cell.offsetWidth;
          cell.classList.add("tick");
        }
        prev[key] = v[key];
      });

      cd.setAttribute("aria-label",
        `${v.days} days, ${v.hours} hours and ${v.mins} minutes until ${city}`);
    }

    tick();
    const handle = setInterval(tick, 1000);
  });

  /* ---------- 2026 highlights video ----------
     Click-to-play facade. The Vimeo player is only inserted once the visitor
     presses play, so no third-party request or cookie occurs on page load. */
  const playBtn = $(".video-play");
  if (playBtn) {
    playBtn.addEventListener("click", () => {
      const id = playBtn.dataset.vimeo;
      const frame = document.createElement("iframe");
      frame.className = "video-frame";
      frame.src = `https://player.vimeo.com/video/${id}?autoplay=1&dnt=1&title=0&byline=0&portrait=0`;
      frame.title = "The Investment Forum 2026 highlights";
      frame.allow = "autoplay; fullscreen; picture-in-picture";
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      frame.setAttribute("allowfullscreen", "");
      playBtn.replaceWith(frame);
      frame.focus();

      if (typeof window.gtag === "function") {
        window.gtag("event", "video_play", { video_title: "Investment Forum 2026 highlights" });
      }
    }, { once: true });
  }

  /* ---------- scroll reveals ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  $$(".rv").forEach(el => io.observe(el));

})();
