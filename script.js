/* =====================================================================
   💗 JANNU'S BIRTHDAY SURPRISE — script.js
   One shared script for every page. Each page sets <body data-page="…">
   and the matching module at the bottom of this file runs for it.
   ===================================================================== */

/* =====================================================================
   1. EMAIL SETTINGS (EmailJS) — see README.md → "Email notifications"
   Leave the placeholders as they are and the date choice is simply
   saved on her device instead of being emailed.
   ===================================================================== */
const EMAILJS_SERVICE_ID = "EMAILJS_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "EMAILJS_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "EMAILJS_PUBLIC_KEY";
const MY_EMAIL_ADDRESS = "humayonkabir107355@gmail.com";

/* =====================================================================
   2. CENTRAL CONFIGURATION — edit names, photos and words here.
   {herName} and {nickname} inside any text are replaced automatically.
   ===================================================================== */
const birthdayConfig = {
    herName: "Jannu",
    nickname: "My Wifey",
    birthdayMessage: "Happy Birthday, My Jannu!",
    secretCode: "jannu",
    herPhoto: "assets/assets/assets/her-photo.jpg",
    myPhoto: "assets/my-photo.jpg",
    couplePhoto: "assets/couple-photo.jpg",
    // The first file that exists is used (drop your own funny-cat.gif in!)
    funnyCat: ["assets/assets/funny-cat.gif", "assets/funny-cat.jpg"],
    flowerPhoto: "assets/flower.jpg",
    albumArt: "assets/album-art.jpg",
    email: "humayonkabir107355@gmail.com",
    restaurants: [
        "Swadesh Restaurant",
        "SEASONS Meat & Grill",
        "Coffee Day",
        "Yōkoso"
    ],
    // Extra details shown on each restaurant card (same order as above).
    // Add a photo like "assets/restaurant-1.jpg" to show a real picture.
    restaurantDetails: [
        { emoji: "🍝", image: "assets/assets/assets/restaurant-1.jpg", description: "Candlelight, pasta and the two of us sharing one dessert." },
        { emoji: "🍣", image: "assets/assets/assets/restaurant-2.jpg", description: "Something fancy, something new, and you looking gorgeous." },
        { emoji: "🥘", image: "assets/assets/assets/restaurant-3.jpg", description: "Cozy corner table, slow conversations, warm food." },
        { emoji: "🍔", image: "assets/assets/assets/restaurant-4.jpg", description: "Cute, casual and full of laughs — burgers & milkshakes." }
    ],

    song: {
        title: "Alfaaz",
        artists: "Hamza Malik & Zain Zohaib",
        link: "https://www.youtube.com/results?search_query=Alfaaz+Hamza+Malik+Zain+Zohaib",
        audio: "assets/Alfaaz.mp3"
    },

    text: {
        welcome: {
            title: "Happy Birthday, My Wifey! 🎂❤️",
            subtitle: "The world became a little more beautiful on the day you were born, and my world became complete the day I found you.",
            intro: "Welcome to a tiny pink universe I made only for you,Taniaa. Every page hides a little piece of my heart.",
            candleSpecial: "Jannu, this candle is special. It won't disappear with an ordinary breath. You need my heart to blow it out. ❤️",
            candleHow: "Click the candle twice and then make your wish, my love!",
            wishSaved: "Your wish is now safely inside my heart. 💗"
        },
        accept: {
            title: "JAnnu, I have a little surprise for you! 🎁",
            question: "Will you accept your birthday gift from me?",
            yesMessage: "YAY! My Jannu accepted her gift! 💗",
            noMessages: [
                "ERROR 404: Your rejection is not accepted by my heart! 😭",
                "SYSTEM ALERT: The NO button has been reported to the Love Police! 🚨😂",
                "Hmm… my heart's Wi-Fi only connects to YES. Please try again. 📶❤️",
                "Rejection.exe has stopped working. Only YES is installed! 💻💗",
                "The cat is crying now. Look what you did. 😿 Press YES to fix it!"
            ]
        },
        promises: [
            "I promise to always respect your feelings, your dreams, and your individuality.",
            "I promise to keep trying to make you smile, even on the days when everything feels difficult.",
            "I promise to stand beside you, celebrate your happiness, and support you through life's challenges."
        ],
        letter: "Happy Birthday, my Jannu.\n\nI wish I could explain how special you are to me, but even a thousand words would never be enough.\n\nYou are my favorite smile, my sweetest peace, my soulmate IN SHHA ALLAH, and one of the most beautiful parts of my life.\n\nYour little habits, your smile, your eyes, your laughter, your moods, and even your silly moments make you so special to me.\n\nI love the way you make ordinary moments feel extraordinary.\n\nOn your birthday, I wish you happiness, peace, success, beautiful memories all with mee and everything your heart dreams of.\n\nAnd if I could make one birthday wish for myself, it would be to keep making you smile for a very, very long time.\n\nHappy Birthday, JAnnu.\n\nForever jannu's favorite person. ❤️",
        diaryList: "Your smile.\nYour eyes.\nYour beautiful heart.\nYour adorable expressions.\nYour little moods.\nYour kindness.\nYour dreams.\nYour existence.\n\nAnd the million little things that make you YOU.",
        diaryLetter: "Dear Jannu,\n\nThis little diary is where I keep the softest parts of my heart. Every page smells like your laugh, and every line is written with you in mind.\n\nOn your birthday I hope you feel as loved as you make me feel every single day — wrapped in hugs, surrounded by happiness, and showered with all the cake you want.\n\nYour lips are my favorite poetry,\nYour eyes are my favorite sea,\nIf kisses were a language, baby,\nI will write you an endless melody.\n\nYou are my favorite chapter. 📖💗",
        quiz: {
            question: "What do you love MOST about me?",
            options: [
                { label: "My eyes 👀", correct: false },
                { label: "My hair 💇", correct: false },
                { label: "My height 📏", correct: false },
                { label: "My smile 😊", correct: false },
                { label: "My dimples 😌", correct: false },
                { label: "Everything about me 😭❤️", correct: true }
            ],
            correct: "Correct answer, my Wifey! You know me too well! ❤️",
            wrong: "Wrong answer, Jannu!\n\n! 😂❤️\n\nTry again,socho jannu you are lovely ."
        },
        moods: [
            { id: "happy", label: "Happy", emoji: "😊", reply: "Your happiness is my favorite notification! ❤️" },
            { id: "sad", label: "Sad", emoji: "🥺", reply: "Come here, my Jannu. Sending you the biggest virtual hug. 🫂" },
            { id: "smiling", label: "Smiling", emoji: "😄", reply: "That smile is dangerous for my heart. 😭❤️" },
            { id: "angry", label: "Angry", emoji: "😤", reply: "Okay, okay... I am sending peace, hugs, and chocolates. Please don't kill me. 😂" },
            { id: "jealous", label: "Jealous", emoji: "😏", reply: "Awww, my possessive little Wifey. Don't worry, you have a very special place in my heart. ❤️" },
            { id: "sleepy", label: "Sleepy", emoji: "😴", reply: "Sleep well, my sleepy princess. Sweet dreams. 😴" },
            { id: "missing", label: "Missing Me", emoji: "🥹", reply: "Distance may separate us, but my heart is always with you. ❤️" }
        ],
        meetOptions: [
            { id: "morning", label: "Morning 🌤️", hour: 9 },
            { id: "afternoon", label: "Afternoon ☀️", hour: 14 },
            { id: "evening", label: "Evening 🌅", hour: 18 },
            { id: "night", label: "Night 🌙", hour: 22 },
            { id: "anytime", label: "Anytime, as long as it's with you 🥹", hour: null }
        ],
        forever: {
            intro: "Jannu...\n\nYou have reached the final page of my little birthday surprise.\n\nBut there is something I have wanted to ask you...",
            sorry: "Sorry, Jannu...\n\nYou were looking for me in this little website.\n\nBut I have been looking for you in my heart, throughout my lifetime. ❤️",
            question: "Will you be happy to spend the rest of your life with me? 💍",
            noTaunts: ["Nice try, Jannu! 😂", "Too slow, my love! 🏃‍♂️💨", "The NO button is shy 🙈", "Nope, it ran away! 😜", "Catch me if you can! 😂", "Still playing hide-and-seek! 💗"],
            finalMessage: "My Jannu...\n\nYou make my world more beautiful in ways words could never fully explain.\n\nYour smile, your little moods, your kindness, your adorable ways, and every tiny thing about you make me fall for you a little more every day.\n\nI know I cannot promise that every day will be perfect.\n\nBut I promise to keep choosing you through every season of life.\n\nI promise to choose kindness when things get difficult, understanding when we disagree, laughter in our little moments, and love in everything we do.\n\nIf life gives us a thousand chapters, I wish to write every possible one with you, hand in hand, heart to heart.\n\nAnd if I could make one wish today, it would be to see you smile a million more times and to be one of the reasons behind every single one.\n\nHappy Birthday, My Beautiful Wifey!\n\nYou are not just my favorite person, you are my favorite feeling, my sweetest blessing, and one of the most beautiful parts of my life.\n\nHAppy BIRTHday again! \n\nI love you endlessly, Jannu. ❤️" }
    }
};

