// This file contains all the React components. In a larger project,
// each component would be in its own file (e.g., components/Header.js).

// --- SVG Icons (Components) ---
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


// --- Reusable Section Component ---
const Section = ({ id, title, children }) => {
    const motion = window.framerMotion;
    const MotionDiv = motion ? motion.motion.div : 'div';
    const motionProps = motion ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.8 }
    } : {};
    
    return (
        <section id={id} className="py-20 lg:py-32 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                 <MotionDiv {...motionProps}>
                     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                         {title} <span className="text-sky-400">.</span>
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
    <header className="fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wider">
          {portfolioData.name.split(' ')[0]}<span className="text-sky-400">.</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-sky-400 transition-colors duration-300">About</a>
          <a href="#courses" className="text-gray-300 hover:text-sky-400 transition-colors duration-300">Courses</a>
          <a href="#projects" className="text-gray-300 hover:text-sky-400 transition-colors duration-300">Projects</a>
        </nav>
        <a href={`mailto:${portfolioData.email}`} className="hidden md:inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105">
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
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    const motionContainerProps = motion ? { variants: containerVariants, initial: "hidden", animate: "visible" } : {};
    const motionItemProps = motion ? { variants: itemVariants } : {};

    return (
        <section className="min-h-screen flex items-center bg-gray-900 text-white pt-20">
            <div className="container mx-auto px-6 text-center">
                <MotionDiv {...motionContainerProps}>
                    <MotionH1 {...motionItemProps} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
                        Hi, I'm <span className="text-sky-400">{portfolioData.name}</span>
                    </MotionH1>
                    <MotionP {...motionItemProps} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        {portfolioData.title}
                    </MotionP>
                    <MotionDiv {...motionItemProps} className="flex justify-center items-center space-x-6">
                        <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
                            <GithubIcon className="w-8 h-8" />
                        </a>
                        <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110">
                            <LinkedinIcon className="w-8 h-8" />
                        </a>
                        <a href={`mailto:${portfolioData.email}`} className="text-gray-400 hover:text-red-400 transition-transform duration-300 hover:scale-110">
                            <MailIcon className="w-8 h-8" />
                        </a>
                    </MotionDiv>
                </MotionDiv>
            </div>
        </section>
    );
};

const About = () => (
    <Section id="about" title="About Me">
        <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
            {portfolioData.about}
        </p>
    </Section>
);

const Courses = () => (
    <Section id="courses" title="My Education">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {portfolioData.courses.map(course => (
                <div key={course.id} className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-sky-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-sky-500/20">
                    <div className="flex justify-center md:justify-start">{course.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-center md:text-left">{course.title}</h3>
                    <p className="text-sky-400 font-semibold mb-4 text-center md:text-left">{course.institution}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{course.description}</p>
                </div>
            ))}
        </div>
    </Section>
);

const Projects = () => (
    <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioData.projects.map(project => (
                 <a href={project.link} key={project.id} className="block bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-sky-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-sky-500/20">
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-semibold bg-gray-700 text-sky-300 px-2 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </Section>
);

const Footer = () => (
    <footer className="bg-gray-800 border-t border-gray-700 py-8 text-white">
        <div className="container mx-auto px-6 text-center text-gray-400">
            <div className="flex justify-center items-center space-x-6 mb-4">
                 <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"><GithubIcon className="w-6 h-6" /></a>
                <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110"><LinkedinIcon className="w-6 h-6" /></a>
                <a href={`mailto:${portfolioData.email}`} className="text-gray-400 hover:text-red-400 transition-transform duration-300 hover:scale-110"><MailIcon className="w-6 h-6" /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
        </div>
    </footer>
);

// --- Main App Component ---
function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

// --- Render the App to the DOM ---
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
