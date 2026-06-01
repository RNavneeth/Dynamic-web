/* ==========================================================================
   VORTEX STUDIOS DYNAMIC ENGINE - CORE APPLICATION CONTROLLER
   ========================================================================== */

// ==========================================================================
// 1. APPLICATION DATA RECORDS
// ==========================================================================

const GAMES_DATA = [
    {
        id: "shadowfall",
        title: "Shadowfall: Nexus",
        tagline: "Ultra-Fast Cyberpunk Arena Combat",
        genre: "Action",
        excerpt: "Deploy as a cybernetically enhanced operator in high-velocity 5v5 tactical skirmishes. Wall-run, hack defenses, and dominate the Neon Grid.",
        fullDesc: "Shadowfall: Nexus is the ultimate fusion of movement mechanics and tactical gunplay. Set in the corporate-dominated metropolis of Neo-Veridia, players take control of 'Specs'—operatives with custom cybernetic abilities. Features real-time server tickrates at 128Hz, fully destructible glowing barriers, and an active global competitive league.",
        players: "482,410",
        gpu: "NVIDIA RTX 3060 / AMD RX 6600 XT",
        disk: "45 GB",
        platform: "PC, PS5, Xbox Series X",
        images: [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070",
            "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070"
        ],
        features: [
            "128Hz Sub-tick Netcode",
            "Hybrid Cybernetic Perks",
            "Full Ray-Traced Audio Maps",
            "Ranked Esports Integration"
        ],
        downloadUrl: "#download-shadowfall",
        isSpotlight: true
    },
    {
        id: "eldoria",
        title: "Eldoria: Chronicles of Aether",
        tagline: "Boundless Magic & Open World Exploration",
        genre: "RPG",
        excerpt: "Soar across mystical skies, tame mythical beasts, and forge your destiny in an expansive, highly responsive fantasy sandbox.",
        fullDesc: "Eldoria redefines the modern MMORPG with its fluid skill-based action, dynamic weather events that alter terrain, and player-driven commerce. Wander through floating islands, explore dense procedural caverns, or participate in huge 100v100 fortress sieges. Master a deep, classless spellweaving matrix.",
        players: "610,950",
        gpu: "NVIDIA GTX 1070 / AMD RX 580",
        disk: "75 GB",
        platform: "PC, PS5, macOS",
        images: [
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2070",
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2070",
            "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=2070"
        ],
        features: [
            "Seamless Classless Skill Matrix",
            "Dynamic Weather & Day/Night",
            "100v100 Roster Fortress Wars",
            "Real-time Taming Mechanics"
        ],
        downloadUrl: "#download-eldoria",
        isSpotlight: false
    },
    {
        id: "vortex-tactics",
        title: "Vortex Arena: Tactics",
        tagline: "Strategic Cybernetic Card Battles",
        genre: "Strategy",
        excerpt: "Outwit opponents in high-stakes holographic deck battles. Draft combat algorithms, trigger combos, and climb the tactical ladder.",
        fullDesc: "Vortex Arena: Tactics combines traditional card battle logic with active lane-based tactical warfare. Build custom faction decks representing the AI Cabals of the future. Execute precise algorithm combinations, control resource nodes, and outmaneuver opponents in blitz-paced 8-minute matches.",
        players: "145,200",
        gpu: "Integrated Graphics / Steam Deck",
        disk: "8 GB",
        platform: "PC, Android, iOS, Nintendo Switch",
        images: [
            "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=2070",
            "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?q=80&w=2070",
            "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2070"
        ],
        features: [
            "Lane-based Holographic Combat",
            "Simultaneous Turn Execution",
            "Zero Pay-To-Win Drafting Mode",
            "Cross-play Enabled on Mobile"
        ],
        downloadUrl: "#download-tactics",
        isSpotlight: false
    },
    {
        id: "neon-drift",
        title: "Neon Drift: Overdrive",
        tagline: "Synthwave Arc Drifting & Velocity",
        genre: "Racing",
        excerpt: "Ignite rocket thrusters, drift through gravity-defying grid circuits, and dominate custom tracks to a pulsing synthwave soundtrack.",
        fullDesc: "Neon Drift: Overdrive is a hyper-arcade racer that rewards momentum, risks, and perfect apex drifts. Challenge physics on tracks suspended in vector sky-domes. Featuring absolute customization of hovercar kinetics, custom neon decal glow levels, and an integrated synthwave radio including premium licensed tracks.",
        players: "220,110",
        gpu: "NVIDIA GTX 1660 Super / AMD RX 5600",
        disk: "30 GB",
        platform: "PC, PS5, Xbox Series X, Switch",
        images: [
            "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070",
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070"
        ],
        features: [
            "Physics-Defying Gravity Tracks",
            "Deep Kinetic Engine Customization",
            "Integrated Synthwave Radio Playlist",
            "Interactive Obstacle Course Creator"
        ],
        downloadUrl: "#download-neondrift",
        isSpotlight: false
    }
];