/* =====================================================================
   3. PAGE ORDER, PATHS & SAVED CHOICES
   ===================================================================== */
const FLOW = ["index", "accept", "gifts", "letter", "flower", "diary", "promises",
    "date", "quiz", "my-flower", "mood", "song", "meet", "forever"];

// Pages live in /pages/, the welcome page at the root — work out relative paths.
const IN_PAGES = /\/pages\//.test(location.pathname);
const BASE = IN_PAGES ? "../" : "";
const asset = (p) => BASE + p;
const pageUrl = (name) => name === "index" ? BASE + "index.html" : (IN_PAGES ? "" : "pages/") + name + ".html";

// Fill {herName}/{nickname} placeholders.
const fmt = (s) => String(s ?? "").replace(/\{herName\}/g, birthdayConfig.herName).replace(/\{nickname\}/g, birthdayConfig.nickname);
const getPath = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Her choices are kept in localStorage so they survive moving between pages.
const store = {
    key: "jannuBirthdaySurprise",
    all() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch { return {}; } },
    get(k, fallback = null) { const v = this.all()[k]; return v === undefined ? fallback : v; },
    set(k, v) { const d = this.all(); d[k] = v; try { localStorage.setItem(this.key, JSON.stringify(d)); } catch { /* private mode */ } },
    clear() { try { localStorage.removeItem(this.key); } catch { /* ignore */ } }
};

/* =====================================================================
   4. SOUND — tiny synthesized sounds (no audio files needed)
   Nothing plays until she taps something, as browsers require.
   ===================================================================== */
const Sound = {
    ctx: null,
    get enabled() { return store.get("sound", true); },
    init() {
        if (!this.ctx) {
            const AC = window.AudioContext || window.webkitAudioContext;
            if (AC) this.ctx = new AC();
        }
        if (this.ctx && this.ctx.state === "suspended") this.ctx.resume();
        return this.ctx;
    },
    tone(freq, dur = 0.15, type = "sine", vol = 0.06, when = 0, force = false) {
        if (!force && !this.enabled) return;
        const ctx = this.init(); if (!ctx) return;
        const t = ctx.currentTime + when;
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.type = type; osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.exponentialRampToValueAtTime(vol, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        osc.connect(gain).connect(ctx.destination);
        osc.start(t); osc.stop(t + dur + 0.05);
    },
    click() { this.tone(880, 0.09, "triangle", 0.04); this.tone(1320, 0.07, "sine", 0.025, 0.03); },
    pop() { this.tone(600, 0.12, "sine", 0.06); this.tone(900, 0.1, "sine", 0.04, 0.05); },
    chime() { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.5, "sine", 0.05, i * 0.08)); },
    celebrate() { [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => this.tone(f, 0.6, "triangle", 0.05, i * 0.11)); },
    oops() { this.tone(330, 0.18, "square", 0.03); this.tone(220, 0.35, "square", 0.03, 0.18); },
    // A soft "whoosh" for blowing out the candle.
    blow() {
        if (!this.enabled) return;
        const ctx = this.init(); if (!ctx) return;
        const len = ctx.sampleRate * 0.8; const buf = ctx.createBuffer(1, len, ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
        const src = ctx.createBufferSource(); src.buffer = buf;
        const filter = ctx.createBiquadFilter(); filter.type = "bandpass"; filter.frequency.value = 900;
        const gain = ctx.createGain(); gain.gain.value = 0.12;
        src.connect(filter).connect(gain).connect(ctx.destination); src.start();
    }
};

/* Background music resumes from its last position as each page loads. */
const Music = {
    audio: null,
    get wanted() { return store.get("music", false); },
    get playing() { return !!this.audio && !this.audio.paused && !this.audio.ended; },
    prepare() {
        if (!this.audio && birthdayConfig.song.audio) {
            this.audio = new Audio(asset(birthdayConfig.song.audio));
            this.audio.loop = true;
            this.audio.preload = "auto";
            this.audio.volume = 0.45;
            const savedPosition = Number(store.get("musicPosition", 0));
            this.audio.addEventListener("loadedmetadata", () => {
                if (Number.isFinite(savedPosition) && savedPosition > 0 && savedPosition < this.audio.duration) {
                    this.audio.currentTime = savedPosition;
                }
            }, { once: true });
            this.audio.addEventListener("timeupdate", () => document.dispatchEvent(new Event("music-time")));
            this.audio.addEventListener("error", () => document.dispatchEvent(new Event("music-error")));
        }
        return this.audio;
    },
    savePosition() {
        if (this.audio && Number.isFinite(this.audio.currentTime)) store.set("musicPosition", this.audio.currentTime);
    },
    async start() {
        const audio = this.prepare();
        if (!audio) {
            document.dispatchEvent(new Event("music-error"));
            return false;
        }
        try {
            await audio.play();
            store.set("music", true);
            this.savePosition();
            document.dispatchEvent(new Event("music-change"));
            return true;
        } catch {
            store.set("music", true);
            document.dispatchEvent(new Event("music-change"));
            return false;
        }
    },
    stop() {
        if (this.audio) {
            this.audio.pause();
            this.savePosition();
        }
        store.set("music", false);
        document.dispatchEvent(new Event("music-change"));
    },
    toggle() { if (this.playing) this.stop(); else { store.set("music", true); return this.start(); } }
};
window.addEventListener("pagehide", () => Music.savePosition());

/* =====================================================================
   5. NAVIGATION — smooth fade between pages
   ===================================================================== */
