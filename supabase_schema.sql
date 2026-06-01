-- ==========================================================================
-- VORTEX STUDIOS - SUPABASE BACKEND DATABASE SCHEMA & SEED INITIALIZER
-- Execute this SQL block inside the Supabase SQL Editor to provision tables.
-- ==========================================================================

-- Enable extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. GAMES TABLE
CREATE TABLE IF NOT EXISTS games (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    tagline TEXT,
    genre TEXT,
    excerpt TEXT,
    full_desc TEXT,
    players TEXT,
    gpu TEXT,
    disk TEXT,
    platform TEXT,
    images TEXT[] NOT NULL,
    features TEXT[] NOT NULL,
    download_url TEXT,
    is_spotlight BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. LEADERBOARD TABLE
CREATE TABLE IF NOT EXISTS leaderboard (
    rank INT PRIMARY KEY,
    name TEXT NOT NULL,
    tag TEXT UNIQUE NOT NULL,
    wins INT DEFAULT 0,
    kd TEXT DEFAULT '0.00',
    score INT DEFAULT 0,
    level INT DEFAULT 1,
    avatar TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. NEWS & TRANSMISSIONS TABLE
CREATE TABLE IF NOT EXISTS news (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL, -- 'news', 'patch', 'tournament'
    badge_class TEXT,
    badge_text TEXT,
    date TEXT,
    read_time TEXT,
    title TEXT NOT NULL,
    excerpt TEXT,
    content TEXT,
    image TEXT,
    likes INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. PATCH DETAILS TABLE
CREATE TABLE IF NOT EXISTS patch_notes (
    id SERIAL PRIMARY KEY,
    version TEXT NOT NULL,
    game TEXT NOT NULL,
    date TEXT,
    fixes TEXT[] NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. TEAM CREW TABLE
CREATE TABLE IF NOT EXISTS team (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    avatar TEXT,
    twitter TEXT DEFAULT '#',
    discord TEXT DEFAULT '#',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. TOURNAMENTS CORE TABLE
CREATE TABLE IF NOT EXISTS tournaments (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    game TEXT NOT NULL,
    date TEXT NOT NULL,
    prize TEXT,
    total_slots INT DEFAULT 32,
    registered_count INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. COMPETITIVE ROSTER REGISTRATIONS TABLE
CREATE TABLE IF NOT EXISTS tournament_registrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tournament_id TEXT REFERENCES tournaments(id) ON DELETE CASCADE,
    team_name TEXT NOT NULL,
    captain_discord TEXT NOT NULL,
    region TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. SECURE CONTACT FORM TRANSMISSIONS TABLE
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    department TEXT NOT NULL,
    priority TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. USER PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    avatar_url TEXT DEFAULT 'https://api.dicebear.com/7.x/adventurer/svg?seed=Alex',
    bio TEXT,
    favorite_games TEXT[] DEFAULT '{}',
    wins INT DEFAULT 0,
    losses INT DEFAULT 0,
    kd_ratio DECIMAL(3,2) DEFAULT 0.00,
    xp INT DEFAULT 0,
    credits INT DEFAULT 500,
    role TEXT DEFAULT 'Gamer', -- 'Admin', 'Moderator', 'Gamer'
    status TEXT DEFAULT 'Active', -- 'Active', 'Suspended'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. TEAMS TABLE
CREATE TABLE IF NOT EXISTS public.teams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT UNIQUE NOT NULL,
    logo_seed TEXT DEFAULT 'Viper',
    description TEXT,
    created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    wins INT DEFAULT 0,
    losses INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. TEAM MEMBERS TABLE
CREATE TABLE IF NOT EXISTS public.team_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID REFERENCES public.teams(id) ON DELETE CASCADE,
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    role TEXT DEFAULT 'Member', -- 'Leader', 'Officer', 'Member'
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(team_id, profile_id)
);

-- 12. FRIEND REQUESTS TABLE
CREATE TABLE IF NOT EXISTS public.friend_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sender_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    receiver_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'pending', -- 'pending', 'accepted', 'rejected'
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(sender_id, receiver_id)
);

-- 13. MATCHES TABLE
CREATE TABLE IF NOT EXISTS public.matches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tournament_id TEXT REFERENCES public.tournaments(id) ON DELETE CASCADE,
    round TEXT DEFAULT 'Quarterfinals', -- 'Quarterfinals', 'Semifinals', 'Finals'
    team_a TEXT NOT NULL,
    team_b TEXT NOT NULL,
    score_a INT DEFAULT 0,
    score_b INT DEFAULT 0,
    winner TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 14. MESSAGES TABLE
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    room TEXT DEFAULT 'global', -- 'global', 'squad', 'private'
    sender_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    sender_name TEXT NOT NULL,
    sender_avatar TEXT,
    message TEXT NOT NULL,
    receiver_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE, -- for private
    team_id UUID REFERENCES public.teams(id) ON DELETE CASCADE, -- for squad
    sent_at TIMESTAMPTZ DEFAULT NOW()
);

-- 15. NOTIFICATIONS TABLE
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    type TEXT NOT NULL, -- 'friend_request', 'tournament_update', 'match_reminder'
    content TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 16. BLOG COMMENTS TABLE
CREATE TABLE IF NOT EXISTS public.blog_comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id TEXT REFERENCES news(id) ON DELETE CASCADE,
    sender_name TEXT NOT NULL,
    sender_avatar TEXT,
    comment TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 17. ACHIEVEMENTS TABLE
CREATE TABLE IF NOT EXISTS public.achievements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    badge_seed TEXT NOT NULL,
    title TEXT NOT NULL,
    unlocked_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================================================
-- SEED INITIAL DATA INJECTION
-- ==========================================================================

-- Clean previous instances to avoid conflict
TRUNCATE games, leaderboard, news, patch_notes, team, tournaments CASCADE;

-- Insert Game catalog
INSERT INTO games (id, title, tagline, genre, excerpt, full_desc, players, gpu, disk, platform, images, features, download_url, is_spotlight) VALUES
('shadowfall', 'Shadowfall: Nexus', 'Ultra-Fast Cyberpunk Arena Combat', 'Action', 'Deploy as a cybernetically enhanced operator in high-velocity 5v5 tactical skirmishes. Wall-run, hack defenses, and dominate the Neon Grid.', 'Shadowfall: Nexus is the ultimate fusion of movement mechanics and tactical gunplay. Set in the corporate-dominated metropolis of Neo-Veridia, players take control of ''Specs''—operatives with custom cybernetic abilities. Features real-time server tickrates at 128Hz, fully destructible glowing barriers, and an active global competitive league.', '482,410', 'NVIDIA RTX 3060 / AMD RX 6600 XT', '45 GB', 'PC, PS5, Xbox Series X', ARRAY['https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070', 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070', 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070'], ARRAY['128Hz Sub-tick Netcode', 'Hybrid Cybernetic Perks', 'Full Ray-Traced Audio Maps', 'Ranked Esports Integration'], '#download-shadowfall', true),
('eldoria', 'Eldoria: Chronicles of Aether', 'Boundless Magic & Open World Exploration', 'RPG', 'Soar across mystical skies, tame mythical beasts, and forge your destiny in an expansive, highly responsive fantasy sandbox.', 'Eldoria redefines the modern MMORPG with its fluid skill-based action, dynamic weather events that alter terrain, and player-driven commerce. Wander through floating islands, explore dense procedural caverns, or participate in huge 100v100 fortress sieges. Master a deep, classless spellweaving matrix.', '610,950', 'NVIDIA GTX 1070 / AMD RX 580', '75 GB', 'PC, PS5, macOS', ARRAY['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2070', 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2070', 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=2070'], ARRAY['Seamless Classless Skill Matrix', 'Dynamic Weather & Day/Night', '100v100 Roster Fortress Wars', 'Real-time Taming Mechanics'], '#download-eldoria', false),
('vortex-tactics', 'Vortex Arena: Tactics', 'Strategic Cybernetic Card Battles', 'Strategy', 'Outwit opponents in high-stakes holographic deck battles. Draft combat algorithms, trigger combos, and climb the tactical ladder.', 'Vortex Arena: Tactics combines traditional card battle logic with active lane-based tactical warfare. Build custom faction decks representing the AI Cabals of the future. Execute precise algorithm combinations, control resource nodes, and outmaneuver opponents in blitz-paced 8-minute matches.', '145,200', 'Integrated Graphics / Steam Deck', '8 GB', 'PC, Android, iOS, Nintendo Switch', ARRAY['https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=2070', 'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?q=80&w=2070', 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2070'], ARRAY['Lane-based Holographic Combat', 'Simultaneous Turn Execution', 'Zero Pay-To-Win Drafting Mode', 'Cross-play Enabled on Mobile'], '#download-tactics', false),
('neon-drift', 'Neon Drift: Overdrive', 'Synthwave Arc Drifting & Velocity', 'Racing', 'Ignite rocket thrusters, drift through gravity-defying grid circuits, and dominate custom tracks to a pulsing synthwave soundtrack.', 'Neon Drift: Overdrive is a hyper-arcade racer that rewards momentum, risks, and perfect apex drifts. Challenge physics on tracks suspended in vector sky-domes. Featuring absolute customization of hovercar kinetics, custom neon decal glow levels, and an integrated synthwave radio including premium licensed tracks.', '220,110', 'NVIDIA GTX 1660 Super / AMD RX 5600', '30 GB', 'PC, PS5, Xbox Series X, Switch', ARRAY['https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070', 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070', 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070'], ARRAY['Physics-Defying Gravity Tracks', 'Deep Kinetic Engine Customization', 'Integrated Synthwave Radio Playlist', 'Interactive Obstacle Course Creator'], '#download-neondrift', false);

-- Insert Popular Players Leaderboard
INSERT INTO leaderboard (rank, name, tag, wins, kd, score, level, avatar) VALUES
(1, 'ViperX', '@viper', 382, '3.42', 98450, 88, 'https://api.dicebear.com/7.x/adventurer/svg?seed=Viper'),
(2, 'NeonShadow', '@shadow', 314, '2.98', 85210, 76, 'https://api.dicebear.com/7.x/adventurer/svg?seed=Shadow'),
(3, 'AetherKnight', '@aether', 295, '2.81', 81040, 71, 'https://api.dicebear.com/7.x/adventurer/svg?seed=Aether'),
(4, 'RageTrigger', '@rage', 260, '2.65', 72400, 69, 'https://api.dicebear.com/7.x/adventurer/svg?seed=Rage'),
(5, 'GlitchMage', '@glitch', 245, '2.41', 68900, 64, 'https://api.dicebear.com/7.x/adventurer/svg?seed=Glitch');

-- Insert Transmissions & Esports News
INSERT INTO news (id, type, badge_class, badge_text, date, read_time, title, excerpt, content, image, likes) VALUES
('news-1', 'news', 'bg-pink', 'ESPORTS', 'June 1, 2026', '4 min read', 'Announcing the Vortex Cyber-Cup 2026 Roster Seeding', 'Our signature global esports championship is back with a record-setting $150,000 global prize bounty. Explore the NA and EU regional seeding arrays and learn how you can qualify today.', 'Vortex Cyber-Cup 2026 is returning this fall, bigger and bolder. We are expanding competitive divisions to support cross-platform players, and our server infrastructures are fully optimized with regional nodes in Seattle, Frankfurt, and Tokyo. Tournament tickets open today. Ready up!', 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600', 1248),
('news-2', 'patch', 'bg-purple', 'PATCH LOGS', 'May 28, 2026', '6 min read', 'Shadowfall Patch 2.4.1: Balancing weapon kinetics & barrier ticks', 'The latest calibration update is now active. Review detailed calculations regarding plasma damage adjustments, cybernetic barrier refresh timings, and UI improvements.', 'In this minor adjustment, we are targeting Spec ''Viper'' kinetic feedback formulas. Heavy plasma rifles receive a 4% increase in reload velocity while shields take 2% less shock impact from EMP nodes.', 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600', 914),
('news-3', 'tournament', 'bg-amber', 'CHAMPIONSHIP', 'May 24, 2026', '3 min read', 'Vortex Arena Tactics: Regional Invitation Openings', 'Compete with top algorithm builders on the leaderboard. Secure your slots in the upcoming Tactical Drafting championship and claim the elite golden card backs.', 'The top 32 deck drafting legends will battle in a double-elimination arena bracket. Tune in live on Twitch and claim specialized algorithmic drops including legendary holograms.', 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=600', 672);

-- Insert Detailed Patch Changelogs
INSERT INTO patch_notes (version, game, date, fixes) VALUES
('v2.4.1 (Active)', 'Shadowfall: Nexus', 'May 28, 2026', ARRAY['Adjusted specs of Plasma Rifle to reduce range damage decay by 4.2%', 'Calibrated cybernetic double-jump energy drain from 25% down to 20%', 'Fixed sound propagation delay glitch inside Reactor Core grid corridors', 'Improved server tick rate prediction modules to reduce micro-stuttering']),
('v1.12.0', 'Eldoria: Chronicles', 'May 15, 2026', ARRAY['Introduced dynamic mount speed buffs when traveling on main paved trails', 'Tuned spellcasting cooldown coefficient for Chronomancer tier-2 algorithms', 'Resolved quest progress blocker on the final tier of ''Chronicles of Aether''', 'Enhanced render draw-distance for complex forest grids by 15%']),
('v3.0.2', 'Vortex Arena: Tactics', 'May 08, 2026', ARRAY['Rebalanced card draft distributions in Lane 2 to avoid early-game stacks', 'Updated visual layout highlights when trigger cards establish an active combo', 'Fixed visual sprite rendering issues during custom avatar victory sequences', 'Integrated direct localized support files for mobile players']);

-- Insert Team Crew Pioneers
INSERT INTO team (name, role, avatar, twitter, discord) VALUES
('Marcus Vance', 'CEO & Game Architect', 'https://api.dicebear.com/7.x/bottts/svg?seed=Marcus', '#', '#'),
('Dr. Elena Rostova', 'Lead Core Networking Tech', 'https://api.dicebear.com/7.x/bottts/svg?seed=Elena', '#', '#'),
('Kaito Tanaka', 'Principal Visual Designer', 'https://api.dicebear.com/7.x/bottts/svg?seed=Kaito', '#', '#'),
('Sarah ''Valkyrie'' Stone', 'Director of Esports Leagues', 'https://api.dicebear.com/7.x/bottts/svg?seed=Sarah', '#', '#');

-- Insert Tournaments Schedules
INSERT INTO tournaments (id, title, game, date, prize, total_slots, registered_count) VALUES
('t1', 'Nebula Arena Cup', 'Shadowfall: Nexus', 'June 15, 2026 18:00:00', '$10,000', 32, 26),
('t2', 'Chronicles Draft Series', 'Vortex Arena: Tactics', 'June 22, 2026 15:30:00', '$5,000', 16, 10),
('t3', 'Overdrive Drifting Trophy', 'Neon Drift: Overdrive', 'July 01, 2026 20:00:00', '$8,500', 24, 14);

-- Trigger to automatically create a public profile when a user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, avatar_url, bio, xp, credits, role, status)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'username', 'Gamer_' || substring(new.id::text, 1, 8)),
    COALESCE(new.raw_user_meta_data->>'avatar_url', 'https://api.dicebear.com/7.x/adventurer/svg?seed=' || new.id),
    'A competitive Vortex operative.',
    0,
    500,
    'Gamer',
    'Active'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Ensure Row Level Security (RLS) is disabled/relaxed for testing convenience, or configure standard policies.
ALTER TABLE games DISABLE ROW LEVEL SECURITY;
ALTER TABLE leaderboard DISABLE ROW LEVEL SECURITY;
ALTER TABLE news DISABLE ROW LEVEL SECURITY;
ALTER TABLE patch_notes DISABLE ROW LEVEL SECURITY;
ALTER TABLE team DISABLE ROW LEVEL SECURITY;
ALTER TABLE tournaments DISABLE ROW LEVEL SECURITY;
ALTER TABLE tournament_registrations DISABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.teams DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.friend_requests DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.matches DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_comments DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements DISABLE ROW LEVEL SECURITY;