const LEADERBOARD_DATA = [
    { rank: 1, name: "ViperX", tag: "@viper", wins: 382, kd: "3.42", score: 98450, level: 88, avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Viper" },
    { rank: 2, name: "NeonShadow", tag: "@shadow", wins: 314, kd: "2.98", score: 85210, level: 76, avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Shadow" },
    { rank: 3, name: "AetherKnight", tag: "@aether", wins: 295, kd: "2.81", score: 81040, level: 71, avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aether" },
    { rank: 4, name: "RageTrigger", tag: "@rage", wins: 260, kd: "2.65", score: 72400, level: 69, avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Rage" },
    { rank: 5, name: "GlitchMage", tag: "@glitch", wins: 245, kd: "2.41", score: 68900, level: 64, avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Glitch" }
];

const NEWS_DATA = [
    {
        id: "news-1",
        type: "news",
        badgeClass: "bg-pink",
        badgeText: "ESPORTS",
        date: "June 1, 2026",
        readTime: "4 min read",
        title: "Announcing the Vortex Cyber-Cup 2026 Roster Seeding",
        excerpt: "Our signature global esports championship is back with a record-setting $150,000 global prize bounty. Explore the NA and EU regional seeding arrays and learn how you can qualify today.",
        content: "Vortex Cyber-Cup 2026 is returning this fall, bigger and bolder. We are expanding competitive divisions to support cross-platform players, and our server infrastructures are fully optimized with regional nodes in Seattle, Frankfurt, and Tokyo. Tournament tickets open today. Ready up!",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600",
        likes: 1248
    },
    {
        id: "news-2",
        type: "patch",
        badgeClass: "bg-purple",
        badgeText: "PATCH LOGS",
        date: "May 28, 2026",
        readTime: "6 min read",
        title: "Shadowfall Patch 2.4.1: Balancing weapon kinetics & barrier ticks",
        excerpt: "The latest calibration update is now active. Review detailed calculations regarding plasma damage adjustments, cybernetic barrier refresh timings, and UI improvements.",
        content: "In this minor adjustment, we are targeting Spec 'Viper' kinetic feedback formulas. Heavy plasma rifles receive a 4% increase in reload velocity while shields take 2% less shock impact from EMP nodes.",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600",
        likes: 914
    },
    {
        id: "news-3",
        type: "tournament",
        badgeClass: "bg-amber",
        badgeText: "CHAMPIONSHIP",
        date: "May 24, 2026",
        readTime: "3 min read",
        title: "Vortex Arena Tactics: Regional Invitation Openings",
        excerpt: "Compete with top algorithm builders on the leaderboard. Secure your slots in the upcoming Tactical Drafting championship and claim the elite golden card backs.",
        content: "The top 32 deck drafting legends will battle in a double-elimination arena bracket. Tune in live on Twitch and claim specialized algorithmic drops including legendary holograms.",
        image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=600",
        likes: 672
    }
];

const PATCH_ACCORDION_DATA = [
    {
        version: "v2.4.1 (Active)",
        game: "Shadowfall: Nexus",
        date: "May 28, 2026",
        fixes: [
            "Adjusted specs of Plasma Rifle to reduce range damage decay by 4.2%",
            "Calibrated cybernetic double-jump energy drain from 25% down to 20%",
            "Fixed sound propagation delay glitch inside Reactor Core grid corridors",
            "Improved server tick rate prediction modules to reduce micro-stuttering"
        ]
    },
    {
        version: "v1.12.0",
        game: "Eldoria: Chronicles",
        date: "May 15, 2026",
        fixes: [
            "Introduced dynamic mount speed buffs when traveling on main paved trails",
            "Tuned spellcasting cooldown coefficient for Chronomancer tier-2 algorithms",
            "Resolved quest progress blocker on the final tier of 'Chronicles of Aether'",
            "Enhanced render draw-distance for complex forest grids by 15%"
        ]
    },
    {
        version: "v3.0.2",
        game: "Vortex Arena: Tactics",
        date: "May 08, 2026",
        fixes: [
            "Rebalanced card draft distributions in Lane 2 to avoid early-game stacks",
            "Updated visual layout highlights when trigger cards establish an active combo",
            "Fixed visual sprite rendering issues during custom avatar victory sequences",
            "Integrated direct localized support files for mobile players"
        ]
    }
];

const TEAM_DATA = [
    { name: "Marcus Vance", role: "CEO & Game Architect", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Marcus", twitter: "#", discord: "#" },
    { name: "Dr. Elena Rostova", role: "Lead Core Networking Tech", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Elena", twitter: "#", discord: "#" },
    { name: "Kaito Tanaka", role: "Principal Visual Designer", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Kaito", twitter: "#", discord: "#" },
    { name: "Sarah 'Valkyrie' Stone", role: "Director of Esports Leagues", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Sarah", twitter: "#", discord: "#" }
];

const COUNTDOWN_TOURNAMENTS = [
    { id: "t1", title: "Nebula Arena Cup", game: "Shadowfall: Nexus", date: "June 15, 2026 18:00:00", prize: "$10,000", totalSlots: 32, registeredCount: 26 },
    { id: "t2", title: "Chronicles Draft Series", game: "Vortex Arena: Tactics", date: "June 22, 2026 15:30:00", prize: "$5,000", totalSlots: 16, registeredCount: 10 },
    { id: "t3", title: "Overdrive Drifting Trophy", game: "Neon Drift: Overdrive", date: "July 01, 2026 20:00:00", prize: "$8,500", totalSlots: 24, registeredCount: 14 }
];

const ONLINE_PLAYERS = [
    { name: "Esther Howard", status: "online", game: "Shadowfall: Nexus" },
    { name: "Jacob Jones", status: "online", game: "Eldoria: Chronicles" },
    { name: "Cody Fisher", status: "busy", game: "Vortex Arena: Tactics" },
    { name: "Alez Rayhan", status: "offline", game: "Neon Drift: Overdrive" }
];

// ==========================================================================
// 2. CLIENT-SIDE PERSISTENT STATE MANAGEMENT
// ==========================================================================

const state = {
    currentRoute: 'home',
    searchQuery: '',
    likedPosts: JSON.parse(localStorage.getItem('likedPosts') || '[]'),
    registeredTournaments: JSON.parse(localStorage.getItem('registeredTournaments') || '[]'),
    activeGameFilter: 'all',
    activeBlogFilter: 'all',
    activeLeaderboardStat: 'wins', // wins, kd, score
    leaderboardFilterQuery: '',
    notifications: JSON.parse(localStorage.getItem('notifications') || JSON.stringify([
        { id: 1, text: "Tournament 'Nebula Cup' registrations are now open!", time: "2 hours ago", unread: true },
        { id: 2, text: "Patch 2.4.1 for Shadowfall: Nexus is live.", time: "1 day ago", unread: false },
        { id: 3, text: "Congrats to @ViperX for reaching #1 on the Leaderboard!", time: "2 days ago", unread: false }
    ])),
    userProfile: JSON.parse(localStorage.getItem('userProfile') || JSON.stringify({
        username: "Alex Ryan",
        tag: "@alex.gg",
        avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Alex",
        avatarSeed: "Alex",
        level: 42,
        xp: 75,
        rank: "Elite Grandmaster",
        wins: 143,
        matches: 210
    })),
    spotlightIndex: 0,
    downloadingGameId: null,
    downloadProgress: 0,
    downloadInterval: null
};

// State Helper Functions
function saveStateToLocalStorage() {
    localStorage.setItem('likedPosts', JSON.stringify(state.likedPosts));
    localStorage.setItem('registeredTournaments', JSON.stringify(state.registeredTournaments));
    localStorage.setItem('notifications', JSON.stringify(state.notifications));
    localStorage.setItem('userProfile', JSON.stringify(state.userProfile));
}

// ==========================================================================
// 3. CYBERPUNK PHYSICS PARTICLE BACKGROUND ENGINE
// ==========================================================================

class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particle-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.maxParticles = 80;
        this.mouse = { x: null, y: null, radius: 150 };

        this.init();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.trackMouse(e));
        window.addEventListener('mouseleave', () => this.clearMouse());
    }

    init() {
        this.resize();
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(this.createParticle());
        }
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    trackMouse(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }

    clearMouse() {
        this.mouse.x = null;
        this.mouse.y = null;
    }

    createParticle() {
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4,
            // Pink glow and soft purple glowing points
            color: Math.random() > 0.5 ? 'rgba(255, 42, 95, 0.4)' : 'rgba(139, 92, 246, 0.4)'
        };
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((p, idx) => {
            p.x += p.speedX;
            p.y += p.speedY;

            // Bounce on boundaries
            if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;

            // Mouse repulsion dynamics
            if (this.mouse.x !== null && this.mouse.y !== null) {
                let dx = p.x - this.mouse.x;
                let dy = p.y - this.mouse.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < this.mouse.radius) {
                    let force = (this.mouse.radius - dist) / this.mouse.radius;
                    p.x += (dx / dist) * force * 2;
                    p.y += (dy / dist) * force * 2;
                }
            }

            // Draw particle glow points
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();

            // Link close points with cyberpunk web lines
            for (let j = idx + 1; j < this.particles.length; j++) {
                let p2 = this.particles[j];
                let dx = p.x - p2.x;
                let dy = p.y - p2.y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    let alpha = (100 - dist) / 1000;
                    this.ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================================================
// 4. CLIENT ROUTER (HASH ROUTING SUB-CORE)
// ==========================================================================

class Router {
    constructor() {
        this.pages = document.querySelectorAll('.page');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('hashchange', () => this.handleHashChange());
        this.handleHashChange(); // Init router call
        this.bindInternalNavLinks();
    }

    handleHashChange() {
        const hash = window.location.hash || '#home';
        const targetRoute = hash.substring(1);
        
        // Hide all screens
        this.pages.forEach(p => p.classList.remove('active'));
        this.navLinks.forEach(l => l.classList.remove('active'));

        // Target screen setup
        const activePage = document.getElementById(`${targetRoute}-page`);
        const activeLink = document.querySelector(`.nav-link[data-route="${targetRoute}"]`);

        if (activePage) {
            activePage.classList.add('active');
            state.currentRoute = targetRoute;
        } else {
            // Fallback screen
            document.getElementById('home-page').classList.add('active');
            state.currentRoute = 'home';
        }

        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Trigger dynamic page integrations
        this.onRouteEnter(state.currentRoute);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    bindInternalNavLinks() {
        document.body.addEventListener('click', (e) => {
            const navAttr = e.target.closest('[data-nav]');
            if (navAttr) {
                const target = navAttr.getAttribute('data-nav');
                window.location.hash = `#${target}`;
            }
        });
    }

    onRouteEnter(route) {
        if (route === 'home') {
            startTypewriter();
            initHomeStatsCountUp();
        }
    }
}

// ==========================================================================
// 5. TOAST NOTIFICATION CENTER
// ==========================================================================

function triggerToast(text, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconClass = 'fa-circle-check';
    if (type === 'info') iconClass = 'fa-circle-info';
    if (type === 'warning') iconClass = 'fa-triangle-exclamation';
    if (type === 'danger') iconClass = 'fa-circle-xmark';

    toast.innerHTML = `
        <i class="fa-solid ${iconClass} toast-icon ${type}"></i>
        <span class="toast-text">${text}</span>
    `;

    container.appendChild(toast);

    // Fade out and auto remove
    setTimeout(() => {
        toast.style.animation = 'toast-slide-in 0.3s ease reverse forwards';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ==========================================================================
// 6. TYPING EFFECT FOR HERO BANNER
// ==========================================================================

let typewriterTimeout;
function startTypewriter() {
    const el = document.getElementById('typewriter-text');
    if (!el) return;
    
    // Clear ongoing instances
    clearTimeout(typewriterTimeout);
    
    const words = ["LEGENDARY EXPERIENCES", "THE FUTURE OF ESPORTS", "BREATH-TAKING VISUALS", "FLAWLESS MULTIPLAYER"];
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function tick() {
        const currentWord = words[wordIdx];
        if (isDeleting) {
            el.textContent = currentWord.substring(0, charIdx - 1);
            charIdx--;
        } else {
            el.textContent = currentWord.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIdx === currentWord.length) {
            speed = 2000; // Pause at full word
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            wordIdx = (wordIdx + 1) % words.length;
            speed = 400; // Shift wait speed
        }

        typewriterTimeout = setTimeout(tick, speed);
    }

    tick();
}

// ==========================================================================
// 7. COUNTERS FOR HOME STATS
// ==========================================================================

function initHomeStatsCountUp() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(st => {
        const target = parseFloat(st.getAttribute('data-target'));
        const isFloat = st.getAttribute('data-target').includes('.');
        let count = 0;
        const duration = 1500; // ms
        const increment = target / (duration / 16); // 60 FPS

        function updateStat() {
            count += increment;
            if (count >= target) {
                st.textContent = isFloat ? target.toFixed(1) : formatStatNumber(Math.floor(target));
            } else {
                st.textContent = isFloat ? count.toFixed(1) : formatStatNumber(Math.floor(count));
                requestAnimationFrame(updateStat);
            }
        }
        updateStat();
    });
}

function formatStatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'k+';
    return num;
}

// ==========================================================================
// 8. INTERACTIVE TOURNAMENT COUNTDOWN SYSTEM
// ==========================================================================

function startTournamentCountdowns() {
    setInterval(() => {
        COUNTDOWN_TOURNAMENTS.forEach(t => {
            const segmentEl = document.getElementById(`timer-${t.id}`);
            if (!segmentEl) return;

            const now = new Date().getTime();
            const target = new Date(t.date).getTime();
            const distance = target - now;

            if (distance < 0) {
                segmentEl.innerHTML = "<span class='text-pink'>LEAGUE LIVE</span>";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            segmentEl.innerHTML = `
                <div class="timer-segment">${days}d</div>
                <div class="timer-segment">${hours}h</div>
                <div class="timer-segment">${minutes}m</div>
                <div class="timer-segment">${seconds}s</div>
            `;
        });
    }, 1000);
}

// ==========================================================================
// 9. DYNAMIC COMPONENT INJECTIONS & UI SYNC
// ==========================================================================

// Global User UI sync
function syncGamerProfileUI() {
    const avatarEls = [document.getElementById('header-avatar'), document.getElementById('pd-avatar')];
    const usernameEls = [document.getElementById('header-username'), document.getElementById('pd-username')];
    const tagEls = [document.getElementById('header-tag'), document.getElementById('pd-tag')];
    
    avatarEls.forEach(el => { if (el) el.src = state.userProfile.avatar; });
    usernameEls.forEach(el => { if (el) el.textContent = state.userProfile.username; });
    tagEls.forEach(el => { if (el) el.textContent = state.userProfile.tag; });

    // Profile menu detail blocks
    const rankEl = document.getElementById('pd-rank');
    const winsEl = document.getElementById('pd-wins');
    const matchesEl = document.getElementById('pd-matches');
    const levelEl = document.getElementById('pd-level');
    const xpPctEl = document.getElementById('pd-xp-pct');
    const xpFillEl = document.getElementById('pd-xp-fill');

    if (rankEl) rankEl.textContent = state.userProfile.rank;
    if (winsEl) winsEl.textContent = state.userProfile.wins;
    if (matchesEl) matchesEl.textContent = state.userProfile.matches;
    if (levelEl) levelEl.textContent = state.userProfile.level;
    if (xpPctEl) xpPctEl.textContent = `${state.userProfile.xp}% XP`;
    if (xpFillEl) xpFillEl.style.width = `${state.userProfile.xp}%`;
}

// Render Header & Sidebar online friends list
function renderFriendsList() {
    const container = document.getElementById('sidebar-friends-list');
    if (!container) return;

    container.innerHTML = ONLINE_PLAYERS.map(f => `
        <div class="friend-item">
            <div class="friend-meta">
                <div class="friend-avatar-wrap">
                    <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=${f.name}" alt="${f.name}" class="friend-avatar">
                    <span class="status-dot ${f.status}"></span>
                </div>
                <div>
                    <span class="friend-name">${f.name}</span>
                    <span class="friend-game">${f.status === 'offline' ? 'Offline' : f.game}</span>
                </div>
            </div>
            ${f.status !== 'offline' ? `
                <button class="friend-invite-btn" title="Invite to Co-op Roster" onclick="inviteFriend('${f.name}')">
                    <i class="fa-solid fa-gamepad"></i>
                </button>
            ` : ''}
        </div>
    `).join('');
}

window.inviteFriend = function(name) {
    triggerToast(`Co-op invitation dispatched to ${name}!`, 'info');
};

// Notifications drop list
function renderNotifications() {
    const listEl = document.getElementById('notifications-list');
    const badge = document.getElementById('notification-badge');
    if (!listEl) return;

    const unreadCount = state.notifications.filter(n => n.unread).length;
    if (badge) {
        if (unreadCount > 0) {
            badge.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    }

    if (state.notifications.length === 0) {
        listEl.innerHTML = `<div class="p-4 text-center text-secondary text-sm">Clear systems alert log</div>`;
        return;
    }

    listEl.innerHTML = state.notifications.map(n => `
        <div class="noti-item ${n.unread ? 'unread' : ''}" onclick="readNotification(${n.id})">
            <div class="noti-icon">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div class="noti-meta">
                <p class="noti-text">${n.text}</p>
                <span class="noti-time">${n.time}</span>
            </div>
        </div>
    `).join('');
}

window.readNotification = function(id) {
    const noti = state.notifications.find(n => n.id === id);
    if (noti) {
        noti.unread = false;
        saveStateToLocalStorage();
        renderNotifications();
    }
};

// Dynamic Showcase Banner switcher
function renderSpotlightSection() {
    const container = document.getElementById('spotlight-card');
    if (!container) return;

    const game = GAMES_DATA[state.spotlightIndex];

    container.innerHTML = `
        <!-- Left Visual Backdrop Slider -->
        <div class="spotlight-media-part" style="background-image: url('${game.images[0]}')">
            <span class="spotlight-badge badge-gaming">
                <i class="fa-solid fa-wand-magic-sparkles"></i> SPOTLIGHT EXCLUSIVE
            </span>
            <div class="spotlight-floating-content">
                <span class="spotlight-tagline">${game.tagline}</span>
                <h3 class="spotlight-title">${game.title}</h3>
                <p class="spotlight-desc">${game.excerpt}</p>
                <div class="spotlight-actions">
                    <button class="btn btn-primary btn-glow" onclick="openGameModal('${game.id}')">
                        <i class="fa-solid fa-gamepad"></i> Launch / Explore
                    </button>
                    <button class="btn btn-secondary" onclick="triggerClientDownload('${game.id}')">
                        <i class="fa-solid fa-download"></i> Get Client
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Right Action Grid -->
        <div class="spotlight-info-part glass-card">
            <div class="sip-header">
                <span class="badge-pill">${game.genre}</span>
                <h3>Featured Roster Library</h3>
            </div>
            
            <div class="library-stack">
                ${GAMES_DATA.map((g, idx) => `
                    <div class="lib-game-item ${idx === state.spotlightIndex ? 'active' : ''}" onclick="setSpotlightIndex(${idx})">
                        <div class="lgi-left">
                            <img src="${g.images[0]}" alt="${g.title}">
                            <div class="lgi-meta">
                                <h4>${g.title}</h4>
                                <div class="lgi-tags">
                                    <span>${g.genre}</span>
                                    <span>${g.platform.split(',')[0]}</span>
                                </div>
                            </div>
                        </div>
                        <div class="lgi-right">
                            <button title="Showcase Info"><i class="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

window.setSpotlightIndex = function(idx) {
    state.spotlightIndex = idx;
    renderSpotlightSection();
};

// Popular players Leaderboards
function renderLeaderboards() {
    const listContainer = document.getElementById('home-leaderboard-list');
    if (!listContainer) return;

    let filtered = LEADERBOARD_DATA.filter(p => 
        p.name.toLowerCase().includes(state.leaderboardFilterQuery.toLowerCase()) ||
        p.tag.toLowerCase().includes(state.leaderboardFilterQuery.toLowerCase())
    );

    // Sort by selection
    filtered.sort((a, b) => {
        if (state.activeLeaderboardStat === 'wins') return b.wins - a.wins;
        if (state.activeLeaderboardStat === 'kd') return parseFloat(b.kd) - parseFloat(a.kd);
        return b.score - a.score;
    });

    if (filtered.length === 0) {
        listContainer.innerHTML = `<div class="p-4 text-center text-muted">No gamer tags matched this query.</div>`;
        return;
    }

    listContainer.innerHTML = filtered.map((player, idx) => {
        let rankClass = '';
        if (player.rank === 1) rankClass = 'gold';
        else if (player.rank === 2) rankClass = 'silver';
        else if (player.rank === 3) rankClass = 'bronze';

        let statDisplay = '';
        if (state.activeLeaderboardStat === 'wins') statDisplay = `<strong>${player.wins}</strong> <span class='text-xs text-secondary'>Wins</span>`;
        else if (state.activeLeaderboardStat === 'kd') statDisplay = `<strong>${player.kd}</strong> <span class='text-xs text-secondary'>K/D</span>`;
        else statDisplay = `<strong>${(player.score/1000).toFixed(1)}k</strong> <span class='text-xs text-secondary'>Score</span>`;

        return `
            <div class="lb-row">
                <div class="lb-left">
                    <span class="lb-rank ${rankClass}">#${player.rank}</span>
                    <img src="${player.avatar}" alt="${player.name}" class="lb-avatar">
                    <div>
                        <span class="lb-username">${player.name}</span>
                        <span class="lb-tag">${player.tag}</span>
                    </div>
                </div>
                <div class="lb-right">
                    ${statDisplay}
                </div>
            </div>
        `;
    }).join('');
}

// Compact Tournaments
function renderCompactTournaments() {
    const container = document.getElementById('home-tournament-list');
    if (!container) return;

    container.innerHTML = COUNTDOWN_TOURNAMENTS.map(t => {
        const slotsFilledPct = (t.registeredCount / t.totalSlots) * 100;
        const isRegistered = state.registeredTournaments.includes(t.id);

        return `
            <div class="t-item-compact">
                <div class="t-comp-left">
                    <span class="t-comp-title">${t.title}</span>
                    <div class="t-comp-meta">
                        <span><i class="fa-solid fa-gamepad"></i> ${t.game}</span>
                        <span><i class="fa-solid fa-hand-holding-dollar"></i> ${t.prize}</span>
                    </div>
                </div>
                <div class="t-comp-center">
                    <div class="countdown-timer" id="timer-${t.id}">
                        Calculating...
                    </div>
                    <div>
                        <span class="text-xs text-muted">${t.registeredCount}/${t.totalSlots} Slots</span>
                        <div class="t-slots-bar" title="${Math.floor(slotsFilledPct)}% full">
                            <div class="t-slots-fill" style="width: ${slotsFilledPct}%"></div>
                        </div>
                    </div>
                </div>
                <div>
                    ${isRegistered ? `
                        <button class="btn btn-outline btn-sm text-green" disabled>
                            <i class="fa-solid fa-circle-check"></i> Sealed
                        </button>
                    ` : `
                        <button class="btn btn-primary btn-sm btn-glow" onclick="openTournamentModal('${t.id}')">
                            Join
                        </button>
                    `}
                </div>
            </div>
        `;
    }).join('');
}

// Home News Cards
function renderHomeNews() {
    const container = document.getElementById('home-news-grid');
    if (!container) return;

    container.innerHTML = NEWS_DATA.map(n => {
        const isLiked = state.likedPosts.includes(n.id);
        return `
            <div class="news-card-compact glass-card">
                <div class="news-img-wrap">
                    <img src="${n.image}" alt="${n.title}">
                    <span class="news-badge badge-gaming ${n.badgeClass}">${n.badgeText}</span>
                </div>
                <div class="news-body-compact">
                    <div class="news-date-read">
                        <span>${n.date}</span>
                        <span>${n.readTime}</span>
                    </div>
                    <h3 class="news-title-compact">${n.title}</h3>
                    <p class="news-excerpt-compact">${n.excerpt}</p>
                    <div class="news-footer-compact">
                        <button class="post-likes-btn ${isLiked ? 'liked' : ''}" onclick="toggleLikePost('${n.id}')">
                            <i class="fa-solid fa-heart"></i>
                            <span>${n.likes + (isLiked ? 1 : 0)}</span>
                        </button>
                        <a href="#blog" class="read-more-link">
                            Expand <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

window.toggleLikePost = function(id) {
    const idx = state.likedPosts.indexOf(id);
    if (idx > -1) {
        state.likedPosts.splice(idx, 1);
        triggerToast("Article unliked", "info");
    } else {
        state.likedPosts.push(id);
        triggerToast("Article liked!", "success");
    }
    saveStateToLocalStorage();
    renderHomeNews();
    renderBlogPosts();
};

// Games Library page catalogue renderer
function renderGamesLibrary() {
    const container = document.getElementById('games-grid-container');
    if (!container) return;

    let filtered = GAMES_DATA;
    if (state.activeGameFilter !== 'all') {
        filtered = GAMES_DATA.filter(g => g.genre === state.activeGameFilter);
    }

    if (state.searchQuery) {
        filtered = filtered.filter(g => 
            g.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            g.tagline.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            g.excerpt.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
    }

    if (filtered.length === 0) {
        container.innerHTML = `<div class="p-8 text-center text-muted col-span-3">No games match this specific search metric.</div>`;
        return;
    }

    container.innerHTML = filtered.map(g => `
        <div class="game-card" onclick="openGameModal('${g.id}')">
            <div class="game-card-bg" style="background-image: url('${g.images[0]}')"></div>
            <div class="game-card-overlay">
                <span class="badge-pill gc-genre">${g.genre}</span>
                <h3 class="gc-title">${g.title}</h3>
                <p class="gc-excerpt">${g.excerpt}</p>
                <div class="gc-footer">
                    <span class="gc-players"><i class="fa-solid fa-user-group"></i> ${g.players} active</span>
                    <span class="gc-more-btn">
                        Details <i class="fa-solid fa-chevron-right"></i>
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

// Blog screen populator
function renderBlogPosts() {
    const container = document.getElementById('blog-posts-feed');
    if (!container) return;

    let filtered = NEWS_DATA;
    if (state.activeBlogFilter !== 'all') {
        filtered = NEWS_DATA.filter(n => n.type === state.activeBlogFilter);
    }

    if (container.dataset.search) {
        const q = container.dataset.search.toLowerCase();
        filtered = filtered.filter(n => 
            n.title.toLowerCase().includes(q) ||
            n.excerpt.toLowerCase().includes(q) ||
            n.content.toLowerCase().includes(q)
        );
    }

    if (filtered.length === 0) {
        container.innerHTML = `<div class="p-8 text-center text-muted">No transmission logs match the search query.</div>`;
        return;
    }

    container.innerHTML = filtered.map(n => {
        const isLiked = state.likedPosts.includes(n.id);
        return `
            <article class="blog-post-card glass-card">
                <div class="bpc-img-wrap" style="background-image: url('${n.image}')">
                    <span class="bpc-badge badge-gaming ${n.badgeClass}">${n.badgeText}</span>
                </div>
                <div class="bpc-body">
                    <div>
                        <div class="bpc-meta">
                            <span><i class="fa-solid fa-calendar-days"></i> ${n.date}</span>
                            <span><i class="fa-solid fa-clock"></i> ${n.readTime}</span>
                        </div>
                        <h2 class="bpc-title">${n.title}</h2>
                        <p class="bpc-excerpt">${n.excerpt}</p>
                        <p class="bpc-content-full text-secondary text-sm hidden-content" style="display:none; margin-bottom: 20px;">
                            ${n.content}
                        </p>
                    </div>
                    <div class="bpc-footer">
                        <button class="post-likes-btn ${isLiked ? 'liked' : ''}" onclick="toggleLikePost('${n.id}')">
                            <i class="fa-solid fa-heart"></i>
                            <span>${n.likes + (isLiked ? 1 : 0)}</span>
                        </button>
                        <button class="btn btn-outline btn-sm read-article-btn" onclick="toggleReadFullArticle(this)">
                            Read Full Log
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

window.toggleReadFullArticle = function(btn) {
    const card = btn.closest('.blog-post-card');
    const content = card.querySelector('.bpc-content-full');
    const excerpt = card.querySelector('.bpc-excerpt');

    if (content.style.display === 'none') {
        content.style.display = 'block';
        excerpt.style.display = 'none';
        btn.textContent = 'Collapse Log';
    } else {
        content.style.display = 'none';
        excerpt.style.display = 'block';
        btn.textContent = 'Read Full Log';
    }
};

// Patch Accordion Renderer
function renderPatchAccordion() {
    const container = document.getElementById('patch-notes-accordion');
    if (!container) return;

    container.innerHTML = PATCH_ACCORDION_DATA.map((p, idx) => `
        <div class="accordion-item ${idx === 0 ? 'active' : ''}">
            <button class="accordion-trigger" onclick="toggleAccordionItem(this)">
                <div class="accordion-title-wrap">
                    <span class="accordion-title">${p.game} ${p.version}</span>
                    <span class="accordion-meta">Released ${p.date}</span>
                </div>
                <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="accordion-content" style="max-height: ${idx === 0 ? '300px' : '0'};">
                <div class="accordion-inner">
                    <ul>
                        ${p.fixes.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');
}

window.toggleAccordionItem = function(btn) {
    const item = btn.closest('.accordion-item');
    const content = item.querySelector('.accordion-content');
    const isActive = item.classList.contains('active');

    // Close all other elements
    document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-content').style.maxHeight = '0';
    });

    if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = '400px';
    }
};

// Team Members Renderer
function renderTeamMembers() {
    const container = document.getElementById('about-team-grid');
    if (!container) return;

    container.innerHTML = TEAM_DATA.map(t => `
        <div class="team-card glass-card">
            <div class="team-img-wrap">
                <img src="${t.avatar}" alt="${t.name}">
                <div class="team-social-overlay">
                    <a href="${t.twitter}" class="team-soc-icon" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="${t.discord}" class="team-soc-icon" aria-label="Discord"><i class="fa-brands fa-discord"></i></a>
                </div>
            </div>
            <div class="team-info">
                <h4>${t.name}</h4>
                <p>${t.role}</p>
            </div>
        </div>
    `).join('');
}

// ==========================================================================
// 10. MODALS CONTROLLER & FORMS INTERACTIVE LOGIC
// ==========================================================================

// Global close binds
document.querySelectorAll('.modal-close, .modal-backdrop').forEach(closeEl => {
    closeEl.addEventListener('click', (e) => {
        if (e.target === closeEl || closeEl.classList.contains('modal-close')) {
            document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
            // If download interval was running, clear or let it run in background
        }
    });
});

// A. Tournament Registration Modal
window.openTournamentModal = function(id) {
    const t = COUNTDOWN_TOURNAMENTS.find(x => x.id === id);
    if (!t) return;

    document.getElementById('t-modal-id').value = t.id;
    document.getElementById('t-modal-title').textContent = t.title;
    document.getElementById('t-modal-prize').textContent = t.prize;
    document.getElementById('t-modal-date').textContent = t.date.split(' ')[0] + ' ' + t.date.split(' ')[1];
    document.getElementById('t-modal-slots').textContent = `${t.registeredCount}/${t.totalSlots} Slots`;

    document.getElementById('tournament-modal').classList.add('active');
};

document.getElementById('tournament-registration-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('t-modal-id').value;
    const roster = document.getElementById('t-roster-name').value;
    const discord = document.getElementById('t-captain-discord').value;

    if (!roster || !discord) {
        triggerToast("Roster variables are incomplete!", "warning");
        return;
    }

    const t = COUNTDOWN_TOURNAMENTS.find(x => x.id === id);
    if (t) {
        t.registeredCount++;
        state.registeredTournaments.push(t.id);
        
        // Dynamic notify item
        state.notifications.unshift({
            id: Date.now(),
            text: `Roster '${roster}' seeded successfully for ${t.title}!`,
            time: "Just now",
            unread: true
        });

        saveStateToLocalStorage();
        triggerToast("Seeding request authorized! Slot sealed.", "success");
        
        // Re-render
        renderCompactTournaments();
        renderNotifications();
        
        // Close modal
        document.getElementById('tournament-modal').classList.remove('active');
        this.reset();
    }
});

// B. Game Detail Modal & Slider Showcase
let currentCarouselIndex = 0;
let carouselImages = [];

window.openGameModal = function(id) {
    const g = GAMES_DATA.find(x => x.id === id);
    if (!g) return;

    document.getElementById('gdm-title').textContent = g.title;
    document.getElementById('gdm-tagline').textContent = g.tagline;
    document.getElementById('gdm-genre').textContent = g.genre;
    document.getElementById('gdm-full-desc').textContent = g.fullDesc;
    document.getElementById('gdm-platform').textContent = g.platform;
    document.getElementById('gdm-players').textContent = `${g.players} Active`;
    document.getElementById('gdm-gpu').textContent = g.gpu;
    document.getElementById('gdm-disk').textContent = g.disk;

    // Set banner image
    document.getElementById('gdm-banner-img').style.backgroundImage = `url('${g.images[0]}')`;

    // Features
    const featuresBox = document.getElementById('gdm-features');
    featuresBox.innerHTML = g.features.map(f => `
        <div class="gdm-feature-tag">
            <i class="fa-solid fa-microchip"></i>
            <span>${f}</span>
        </div>
    `).join('');

    // Set Slider tracker
    carouselImages = g.images;
    currentCarouselIndex = 0;
    renderGameCarousel();

    // Reset download speedometer display
    const speedo = document.getElementById('game-download-speedometer');
    speedo.style.display = 'none';
    
    // Bind Launcher client action
    const dlBtn = document.getElementById('gdm-download-btn');
    dlBtn.onclick = () => triggerClientDownload(g.id);

    document.getElementById('game-detail-modal').classList.add('active');
};

function renderGameCarousel() {
    const track = document.getElementById('gdm-carousel-track');
    const dots = document.getElementById('gdm-carousel-dots');
    if (!track || !dots) return;

    track.innerHTML = carouselImages.map(img => `
        <img src="${img}" alt="Game Capture Screen">
    `).join('');

    // Move track to current slide index
    track.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;

    // Dots setup
    dots.innerHTML = carouselImages.map((_, idx) => `
        <span class="carousel-dot ${idx === currentCarouselIndex ? 'active' : ''}" onclick="setCarouselIndex(${idx})"></span>
    `).join('');
}

window.setCarouselIndex = function(idx) {
    currentCarouselIndex = idx;
    renderGameCarousel();
};

document.getElementById('gdm-carousel-prev')?.addEventListener('click', () => {
    currentCarouselIndex = (currentCarouselIndex - 1 + carouselImages.length) % carouselImages.length;
    renderGameCarousel();
});

document.getElementById('gdm-carousel-next')?.addEventListener('click', () => {
    currentCarouselIndex = (currentCarouselIndex + 1) % carouselImages.length;
    renderGameCarousel();
});

// C. Dynamic Speed Simulated Client Downloader
window.triggerClientDownload = function(id) {
    const g = GAMES_DATA.find(x => x.id === id);
    if (!g) return;

    // Check if another download is running
    if (state.downloadingGameId && state.downloadingGameId !== id) {
        triggerToast("Another download loop is currently active!", "warning");
        return;
    }

    state.downloadingGameId = id;
    state.downloadProgress = 0;

    const speedo = document.getElementById('game-download-speedometer');
    const status = document.getElementById('game-download-status');
    const pct = document.getElementById('game-download-pct');
    const fill = document.getElementById('game-download-bar-fill');
    const speed = document.getElementById('game-download-speed');
    const eta = document.getElementById('game-download-eta');

    if (speedo) speedo.style.display = 'block';

    clearInterval(state.downloadInterval);
    triggerToast(`Initializing file array stream for ${g.title}...`, 'info');

    state.downloadInterval = setInterval(() => {
        state.downloadProgress += Math.random() * 8 + 2;

        if (state.downloadProgress >= 100) {
            state.downloadProgress = 100;
            clearInterval(state.downloadInterval);
            state.downloadingGameId = null;

            if (status) status.textContent = "Client Synchronized! Booting...";
            if (pct) pct.textContent = "100%";
            if (fill) fill.style.width = "100%";
            if (speed) speed.textContent = "0.0 MB/s";
            if (eta) eta.textContent = "Ready to Play";

            triggerToast(`${g.title} Launcher is optimized & fully loaded!`, 'success');
            
            // Add notification alert
            state.notifications.unshift({
                id: Date.now(),
                text: `${g.title} files synchronized. Launch arrays active.`,
                time: "Just now",
                unread: true
            });
            saveStateToLocalStorage();
            renderNotifications();
        } else {
            const currentSpeed = (Math.random() * 45 + 15).toFixed(1);
            const remainingBytes = parseFloat(g.disk.split(' ')[0]) * 1024 * (1 - state.downloadProgress/100);
            const remainingSeconds = Math.floor(remainingBytes / parseFloat(currentSpeed));

            if (status) status.textContent = "Synchronizing Client Files...";
            if (pct) pct.textContent = `${Math.floor(state.downloadProgress)}%`;
            if (fill) fill.style.width = `${state.downloadProgress}%`;
            if (speed) speed.textContent = `${currentSpeed} MB/s`;
            if (eta) eta.textContent = `ETA: ${remainingSeconds}s`;
        }
    }, 600);
};

// D. Edit Gamer Profile Customization
const customizeBtn = document.getElementById('customize-profile-btn');
const profileEditModal = document.getElementById('profile-edit-modal');
const profileEditForm = document.getElementById('profile-edit-form');

customizeBtn?.addEventListener('click', () => {
    document.getElementById('edit-username').value = state.userProfile.username;
    document.getElementById('edit-tag').value = state.userProfile.tag.replace('@', '');
    
    // Select correct avatar
    document.querySelectorAll('.avatar-option').forEach(el => {
        if (el.getAttribute('data-avatar-seed') === state.userProfile.avatarSeed) {
            el.classList.add('selected');
        } else {
            el.classList.remove('selected');
        }
    });

    profileEditModal.classList.add('active');
});

// Avatar selections toggles
document.querySelectorAll('.avatar-option').forEach(el => {
    el.addEventListener('click', function() {
        document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');
    });
});

profileEditForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    const newUsername = document.getElementById('edit-username').value;
    const newTag = '@' + document.getElementById('edit-tag').value.replace('@', '');
    const selectedAvatarEl = document.querySelector('.avatar-option.selected');
    const avatarSeed = selectedAvatarEl ? selectedAvatarEl.getAttribute('data-avatar-seed') : 'Alex';

    if (!newUsername || !newTag) {
        triggerToast("Fields cannot be empty!", "warning");
        return;
    }

    state.userProfile.username = newUsername;
    state.userProfile.tag = newTag;
    state.userProfile.avatarSeed = avatarSeed;
    state.userProfile.avatar = `https://api.dicebear.com/7.x/adventurer/svg?seed=${avatarSeed}`;

    saveStateToLocalStorage();
    syncGamerProfileUI();
    triggerToast("Gamer Profile Identity Synchronized!", "success");
    
    profileEditModal.classList.remove('active');
});

// ==========================================================================
// 11. DYNAMIC FORM SUBMISSIONS (CONTACT FORM PAYLOADS)
// ==========================================================================

const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate inputs
    let hasError = false;
    
    const name = document.getElementById('form-name');
    const email = document.getElementById('form-email');
    const dept = document.getElementById('form-dept');
    const message = document.getElementById('form-message');

    // Reset validations
    document.querySelectorAll('.validation-error').forEach(el => el.classList.remove('active'));

    if (!name.value.trim()) {
        document.getElementById('error-name').classList.add('active');
        hasError = true;
    }
    if (!email.value.trim() || !validateEmail(email.value)) {
        document.getElementById('error-email').classList.add('active');
        hasError = true;
    }
    if (!dept.value) {
        document.getElementById('error-dept').classList.add('active');
        hasError = true;
    }
    if (!message.value.trim()) {
        document.getElementById('error-message').classList.add('active');
        hasError = true;
    }

    if (hasError) {
        triggerToast("Form validation payload errors discovered!", "warning");
        return;
    }

    // Submit spinner cycle
    const btn = document.getElementById('form-submit-btn');
    const btnText = document.getElementById('submit-btn-text');
    const btnSpinner = document.getElementById('submit-btn-spinner');

    if (btn) btn.disabled = true;
    if (btnText) btnText.style.display = 'none';
    if (btnSpinner) btnSpinner.style.display = 'block';

    setTimeout(() => {
        // Successful response callback simulation
        if (btn) btn.disabled = false;
        if (btnText) btnText.style.display = 'inline-flex';
        if (btnSpinner) btnSpinner.style.display = 'none';

        triggerToast("Transmission dispatched! Comm encrypted.", "success");
        
        state.notifications.unshift({
            id: Date.now(),
            text: `Support ticket regarding '${dept.value}' registered on secure arrays.`,
            time: "Just now",
            unread: true
        });
        saveStateToLocalStorage();
        renderNotifications();

        this.reset();
    }, 2000);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Real-time floating validations
document.querySelectorAll('#contact-form input, #contact-form select, #contact-form textarea').forEach(inEl => {
    inEl.addEventListener('input', function() {
        const errorEl = document.getElementById(`error-${this.id.replace('form-', '')}`);
        if (errorEl && this.value.trim()) {
            errorEl.classList.remove('active');
        }
    });
});

// ==========================================================================
// 12. DYNAMIC LIVE CORE SEARCH
// ==========================================================================

const globalSearch = document.getElementById('global-search');
const searchDropdown = document.getElementById('search-results-dropdown');

globalSearch?.addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    
    if (!q) {
        searchDropdown.classList.remove('active');
        return;
    }

    // Filter games, tournaments, players
    const matchGames = GAMES_DATA.filter(g => g.title.toLowerCase().includes(q)).map(g => ({
        title: g.title,
        type: `Game (${g.genre})`,
        image: g.images[0],
        action: `openGameModal('${g.id}')`
    }));

    const matchTournaments = COUNTDOWN_TOURNAMENTS.filter(t => t.title.toLowerCase().includes(q)).map(t => ({
        title: t.title,
        type: "Championship Tournament",
        image: "https://api.dicebear.com/7.x/identicon/svg?seed=" + t.id,
        action: `openTournamentModal('${t.id}')`
    }));

    const matchNews = NEWS_DATA.filter(n => n.title.toLowerCase().includes(q)).map(n => ({
        title: n.title,
        type: "Transmission Article",
        image: n.image,
        action: "window.location.hash = '#blog'"
    }));

    const combined = [...matchGames, ...matchTournaments, ...matchNews].slice(0, 5);

    if (combined.length === 0) {
        searchDropdown.innerHTML = `<div class="p-3 text-center text-xs text-muted">No tactical archives found.</div>`;
    } else {
        searchDropdown.innerHTML = combined.map(item => `
            <div class="search-result-item" onclick="${item.action}; document.getElementById('search-results-dropdown').classList.remove('active');">
                <img src="${item.image}" alt="">
                <div class="sri-info">
                    <span class="sri-title">${item.title}</span>
                    <span class="sri-type">${item.type}</span>
                </div>
            </div>
        `).join('');
    }

    searchDropdown.classList.add('active');
});

// Close search drop when clicking elsewhere
document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-search-bar')) {
        searchDropdown?.classList.remove('active');
    }
});

// ==========================================================================
// 13. SECTION AND PAGE EVENT FILTER TIGGERS
// ==========================================================================

// Global Settings fast toggle trigger
document.getElementById('settings-toggle')?.addEventListener('click', () => {
    triggerToast("Regional Node: NA-EAST-A (Ping: 12ms). All settings nominal.", "info");
});

// Live notifications clear toggle
document.getElementById('mark-all-read')?.addEventListener('click', () => {
    state.notifications = [];
    saveStateToLocalStorage();
    renderNotifications();
    triggerToast("Notifications array cleared", "info");
});

// Live notification toggle box click
const notifyToggle = document.getElementById('notifications-toggle');
const notifyDropdown = document.getElementById('notifications-dropdown');
notifyToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    notifyDropdown.classList.toggle('active');
});

document.addEventListener('click', () => {
    notifyDropdown?.classList.remove('active');
});

// A. Game Filter Buttons
document.querySelectorAll('#games-genre-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('#games-genre-filters .filter-btn').forEach(o => o.classList.remove('active'));
        this.classList.add('active');
        state.activeGameFilter = this.getAttribute('data-genre');
        renderGamesLibrary();
    });
});

const libSearchIn = document.getElementById('library-search-input');
libSearchIn?.addEventListener('input', function() {
    state.searchQuery = this.value;
    renderGamesLibrary();
});

// B. Blog tab switches
document.querySelectorAll('#blog-tab-selectors .blog-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('#blog-tab-selectors .blog-tab-btn').forEach(o => o.classList.remove('active'));
        this.classList.add('active');
        state.activeBlogFilter = this.getAttribute('data-blog-type');
        renderBlogPosts();
    });
});

const blogSearchIn = document.getElementById('blog-search-input');
blogSearchIn?.addEventListener('input', function() {
    const feed = document.getElementById('blog-posts-feed');
    if (feed) {
        feed.dataset.search = this.value;
        renderBlogPosts();
    }
});

// C. Leaderboard Tabs & filters
document.querySelectorAll('.lb-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.lb-tab').forEach(o => o.classList.remove('active'));
        this.classList.add('active');
        state.activeLeaderboardStat = this.getAttribute('data-lb-stat');
        renderLeaderboards();
    });
});