function go(name, delay = 0) {
    setTimeout(() => {
        document.body.classList.add("is-leaving");
        setTimeout(() => { location.href = pageUrl(name); }, 450);
    }, delay);
}

// Any element with data-go="pageName" navigates there on click.
function wireGoLinks(root = document) {
    $$("[data-go]", root).forEach((el) => {
        if (el.dataset.wired) return;
        el.dataset.wired = "1";
        el.addEventListener("click", (e) => { e.preventDefault(); Sound.click(); go(el.dataset.go); });
    });
}

/* =====================================================================
   6. SHARED CHROME — top bar (back, progress, sound), floating hearts,
   footer. Injected on every page so the HTML files stay simple.
   ===================================================================== */
function buildChrome() {
    const page = document.body.dataset.page;
    const idx = Math.max(0, FLOW.indexOf(page));
    const isNight = store.get("theme", "day") === "night";
    document.body.classList.toggle("night-mode", isNight);
    const themeMeta = $('meta[name="theme-color"]');
    if (themeMeta) themeMeta.content = isNight ? "#211325" : "#F8C8DC";

    // Floating hearts in the background
    const layer = document.createElement("div");
    layer.className = "floating-hearts"; layer.setAttribute("aria-hidden", "true");
    const symbols = ["💗", "💕", "❤️", "🌸", "💖", "🩷", "✨"];
    for (let i = 0; i < 16; i++) {
        const s = document.createElement("span");
        s.textContent = pick(symbols);
        s.style.left = rand(0, 100) + "%";
        s.style.fontSize = rand(12, 28) + "px";
        s.style.animationDuration = rand(9, 18) + "s";
        s.style.animationDelay = -rand(0, 18) + "s";
        layer.appendChild(s);
    }
    document.body.prepend(layer);

    // Top bar
    const bar = document.createElement("header");
    bar.className = "topbar";
    const backTarget = ["letter", "flower", "diary"].includes(page) ? "gifts" : FLOW[idx - 1];
    bar.innerHTML = `
        ${page !== "index" ? `<button class="icon-btn back-btn" type="button" aria-label="Go back">←<span> Back</span></button>` : `<span class="topbar-spacer"></span>`}
        <div class="progress" role="progressbar" aria-valuemin="1" aria-valuemax="${FLOW.length}" aria-valuenow="${idx + 1}" aria-label="Surprise progress">
            <div class="progress-track"><div class="progress-fill" style="width:${((idx + 1) / FLOW.length) * 100}%"><span class="progress-heart">💗</span></div></div>
            <span class="progress-label">${idx + 1} / ${FLOW.length}</span>
        </div>
        <div class="topbar-actions">
            <button class="icon-btn theme-btn" type="button" aria-label="Switch to ${isNight ? "day" : "night"} mode" aria-pressed="${isNight}">${isNight ? "🌙" : "☀️"}</button>
            <button class="icon-btn sound-btn" type="button" aria-label="Toggle sound effects"></button>
            <button class="icon-btn music-btn" type="button" aria-label="Toggle background music"></button>
        </div>`;
    document.body.prepend(bar);

    const back = $(".back-btn", bar);
    if (back) back.addEventListener("click", () => { Sound.click(); go(backTarget); });

    const themeBtn = $(".theme-btn", bar);
    if (themeBtn) themeBtn.addEventListener("click", () => {
        const night = !document.body.classList.contains("night-mode");
        document.body.classList.toggle("night-mode", night);
        store.set("theme", night ? "night" : "day");
        const themeMeta = $('meta[name="theme-color"]');
        if (themeMeta) themeMeta.content = night ? "#211325" : "#F8C8DC";
        themeBtn.textContent = night ? "🌙" : "☀️";
        themeBtn.setAttribute("aria-label", `Switch to ${night ? "day" : "night"} mode`);
        themeBtn.setAttribute("aria-pressed", String(night));
    });

    const soundBtn = $(".sound-btn", bar); const musicBtn = $(".music-btn", bar);
    const paint = () => {
        soundBtn.textContent = Sound.enabled ? "🔊" : "🔈";
        soundBtn.classList.toggle("off", !Sound.enabled);
        musicBtn.textContent = "🎵";
        musicBtn.classList.toggle("off", !Music.playing);
        musicBtn.title = Music.playing ? `Pause ${birthdayConfig.song.title}` : `Play ${birthdayConfig.song.title}`;
        musicBtn.setAttribute("aria-label", Music.playing ? "Pause background music" : "Play background music");
    };
    soundBtn.addEventListener("click", () => { store.set("sound", !Sound.enabled); paint(); Sound.click(); });
    musicBtn.addEventListener("click", () => { Music.toggle(); paint(); });
    document.addEventListener("music-change", paint);
    paint();

    // Try to resume when navigating between pages; wait for a tap if autoplay is blocked.
    if (Music.wanted) {
        Music.start();
        const resume = (e) => {
            if (!e.target.closest(".music-btn, #playBtn") && !Music.playing && Music.wanted) Music.start();
        };
        document.addEventListener("pointerdown", resume, { once: true });
    }

    // Footer
    const footer = document.createElement("footer");
    footer.className = "love-footer";
    footer.innerHTML = `Made with Love ❤️ for <span class="script">${fmt("{herName}")}</span>`;
    document.body.appendChild(footer);

    // Effects layer for hearts / petals / confetti
    const fx = document.createElement("div"); fx.className = "fx-layer"; fx.setAttribute("aria-hidden", "true");
    document.body.appendChild(fx);
}

/* =====================================================================
   7. CONTENT BINDING — fills text and photos from birthdayConfig
   ===================================================================== */
// Replaces {herName}/{nickname} written directly in the HTML pages.
function bindNames(root = document.body) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) if (node.nodeValue.includes("{")) node.nodeValue = fmt(node.nodeValue);
    $$("[alt], [aria-label]", root).forEach((el) => ["alt", "aria-label"].forEach((a) => {
        const v = el.getAttribute(a);
        if (v && v.includes("{")) el.setAttribute(a, fmt(v));
    }));
}

function bindText(root = document) {
    $$("[data-text]", root).forEach((el) => {
        const v = getPath(birthdayConfig, el.dataset.text);
        if (typeof v === "string") el.textContent = fmt(v);
    });
}

// On Netlify, photos go through the Image CDN (smaller & faster on phones);
// when opened from your computer the original file is used.
function optimised(src) {
    if (!/^https?:/.test(location.protocol) || /\.gif$/i.test(src) || location.hostname === "localhost" || location.hostname === "127.0.0.1") return src;
    const path = new URL(src, location.href).pathname;
    return `/.netlify/images?url=${encodeURIComponent(path)}&w=900&fm=webp`;
}

function bindPhotos(root = document) {
    $$("img[data-photo]", root).forEach((img) => {
        const src = birthdayConfig[img.dataset.photo];
        const list = Array.isArray(src) ? src : [src];
        loadPhotoWithRawFallback(img, list, img.dataset.label || `Add ${list[0]}`);
    });
}

