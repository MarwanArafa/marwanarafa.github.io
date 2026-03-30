// main.js
const { useState, useEffect } = React;
const data = window.portfolioData;

function Portfolio() {
    return (
        <div className="portfolio-container">
            <AboutSection />
            <ProjectsSection />
        </div>
    );
}

function AboutSection() {
    return (
        <section id="about-section" className="two-column-layout">
            <div className="bio-content">
                <h2>{data.title}</h2>
                <p>{data.about}</p>  {/* was: data.bio */}
                <h3>Courses</h3>
                <ul className="course-list">
                    {data.courses.map(course => (
                        <li key={course.id}>{course.title}</li>  {/* was: key={course} and {course} */}
                    ))}
                </ul>
            </div>

            <div className="hacker-terminal">
                <div className="terminal-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    marwan@archlinux:~
                </div>
                <div className="terminal-body">
                    <p className="command"><span className="prompt">~ $</span> neofetch --skills</p>
                    <div className="skills-grid">
                        {data.skills.map(skill => (
                            <span key={skill} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectsSection() {
    return (
        <section id="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {data.projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-header">
                            <h3>{project.title}</h3>  {/* was: project.name */}
                            {project.inProgress && (  /* was: project.status === "Building" */
                                <span className="status-badge building">Building</span>
                            )}
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="tech-stack">
                            {project.tags.map(tech => (  /* was: project.techStack */
                                <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// Render the app to the screen
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);
