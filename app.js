/* ==========================================================================
   VORTEX STUDIOS DYNAMIC ENGINE - CORE APPLICATION CONTROLLER
   ========================================================================== */

// ==========================================================================
// 1. APPLICATION DATA RECORDS
// ==========================================================================

let GAMES_DATA = [
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

let LEADERBOARD_DATA = [
    { rank: 1, name: "ViperX", tag: "@viper", wins: 382, kd: "3.42", score: 98450, level: 88, avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Viper" },
    { rank: 2, name: "NeonShadow", tag: "@shadow", wins: 314, kd: "2.98", score: 85210, level: 76, avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Shadow" },
    { rank: 3, name: "AetherKnight", tag: "@aether", wins: 295, kd: "2.81", score: 81040, level: 71, avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aether" },
    { rank: 4, name: "RageTrigger", tag: "@rage", wins: 260, kd: "2.65", score: 72400, level: 69, avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Rage" },
    { rank: 5, name: "GlitchMage", tag: "@glitch", wins: 245, kd: "2.41", score: 68900, level: 64, avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Glitch" }
];

let NEWS_DATA = [
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

let PATCH_ACCORDION_DATA = [
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

let TEAM_DATA = [
    { name: "Marcus Vance", role: "CEO & Game Architect", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Marcus", twitter: "#", discord: "#" },
    { name: "Dr. Elena Rostova", role: "Lead Core Networking Tech", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Elena", twitter: "#", discord: "#" },
    { name: "Kaito Tanaka", role: "Principal Visual Designer", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Kaito", twitter: "#", discord: "#" },
    { name: "Sarah 'Valkyrie' Stone", role: "Director of Esports Leagues", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Sarah", twitter: "#", discord: "#" }
];

let COUNTDOWN_TOURNAMENTS = [
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
// SUPABASE BACKEND SYNCHRONIZATION ENGINE
// ==========================================================================

const dbState = {
    url: localStorage.getItem('supabaseUrl') || "https://cdwulwcfuhzffkxymzrw.supabase.co",
    anonKey: localStorage.getItem('supabaseAnonKey') || "sb_publishable_v7_xF6_z_34OqFn16aw08w_NEwOyPV3",
    client: null,
    isConnected: false
};

// Initialize Supabase Client
function initSupabase() {
    if (dbState.url && dbState.anonKey && typeof supabase !== 'undefined') {
        try {
            dbState.client = supabase.createClient(dbState.url, dbState.anonKey);
            dbState.isConnected = true;
            updateDBStatusUI(true);
            return true;
        } catch (e) {
            console.error("Supabase initialization error:", e);
            dbState.client = null;
            dbState.isConnected = false;
            updateDBStatusUI(false);
            return false;
        }
    } else {
        dbState.client = null;
        dbState.isConnected = false;
        updateDBStatusUI(false);
        return false;
    }
}

// Update DB UI Elements
function updateDBStatusUI(online) {
    const statusBadge = document.getElementById('db-status-badge');
    const modalDot = document.getElementById('db-modal-status-dot');
    const modalText = document.getElementById('db-modal-status-text');
    const statusBox = document.getElementById('db-connection-status-box');
    const disconnectBtn = document.getElementById('db-disconnect-btn');

    if (online) {
        if (statusBadge) statusBadge.style.backgroundColor = '#10b981';
        if (modalDot) {
            modalDot.style.backgroundColor = '#10b981';
            modalDot.className = 'status-dot online';
        }
        if (modalText) modalText.textContent = "Database Connected & Synchronized in Real-Time!";
        if (statusBox) {
            statusBox.className = "db-status-box online";
        }
        if (disconnectBtn) disconnectBtn.style.display = 'block';
    } else {
        if (statusBadge) statusBadge.style.backgroundColor = 'var(--color-accent-amber)';
        if (modalDot) {
            modalDot.style.backgroundColor = 'var(--color-accent-amber)';
            modalDot.className = 'status-dot offline';
        }
        if (modalText) modalText.textContent = "Database Sync Offline (Using High-Fidelity Fallback Data)";
        if (statusBox) {
            statusBox.className = "db-status-box offline";
        }
        if (disconnectBtn) disconnectBtn.style.display = 'none';
    }
}

// Async Sync Loader
async function syncDatabaseData() {
    if (!dbState.isConnected || !dbState.client) return;

    try {
        // 1. Sync Games Catalogue
        const { data: games, error: gamesErr } = await dbState.client.from('games').select('*');
        if (!gamesErr && games && games.length > 0) {
            GAMES_DATA = games.map(g => ({
                id: g.id,
                title: g.title,
                tagline: g.tagline,
                genre: g.genre,
                excerpt: g.excerpt,
                fullDesc: g.full_desc,
                players: g.players,
                gpu: g.gpu,
                disk: g.disk,
                platform: g.platform,
                images: g.images,
                features: g.features,
                downloadUrl: g.download_url,
                isSpotlight: g.is_spotlight
            }));
        }

        // 2. Sync Leaderboard
        const { data: leaderboard, error: lbErr } = await dbState.client.from('leaderboard').select('*');
        if (!lbErr && leaderboard && leaderboard.length > 0) {
            LEADERBOARD_DATA = leaderboard.map(l => ({
                rank: l.rank,
                name: l.name,
                tag: l.tag,
                wins: l.wins,
                kd: l.kd,
                score: l.score,
                level: l.level,
                avatar: l.avatar
            }));
        }

        // 3. Sync News & Transmissions
        const { data: news, error: newsErr } = await dbState.client.from('news').select('*');
        if (!newsErr && news && news.length > 0) {
            NEWS_DATA = news.map(n => ({
                id: n.id,
                type: n.type,
                badgeClass: n.badge_class,
                badgeText: n.badge_text,
                date: n.date,
                readTime: n.read_time,
                title: n.title,
                excerpt: n.excerpt,
                content: n.content,
                image: n.image,
                likes: n.likes
            }));
        }

        // 4. Sync Patch Notes Accordions
        const { data: patches, error: patchErr } = await dbState.client.from('patch_notes').select('*');
        if (!patchErr && patches && patches.length > 0) {
            PATCH_ACCORDION_DATA = patches.map(p => ({
                version: p.version,
                game: p.game,
                date: p.date,
                fixes: p.fixes
            }));
        }

        // 5. Sync Team Members
        const { data: team, error: teamErr } = await dbState.client.from('team').select('*');
        if (!teamErr && team && team.length > 0) {
            TEAM_DATA = team.map(t => ({
                name: t.name,
                role: t.role,
                avatar: t.avatar,
                twitter: t.twitter,
                discord: t.discord
            }));
        }

        // 6. Sync Tournaments Schedules
        const { data: tournaments, error: tErr } = await dbState.client.from('tournaments').select('*');
        if (!tErr && tournaments && tournaments.length > 0) {
            COUNTDOWN_TOURNAMENTS = tournaments.map(t => ({
                id: t.id,
                title: t.title,
                game: t.game,
                date: t.date,
                prize: t.prize,
                totalSlots: t.total_slots,
                registeredCount: t.registered_count
            }));
        }

        // Re-render UI components with freshly synced Supabase data
        reRenderAllComponents();
        console.log("Supabase core datasets synchronized successfully.");
    } catch (e) {
        console.error("Database synchronization failed:", e);
    }
}

function reRenderAllComponents() {
    renderSpotlightSection();
    renderLeaderboards();
    renderCompactTournaments();
    renderHomeNews();
    renderGamesLibrary();
    renderBlogPosts();
    renderPatchAccordion();
    renderTeamMembers();
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

window.toggleLikePost = async function(id) {
    const idx = state.likedPosts.indexOf(id);
    const n = NEWS_DATA.find(x => x.id === id);
    if (!n) return;

    const liked = idx > -1;
    const incrementValue = liked ? -1 : 1;

    try {
        if (dbState.isConnected && dbState.client) {
            const { error: likeErr } = await dbState.client.from('news').update({
                likes: Math.max(0, n.likes + incrementValue)
            }).eq('id', id);

            if (likeErr) throw likeErr;
        }

        if (liked) {
            state.likedPosts.splice(idx, 1);
            n.likes = Math.max(0, n.likes - 1);
            triggerToast("Article unliked", "info");
        } else {
            state.likedPosts.push(id);
            n.likes += 1;
            triggerToast("Article liked!", "success");
        }
        
        saveStateToLocalStorage();
        renderHomeNews();
        renderBlogPosts();
    } catch (err) {
        console.error("Liking post failed:", err);
        triggerToast(`Like action failed: ${err.message || "Database connection error"}`, "danger");
    }
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

document.getElementById('tournament-registration-form')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const id = document.getElementById('t-modal-id').value;
    const roster = document.getElementById('t-roster-name').value;
    const discord = document.getElementById('t-captain-discord').value;
    const region = document.getElementById('t-roster-region').value;

    if (!roster || !discord) {
        triggerToast("Roster variables are incomplete!", "warning");
        return;
    }

    const t = COUNTDOWN_TOURNAMENTS.find(x => x.id === id);
    if (t) {
        const submitBtn = document.getElementById('tournament-submit-btn');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = "<i class='fa-solid fa-circle-notch fa-spin'></i> Sealing Slot...";
        }

        try {
            if (dbState.isConnected && dbState.client) {
                // Insert into registrations
                const { error: regErr } = await dbState.client.from('tournament_registrations').insert([{
                    tournament_id: id,
                    team_name: roster,
                    captain_discord: discord,
                    region: region
                }]);

                if (regErr) throw regErr;

                // Update tournament count
                const { error: tErr } = await dbState.client.from('tournaments').update({
                    registered_count: t.registeredCount + 1
                }).eq('id', id);

                if (tErr) throw tErr;
            }

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
        } catch (err) {
            console.error("Tournament registration failed:", err);
            triggerToast(`Registration Failed: ${err.message || "Internal database error"}`, "danger");
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = "Confirm Competitive Seeding Slot";
            }
        }
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

    setTimeout(async () => {
        try {
            if (dbState.isConnected && dbState.client) {
                const priority = document.getElementById('form-priority').value;
                const { error: submitErr } = await dbState.client.from('contact_submissions').insert([{
                    name: name.value.trim(),
                    email: email.value.trim(),
                    department: dept.value,
                    priority: priority,
                    message: message.value.trim()
                }]);

                if (submitErr) throw submitErr;
            }

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

            contactForm.reset();
        } catch (err) {
            console.error("Form transmission failed:", err);
            triggerToast(`Transmission Failed: ${err.message || "Internal database error"}`, "danger");
            if (btn) btn.disabled = false;
            if (btnText) btnText.style.display = 'inline-flex';
            if (btnSpinner) btnSpinner.style.display = 'none';
        }
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
// SUPABASE MODAL HANDLERS
// ==========================================================================
const dbToggleBtn = document.getElementById('db-config-toggle');
const dbModal = document.getElementById('db-config-modal');
const dbModalClose = document.getElementById('db-modal-close');
const dbConfigForm = document.getElementById('db-config-form');
const dbTestBtn = document.getElementById('db-test-btn');
const dbDisconnectBtn = document.getElementById('db-disconnect-btn');

dbToggleBtn?.addEventListener('click', () => {
    const savedUrl = localStorage.getItem('supabaseUrl') || dbState.url;
    const savedKey = localStorage.getItem('supabaseAnonKey') || dbState.anonKey;
    const dbUrlInput = document.getElementById('db-url');
    const dbKeyInput = document.getElementById('db-anon-key');

    if (dbUrlInput) dbUrlInput.value = savedUrl;
    if (dbKeyInput) dbKeyInput.value = savedKey;

    updateDBStatusUI(dbState.isConnected);
    dbModal.classList.add('active');
});

dbModalClose?.addEventListener('click', () => {
    dbModal.classList.remove('active');
});

dbModal?.addEventListener('click', (e) => {
    if (e.target === dbModal) {
        dbModal.classList.remove('active');
    }
});

dbTestBtn?.addEventListener('click', async () => {
    const url = document.getElementById('db-url').value.trim();
    const key = document.getElementById('db-anon-key').value.trim();

    if (!url || !key) {
        triggerToast("Please input both Project URL and Anon API Key!", "warning");
        return;
    }

    dbTestBtn.disabled = true;
    dbTestBtn.textContent = "Testing...";
    triggerToast("Initiating testing ping to Supabase...", "info");

    try {
        const testClient = supabase.createClient(url, key);
        const { data, error } = await testClient.from('games').select('id').limit(1);

        if (error) throw error;

        triggerToast("VORTEX SERVER LINK ACTIVE! Connection verified.", "success");
        const statusBox = document.getElementById('db-connection-status-box');
        const modalText = document.getElementById('db-modal-status-text');
        const modalDot = document.getElementById('db-modal-status-dot');

        if (statusBox) statusBox.className = "db-status-box online";
        if (modalDot) {
            modalDot.style.backgroundColor = '#10b981';
            modalDot.className = 'status-dot online';
        }
        if (modalText) modalText.textContent = "Verification Succeeded! Server responding to queries.";
    } catch (e) {
        console.error("Test connection failed:", e);
        triggerToast(`Verification Failed: ${e.message || "Invalid credentials"}`, "danger");
        
        const statusBox = document.getElementById('db-connection-status-box');
        const modalText = document.getElementById('db-modal-status-text');
        const modalDot = document.getElementById('db-modal-status-dot');

        if (statusBox) statusBox.className = "db-status-box offline";
        if (modalDot) {
            modalDot.style.backgroundColor = '#ef4444';
            modalDot.className = 'status-dot offline';
        }
        if (modalText) modalText.textContent = `Verification Error: ${e.message || "Unauthorized"}`;
    } finally {
        dbTestBtn.disabled = false;
        dbTestBtn.textContent = "Test Link";
    }
});

dbConfigForm?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const url = document.getElementById('db-url').value.trim();
    const key = document.getElementById('db-anon-key').value.trim();

    if (!url || !key) {
        triggerToast("Please fill all required inputs!", "warning");
        return;
    }

    const saveBtn = document.getElementById('db-save-btn');
    saveBtn.disabled = true;
    saveBtn.textContent = "Connecting...";

    try {
        const client = supabase.createClient(url, key);
        const { error } = await client.from('games').select('id').limit(1);

        if (error) throw error;

        localStorage.setItem('supabaseUrl', url);
        localStorage.setItem('supabaseAnonKey', key);

        dbState.url = url;
        dbState.anonKey = key;
        dbState.client = client;
        dbState.isConnected = true;

        triggerToast("Database Sync Activated! Refreshing datasets...", "success");
        dbModal.classList.remove('active');
        
        updateDBStatusUI(true);
        await syncDatabaseData();
    } catch (e) {
        console.error("Database connection failure:", e);
        triggerToast(`Link failed: ${e.message || "Check credentials"}`, "danger");
    } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = "Connect Server";
    }
});

dbDisconnectBtn?.addEventListener('click', () => {
    localStorage.removeItem('supabaseUrl');
    localStorage.removeItem('supabaseAnonKey');

    dbState.url = "";
    dbState.anonKey = "";
    dbState.client = null;
    dbState.isConnected = false;

    triggerToast("Database disconnected. Reverting to fallback records.", "info");
    dbModal.classList.remove('active');
    updateDBStatusUI(false);
    
    setTimeout(() => {
        window.location.reload();
    }, 800);
    dbModal.classList.remove('active');
    updateDBStatusUI(false);
    
    setTimeout(() => {
        window.location.reload();
    }, 800);
});

// ==========================================================================
// 14. DUAL-STATE CORE MANAGERS (AUTHENTICATION, TEAMS, TOURNAMENTS, STORE)
// ==========================================================================

// Extended Global State Parameters
state.currentUser = null;
state.myTeam = null;
state.myInvitations = [];
state.friendRequests = [];
state.messages = { global: [], squad: [], private: [] };
state.activeChatRoom = 'global';
state.forumPosts = [];
state.gamerCredits = parseInt(localStorage.getItem('vortexCredits') || '500');

// Cyber Sound Effects Matrix
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playCyberBeep(freq = 600, duration = 0.08, type = 'sine') {
    try {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
        // Audio context suspended or blocked
    }
}

// --------------------------------------------------------------------------
// 14.1 AUTHENTICATION MANAGER (SESSION CONTROL PORTAL)
// --------------------------------------------------------------------------
class AuthManager {
    constructor() {
        this.modal = document.getElementById('auth-modal');
        this.closeBtn = document.getElementById('auth-modal-close');
        this.form = document.getElementById('auth-form');
        this.tabLogin = document.getElementById('auth-tab-login');
        this.tabRegister = document.getElementById('auth-tab-register');
        this.forgotLink = document.getElementById('auth-forgot-link');
        this.feedbackBox = document.getElementById('auth-feedback-box');
        this.submitBtn = document.getElementById('auth-submit-btn');
        this.titleText = document.getElementById('auth-modal-title-text');
        
        this.mode = 'login'; // login, register, forgot
        
        this.bindEvents();
        this.checkExistingSession();
    }

    bindEvents() {
        this.closeBtn?.addEventListener('click', () => this.hide());
        this.tabLogin?.addEventListener('click', () => this.switchMode('login'));
        this.tabRegister?.addEventListener('click', () => this.switchMode('register'));
        this.forgotLink?.addEventListener('click', (e) => {
            e.preventDefault();
            this.switchMode('forgot');
        });
        
        this.form?.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Trigger profile card click to open auth modal if not signed in
        document.getElementById('pd-avatar')?.addEventListener('click', () => {
            if (!state.currentUser) this.show();
        });
        document.getElementById('header-avatar')?.addEventListener('click', () => {
            if (!state.currentUser) {
                this.show();
            } else {
                triggerToast(`Signed in as ${state.currentUser.username}`, "info");
            }
        });
    }

    show() {
        this.modal?.classList.add('active');
        this.switchMode('login');
    }

    hide() {
        this.modal?.classList.remove('active');
    }

    switchMode(newMode) {
        this.mode = newMode;
        this.feedbackBox.style.display = 'none';
        
        const userGroup = document.getElementById('auth-group-username');
        const passGroup = document.getElementById('auth-group-password');
        const verifyNotice = document.getElementById('auth-verify-notice');
        
        if (newMode === 'login') {
            this.titleText.textContent = "VORTEX CORE SECURITY";
            if (userGroup) userGroup.style.display = 'none';
            if (passGroup) passGroup.style.display = 'block';
            if (verifyNotice) verifyNotice.style.display = 'none';
            this.tabLogin.classList.add('active');
            this.tabRegister.classList.remove('active');
            this.submitBtn.innerHTML = `<span><i class="fa-solid fa-right-to-bracket"></i> Initialize Authentication</span>`;
        } else if (newMode === 'register') {
            this.titleText.textContent = "REGISTER NEW ALIAS";
            if (userGroup) userGroup.style.display = 'block';
            if (passGroup) passGroup.style.display = 'block';
            if (verifyNotice) verifyNotice.style.display = 'block';
            this.tabLogin.classList.remove('active');
            this.tabRegister.classList.add('active');
            this.submitBtn.innerHTML = `<span><i class="fa-solid fa-user-plus"></i> Provision Account Protocol</span>`;
        } else if (newMode === 'forgot') {
            this.titleText.textContent = "RESET PASS-PHRASE";
            if (userGroup) userGroup.style.display = 'none';
            if (passGroup) passGroup.style.display = 'none';
            if (verifyNotice) verifyNotice.style.display = 'none';
            this.submitBtn.innerHTML = `<span><i class="fa-solid fa-envelope"></i> Request Reset Secure Key</span>`;
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        const email = document.getElementById('auth-email').value.trim();
        const password = document.getElementById('auth-password')?.value || '';
        const username = document.getElementById('auth-username')?.value.trim() || '';

        this.submitBtn.disabled = true;
        
        try {
            if (dbState.isConnected && dbState.client) {
                // Live Supabase Authentication
                if (this.mode === 'register') {
                    const { data, error } = await dbState.client.auth.signUp({
                        email,
                        password,
                        options: { data: { username } }
                    });
                    if (error) throw error;
                    triggerToast("Account verification transmission dispatched. Check your email!", "info");
                    this.hide();
                } else if (this.mode === 'login') {
                    const { data, error } = await dbState.client.auth.signInWithPassword({ email, password });
                    if (error) throw error;
                    
                    // Fetch profile details
                    const { data: profile, error: pErr } = await dbState.client
                        .from('profiles')
                        .select('*')
                        .eq('id', data.user.id)
                        .single();
                        
                    state.currentUser = profile || {
                        id: data.user.id,
                        username: username || email.split('@')[0],
                        avatar_url: `https://api.dicebear.com/7.x/adventurer/svg?seed=${data.user.id}`,
                        wins: 0,
                        losses: 0,
                        xp: 0,
                        role: 'Gamer',
                        credits: 500
                    };
                    
                    triggerToast(`Link Authenticated! Greeting Agent ${state.currentUser.username}`, "success");
                    this.hide();
                    this.syncUserSessionUI();
                } else if (this.mode === 'forgot') {
                    const { error } = await dbState.client.auth.resetPasswordForEmail(email);
                    if (error) throw error;
                    triggerToast("Password reset link dispatched securely.", "success");
                    this.hide();
                }
            } else {
                // Offline high-fidelity mock session fallbacks
                if (this.mode === 'register') {
                    triggerToast("Fallback Server Offline: Account provisioned locally!", "success");
                    this.switchMode('login');
                } else if (this.mode === 'login') {
                    state.currentUser = {
                        id: 'mock-uuid-882194',
                        username: email.split('@')[0],
                        avatar_url: `https://api.dicebear.com/7.x/adventurer/svg?seed=${email}`,
                        wins: 143,
                        losses: 67,
                        kd_ratio: 2.13,
                        xp: 85,
                        role: email.includes('admin') ? 'Admin' : 'Gamer',
                        credits: state.gamerCredits,
                        status: 'Active'
                    };
                    triggerToast(`Welcome back, ${state.currentUser.username} (Local Fallback Mode)`, "success");
                    this.hide();
                    this.syncUserSessionUI();
                } else if (this.mode === 'forgot') {
                    triggerToast("Password reset request logged in client memory.", "info");
                    this.hide();
                }
            }
            playCyberBeep(800, 0.15);
        } catch (err) {
            console.error("Auth Failure:", err);
            this.feedbackBox.style.display = 'block';
            this.feedbackBox.textContent = `Security Rejection: ${err.message || err}`;
            playCyberBeep(250, 0.25, 'sawtooth');
        } finally {
            this.submitBtn.disabled = false;
        }
    }

    async checkExistingSession() {
        if (dbState.isConnected && dbState.client) {
            const { data: { session } } = await dbState.client.auth.getSession();
            if (session) {
                const { data: profile } = await dbState.client
                    .from('profiles')
                    .select('*')
                    .eq('id', session.user.id)
                    .single();
                state.currentUser = profile || {
                    id: session.user.id,
                    username: session.user.user_metadata?.username || session.user.email.split('@')[0],
                    avatar_url: `https://api.dicebear.com/7.x/adventurer/svg?seed=${session.user.id}`,
                    wins: 0,
                    losses: 0,
                    xp: 0,
                    role: 'Gamer',
                    credits: 500
                };
                this.syncUserSessionUI();
            }
        } else {
            // Keep default mock user active for visual consistency
            state.currentUser = {
                id: 'mock-alex-uuid',
                username: "Alex Ryan",
                avatar_url: "https://api.dicebear.com/7.x/adventurer/svg?seed=Alex",
                wins: 143,
                losses: 67,
                kd_ratio: 2.13,
                xp: 85,
                role: 'Admin', // default to let user test Admin features immediately!
                credits: state.gamerCredits,
                status: 'Active'
            };
            this.syncUserSessionUI();
        }
    }

    syncUserSessionUI() {
        if (!state.currentUser) return;
        
        // Sync static client states
        state.userProfile.username = state.currentUser.username;
        state.userProfile.avatar = state.currentUser.avatar_url;
        state.userProfile.wins = state.currentUser.wins || 143;
        state.userProfile.matches = (state.currentUser.wins || 143) + (state.currentUser.losses || 67);
        state.userProfile.rank = state.currentUser.role === 'Admin' ? 'Nexus Moderator' : 'Elite Grandmaster';
        state.userProfile.xp = state.currentUser.xp || 85;
        
        syncGamerProfileUI();
        
        // Reveal Admin links if user is Administrator/Moderator
        const adminSidebarLink = document.getElementById('sidebar-admin-link');
        if (adminSidebarLink) {
            adminSidebarLink.style.display = state.currentUser.role === 'Admin' ? 'flex' : 'none';
        }
        
        // Load submanager components
        window.teamManager?.refresh();
        window.communityManager?.refresh();
        window.storeManager?.refresh();
        window.adminManager?.refresh();
    }
}

// --------------------------------------------------------------------------
// 14.2 TOURNAMENTS HUB MANAGER (DAMPED REAL-TIME BRACKETS)
// --------------------------------------------------------------------------
class TournamentManager {
    constructor() {
        this.container = document.getElementById('tournaments-grid-container');
        this.filters = document.querySelectorAll('#tournament-status-filters button');
        this.activeFilter = 'upcoming';
        
        this.bindEvents();
        this.renderTournaments();
    }

    bindEvents() {
        this.filters.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filters.forEach(f => f.classList.remove('active'));
                btn.classList.add('active');
                this.activeFilter = btn.getAttribute('data-t-status');
                this.renderTournaments();
                playCyberBeep(700, 0.05);
            });
        });
    }

    async renderTournaments() {
        if (!this.container) return;
        
        this.container.innerHTML = `<div class="spinner" style="margin: 40px auto; grid-column: 1/-1;"></div>`;
        
        let list = [...COUNTDOWN_TOURNAMENTS];
        
        if (dbState.isConnected && dbState.client) {
            try {
                const { data } = await dbState.client.from('tournaments').select('*');
                if (data && data.length > 0) {
                    list = data.map(t => ({
                        id: t.id,
                        title: t.title,
                        game: t.game,
                        date: t.date,
                        prize: t.prize,
                        totalSlots: t.total_slots,
                        registeredCount: t.registered_count
                    }));
                }
            } catch (err) {
                console.error("Failed to query tournaments:", err);
            }
        }
        
        // Filter based on dates
        const now = new Date().getTime();
        const filtered = list.filter(t => {
            const time = new Date(t.date).getTime();
            if (this.activeFilter === 'upcoming') return time > now;
            if (this.activeFilter === 'ongoing') return time <= now && time + 86400000 * 2 > now; // Active for 2 days
            return time + 86400000 * 2 <= now;
        });

        if (filtered.length === 0) {
            this.container.innerHTML = `
                <div class="glass-card" style="padding: 40px; text-align: center; grid-column: 1/-1; border-color: rgba(255,255,255,0.05);">
                    <i class="fa-solid fa-globe" style="font-size: 2.5rem; color: var(--color-text-muted); margin-bottom: 15px;"></i>
                    <h4 style="color: #fff;">No entries active on this quadrant.</h4>
                    <p style="color: var(--color-text-muted); font-size: 0.85rem; margin-top: 5px;">Check back shortly for season calendars.</p>
                </div>
            `;
            return;
        }

        this.container.innerHTML = filtered.map(t => {
            const slotsPct = Math.round((t.registeredCount / t.totalSlots) * 100);
            return `
                <div class="glass-card" style="padding: 25px; border-color: rgba(139,92,246,0.15); display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <span class="badge-pill" style="font-size: 0.75rem; background: rgba(139,92,246,0.1); border-color: rgba(139,92,246,0.3); color: var(--color-accent-purple);">${t.game}</span>
                            <span style="font-size: 1.1rem; font-weight: 800; color: var(--color-accent-pink);">${t.prize}</span>
                        </div>
                        <h3 style="margin-bottom: 10px; font-family: var(--font-heading); color: #fff;">${t.title}</h3>
                        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 20px;">
                            <i class="fa-regular fa-calendar-check" style="margin-right: 5px;"></i> Scheduled: ${new Date(t.date).toLocaleDateString()}
                        </p>
                        
                        <div style="margin-bottom: 20px;">
                            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 6px;">
                                <span>Roster Capacity</span>
                                <span>${t.registeredCount}/${t.totalSlots} Teams</span>
                            </div>
                            <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden;">
                                <div style="height: 100%; width: ${slotsPct}%; background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-pink));"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 10px;">
                        <button class="btn btn-outline" style="flex: 1; padding: 10px; font-size: 0.85rem;" onclick="viewTournamentDetails('${t.id}')">Leagues Info</button>
                        ${this.activeFilter === 'upcoming' ? `
                            <button class="btn btn-primary btn-glow" style="flex: 1.5; padding: 10px; font-size: 0.85rem;" onclick="window.tournamentManager.registerForTournament('${t.id}', '${t.title.replace(/'/g, "\\'")}')">Register Crew</button>
                        ` : `
                            <button class="btn btn-primary btn-glow" style="flex: 1.5; padding: 10px; font-size: 0.85rem;" onclick="window.location.hash='#tournaments'">Monitor Bracket</button>
                        `}
                    </div>
                </div>
            `;
        }).join('');
    }

    async registerForTournament(tourneyId, title) {
        if (!state.currentUser) {
            triggerToast("Secure Identity Authentication required to register competitive rosters!", "warning");
            window.authManager.show();
            return;
        }

        const teamName = prompt(`Input Squad / Team Name for ${title}:`, `${state.currentUser.username} Squad`);
        if (!teamName) return;

        const discord = prompt("Input captain's Discord handle for server communication seed:", "@myalias#1234");
        if (!discord) return;

        triggerToast(`Transmitting team ${teamName} validation tokens...`, "info");
        playCyberBeep(500, 0.1);

        try {
            if (dbState.isConnected && dbState.client) {
                // Live Supabase Insert
                const { error: insErr } = await dbState.client
                    .from('tournament_registrations')
                    .insert({
                        tournament_id: tourneyId,
                        team_name: teamName,
                        captain_discord: discord,
                        region: 'Global Array'
                    });
                if (insErr) throw insErr;
                
                // Get current registration count
                const { data: tourney } = await dbState.client.from('tournaments').select('registered_count').eq('id', tourneyId).single();
                const newCount = (tourney?.registered_count || 0) + 1;
                
                await dbState.client.from('tournaments').update({ registered_count: newCount }).eq('id', tourneyId);
            }
            
            // Local model update
            const localTourney = COUNTDOWN_TOURNAMENTS.find(t => t.id === tourneyId);
            if (localTourney) {
                localTourney.registeredCount++;
            }
            
            triggerToast(`Roster verified successfully for ${title}! Ready up!`, "success");
            playCyberBeep(900, 0.2);
            this.renderTournaments();
        } catch (err) {
            console.error("Roster registration failure:", err);
            triggerToast("Esports registration transmission rejected by network.", "danger");
        }
    }
}

// --------------------------------------------------------------------------
// 14.3 SQUAD & TEAM MANAGEMENT MANAGER ( alliances & logs )
// --------------------------------------------------------------------------
class TeamManager {
    constructor() {
        this.container = document.getElementById('team-squad-dashboard');
        this.refresh();
    }

    async refresh() {
        if (!this.container) return;
        
        this.container.innerHTML = `<div class="spinner" style="margin: 40px auto;"></div>`;
        
        if (!state.currentUser) {
            this.container.innerHTML = `
                <div class="glass-card" style="padding: 50px 30px; text-align: center; border-color: rgba(255,255,255,0.05);">
                    <i class="fa-solid fa-shield-halved" style="font-size: 3rem; color: var(--color-text-muted); margin-bottom: 20px;"></i>
                    <h3 style="color: #fff;">Squad Core Protocol Inactive</h3>
                    <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-top: 8px; max-width: 450px; margin-left: auto; margin-right: auto;">
                        Sync a secure user identity to assemble custom squads, recruit global pilots, and direct visual logo seeds.
                    </p>
                    <button class="btn btn-primary btn-glow" style="margin-top: 20px;" onclick="window.authManager.show()"><i class="fa-solid fa-user-lock"></i> Initialize Authentication</button>
                </div>
            `;
            return;
        }

        // Search if user has created or belongs to a team
        let userTeam = null;
        let members = [];
        
        if (dbState.isConnected && dbState.client) {
            try {
                // Query my team membership
                const { data: memberMap } = await dbState.client
                    .from('team_members')
                    .select('team_id, role')
                    .eq('profile_id', state.currentUser.id)
                    .maybeSingle();
                    
                if (memberMap) {
                    const { data: team } = await dbState.client.from('teams').select('*').eq('id', memberMap.team_id).single();
                    userTeam = team;
                    
                    const { data: roster } = await dbState.client
                        .from('team_members')
                        .select('role, profiles(username, avatar_url, wins, kd_ratio)')
                        .eq('team_id', team.id);
                        
                    members = roster.map(r => ({
                        username: r.profiles.username,
                        avatar: r.profiles.avatar_url,
                        wins: r.profiles.wins,
                        kd: r.profiles.kd_ratio,
                        role: r.role
                    }));
                }
            } catch (err) {
                console.error("Squad sync error:", err);
            }
        } else {
            // Local mockup fallback
            userTeam = state.myTeam;
            if (userTeam) {
                members = [
                    { username: state.currentUser.username, avatar: state.currentUser.avatar_url, wins: state.currentUser.wins, kd: 2.13, role: 'Leader' },
                    { username: "NeonShadow", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Shadow", wins: 314, kd: 2.98, role: 'Roster Combatant' }
                ];
            }
        }

        if (!userTeam) {
            // RENDER TEAM CREATION CREW
            this.container.innerHTML = `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: start;">
                    <div class="glass-card" style="padding: 30px;">
                        <h3 style="margin-bottom: 15px;"><i class="fa-solid fa-plus" style="color: var(--color-accent-pink);"></i> Deploy Roster Alliance</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.9rem; margin-bottom: 25px;">Register a competitive alliance tag, claim a custom visual emblem, and unlock dynamic squad stats tracking.</p>
                        
                        <form id="team-create-form" style="display: flex; flex-direction: column; gap: 15px;">
                            <div class="form-group">
                                <label for="team-tag-name">Squad Alliance Name</label>
                                <input type="text" id="team-tag-name" placeholder="e.g. Apex Vanguard" required style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); padding: 12px; border-radius: 8px; width: 100%; color: #fff;">
                            </div>
                            
                            <div class="form-group">
                                <label for="team-desc">Alliance Protocol Focus</label>
                                <textarea id="team-desc" rows="3" placeholder="Define competitive directives..." required style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); padding: 12px; border-radius: 8px; width: 100%; color: #fff; resize: none;"></textarea>
                            </div>

                            <div class="form-group">
                                <label>Alliance Visual Emblem Seed</label>
                                <div style="display: flex; gap: 10px; margin-top: 8px;" id="emblem-selectors-container">
                                    <button type="button" class="btn btn-outline emblem-btn active" data-seed="Viper" style="padding: 10px; flex: 1;">Viper</button>
                                    <button type="button" class="btn btn-outline emblem-btn" data-seed="Phoenix" style="padding: 10px; flex: 1;">Phoenix</button>
                                    <button type="button" class="btn btn-outline emblem-btn" data-seed="Specter" style="padding: 10px; flex: 1;">Specter</button>
                                    <button type="button" class="btn btn-outline emblem-btn" data-seed="Titan" style="padding: 10px; flex: 1;">Titan</button>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary btn-glow btn-block" style="padding: 12px;"><i class="fa-solid fa-rocket"></i> Provision Alliance Vector</button>
                        </form>
                    </div>

                    <div class="glass-card" style="padding: 30px; border-color: rgba(255, 42, 95, 0.15); align-self: stretch; display: flex; flex-direction: column; justify-content: center; text-align: center;">
                        <i class="fa-solid fa-people-group" style="font-size: 3.5rem; color: var(--color-accent-pink); margin-bottom: 20px;"></i>
                        <h3 style="color: #fff;">Interactive Crew Network</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.9rem; margin-top: 10px;">
                            Competitive players receive XP multipliers when queuing inside active team lobbies. Recruit members to unlock high-precision global crew leaderboards.
                        </p>
                    </div>
                </div>
            `;
            
            this.bindEmblemEvents();
            document.getElementById('team-create-form')?.addEventListener('submit', (e) => this.handleCreateTeam(e));
        } else {
            // RENDER TEAM ACTIVE DASHBOARD
            this.container.innerHTML = `
                <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 30px;">
                    <!-- Roster & Records -->
                    <div class="glass-card" style="padding: 30px;">
                        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 25px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px;">
                            <img src="https://api.dicebear.com/7.x/identicon/svg?seed=${userTeam.logo_seed}" alt="Emblem" style="width: 70px; height: 70px; border-radius: 8px; border: 2px solid var(--color-accent-pink); background: rgba(0,0,0,0.3); padding: 5px;">
                            <div>
                                <span class="badge-pill" style="font-size: 0.7rem; background: rgba(255, 42, 95, 0.1); border-color: rgba(255, 42, 95, 0.3); color: var(--color-accent-pink); margin-bottom: 5px; display: inline-block;">TEAM LEVEL 12</span>
                                <h2 style="color: #fff; font-family: var(--font-heading);">${userTeam.name}</h2>
                                <p style="color: var(--color-text-muted); font-size: 0.85rem; margin-top: 4px;">${userTeam.description}</p>
                            </div>
                        </div>

                        <h3 style="margin-bottom: 15px;">Active Roster Members (${members.length})</h3>
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            ${members.map(m => `
                                <div class="friend-item glass-card" style="padding: 12px 15px; border-color: rgba(255,255,255,0.03);">
                                    <div class="friend-meta">
                                        <img src="${m.avatar}" alt="Avatar" class="friend-avatar" style="width: 35px; height: 35px;">
                                        <div>
                                            <span class="friend-name">${m.username}</span>
                                            <span class="friend-game" style="color: var(--color-accent-purple); font-weight: 700;">${m.role}</span>
                                        </div>
                                    </div>
                                    <div style="text-align: right;">
                                        <span style="font-size: 0.85rem; color: #fff; display: block; font-weight: 800;">${m.wins} Wins</span>
                                        <span style="font-size: 0.75rem; color: var(--color-text-muted);">K/D Ratio: ${m.kd}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Invitation panel & options -->
                    <div style="display: flex; flex-direction: column; gap: 30px;">
                        <div class="glass-card" style="padding: 25px;">
                            <h3>Recruit New Pilots</h3>
                            <p style="color: var(--color-text-muted); font-size: 0.8rem; margin-top: 5px; margin-bottom: 20px;">Transmit a team invite payload directly to players.</p>
                            
                            <form id="team-invite-form" style="display: flex; gap: 10px;">
                                <input type="text" id="team-invite-username" placeholder="Target Alias..." required style="flex: 1; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); padding: 10px; border-radius: 6px; color: #fff;">
                                <button type="submit" class="btn btn-primary btn-glow" style="padding: 10px 15px;">Invite</button>
                            </form>
                        </div>

                        <!-- Team Statistics Tracker -->
                        <div class="glass-card" style="padding: 25px;">
                            <h3>Squad Arena History</h3>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                                <div class="glass-card" style="padding: 15px; text-align: center; border-color: rgba(255,255,255,0.02);">
                                    <h4 style="font-size: 1.5rem; color: #10b981;">${userTeam.wins || 18}</h4>
                                    <span style="font-size: 0.75rem; color: var(--color-text-muted);">Arena Wins</span>
                                </div>
                                <div class="glass-card" style="padding: 15px; text-align: center; border-color: rgba(255,255,255,0.02);">
                                    <h4 style="font-size: 1.5rem; color: #ef4444;">${userTeam.losses || 6}</h4>
                                    <span style="font-size: 0.75rem; color: var(--color-text-muted);">Arena Defeats</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('team-invite-form')?.addEventListener('submit', (e) => this.handleInvitePlayer(e));
        }
    }

    bindEmblemEvents() {
        const btns = document.querySelectorAll('.emblem-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                playCyberBeep(700, 0.05);
            });
        });
    }

    async handleCreateTeam(e) {
        e.preventDefault();
        const name = document.getElementById('team-tag-name').value.trim();
        const desc = document.getElementById('team-desc').value.trim();
        const logo = document.querySelector('.emblem-btn.active')?.getAttribute('data-seed') || 'Viper';

        triggerToast("Deploying alliance tags to global index...", "info");
        playCyberBeep(600, 0.15);

        try {
            if (dbState.isConnected && dbState.client) {
                // Create row in teams
                const { data: team, error: tErr } = await dbState.client
                    .from('teams')
                    .insert({
                        name,
                        logo_seed: logo,
                        description: desc,
                        created_by: state.currentUser.id
                    })
                    .select()
                    .single();
                    
                if (tErr) throw tErr;
                
                // Add leader to team_members
                const { error: memErr } = await dbState.client
                    .from('team_members')
                    .insert({
                        team_id: team.id,
                        profile_id: state.currentUser.id,
                        role: 'Leader'
                    });
                if (memErr) throw memErr;
            } else {
                state.myTeam = {
                    id: 'mock-team-uuid',
                    name,
                    logo_seed: logo,
                    description: desc,
                    wins: 0,
                    losses: 0
                };
            }
            
            triggerToast(`ALLIANCE ${name} HAS BEEN PROVISIONED! Ready Up!`, "success");
            playCyberBeep(850, 0.2);
            this.refresh();
        } catch (err) {
            console.error("Team provisioning failed:", err);
            triggerToast(`Alliance Provision Rejected: ${err.message || err}`, "danger");
        }
    }

    async handleInvitePlayer(e) {
        e.preventDefault();
        const username = document.getElementById('team-invite-username').value.trim();
        triggerToast(`Transmitting squad recruiting invitation to ${username}...`, "info");
        
        try {
            // Simulate recruitment
            setTimeout(() => {
                triggerToast(`Recruitment invitation dispatched successfully to ${username}!`, "success");
                document.getElementById('team-invite-username').value = "";
                playCyberBeep(800, 0.1);
            }, 800);
        } catch (err) {
            triggerToast("Invite transmission failed.", "danger");
        }
    }
}

// --------------------------------------------------------------------------
// 14.4 DISCUSSION FORUMS & COMM-CHATS ( REAL-TIME FEEDING )
// --------------------------------------------------------------------------
class CommunityManager {
    constructor() {
        this.forumContainer = document.getElementById('forum-posts-feed-container');
        this.chatContainer = document.getElementById('chat-messages-container');
        this.chatToggles = document.querySelectorAll('.chat-tab-btn');
        this.chatForm = document.getElementById('chat-input-form');
        this.forumPostForm = document.getElementById('forum-post-form');
        this.createPostToggle = document.getElementById('create-post-toggle');
        this.createPostBox = document.getElementById('forum-create-post-box');
        this.cancelForumBtn = document.getElementById('forum-cancel-btn');
        
        this.bindEvents();
        this.refresh();
        this.setupRealtimeChat();
    }

    bindEvents() {
        this.chatToggles.forEach(btn => {
            btn.addEventListener('click', () => {
                this.chatToggles.forEach(t => t.classList.remove('active'));
                btn.classList.add('active');
                state.activeChatRoom = btn.getAttribute('data-chat-tab');
                this.renderChatMessages();
                playCyberBeep(650, 0.05);
            });
        });

        this.chatForm?.addEventListener('submit', (e) => this.handleSendMessage(e));
        
        this.createPostToggle?.addEventListener('click', () => {
            this.createPostBox.style.display = this.createPostBox.style.display === 'none' ? 'block' : 'none';
        });
        
        this.cancelForumBtn?.addEventListener('click', () => {
            this.createPostBox.style.display = 'none';
        });

        this.forumPostForm?.addEventListener('submit', (e) => this.handleCreateForumPost(e));
    }

    async refresh() {
        this.renderForums();
        this.renderChatMessages();
    }

    async renderForums() {
        if (!this.forumContainer) return;
        
        this.forumContainer.innerHTML = `<div class="spinner" style="margin: 30px auto;"></div>`;
        
        let postsList = [...NEWS_DATA.filter(n => n.type === 'forum' || n.type === 'news')];
        
        if (dbState.isConnected && dbState.client) {
            try {
                // Fetch forum posts and patch releases
                const { data } = await dbState.client.from('news').select('*').order('created_at', { ascending: false });
                if (data && data.length > 0) {
                    postsList = data.map(n => ({
                        id: n.id,
                        type: n.type,
                        badgeClass: n.badge_class || 'bg-purple',
                        badgeText: n.badge_text || 'FORUM',
                        date: n.date || new Date(n.created_at).toLocaleDateString(),
                        readTime: n.read_time || '2 min',
                        title: n.title,
                        excerpt: n.excerpt,
                        content: n.content,
                        image: n.image,
                        likes: n.likes
                    }));
                }
            } catch (err) {
                console.error("Failed to query forums:", err);
            }
        }
        
        if (postsList.length === 0) {
            this.forumContainer.innerHTML = `<p style="color: var(--color-text-muted); text-align: center; padding: 20px;">No transmissions deployed to the comm-board yet.</p>`;
            return;
        }

        this.forumContainer.innerHTML = postsList.map(p => `
            <div class="news-card glass-card" style="padding: 20px; margin-bottom: 20px; border-color: rgba(255,255,255,0.03);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <span class="badge-pill ${p.badgeClass}">${p.badgeText}</span>
                    <span style="font-size: 0.8rem; color: var(--color-text-muted);">${p.date}</span>
                </div>
                <h3 style="margin-bottom: 8px; color: #fff; font-family: var(--font-heading);">${p.title}</h3>
                <p style="color: var(--color-text-secondary); font-size: 0.9rem; margin-bottom: 15px;">${p.excerpt || p.content}</p>
                
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.03); padding-top: 12px; font-size: 0.85rem;">
                    <button class="btn btn-outline" style="padding: 6px 12px; border-color: transparent; font-size: 0.8rem;" onclick="window.communityManager.upvotePost('${p.id}')">
                        <i class="fa-solid fa-heart" style="color: var(--color-accent-pink); margin-right: 5px;"></i> ${p.likes} Likes
                    </button>
                    <button class="btn btn-outline" style="padding: 6px 12px; border-color: transparent; font-size: 0.8rem;" onclick="window.communityManager.toggleCommentsDrawer('${p.id}')">
                        <i class="fa-solid fa-comments" style="color: var(--color-accent-purple); margin-right: 5px;"></i> View Comments
                    </button>
                </div>
                
                <!-- Slide comments feed -->
                <div id="comments-box-${p.id}" style="display: none; margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px;">
                    <div style="display: flex; flex-direction: column; gap: 10px;" id="comments-list-${p.id}">
                        <!-- Loaded dynamically -->
                    </div>
                    <form id="comment-form-${p.id}" style="display: flex; gap: 10px; margin-top: 12px;" onsubmit="window.communityManager.handleAddComment(event, '${p.id}')">
                        <input type="text" id="comment-input-${p.id}" placeholder="Append secure feedback payload..." required style="flex: 1; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); padding: 8px 12px; border-radius: 6px; color: #fff; font-size: 0.85rem;">
                        <button type="submit" class="btn btn-primary btn-glow" style="padding: 8px 15px; font-size: 0.85rem;"><i class="fa-solid fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        `).join('');
    }

    async upvotePost(postId) {
        playCyberBeep(900, 0.1);
        try {
            if (dbState.isConnected && dbState.client) {
                // Find existing likes
                const { data } = await dbState.client.from('news').select('likes').eq('id', postId).single();
                await dbState.client.from('news').update({ likes: (data?.likes || 0) + 1 }).eq('id', postId);
            } else {
                const target = NEWS_DATA.find(n => n.id === postId);
                if (target) target.likes++;
            }
            triggerToast("Secure validation like registered!", "success");
            this.renderForums();
        } catch (e) {
            triggerToast("Like payload transmission rejected.", "danger");
        }
    }

    async toggleCommentsDrawer(postId) {
        const box = document.getElementById(`comments-box-${postId}`);
        if (!box) return;

        if (box.style.display === 'none') {
            box.style.display = 'block';
            this.loadComments(postId);
        } else {
            box.style.display = 'none';
        }
    }

    async loadComments(postId) {
        const listContainer = document.getElementById(`comments-list-${postId}`);
        if (!listContainer) return;

        listContainer.innerHTML = `<span style="font-size: 0.8rem; color: var(--color-text-muted);">Syncing secure comment logs...</span>`;
        
        let commentEntries = [];
        
        if (dbState.isConnected && dbState.client) {
            try {
                const { data } = await dbState.client
                    .from('blog_comments')
                    .select('*')
                    .eq('post_id', postId)
                    .order('created_at', { ascending: true });
                if (data) {
                    commentEntries = data.map(c => ({
                        name: c.sender_name,
                        avatar: c.sender_avatar,
                        comment: c.comment
                    }));
                }
            } catch (err) {
                console.error("Failed comments query:", err);
            }
        } else {
            // Mock comments
            commentEntries = [
                { name: "NeonShadow", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Shadow", comment: "Excellent tactical assessment! Wall-running calibration has been solid." },
                { name: "ViperX", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Viper", comment: "EMP shield shocks adjustments make a massive difference inside lobbies." }
            ];
        }

        if (commentEntries.length === 0) {
            listContainer.innerHTML = `<p style="font-size: 0.8rem; color: var(--color-text-muted); font-style: italic;">No comments inside this data node.</p>`;
            return;
        }

        listContainer.innerHTML = commentEntries.map(c => `
            <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; display: flex; gap: 10px; align-items: start;">
                <img src="${c.avatar}" alt="User" style="width: 25px; height: 25px; border-radius: 50%;">
                <div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-accent-pink); display: block;">${c.name}</span>
                    <span style="font-size: 0.8rem; color: var(--color-text-secondary);">${c.comment}</span>
                </div>
            </div>
        `).join('');
    }

    async handleAddComment(e, postId) {
        e.preventDefault();
        const input = document.getElementById(`comment-input-${postId}`);
        if (!input) return;

        const val = input.value.trim();
        if (!val) return;

        const senderName = state.currentUser ? state.currentUser.username : "Guest Gamer";
        const senderAvatar = state.currentUser ? state.currentUser.avatar_url : "https://api.dicebear.com/7.x/adventurer/svg?seed=Guest";

        try {
            if (dbState.isConnected && dbState.client) {
                const { error } = await dbState.client
                    .from('blog_comments')
                    .insert({
                        post_id: postId,
                        sender_name: senderName,
                        sender_avatar: senderAvatar,
                        comment: val
                    });
                if (error) throw error;
            }
            
            input.value = "";
            triggerToast("Comment payload synchronized!", "success");
            playCyberBeep(750, 0.1);
            this.loadComments(postId);
        } catch (e) {
            triggerToast("Comment transmission rejected.", "danger");
        }
    }

    async handleCreateForumPost(e) {
        e.preventDefault();
        const title = document.getElementById('forum-post-title').value.trim();
        const category = document.getElementById('forum-post-category').value;
        const body = document.getElementById('forum-post-body').value.trim();

        triggerToast("Syncing secure transmission stream...", "info");
        playCyberBeep(500, 0.15);

        try {
            if (dbState.isConnected && dbState.client) {
                const { error } = await dbState.client
                    .from('news')
                    .insert({
                        id: `forum-${Date.now()}`,
                        type: 'forum',
                        badge_class: category === 'bugs' ? 'bg-pink' : 'bg-purple',
                        badge_text: category.toUpperCase(),
                        title,
                        excerpt: body.substring(0, 120) + "...",
                        content: body,
                        likes: 0
                    });
                if (error) throw error;
            } else {
                NEWS_DATA.unshift({
                    id: `forum-${Date.now()}`,
                    type: 'forum',
                    badgeClass: category === 'bugs' ? 'bg-pink' : 'bg-purple',
                    badgeText: category.toUpperCase(),
                    title,
                    excerpt: body.substring(0, 120) + "...",
                    content: body,
                    date: "Today",
                    likes: 0
                });
            }
            
            triggerToast("COMMUNICATION PAYLOAD ONLINE!", "success");
            playCyberBeep(850, 0.2);
            this.createPostBox.style.display = 'none';
            this.forumPostForm.reset();
            this.renderForums();
        } catch (e) {
            triggerToast("Failed to post message.", "danger");
        }
    }

    // --- REALTIME CHAT NETWORKS ---
    setupRealtimeChat() {
        if (dbState.isConnected && dbState.client) {
            dbState.client
                .channel('messages')
                .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
                    const msg = payload.new;
                    if (msg.room === state.activeChatRoom) {
                        this.appendSingleChatMessage(msg);
                        playCyberBeep(950, 0.04);
                    }
                })
                .subscribe();
        }
    }

    async renderChatMessages() {
        if (!this.chatContainer) return;
        
        this.chatContainer.innerHTML = `<span style="font-size: 0.85rem; color: var(--color-text-muted); text-align: center; margin-top: 40px;">Decrypting message arrays...</span>`;
        
        let logs = [];
        
        if (dbState.isConnected && dbState.client) {
            try {
                const { data } = await dbState.client
                    .from('messages')
                    .select('*')
                    .eq('room', state.activeChatRoom)
                    .order('sent_at', { ascending: true })
                    .limit(40);
                if (data) logs = data;
            } catch (err) {
                console.error("Chat sync error:", err);
            }
        } else {
            // Mock chat buffers
            logs = [
                { id: '1', sender_name: "ViperX", sender_avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Viper", message: "Anyone up for ranked tactical queues?" },
                { id: '2', sender_name: "RageTrigger", sender_avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Rage", message: "I'm in! Let's build a squad." },
                { id: '3', sender_name: "NeonShadow", sender_avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Shadow", message: "Calibration patches have been very smooth today." }
            ];
        }

        if (logs.length === 0) {
            this.chatContainer.innerHTML = `
                <div style="margin: auto; text-align: center; color: var(--color-text-muted); font-size: 0.85rem; padding: 20px;">
                    <i class="fa-solid fa-lock" style="font-size: 1.5rem; margin-bottom: 10px; color: var(--color-accent-purple);"></i>
                    <p>Comm channel secure. Send first transmission signal!</p>
                </div>
            `;
            return;
        }

        this.chatContainer.innerHTML = logs.map(m => this.createChatMessageHTML(m)).join('');
        this.scrollChatToBottom();
    }

    createChatMessageHTML(m) {
        return `
            <div style="display: flex; gap: 10px; align-items: start;">
                <img src="${m.sender_avatar || 'https://api.dicebear.com/7.x/adventurer/svg?seed=Guest'}" alt="Avatar" style="width: 32px; height: 32px; border-radius: 50%;">
                <div style="background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: 8px; flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <span style="font-size: 0.8rem; font-weight: 800; color: var(--color-accent-pink);">${m.sender_name}</span>
                        <span style="font-size: 0.65rem; color: var(--color-text-muted);">Secure stream</span>
                    </div>
                    <p style="font-size: 0.85rem; color: var(--color-text-secondary);">${m.message}</p>
                </div>
            </div>
        `;
    }

    appendSingleChatMessage(msg) {
        const div = document.createElement('div');
        div.innerHTML = this.createChatMessageHTML(msg);
        this.chatContainer.appendChild(div.firstElementChild);
        this.scrollChatToBottom();
    }

    scrollChatToBottom() {
        setTimeout(() => {
            this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
        }, 100);
    }

    async handleSendMessage(e) {
        e.preventDefault();
        const input = document.getElementById('chat-msg-payload');
        if (!input) return;

        const val = input.value.trim();
        if (!val) return;

        const senderName = state.currentUser ? state.currentUser.username : "Guest Gamer";
        const senderAvatar = state.currentUser ? state.currentUser.avatar_url : "https://api.dicebear.com/7.x/adventurer/svg?seed=Guest";

        try {
            if (dbState.isConnected && dbState.client) {
                const { error } = await dbState.client
                    .from('messages')
                    .insert({
                        room: state.activeChatRoom,
                        sender_id: state.currentUser ? state.currentUser.id : null,
                        sender_name: senderName,
                        sender_avatar: senderAvatar,
                        message: val
                    });
                if (error) throw error;
            } else {
                // Mock message append directly for offline zero-crash feel
                this.appendSingleChatMessage({
                    sender_name: senderName,
                    sender_avatar: senderAvatar,
                    message: val
                });
                playCyberBeep(950, 0.04);
            }
            
            input.value = "";
        } catch (e) {
            triggerToast("Secure message payload transmission failed.", "danger");
        }
    }
}

// --------------------------------------------------------------------------
// 14.5 PREMIUM STORE & ACHIEVEMENTS PROGRESSION
// --------------------------------------------------------------------------
class StoreManager {
    constructor() {
        this.balanceEl = document.getElementById('store-user-balance');
        this.assetsGrid = document.getElementById('store-assets-grid');
        this.badgesContainer = document.getElementById('profile-badges-container');
        this.buyPremiumBtn = document.getElementById('buy-premium-plan-btn');
        
        this.items = [
            { id: 'mult', title: "2x XP Multiplier Boost", cost: 150, icon: "fa-bolt", desc: "Unlock double progression multipliers." },
            { id: 'gold', title: "Golden Weapon Skins", cost: 350, icon: "fa-gun", desc: "Equip premium golden models." },
            { id: 'pass', title: "Arena Champion League Pass", cost: 200, icon: "fa-ticket", desc: "Secure slots to VIP esports cups." },
            { id: 'crad', title: "Cyber-Vortex Frame Design", cost: 100, icon: "fa-crop", desc: "Showcase glowing profile aesthetics." }
        ];

        this.bindEvents();
        this.refresh();
    }

    bindEvents() {
        this.buyPremiumBtn?.addEventListener('click', () => this.handleUpgradeAccount());
    }

    refresh() {
        if (this.balanceEl) {
            this.balanceEl.textContent = `${state.gamerCredits} CR`;
        }
        this.renderAssetsGrid();
        this.renderBadges();
    }

    renderAssetsGrid() {
        if (!this.assetsGrid) return;
        
        this.assetsGrid.innerHTML = this.items.map(item => `
            <div class="glass-card" style="padding: 15px; border-color: rgba(255,255,255,0.02); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <i class="fa-solid ${item.icon}" style="font-size: 1.2rem; color: var(--color-accent-pink);"></i>
                        <span style="font-weight: 800; font-size: 0.95rem; color: var(--color-accent-amber);">${item.cost} CR</span>
                    </div>
                    <h4 style="color: #fff; font-size: 0.85rem; margin-bottom: 5px;">${item.title}</h4>
                    <p style="color: var(--color-text-muted); font-size: 0.75rem;">${item.desc}</p>
                </div>
                <button class="btn btn-primary" style="padding: 8px; font-size: 0.8rem; margin-top: 15px; width: 100%;" onclick="window.storeManager.buyItem('${item.id}', ${item.cost}, '${item.title.replace(/'/g, "\\'")}')">Purchase Asset</button>
            </div>
        `).join('');
    }

    async buyItem(itemId, cost, title) {
        if (state.gamerCredits < cost) {
            triggerToast("Insufficient credits inside gaming vault!", "warning");
            playCyberBeep(200, 0.25, 'sawtooth');
            return;
        }

        state.gamerCredits -= cost;
        localStorage.setItem('vortexCredits', state.gamerCredits);
        playCyberBeep(880, 0.2);
        
        // Add unlocked badge to achievement stream
        try {
            if (dbState.isConnected && dbState.client && state.currentUser) {
                await dbState.client
                    .from('achievements')
                    .insert({
                        profile_id: state.currentUser.id,
                        badge_seed: itemId,
                        title: `Store Unlock: ${title}`
                    });
                
                await dbState.client.from('profiles').update({ credits: state.gamerCredits }).eq('id', state.currentUser.id);
            }
        } catch (e) {
            console.error("Store sync error:", e);
        }

        triggerToast(`PROCURING ASSET COMPLETED: ${title}`, "success");
        this.refresh();
    }

    renderBadges() {
        if (!this.badgesContainer) return;
        
        this.badgesContainer.innerHTML = `
            <span class="badge-pill" style="background: rgba(255, 42, 95, 0.1); border-color: var(--color-accent-pink); color: var(--color-accent-pink);"><i class="fa-solid fa-medal"></i> Arena Vanguard</span>
            <span class="badge-pill" style="background: rgba(139, 92, 246, 0.1); border-color: var(--color-accent-purple); color: var(--color-accent-purple);"><i class="fa-solid fa-trophy"></i> Elite Operator</span>
            <span class="badge-pill" style="background: rgba(245, 158, 11, 0.1); border-color: var(--color-accent-amber); color: var(--color-accent-amber);"><i class="fa-solid fa-crown"></i> Founder 2026</span>
        `;
    }

    async handleUpgradeAccount() {
        if (!state.currentUser) {
            triggerToast("Unidentified Gamer Security ID! Secure authentications first.", "warning");
            window.authManager.show();
            return;
        }

        triggerToast("Link payment verification array initialized...", "info");
        playCyberBeep(500, 0.1);

        setTimeout(async () => {
            state.currentUser.role = 'Admin'; // Upgrade user locally
            state.currentUser.wins += 50; // Give credits
            state.gamerCredits += 1000;
            localStorage.setItem('vortexCredits', state.gamerCredits);

            try {
                if (dbState.isConnected && dbState.client) {
                    await dbState.client
                        .from('profiles')
                        .update({ role: 'Admin', credits: state.gamerCredits })
                        .eq('id', state.currentUser.id);
                }
            } catch (e) {
                console.error("Failed to sync upgraded state:", e);
            }

            triggerToast("MEMBERSHIP LEVEL ELEVATED TO ELITE GRANDMASTER! Custom Admin security channels activated.", "success");
            playCyberBeep(980, 0.35);
            window.authManager.syncUserSessionUI();
            this.refresh();
        }, 1200);
    }
}

// --------------------------------------------------------------------------
// 14.6 CENTRAL SECURITY & ADMIN MODERATION CONTROL CENTER
// --------------------------------------------------------------------------
class AdminManager {
    constructor() {
        this.usersListContainer = document.getElementById('admin-users-list');
        this.bracketForm = document.getElementById('admin-bracket-form');
        this.targetSelector = document.getElementById('admin-select-t');
        
        this.bindEvents();
        this.refresh();
    }

    bindEvents() {
        this.bracketForm?.addEventListener('submit', (e) => this.handleUpdateBracketWinner(e));
    }

    async refresh() {
        if (!state.currentUser || state.currentUser.role !== 'Admin') return;
        this.renderUserModeration();
        this.populateTournamentSelector();
        this.renderAnalyticsCounters();
    }

    async renderUserModeration() {
        if (!this.usersListContainer) return;
        
        this.usersListContainer.innerHTML = `<span style="font-size: 0.8rem; color: var(--color-text-muted);">Decrypting gamer records...</span>`;
        
        let users = [];
        
        if (dbState.isConnected && dbState.client) {
            try {
                const { data } = await dbState.client.from('profiles').select('*').limit(6);
                if (data) users = data;
            } catch (e) {
                console.error(e);
            }
        } else {
            // Mock profiles list
            users = [
                { id: '1', username: "ViperX", role: "Gamer", status: "Active" },
                { id: '2', username: "NeonShadow", role: "Moderator", status: "Active" },
                { id: '3', username: "CyberDagger", role: "Gamer", status: "Suspended" }
            ];
        }

        this.usersListContainer.innerHTML = users.map(u => `
            <div class="glass-card" style="padding: 12px; display: flex; justify-content: space-between; align-items: center; border-color: rgba(255,255,255,0.02);">
                <div>
                    <span style="color: #fff; font-weight: 700; font-size: 0.85rem;">${u.username}</span>
                    <span style="font-size: 0.75rem; color: var(--color-text-muted); display: block;">Rank Sector: ${u.role} | Status: <span style="color: ${u.status === 'Active' ? '#10b981' : '#ef4444'};">${u.status}</span></span>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="btn btn-outline" style="padding: 5px 10px; font-size: 0.75rem; border-color: rgba(255,255,255,0.1);" onclick="window.adminManager.toggleUserStatus('${u.id}', '${u.status}')">Toggle Ban</button>
                    <button class="btn btn-primary" style="padding: 5px 10px; font-size: 0.75rem;" onclick="window.adminManager.promoteUserRole('${u.id}', '${u.role}')">Shift Role</button>
                </div>
            </div>
        `).join('');
    }

    async toggleUserStatus(userId, currentStatus) {
        const nextStatus = currentStatus === 'Active' ? 'Suspended' : 'Active';
        triggerToast(`Syncing user security parameters to ${nextStatus}...`, "info");
        playCyberBeep(600, 0.1);

        try {
            if (dbState.isConnected && dbState.client) {
                await dbState.client.from('profiles').update({ status: nextStatus }).eq('id', userId);
            }
            triggerToast(`User security status shift successful! Mode: ${nextStatus}`, "success");
            this.refresh();
        } catch (e) {
            triggerToast("Failed to shift user status.", "danger");
        }
    }

    async promoteUserRole(userId, currentRole) {
        const nextRole = currentRole === 'Admin' ? 'Gamer' : 'Admin';
        triggerToast(`Promoting account node clearance...`, "info");
        playCyberBeep(700, 0.1);

        try {
            if (dbState.isConnected && dbState.client) {
                await dbState.client.from('profiles').update({ role: nextRole }).eq('id', userId);
            }
            triggerToast(`Account permission set to: ${nextRole}`, "success");
            this.refresh();
        } catch (e) {
            triggerToast("Failed to update account authorization clearance.", "danger");
        }
    }

    populateTournamentSelector() {
        if (!this.targetSelector) return;
        this.targetSelector.innerHTML = COUNTDOWN_TOURNAMENTS.map(t => `<option value="${t.id}">${t.title}</option>`).join('');
    }

    async renderAnalyticsCounters() {
        // Counter dynamic selectors
        const gamersCount = document.getElementById('admin-metric-users');
        const teamsCount = document.getElementById('admin-metric-teams');
        const ticketsCount = document.getElementById('admin-metric-tickets');

        if (gamersCount) gamersCount.textContent = "1,842";
        if (teamsCount) teamsCount.textContent = "84";
        if (ticketsCount) ticketsCount.textContent = "12";
    }

    handleUpdateBracketWinner(e) {
        e.preventDefault();
        const teamA = document.getElementById('admin-bracket-team-a').value.trim();
        const scoreA = parseInt(document.getElementById('admin-bracket-score-a').value || '0');
        const teamB = document.getElementById('admin-bracket-team-b').value.trim();
        const scoreB = parseInt(document.getElementById('admin-bracket-score-b').value || '0');

        triggerToast("Transmitting championship bracket update...", "info");
        playCyberBeep(500, 0.1);

        setTimeout(() => {
            const winner = scoreA > scoreB ? teamA : teamB;
            triggerToast(`CHAMPIONSHIP BRACKET PROGRESSION VERIFIED: ${winner} advanced!`, "success");
            playCyberBeep(900, 0.25);
            this.bracketForm.reset();
        }, 1000);
    }
}

// --------------------------------------------------------------------------
// 14.7 INITIALIZE MANAGERS SYSTEM HANDOFF
// --------------------------------------------------------------------------
window.authManager = new AuthManager();
window.tournamentManager = new TournamentManager();
window.teamManager = new TeamManager();
window.communityManager = new CommunityManager();
window.storeManager = new StoreManager();
window.adminManager = new AdminManager();

// Global custom views details triggers
window.viewTournamentDetails = function(id) {
    const t = COUNTDOWN_TOURNAMENTS.find(item => item.id === id);
    if (!t) return;
    triggerToast(`Tourney: ${t.title} | Pool: ${t.prize} | Matches schedule starting soon. Check Discord Captains room.`, "info");
    playCyberBeep(700, 0.1);
};

// ==========================================================================
// 14. INITIALIZATION HOOK
// ==========================================================================

window.addEventListener('DOMContentLoaded', async () => {
    // 1. Core visual dynamic background init
    new ParticleSystem();

    // 2. Navigation routing init
    new Router();

    // 3. Initialize Supabase backend parameters if active
    initSupabase();
    if (dbState.isConnected) {
        await syncDatabaseData();
    }

    // 4. Profiles & gamer state synchronization init
    syncGamerProfileUI();
    renderFriendsList();
    renderNotifications();

    // 5. Page components renders
    renderSpotlightSection();
    renderLeaderboards();
    renderCompactTourdowns = startTournamentCountdowns();
    renderCompactTournaments();
    renderHomeNews();

    // 6. Secondary screen initializers
    renderGamesLibrary();
    renderBlogPosts();
    renderPatchAccordion();
    renderTeamMembers();
});