// Loads a photo (CDN version first, then the original file, then the next
// candidate). If nothing exists, shows a cute placeholder naming the file to add.
function loadPhotoWithRawFallback(img, list, label) {
    let i = 0, triedRaw = false;
    const show = (src) => { img.src = src; };
    const next = () => {
        if (i >= list.length) {
            const ph = document.createElement("div");
            ph.className = "photo-placeholder " + (img.className || "");
            ph.innerHTML = `<span class="ph-emoji">${img.dataset.emoji || "💗"}</span><span class="ph-label">${label}</span>`;
            ph.setAttribute("role", "img"); ph.setAttribute("aria-label", img.alt || "Photo placeholder");
            img.replaceWith(ph);
            return;
        }
        const raw = asset(list[i]);
        const opt = optimised(raw);
        if (!triedRaw && opt !== raw) { triedRaw = true; show(opt); return; }
        triedRaw = false; i++; show(raw);
    };
    img.addEventListener("error", next);
    next();
}

/* =====================================================================
   8. EFFECTS — heart bursts, petals, confetti, typewriter, modal
   ===================================================================== */
const fxLayer = () => $(".fx-layer") || document.body;

// Hearts explode outwards from a point (defaults to screen centre).
function heartBurst(x = innerWidth / 2, y = innerHeight / 2, count = 22, symbols = ["💗", "💖", "❤️", "💕", "🩷"]) {
    for (let i = 0; i < count; i++) {
        const h = document.createElement("span");
        h.className = "burst-heart";
        h.textContent = pick(symbols);
        const angle = rand(0, Math.PI * 2); const dist = rand(80, 260);
        h.style.left = x + "px"; h.style.top = y + "px";
        h.style.setProperty("--dx", Math.cos(angle) * dist + "px");
        h.style.setProperty("--dy", Math.sin(angle) * dist - 60 + "px");
        h.style.fontSize = rand(16, 34) + "px";
        h.style.animationDelay = rand(0, 0.15) + "s";
        fxLayer().appendChild(h);
        setTimeout(() => h.remove(), 1700);
    }
}
const burstFrom = (el, count, symbols) => {
    const r = el.getBoundingClientRect();
    heartBurst(r.left + r.width / 2, r.top + r.height / 2, count, symbols);
};

// Rose petals / flowers drifting down the screen.
function petalRain(count = 30, symbols = ["🌸", "🌷", "🌹", "💮", "🩷"]) {
    for (let i = 0; i < count; i++) {
        const p = document.createElement("span");
        p.className = "petal";
        p.textContent = pick(symbols);
        p.style.left = rand(0, 100) + "vw";
        p.style.fontSize = rand(16, 32) + "px";
        p.style.animationDuration = rand(3.5, 7) + "s";
        p.style.animationDelay = rand(0, 2.5) + "s";
        p.style.setProperty("--sway", rand(-80, 80) + "px");
        fxLayer().appendChild(p);
        setTimeout(() => p.remove(), 10000);
    }
}

// Lightweight canvas confetti.
const Confetti = {
    canvas: null, ctx: null, parts: [], running: false,
    ensure() {
        if (this.canvas) return;
        this.canvas = document.createElement("canvas");
        this.canvas.className = "confetti-canvas"; this.canvas.setAttribute("aria-hidden", "true");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        const resize = () => { this.canvas.width = innerWidth * devicePixelRatio; this.canvas.height = innerHeight * devicePixelRatio; };
        resize(); addEventListener("resize", resize);
    },
    burst({ x = innerWidth / 2, y = innerHeight / 2, count = 120, spread = 1 } = {}) {
        this.ensure();
        const colors = ["#FF69B4", "#F8C8DC", "#FFFFFF", "#E63946", "#FADADD", "#FFD1E8", "#FFC0CB"];
        for (let i = 0; i < count; i++) {
            const a = rand(0, Math.PI * 2); const v = rand(4, 13) * spread;
            this.parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - rand(3, 7), size: rand(5, 11),
                color: pick(colors), rot: rand(0, 6), vr: rand(-0.2, 0.2), heart: Math.random() < 0.3, life: 1 });
        }
        if (!this.running) { this.running = true; requestAnimationFrame(() => this.frame()); }
    },
    rain(count = 150) {
        for (let i = 0; i < count; i++) setTimeout(() => this.burst({ x: rand(0, innerWidth), y: -20, count: 1, spread: 0.3 }), i * 18);
    },
    frame() {
        const { ctx, canvas } = this; const d = devicePixelRatio;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.parts = this.parts.filter((p) => p.y < innerHeight + 40 && p.life > 0);
        this.parts.forEach((p) => {
            p.vy += 0.22; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life -= 0.004;
            ctx.save(); ctx.translate(p.x * d, p.y * d); ctx.rotate(p.rot); ctx.globalAlpha = Math.max(0, p.life);
            ctx.fillStyle = p.color;
            if (p.heart) { ctx.font = `${p.size * 2 * d}px serif`; ctx.fillText("♥", 0, 0); }
            else ctx.fillRect(-p.size * d / 2, -p.size * d / 4, p.size * d, p.size * d / 2);
            ctx.restore();
        });
        if (this.parts.length) requestAnimationFrame(() => this.frame());
        else { this.running = false; ctx.clearRect(0, 0, canvas.width, canvas.height); }
    }
};

// Typewriter text. Tapping the text finishes it instantly.
function typeWriter(el, text, speed = 32) {
    return new Promise((resolve) => {
        el.textContent = ""; el.classList.add("typing");
        let i = 0, done = false;
        const finish = () => { if (done) return; done = true; el.textContent = text; el.classList.remove("typing"); resolve(); };
        el.addEventListener("click", finish, { once: true });
        const tick = () => {
            if (done) return;
            if (i >= text.length) return finish();
            el.textContent += text[i];
            const ch = text[i++];
            setTimeout(tick, ch === "\n" ? speed * 6 : /[.,!?…]/.test(ch) ? speed * 4 : speed);
        };
        tick();
    });
}

// Reusable pop-up. buttons: [{ label, className, onClick }]
function showModal({ title = "", body = "", html = "", variant = "", buttons = [{ label: "Okay 💗" }] }) {
    return new Promise((resolve) => {
        const wrap = document.createElement("div");
        wrap.className = "modal-backdrop";
        wrap.innerHTML = `<div class="modal glass ${variant}" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
            <h2 id="modalTitle" class="modal-title"></h2>
            <p class="modal-body"></p>
            <div class="modal-extra"></div>
            <div class="modal-actions"></div></div>`;
        $(".modal-title", wrap).textContent = title;
        $(".modal-body", wrap).textContent = body;
        if (html) $(".modal-extra", wrap).innerHTML = html;
        const close = (val) => { wrap.classList.add("closing"); setTimeout(() => wrap.remove(), 250); resolve(val); };
        buttons.forEach((b, i) => {
            const btn = document.createElement("button");
            btn.type = "button"; btn.className = "btn " + (b.className || "btn-primary"); btn.textContent = b.label;
            btn.addEventListener("click", () => {
                Sound.click();
                if (b.onClick) { const keep = b.onClick(wrap, close); if (keep === false) return; }
                close(i);
            });
            $(".modal-actions", wrap).appendChild(btn);
        });
        document.body.appendChild(wrap);
        setTimeout(() => { const f = $("input", wrap) || $(".modal-actions button", wrap); f && f.focus(); }, 60);
    });
}

const show = (el) => { if (!el) return; el.classList.remove("hidden"); el.classList.add("reveal"); };
const hide = (el) => el && el.classList.add("hidden");
function shake(el = document.body, cls = "shake") { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); setTimeout(() => el.classList.remove(cls), 900); }

