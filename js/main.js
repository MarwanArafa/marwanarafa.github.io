// main.js
const { useState, useEffect } = React;
const data = window.portfolioData;

function Portfolio() {
    return (
        <div className="min-h-screen px-6 py-10 max-w-5xl mx-auto">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-white">{data.name}</h1>
                <p className="text-sky-400 mt-2">{data.title}</p>
                <div className="flex justify-center gap-4 mt-4">
                    <a href={data.socials.github} className="text-gray-400 hover:text-white" target="_blank">GitHub</a>
                    <a href={data.socials.linkedin} className="text-gray-400 hover:text-white" target="_blank">LinkedIn</a>
                    <a href={`mailto:${data.email}`} className="text-gray-400 hover:text-white">Email</a>
                </div>
            </header>
            <AboutSection />
            <ProjectsSection />
        </div>
    );
}

function AboutSection() {
    return (
        <section id="about-section" className="mb-16">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">About</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{data.about}</p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {data.skills.map(skill => (
                        <span key={skill} className="bg-sky-900 text-sky-300 px-3 py-1 rounded-full text-sm">{skill}</span>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Courses</h2>
                <ul className="space-y-3">
                    {data.courses.map(course => (
                        <li key={course.id} className="bg-gray-800 rounded-lg p-4">
                            <p className="text-white font-semibold">{course.title}</p>
                            <p className="text-sky-400 text-sm">{course.institution}</p>
                            <p className="text-gray-400 text-sm mt-1">{course.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function ProjectsSection() {
    return (
        <section id="projects-container" className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.projects.map((project) => (
                    <div key={project.id} className="bg-gray-800 rounded-lg p-5 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-white font-bold">{project.title}</h3>
                            {project.inProgress && (
                                <span className="bg-yellow-900 text-yellow-300 text-xs px-2 py-1 rounded-full">
                                    Building · {project.expectedDate}
                                </span>
                            )}
                        </div>
                        <p className="text-gray-400 text-sm flex-1">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">{tag}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" className="text-sky-400 text-sm hover:underline">
                            View on GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);
