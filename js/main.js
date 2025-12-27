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

// --- PARTICLE BACKGROUND COMPONENT (The New Engine) ---
const ParticleBackground = () => {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set Canvas Size
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        // Config
        const particleCount = 70; // Number of dots
        const connectionDistance = 150; // How close to connect lines
        const particles = [];

        // Create Particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5, // Velocity X
                vy: (Math.random() - 0.5) * 0.5, // Velocity Y
                size: Math.random() * 2 + 1,
            });
        }

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and Draw Particles
            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Draw Dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(56, 189, 248, 0.5)"; // Sky blue dots
                ctx.fill();

                // Draw Lines
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(56, 189, 248, ${1 - distance / connectionDistance})`; // Fade out line
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-gray-900" />;
};

// --- Reusable Section ---
const Section = ({ id, title, children }) => {
    const motion = window.framerMotion;
    const MotionDiv = motion ? motion.motion.div : 'div';
    const motionProps = motion ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6 }
    } : {};
    
    return (
        <section id={id} className="py-20 lg:py-32 relative z-10">
            <div className="container mx-auto px-6">
                 <MotionDiv {...motionProps}>
                     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                         {title}
                     </h2>
                     {children}
                 </MotionDiv>
            </div>
        </section>
    );
};

// --- Page Components ---
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wider">
          {portfolioData.name}
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-sky-400 transition-colors duration-300 font-medium">About</a>
          <a href="#courses" className="text-gray-300 hover:text-sky-400 transition-colors duration-300 font-medium">Education</a>
          <a href="#projects" className="text-gray-300 hover:text-sky-400 transition-colors duration-300 font-medium">Projects</a>
        </nav>
        <a href={`mailto:${portfolioData.email}`} className="hidden md:inline-block bg-sky-600 hover:bg-sky-500 text-white font-semibold py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg shadow-sky-500/20">
          Contact Me
        </a>
      </div>
    </header>
  );
};

const Hero = () => {
    const motion = window.framerMotion;
    const MotionDiv = motion ? motion.motion.div : 'div';
    const MotionH1 = motion ? motion.motion.h1 : 'h1';
    const MotionP = motion ? motion.motion.p : 'p';
    
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } };
    const motionContainerProps = motion ? { variants: containerVariants, initial: "hidden", animate: "visible" } : {};
    const motionItemProps = motion ? { variants: itemVariants } : {};

    return (
        <section className="min-h-screen flex items-center justify-center relative z-10 pt-20">
            <div className="container mx-auto px-6 text-center">
                <MotionDiv {...motionContainerProps}>
                    <MotionH1 {...motionItemProps} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white">
                        Hi, I'm <span className="text-sky-400">{portfolioData.name}</span>
                    </MotionH1>
                    <MotionP {...motionItemProps} className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
                        {portfolioData.title}
                    </MotionP>
                    <MotionDiv {...motionItemProps} className="flex justify-center items-center space-x-8">
                        <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"><GithubIcon className="w-10 h-10" /></a>
                        <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-all duration-300 hover:scale-110 transform"><LinkedinIcon className="w-10 h-10" /></a>
                        <a href={`mailto:${portfolioData.email}`} className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110 transform"><MailIcon className="w-10 h-10" /></a>
                    </MotionDiv>
                </MotionDiv>
            </div>
        </section>
    );
};

const About = () => (
    <Section id="about" title="About Me">
        <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-700/50 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 text-center leading-relaxed">
                {portfolioData.about}
            </p>
        </div>
    </Section>
);

const Courses = () => (
    <Section id="courses" title="Certifications & Education">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioData.courses.map(course => (
                <div key={course.id} className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 hover:border-sky-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-sky-500/10 flex flex-col h-full">
                    <div className="flex justify-center md:justify-start">{course.icon}</div>
                    <h3 className="text-xl font-bold mb-2 mt-2 text-white">{course.title}</h3>
                    <p className="text-sky-400 font-semibold mb-4 text-sm uppercase tracking-wide">{course.institution}</p>
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">{course.description}</p>
                </div>
            ))}
        </div>
    </Section>
);

const Projects = () => (
    <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioData.projects.map(project => (
                 <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id} className="group block bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/50 hover:border-sky-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-sky-500/20 h-full flex flex-col">
                    <div className="p-8 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">{project.title}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-sky-400">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </div>
                        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-bold bg-gray-900/80 border border-gray-700 text-sky-300 px-3 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </Section>
);

const Footer = () => (
    <footer className="bg-gray-900/90 border-t border-gray-800 py-10 text-white mt-auto z-10 relative">
        <div className="container mx-auto px-6 text-center text-gray-400">
            <div className="flex justify-center items-center space-x-8 mb-6">
                 <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"><GithubIcon className="w-6 h-6" /></a>
                <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110"><LinkedinIcon className="w-6 h-6" /></a>
                <a href={`mailto:${portfolioData.email}`} className="text-gray-400 hover:text-red-400 transition-transform duration-300 hover:scale-110"><MailIcon className="w-6 h-6" /></a>
            </div>
            <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} {portfolioData.name}. Built with React & Tailwind.</p>
        </div>
    </footer>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col relative text-white">
      {/* THE PARTICLE ENGINE IS HERE */}
      <ParticleBackground />
      
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Courses />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