function loadScript(src) {
    return new Promise((resolve, reject) => {
        if ($(`script[src="${src}"]`)) return resolve();
        const s = document.createElement("script"); s.src = src; s.onload = resolve; s.onerror = reject;
        document.head.appendChild(s);
    });
}

/* =====================================================================
   9. PAGE MODULES
   ===================================================================== */
const Pages = {};

/* ---------- PAGE 1: Birthday welcome & the special candle ---------- */
Pages.index = () => {
    const candle = $("#candle"), msg = $("#candleMsg"), hint = $("#cakeHint"), cont = $("#continueBtn"), cake = $("#cake");
    const t = birthdayConfig.text.welcome;
    $("#cakeName").textContent = birthdayConfig.herName;
    let state = "lit";      // lit → explained → blowing → out
    let taps = 0;

    const say = async (text) => { show(msg); await typeWriter($(".message-text", msg), fmt(text), 28); };

    // A little heart flies from below up to the flame — "my heart blows it out".
    const sendHeart = () => {
        const r = candle.getBoundingClientRect();
        const h = document.createElement("span");
        h.className = "heart-flyer"; h.textContent = "❤️";
        h.style.left = r.left + r.width / 2 + "px"; h.style.top = r.top + "px";
        fxLayer().appendChild(h); setTimeout(() => h.remove(), 1200);
    };

    candle.addEventListener("click", async () => {
        Sound.init();
        if (state === "busy" || state === "out") return;

        if (state === "lit") {           // First tap: explain the special candle
            state = "busy"; Sound.pop();
            candle.classList.add("flicker");
            hint.textContent = "This candle is a little stubborn… 🕯️";
            await say(t.candleSpecial);
            await wait(700);
            const how = document.createElement("p");
            how.className = "message-how"; how.textContent = fmt(t.candleHow);
            msg.appendChild(how);
            hint.textContent = "Tap the candle twice with love 💗💗";
            candle.classList.remove("flicker");
            state = "explained";
            return;
        }

        if (state === "explained") {     // Two heart-powered taps blow it out
            taps++; sendHeart(); Sound.tone(700 + taps * 200, 0.15, "sine", 0.05);
            candle.classList.add("flicker-hard");
            setTimeout(() => candle.classList.remove("flicker-hard"), 500);
            if (taps < 2) { hint.textContent = "One more tap… then close your eyes & wish 🤫"; return; }

            state = "out";
            hint.textContent = "Make your wish, my love… ✨";
            await wait(700);
            Sound.blow();
            cake.classList.add("blown");
            candle.setAttribute("aria-label", "The candle is blown out");
            await wait(900);
            Sound.celebrate();
            Confetti.burst({ y: innerHeight * 0.45, count: 160 });
            burstFrom(candle, 26);
            petalRain(18, ["💗", "💖", "🩷", "✨"]);
            hint.textContent = "🎉 Wish made! 🎉";
            $(".message-how", msg)?.remove();
            await say(t.wishSaved);
            show(cont);
        }
    });

    cont.addEventListener("click", (e) => { e.preventDefault(); Sound.click(); go("accept"); });
};

/* ---------- PAGE 2: Accept your gift? ---------- */
Pages.accept = () => {
    const t = birthdayConfig.text.accept;
    const yes = $("#yesBtn"), no = $("#noBtn"), result = $("#acceptResult"), alarm = $("#alarm");
    let noCount = 0;

    no.addEventListener("click", () => {
        Sound.oops();
        // Red alert: tint the screen, shake it, show a cheeky error
        document.body.classList.add("red-alert");
        shake(document.body, "shake-hard");
        $(".alarm-text", alarm).textContent = t.noMessages[noCount % t.noMessages.length];
        show(alarm); alarm.classList.add("pop");
        noCount++;
        // The YES button grows a little every time 😏
        yes.style.transform = `scale(${Math.min(1 + noCount * 0.12, 1.6)})`;
        no.style.transform = `scale(${Math.max(1 - noCount * 0.08, 0.7)})`;
        setTimeout(() => { document.body.classList.remove("red-alert"); }, 1500);
        setTimeout(() => { alarm.classList.remove("pop"); hide(alarm); }, 2800);
    });

    yes.addEventListener("click", () => {
        Sound.celebrate();
        hide(alarm); document.body.classList.remove("red-alert");
        burstFrom(yes, 30); Confetti.burst({ count: 120 });
        $(".cat-wrap").classList.add("happy");
        result.textContent = fmt(t.yesMessage); show(result);
        yes.disabled = true; no.disabled = true;
        store.set("acceptedGift", true);
        go("gifts", 2200);
    });
};

/* ---------- PAGE 3: Three gifts ---------- */
Pages.gifts = () => {
    const opened = store.get("opened", []);
    $$(".gift-card").forEach((card) => {
        const target = card.dataset.gift;
        if (opened.includes(target)) card.classList.add("opened");
        card.addEventListener("click", () => {
            Sound.pop();
            card.classList.add("unwrapping");
            burstFrom(card, 14, ["🎀", "💗", "✨", "🩷"]);
            const list = store.get("opened", []);
            if (!list.includes(target)) { list.push(target); store.set("opened", list); }
            go(target, 650);
        });
    });
    const count = opened.length;
    const note = $("#giftNote");
    if (note) note.textContent = count === 0 ? "Tap any gift to unwrap it 🎁" : count < 3 ? `${count} of 3 unwrapped — keep going, my love 💗` : "All three unwrapped! Open the diary to continue 📖";
};

/* ---------- GIFT 1: Love letter ---------- */
Pages.letter = () => {
    const env = $("#envelope"), paper = $("#letterPaper"), body = $("#letterBody"), next = $("#letterNext"), openBtn = $("#openEnvelope");
    let opened = false;
    const open = async () => {
        if (opened) return; opened = true;
        Sound.chime(); env.classList.add("open"); hide(openBtn);
        burstFrom(env, 16);
        await wait(1300);
        env.classList.add("gone");
        show(paper); paper.classList.add("unfold");
        await wait(600);
        await typeWriter(body, fmt(birthdayConfig.text.letter), 26);
        show(next); burstFrom(next, 10);
    };
    env.addEventListener("click", open);
    openBtn.addEventListener("click", open);
    env.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
};

/* ---------- GIFT 2: Flowers for my flower ---------- */
Pages.flower = () => {
    petalRain(14);
    const interval = setInterval(() => petalRain(4), 4000);
    const btn = $("#takeFlower"), res = $("#flowerResult");
    btn.addEventListener("click", () => {
        clearInterval(interval);
        Sound.chime(); btn.disabled = true;
        petalRain(60); burstFrom(btn, 20, ["🌷", "🌸", "💗", "🌹"]);
        $(".bouquet-frame").classList.add("given");
        show(res);
        go("diary", 3600);
    });
};

/* ---------- GIFT 3: Diary ---------- */
Pages.diary = () => {
    setTimeout(() => $(".diary").classList.add("open"), 300);
};

