// --- SVG Icons ---
const GithubIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
);
const LinkedinIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
    </svg>
);
const MailIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);
const CalendarIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

// --- PARTICLE BACKGROUND ---
const ParticleBackground = () => {
    const canvasRef = React.useRef(null);
    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        window.addEventListener('resize', handleResize);
        handleResize();
        const particles = [];
        for (let i = 0; i < 70; i++) {
            particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, size: Math.random() * 2 + 1 });
        }
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p, index) => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fillStyle = "rgba(56, 189, 248, 0.5)"; ctx.fill();
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j]; const dx = p.x - p2.x; const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 150) {
                        ctx.beginPath(); ctx.strokeStyle = `rgba(56, 189, 248, ${1 - distance / 150})`; ctx.lineWidth = 0.5; ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
                    }
                }
            });
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        return () => { window.removeEventListener('resize', handleResize); cancelAnimationFrame(animationFrameId); };
    }, []);
    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-gray-900" />;
};

const Section = ({ id, title, children }) => {
    const motion = window.framerMotion;
    const MotionDiv = motion ? motion.motion.div : 'div';
    return (
        <section id={id} className="py-20 lg:py-32 relative z-10">
            <div className="container mx-auto px-6">
                 <MotionDiv initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{title}</h2>
                     {children}
                 </MotionDiv>
            </div>
        </section>
    );
};

const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wider">{portfolioData.name}</div>
        <nav className="hidden md:flex space-x-8 text-gray-300">
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#courses" className="hover:text-sky-400 transition-colors">Education</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
        </nav>
        <a href={`mailto:${portfolioData.email}`} className="hidden md:inline-block bg-sky-600 hover:bg-sky-500 text-white font-semibold py-2 px-6 rounded-lg transition-transform hover:scale-105">Contact Me</a>
      </div>
    </header>
);

const Hero = () => (
    <section className="min-h-screen flex items-center justify-center relative z-10 pt-20">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">Hi, I'm <span className="text-sky-400">{portfolioData.name}</span></h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">{portfolioData.title}</p>
            <div className="flex justify-center items-center space-x-8">
                <a href={portfolioData.socials.github} className="text-gray-400 hover:text-white transition-all hover:scale-110"><GithubIcon className="w-10 h-10" /></a>
                <a href={portfolioData.socials.linkedin} className="text-gray-400 hover:text-sky-400 transition-all hover:scale-110"><LinkedinIcon className="w-10 h-10" /></a>
                <a href={`mailto:${portfolioData.email}`} className="text-gray-400 hover:text-red-400 transition-all hover:scale-110"><MailIcon className="w-10 h-10" /></a>
            </div>
        </div>
    </section>
);

const About = () => (
    <Section id="about" title="About Me">
        <div className="bg-gray-800/50 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-gray-700/50 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-3/5">
                <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">{portfolioData.about}</p>
            </div>
            <div className="md:w-2/5 w-full bg-[#0d1117] p-6 rounded-lg border border-gray-700/80 shadow-inner font-mono relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-8 bg-gray-800 flex items-center px-4 border-b border-gray-700">
                    <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div>
                    <span className="ml-4 text-xs text-gray-400 font-sans tracking-widest">marwan@archlinux:~</span>
                </div>
                <div className="mt-8">
                    <div className="mb-4 text-gray-300 text-sm"><span className="text-