const lbSearch = document.getElementById('leaderboard-player-search');
lbSearch?.addEventListener('input', function() {
    state.leaderboardFilterQuery = this.value;
    renderLeaderboards();
});

// Sidebar Mobile Slider toggle binds
const sidebarToggle = document.getElementById('sidebar-toggle-btn');
const sidebarClose = document.getElementById('sidebar-close-btn');
const sidebar = document.getElementById('app-sidebar');

sidebarToggle?.addEventListener('click', () => {
    sidebar.classList.add('active');
});

sidebarClose?.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Auto close on nav click inside mobile view
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            sidebar.classList.remove('active');
        }
    });
});

// Node Status live checker
document.getElementById('sys-status-chk')?.addEventListener('click', (e) => {
    e.preventDefault();
    triggerToast("Active Server Clusters: 8/8 | CPU: 12% | RAM: 38% | Latency: 11ms", "success");
});

// "Join Vortex" about button trigger
document.getElementById('join-vortex-btn')?.addEventListener('click', () => {
    triggerToast("Connecting to Recruitment Arrays. Opening roles...", "info");
    setTimeout(() => {
        window.location.hash = '#contact';
        const dept = document.getElementById('form-dept');
        if (dept) {
            dept.value = "career";
        }
    }, 800);
});

// Client Downloader Direct triggers
document.getElementById('client-download-trigger')?.addEventListener('click', () => {
    triggerToast("Starting Vortex Core Launcher Client download...", "success");
    // Simulate direct browser download progress alert
    setTimeout(() => {
        triggerToast("VortexLauncherInstaller.exe downloaded successfully!", "success");
    }, 1500);
});

// Spotlight Navigation triggers
document.getElementById('spotlight-prev')?.addEventListener('click', () => {
    state.spotlightIndex = (state.spotlightIndex - 1 + GAMES_DATA.length) % GAMES_DATA.length;
    renderSpotlightSection();
});

document.getElementById('spotlight-next')?.addEventListener('click', () => {
    state.spotlightIndex = (state.spotlightIndex + 1) % GAMES_DATA.length;
    renderSpotlightSection();
});


// ==========================================================================
// 14. INITIALIZATION HOOK
// ==========================================================================

window.addEventListener('DOMContentLoaded', () => {
    // 1. Core visual dynamic background init
    new ParticleSystem();

    // 2. Navigation routing init
    new Router();

    // 3. Profiles & gamer state synchronization init
    syncGamerProfileUI();
    renderFriendsList();
    renderNotifications();

    // 4. Page components renders
    renderSpotlightSection();
    renderLeaderboards();
    renderCompactTourdowns = startTournamentCountdowns();
    renderCompactTournaments();
    renderHomeNews();

    // 5. Secondary screen initializers
    renderGamesLibrary();
    renderBlogPosts();
    renderPatchAccordion();
    renderTeamMembers();
});