/* ---------- Three promises + secret code ---------- */
Pages.promises = () => {
    const promises = birthdayConfig.text.promises;
    const cards = $$(".promise-card");
    const done = $("#promisesDone");
    const openedSet = new Set();
    cards.forEach((card, i) => {
        $(".promise-text", card).textContent = fmt(promises[i]);
        card.addEventListener("click", () => {
            if (card.classList.contains("flipped")) return;
            Sound.chime(); card.classList.add("flipped"); card.setAttribute("aria-pressed", "true");
            burstFrom(card, 12);
            openedSet.add(i);
            if (openedSet.size === cards.length) { setTimeout(() => { show(done); petalRain(20, ["💗", "💍", "🩷", "✨"]); done.scrollIntoView({ behavior: "smooth", block: "center" }); }, 700); }
        });
    });

    const errors = ["Hmm… that's not it, my love 🙈 Try again!", "Wrong code! Hint: it's what I call you 💗", "So close! Think of your cutest nickname 😚", "Nope! The secret is YOU 😘"];
    let tries = 0;
    $("#promisesContinue").addEventListener("click", () => {
        Sound.click();
        showModal({
            title: "🔐 Secret Code",
            body: "My wifey, you know the secret code to continue.",
            html: `<label class="sr-only" for="secretInput">Secret code</label>
                   <input id="secretInput" class="text-input" type="text" autocomplete="off" autocapitalize="none" placeholder="Type the secret code 💗">
                   <p class="code-error" aria-live="polite"></p>`,
            buttons: [
                { label: "Unlock 💗", onClick: (wrap) => {
                    const input = $("#secretInput", wrap); const err = $(".code-error", wrap);
                    if (input.value.trim().toLowerCase() === birthdayConfig.secretCode.toLowerCase()) {
                        Sound.celebrate();
                        $(".modal-body", wrap).textContent = fmt("Awww, my {herName} knows the secret! 💗");
                        $(".modal-extra", wrap).innerHTML = `<div class="big-heart beat">💗</div>`;
                        $(".modal-actions", wrap).innerHTML = "";
                        heartBurst(innerWidth / 2, innerHeight / 2, 34);
                        go("date", 2000);
                        return false;
                    }
                    Sound.oops();
                    err.textContent = errors[tries++ % errors.length];
                    shake(input, "shake");
                    input.select();
                    return false;
                } },
                { label: "Close", className: "btn-ghost" }
            ]
        }).then(() => {});
        setTimeout(() => {
            const input = $("#secretInput");
            input && input.addEventListener("keydown", (e) => { if (e.key === "Enter") $(".modal-actions .btn-primary")?.click(); });
        }, 80);
    });
};

/* ---------- Date selection + email ---------- */
async function sendDateEmail(choice) {
    const configured = ![EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY].some((v) => !v || /^(EMAILJS_|YOUR_)/.test(v));
    if (!configured) return { ok: false, reason: "not-configured" };
    const message = `Birthday Date Selection 💗\n\nShe would like to go to: ${choice.restaurant}\n\nDate: ${choice.date || "Not chosen yet"}\n\nTime: ${choice.time || "Not chosen yet"}\n\nMessage: She has chosen her birthday date!`;
    try {
        await loadScript("https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js");
        await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            to_email: /^YOUR_/.test(MY_EMAIL_ADDRESS) ? birthdayConfig.email : MY_EMAIL_ADDRESS,
            her_name: birthdayConfig.herName,
            restaurant: choice.restaurant,
            date: choice.date || "Not chosen yet",
            time: choice.time || "Not chosen yet",
            message
        }, { publicKey: EMAILJS_PUBLIC_KEY });
        return { ok: true };
    } catch (err) {
        console.warn("EmailJS failed:", err);
        return { ok: false, reason: "failed" };
    }
}

Pages.date = () => {
    const grid = $("#restaurantGrid"), saved = $("#dateSaved"), status = $("#emailStatus"), next = $("#dateNext");
    const dateIn = $("#dateInput"), timeIn = $("#timeInput");
    const prev = store.get("date");
    if (prev) { dateIn.value = prev.date || ""; timeIn.value = prev.time || ""; }
    birthdayConfig.restaurants.forEach((name, i) => {
        const d = birthdayConfig.restaurantDetails[i] || {};
        const card = document.createElement("article");
        card.className = "restaurant-card glass";
        card.style.animationDelay = i * 0.08 + "s";
        card.innerHTML = `
            <div class="restaurant-img"><img data-emoji="${d.emoji || "🍽️"}" data-label="${d.emoji ? "" : "Add a photo"}" alt="${name}"></div>
            <div class="restaurant-info">
                <h3></h3><p></p>
                <button class="btn btn-small select-btn" type="button">Choose this 💗</button>
            </div>
            <span class="chosen-badge" aria-hidden="true">💗 Chosen</span>`;
        $("h3", card).textContent = name;
        $("p", card).textContent = d.description || "";
        grid.appendChild(card);
        // Restaurant photo is optional — falls back to a cute emoji tile
        loadPhotoWithRawFallback($("img", card), [d.image], " ");
        if (prev && prev.restaurant === name) card.classList.add("selected");
        $(".select-btn", card).addEventListener("click", () => choose(card, name));
        $(".restaurant-img", card).addEventListener("click", () => choose(card, name));
    });

    const customCard = document.createElement("article");
    customCard.className = "restaurant-card glass custom-restaurant-card";
    customCard.innerHTML = `
        <div class="restaurant-info">
            <h3>My Jannu, where would you like to go for your birthday? 💗</h3>
            <label class="field" for="customPlaceInput">Write the place you'd love to visit
                <input class="text-input" id="customPlaceInput" type="text" maxlength="120" autocomplete="off" placeholder="A restaurant, cafe, or anywhere you like">
            </label>
            <p class="custom-place-error" id="customPlaceError" aria-live="polite"></p>
            <button class="btn btn-small select-btn" id="customPlaceButton" type="button">Choose this 💗</button>
        </div>
        <span class="chosen-badge" aria-hidden="true">💗 Chosen</span>`;
    grid.appendChild(customCard);
    const customPlaceInput = $("#customPlaceInput", customCard);
    const customPlaceError = $("#customPlaceError", customCard);
    if (prev && prev.customPlace) {
        customPlaceInput.value = prev.restaurant;
        customCard.classList.add("selected");
        $("#customPlaceButton", customCard).textContent = "Selected ✓";
    }
    customPlaceInput.addEventListener("input", () => { customPlaceError.textContent = ""; });
    $("#customPlaceButton", customCard).addEventListener("click", () => {
        const place = customPlaceInput.value.trim();
        if (!place) {
            customPlaceError.textContent = "Tell me where you'd love to go first 💗";
            customPlaceInput.focus();
            return;
        }
        choose(customCard, place, true);
    });

    let sending = false;
    async function choose(card, name, customPlace = false) {
        if (sending) return;
        sending = true;
        Sound.chime();
        $$(".restaurant-card", grid).forEach((c) => { c.classList.remove("selected"); $(".select-btn", c).textContent = "Choose this 💗"; });
        card.classList.add("selected"); $(".select-btn", card).textContent = "Selected ✓";
        burstFrom(card, 22);
        const choice = { restaurant: name, customPlace, date: dateIn.value, time: timeIn.value, at: new Date().toISOString() };
        store.set("date", choice);               // always saved locally first
        show(saved);
        status.className = "email-status sending"; status.textContent = "Sending your choice to my heart's inbox… 💌";
        show(status);
        const r = await sendDateEmail(choice);
        if (r.ok) { status.className = "email-status ok"; status.textContent = "💌 Email sent! I already know where we're going 😍"; }
        else if (r.reason === "not-configured") { status.className = "email-status info"; status.textContent = "Your choice is saved right here on this device 💗 (show it to me with a big smile!)"; }
        else { status.className = "email-status warn"; status.textContent = "Oops, the love-mail couldn't fly right now 🥺 — but your choice is saved here safely. Tap again later to resend."; }
        show(next);
        sending = false;
    }
};

