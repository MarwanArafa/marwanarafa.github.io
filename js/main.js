/*
 * CORE LOGIC INITIALIZATION
 * Bridges the global data from data.js into the React component tree.
 */
const data = window.portfolioData;

/*
 * ICON COMPONENTS
 * Reusable vector graphics for social media and UI elements.
 */
const GithubIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
);

const LinkedinIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const MailIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

const CalendarIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

/*
 * BACKGROUND ANIMATION
 * A high-performance canvas particle system with dynamic node-linking.
 */
const ParticleBackground = () => {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let frame;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const pts = Array.from({length: 70}, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            s: Math.random() * 2 + 1
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pts.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(56, 189, 248, 0.3)";
                ctx.fill();

                for (let j = i + 1; j < pts.length; j++) {
                    const d = Math.hypot(p.x - pts[j].x, p.y - pts[j].y);
                    if (d < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(56, 189, 248, ${0.3 - d / 500})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(pts[j].x, pts[j].y);
                        ctx.stroke();
                    }
                }
            });
            frame = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(frame);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-gray-900" />;
};

/*
 * LAYOUT COMPONENTS
 * Section wrapper for consistent spacing and styling.
 */
const Section = ({ id, title, children }) => (
    <section id={id} className="py-20 relative z-10 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{title}</h2>
        {children}
    </section>
);

/*
 * HEADER COMPONENT
 * Fixed navigation bar with glassmorphism styling.
 */
const Header = () => (
    <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/50 px-6 py-4 flex justify-between items-center text-white">
        <div className="text-2xl font-bold tracking-tighter">{data.name}</div>
        <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#courses" className="hover:text-sky-400 transition-colors">Education</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
        </nav>
        <a href={`mailto:${data.email}`} className="hidden md:block bg-sky-600 px-6 py-2 rounded-lg font-bold hover:bg-sky-500 transition-colors shadow-lg">Contact</a>
    </header>
);

/*
 * HERO SECTION
 * Primary landing area featuring name and software developer title.
 */
const Hero = () => (
    <section className="min-h-screen flex items-center justify-center relative z-10 pt-20">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight">Hi, I'm <span className="text-sky-400">{data.name}</span></h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-light">{data.title}</p>
            <div className="flex justify-center items-center space-x-8">
                <a href={data.socials.github} target="_blank" className="text-gray-500 hover:text-white transition-all hover:scale-110"><GithubIcon className="w-10 h-10" /></a>
                <a href={data.socials.linkedin} target="_blank" className="text-gray-500 hover:text-sky-400 transition-all hover:scale-110"><LinkedinIcon className="w-10 h-10" /></a>
                <a href={`mailto:${data.email}`} className="text-gray-500 hover:text-red-400 transition-all hover:scale-110"><MailIcon className="w-10 h-10" /></a>
            </div>
        </div>
    </section>
);

/*
 * ABOUT & TERMINAL SECTION
 * Visualizes the software developer persona with a mock terminal UI.
 */
const About = () => (
    <Section id="about" title="About Me">
        <div className="bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 shadow-2xl">
            <div className="md:w-3/5 text-gray-300 leading-relaxed text-lg whitespace-pre-line font-light">{data.about}</div>
            <div className="md:w-2/5 bg-[#0a0c10] p-6 rounded-xl border border-gray-800 relative font-mono text-sm shadow-inner">
                <div className="absolute top-0 left-0 w-full h-8 bg-gray-800/50 flex items-center px-4 border-b border-gray-800">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="ml-4 text-[10px] text-gray-500 tracking-widest uppercase">marwan@archlinux:~</span>
                </div>
                <div className="mt-6">
                    <div className="mb-2"><span className="text-purple-400 font-bold">➜</span> <span className="text-sky-400">~</span> <span className="text-gray-200">cat skills.txt</span></div>
                    <div className="flex flex-col gap-1.5 border-l border-gray-800 pl-4 ml-1">
                        {data.skills.map(s => <span key={s} className="text-gray-400 hover:text-sky-300 transition-colors cursor-default">{s}</span>)}
                    </div>
                    <div className="mt-4"><span className="text-purple-400 font-bold">➜</span> <span className="text-sky-400">~</span> <span className="w-2.5 h-4 bg-sky-500 inline-block animate-pulse align-middle ml-1"></span></div>
                </div>
            </div>
        </div>
    </Section>
);

/*
 * EDUCATION SECTION
 * Highlights academic achievements and certifications.
 */
const Courses = () => (
    <Section id="courses" title="Education">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data.courses.map(c => (
                <div key={c.id} className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50 hover:border-sky-500/50 transition-all hover:bg-gray-800/50 group">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform">{c.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
                    <p className="text-sky-400 text-[10px] font-black uppercase tracking-widest mb-4 opacity-80">{c.institution}</p>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">{c.description}</p>
                </div>
            ))}
        </div>
    </Section>
);

/*
 * PROJECTS SECTION
 * Displays a gallery of technical work with real-time build status badges.
 */
const Projects = () => (
    <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...data.projects].reverse().map(p => (
                <a href={p.link} key={p.id} target="_blank" className="group bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50 hover:border-sky-500 transition-all flex flex-col relative overflow-hidden">
                    {p.inProgress && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-transparent animate-pulse"></div>}
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-bold text-xl text-white group-hover:text-sky-400 transition-colors">{p.title}</h3>
                        {p.inProgress && <span className="text-[9px] font-black bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded border border-yellow-500/20 uppercase tracking-tighter">Building</span>}
                    </div>
                    {p.inProgress && p.expectedDate && (
                        <div className="flex items-center gap-1.5 text-[10px] text-yellow-500/60 mb-4 font-mono uppercase tracking-widest">
                            <CalendarIcon className="w-3 h-3"/> {p.expectedDate}
                        </div>
                    )}
                    <p className="text-gray-400 text-sm mb-8 flex-grow font-light leading-relaxed">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {p.tags.map(t => <span key={t} className="text-[9px] font-bold bg-gray-900/50 border border-gray-700 text-sky-400/80 px-2.5 py-1 rounded-md transition-colors uppercase">{t}</span>)}
                    </div>
                </a>
            ))}
        </div>
    </Section>
);

/*
 * ROOT APPLICATION
 * Final assembly and rendering component.
 */
const App = () => (
    <div className="min-h-screen flex flex-col text-white font-sans selection:bg-sky-500/30">
        <ParticleBackground />
        <Header />
        <main className="flex-grow pt-20">
            <Hero />
            <About />
            <Courses />
            <Projects />
        </main>
        <footer className="py-16 text-center text-gray-600 text-xs border-t border-gray-800/50 tracking-widest uppercase">&copy; {new Date().getFullYear()} {data.name}</footer>
    </div>
);

/*
 * DOM MOUNTING
 */
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