/* ---------- Funny love quiz ---------- */
Pages.quiz = () => {
    const q = birthdayConfig.text.quiz, list = $("#quizOptions"), res = $("#quizResult"), next = $("#quizNext"), card = $(".quiz-card");
    $("#quizQuestion").textContent = fmt(q.question);
    let wrongCount = 0, solved = false;
    q.options.forEach((opt) => {
        const b = document.createElement("button");
        b.type = "button"; b.className = "quiz-option"; b.textContent = opt.label;
        b.addEventListener("click", async () => {
            if (solved) return;
            if (opt.correct) {
                solved = true; Sound.celebrate();
                b.classList.add("correct"); card.classList.add("won");
                burstFrom(b, 30); Confetti.burst({ count: 140 });
                res.textContent = fmt(q.correct); show(res); show(next);
                store.set("quiz", { solved: true, wrongTries: wrongCount });
                return;
            }
            wrongCount++; Sound.oops();
            b.classList.add("wrong"); setTimeout(() => b.classList.remove("wrong"), 700);
            shake(document.body, "shake");
            await showModal({ title: "WARNING ⚠️", body: fmt(q.wrong), variant: "warning",
                html: wrongCount > 1 ? `<p class="wrong-count">Wrong answers so far: ${wrongCount} 😂</p>` : "",
                buttons: [{ label: "Let me try again 🙈" }] });
        });
        list.appendChild(b);
    });
};

/* ---------- One last flower (glitch reveal) ---------- */
Pages["my-flower"] = () => {
    const btn = $("#takeMyFlower"), intro = $("#flowerIntro"), reveal = $("#flowerReveal"), next = $("#myFlowerNext");
    // Build the rose: an outer ring of 10 petals and an inner ring of 8
    const petals = $("#rosePetals");
    for (let i = 0; i < 10; i++) petals.insertAdjacentHTML("beforeend", `<span class="rose-petal" style="--r:${i * 36}deg;--d:${0.05 * i}s"></span>`);
    for (let i = 0; i < 8; i++) petals.insertAdjacentHTML("beforeend", `<span class="rose-petal inner" style="--r:${i * 45 + 22}deg;--d:${0.5 + 0.05 * i}s"></span>`);
    btn.addEventListener("click", async () => {
        btn.disabled = true; Sound.oops();
        document.body.classList.add("glitching");          // soft glitch + flicker
        await wait(1500);
        document.body.classList.remove("glitching");
        hide(intro);
        show(reveal); reveal.classList.add("blooming");
        Sound.celebrate();
        await wait(1200);
        burstFrom($(".rose-center", reveal), 30, ["🌹", "❤️", "💗", "✨"]);
        petalRain(40, ["🌹", "🥀", "❤️", "🩷"]);
        await wait(900);
        show($("#gardenerMsg")); show(next);
    });
};

/* ---------- Mood ---------- */
Pages.mood = () => {
    const grid = $("#moodGrid"), reply = $("#moodReply"), after = $("#moodAfter");
    const prev = store.get("mood");
    birthdayConfig.text.moods.forEach((m, i) => {
        const b = document.createElement("button");
        b.type = "button"; b.className = "mood-card glass mood-" + m.id;
        b.style.animationDelay = i * 0.07 + "s";
        b.innerHTML = `<span class="mood-emoji">${m.emoji}</span><span class="mood-label"></span>`;
        $(".mood-label", b).textContent = m.label;
        if (prev === m.id) b.classList.add("selected");
        b.addEventListener("click", () => {
            Sound.pop();
            $$(".mood-card", grid).forEach((c) => c.classList.remove("selected"));
            b.classList.add("selected");
            burstFrom(b, 14, [m.emoji, "💗", "💕"]);
            reply.classList.remove("reveal"); void reply.offsetWidth;
            $(".reply-emoji", reply).textContent = m.emoji;
            $(".reply-text", reply).textContent = fmt(m.reply);
            show(reply); show(after);
            store.set("mood", m.id);
        });
        grid.appendChild(b);
    });
};

/* ---------- Song player ---------- */
Pages.song = () => {
    const s = birthdayConfig.song, btn = $("#playBtn"), player = $(".player"), note = $("#playerNote"), elapsed = $("#elapsed"), fill = $("#songFill");
    $("#songTitle").textContent = s.title; $("#songArtist").textContent = s.artists;
    $("#songLink").href = s.link; $("#songLinkBig").href = s.link;
    const viz = $("#visualizer");
    for (let i = 0; i < 28; i++) { const bar = document.createElement("span"); bar.style.animationDelay = -rand(0, 1.2) + "s"; bar.style.animationDuration = rand(0.6, 1.3) + "s"; viz.appendChild(bar); }

    const audio = Music.prepare();
    const fmtTime = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;
    const paint = () => {
        const playing = Music.playing;
        player.classList.toggle("playing", playing);
        btn.innerHTML = playing ? "❚❚" : "▶";
        btn.setAttribute("aria-label", playing ? "Pause" : "Play");
        if (audio) {
            const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
            const current = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
            elapsed.textContent = fmtTime(current);
            fill.style.width = duration ? `${(current / duration) * 100}%` : "0%";
        }
    };
    btn.addEventListener("click", async () => {
        if (Music.playing) {
            Music.stop();
            note.textContent = "Paused — whenever you're ready, my love 💗";
        } else {
            store.set("music", true);
            const started = await Music.start();
            note.textContent = started
                ? `Now playing ${s.title} 💗 Music will resume on the other pages too.`
                : "Tap play to start the music. If it still won't play, check that assets/Alfaaz.mp3 is present.";
            if (started) burstFrom(btn, 12);
        }
        paint();
    });
    document.addEventListener("music-change", paint);
    document.addEventListener("music-time", paint);
    document.addEventListener("music-error", () => {
        note.textContent = "The song file could not be loaded. Check that assets/Alfaaz.mp3 is present.";
        paint();
    });
    if (Music.playing) note.textContent = `Now playing ${s.title} 💗`;
    $("#likeBtn").addEventListener("click", (e) => {
        const b = e.currentTarget; b.classList.toggle("liked"); Sound.pop();
        b.textContent = b.classList.contains("liked") ? "❤️" : "🤍";
        if (b.classList.contains("liked")) burstFrom(b, 14);
    });
    paint();
};

/* ---------- Meeting time ---------- */
Pages.meet = () => {
    const hourHand = $("#hourHand"), minHand = $("#minHand"), secHand = $("#secHand"), clock = $(".clock");
    const grid = $("#meetOptions"), msg = $("#meetMsg"), final = $("#meetFinal");
    let frozen = null; let hourDeg = 0;

    // Live clock until she chooses — then the hands glide to her time.
    const tickClock = () => {
        if (frozen !== null) return;
        const n = new Date();
        hourDeg = (n.getHours() % 12) * 30 + n.getMinutes() * 0.5;
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
        minHand.style.transform = `rotate(${n.getMinutes() * 6}deg)`;
        secHand.style.transform = `rotate(${n.getSeconds() * 6}deg)`;
    };
    tickClock(); const t = setInterval(tickClock, 1000);

    const prev = store.get("meet");
    birthdayConfig.text.meetOptions.forEach((o) => {
        const b = document.createElement("button");
        b.type = "button"; b.className = "meet-option"; b.textContent = o.label;
        if (prev === o.id) b.classList.add("selected");
        b.addEventListener("click", () => {
            Sound.chime();
            $$(".meet-option", grid).forEach((c) => c.classList.remove("selected"));
            b.classList.add("selected");
            store.set("meet", o.id); store.set("meetLabel", o.label);
            clearInterval(t); frozen = o.hour;
            clock.classList.toggle("spinning", o.hour === null);
            if (o.hour !== null) {
                hourHand.style.transform = `rotate(${(o.hour % 12) * 30 + 720}deg)`;
                minHand.style.transform = `rotate(${1440}deg)`;
                secHand.style.transform = `rotate(${2160}deg)`;
            }
            burstFrom(clock, 24);
            show(msg); msg.classList.remove("reveal"); void msg.offsetWidth; msg.classList.add("reveal");
            setTimeout(() => show(final), 900);
        });
        grid.appendChild(b);
    });
};

/* ---------- Final page: the forever question ---------- */
Pages.forever = () => {
    const f = birthdayConfig.text.forever;
    const s1 = $("#stageIntro"), s2 = $("#stageAsk"), s3 = $("#stageYes"), curtain = $("#curtain");
    const yes = $("#foreverYes"), no = $("#foreverNo"), taunt = $("#noTaunt"), buttons = $("#answerButtons");

    // Twinkling stars background
    const stars = $("#stars");
    for (let i = 0; i < 40; i++) { const st = document.createElement("span"); st.style.left = rand(0, 100) + "%"; st.style.top = rand(0, 100) + "%"; st.style.animationDelay = rand(0, 3) + "s"; st.style.fontSize = rand(6, 14) + "px"; st.textContent = pick(["✦", "✧", "⋆", "✨"]); stars.appendChild(st); }

    typeWriter($("#introText"), fmt(f.intro), 40).then(() => show($("#askBtn")));
    $("#musicInvite").addEventListener("click", (e) => { Music.toggle(); e.currentTarget.textContent = Music.playing ? "🎵 Music on — tap to pause" : "🎵 Play soft music"; });
    document.addEventListener("music-change", () => { $("#musicInvite").textContent = Music.playing ? "🎵 Music on — tap to pause" : "🎵 Play soft music"; });

    // "Ask Me Something" → black curtain, soft shake, cinematic hearts
    $("#askBtn").addEventListener("click", async () => {
        Sound.init(); Sound.tone(196, 1.2, "sine", 0.06);
        curtain.classList.add("down");
        await wait(1300);
        hide(s1); show(s2);
        shake(document.body, "shake-soft");
        curtain.classList.remove("down");
        heartBurst(innerWidth / 2, innerHeight / 2, 30);
        await typeWriter($("#sorryText"), fmt(f.sorry), 42);
        await wait(500);
        $("#finalQuestion").textContent = fmt(f.question);
        show($("#finalQuestion")); show(buttons);
        startNoRun();
        Sound.chime();
    });

    /* Keep NO playful and unavailable; the clear YES button remains usable. */
    let celebrated = false, noRunTimer;
    const runAway = (px = innerWidth / 2, py = innerHeight / 2) => {
        if (celebrated || buttons.classList.contains("hidden")) return;
        if (!no.classList.contains("runaway")) {
            no.classList.add("runaway");
            document.body.appendChild(no);
        }
        const bw = no.offsetWidth, bh = no.offsetHeight, pad = 16;
        const maxX = Math.max(pad, innerWidth - bw - pad);
        const maxY = Math.max(70, innerHeight - bh - pad);
        let x, y, tries = 0;
        do {
            x = rand(pad, maxX); y = rand(70, maxY); tries++;
        } while (Math.hypot(x + bw / 2 - px, y + bh / 2 - py) < 180 && tries < 30);
        no.style.left = x + "px"; no.style.top = y + "px";
        no.style.transform = `rotate(${rand(-20, 20)}deg)`;
        Sound.tone(rand(500, 900), 0.08, "triangle", 0.04);
        taunt.textContent = fmt(pick(f.noTaunts));
        show(taunt); taunt.classList.remove("wiggle"); void taunt.offsetWidth; taunt.classList.add("wiggle");
    };
    no.disabled = true;
    no.tabIndex = -1;
    no.setAttribute("aria-disabled", "true");

    // Keep moving and dodge nearby cursors or touch pointers.
    const startNoRun = () => {
        if (noRunTimer) return;
        runAway();
        noRunTimer = setInterval(() => runAway(), 1600);
    };
    document.addEventListener("pointermove", (e) => {
        if (celebrated || buttons.classList.contains("hidden")) return;
        const r = no.getBoundingClientRect();
        if (Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2)) < 110) runAway(e.clientX, e.clientY);
    });
    yes.addEventListener("click", () => sayYes());

    async function sayYes() {
        if (celebrated) return; celebrated = true;
        clearInterval(noRunTimer);
        no.remove();
        store.set("foreverAnswer", "YES");
        Sound.celebrate();
        heartBurst(innerWidth / 2, innerHeight / 2, 50);
        Confetti.burst({ count: 220 }); setTimeout(() => Confetti.rain(160), 500);
        petalRain(50, ["🌹", "🌸", "💗", "🩷", "💐"]);
        hide(s2); show(s3);
        fillSummary();
        await wait(900);
        await typeWriter($("#finalMessage"), fmt(f.finalMessage), 30);
        show($("#foreverEnd"));
        Sound.chime();
    }

    function fillSummary() {
        const d = store.get("date"), mood = birthdayConfig.text.moods.find((m) => m.id === store.get("mood")), meet = store.get("meetLabel");
        const items = [];
        if (d) items.push(`🍰 Our date: <b>${escapeHtml(d.restaurant)}</b>${d.date ? " on " + escapeHtml(d.date) : ""}${d.time ? " at " + escapeHtml(d.time) : ""}`);
        if (meet) items.push(`⏰ Meeting time: <b>${escapeHtml(meet)}</b>`);
        if (mood) items.push(`💭 Today's mood: <b>${mood.label} ${mood.emoji}</b>`);
        items.push("💍 Forever answer: <b>YES ❤️</b>");
        $("#summary").innerHTML = items.map((i) => `<li>${i}</li>`).join("");
    }

    $("#replayCelebration").addEventListener("click", () => {
        Sound.celebrate(); Confetti.burst({ count: 200 }); Confetti.rain(120);
        heartBurst(innerWidth / 2, innerHeight / 2, 40); petalRain(40, ["🌹", "🌸", "💗", "🎂", "🎉"]);
    });
    $("#restartJourney").addEventListener("click", () => {
        Sound.click();
        const keep = { sound: store.get("sound", true), theme: store.get("theme", "day") };
        store.clear();
        store.set("sound", keep.sound);
        store.set("theme", keep.theme);
        go("index");
    });
};

function escapeHtml(s) { return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

/* =====================================================================
   10. START
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    document.title = fmt(document.title);
    buildChrome();
    bindNames();
    bindText();
    bindPhotos();
    wireGoLinks();
    if (Pages[page]) Pages[page]();
    requestAnimationFrame(() => document.body.classList.add("is-ready"));
});

// When returning with the browser back button, undo the fade-out.
addEventListener("pageshow", (e) => { if (e.persisted) document.body.classList.remove("is-leaving"); });