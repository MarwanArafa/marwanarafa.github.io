// --- Portfolio Data ---
// All your personal information, projects, and course details are stored here.
// This makes it easy to update your portfolio without changing the main application logic.

const portfolioData = {
  name: "Marwan Arafa",
  title: "Full-Stack Developer",
  email: "marwanarafa206@gmail.com",
  socials: {
    github: "https://github.com/MarwanArafa",
    linkedin: "https://www.linkedin.com/in/marwan-arafa-92803a29b/",
  },
  about: "A passionate and driven learner with a foundation in computer science and programming from Harvard's renowned CS50 courses. I am enthusiastic about building efficient, scalable, and user-friendly applications. Currently seeking opportunities to apply my skills and grow as a developer.",
  courses: [
    {
      id: "cs50x",
      title: "CS50x: Introduction to Computer Science",
      institution: "Harvard University (edX)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mb-4 text-red-400">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
          <path d="m15 5 3 3" />
        </svg>
      ),
      description: "A comprehensive introduction to the intellectual enterprises of computer science and the art of programming. Covered C, Python, SQL, JavaScript, CSS, and HTML, along with fundamental concepts like algorithms, data structures, and memory management.",
    },
    {
      id: "cs50p",
      title: "CS50p: Introduction to Programming with Python",
      institution: "Harvard University (edX)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mb-4 text-sky-400">
          <path d="m10.1 8.8-3.4 3.4L12 17.5l5.3-5.3-3.4-3.4-1.9 1.9-1.9-1.9Z" />
          <path d="M12 22a10 10 0 1 0-4.5-8.3" />
          <path d="m2 12 5.3-5.3" />
          <path d="M16.7 6.7 22 12" />
        </svg>
      ),
      description: "A deep dive into Python, covering its syntax, semantics, and best practices. Explored topics such as functions, variables, data types, conditionals, loops, file I/O, regular expressions, and object-oriented programming.",
    },
  ],
  projects: [
     {
      id: 1,
      title: "Web Track: Finance",
      description: "A web application built with Python (Flask), SQL, HTML, and CSS that allows users to 'buy' and 'sell' stocks using simulated money.",
      tags: ["Python", "Flask", "SQL", "CS50x"],
      link: "#",
    },
    {
      id: 2,
      title: "Python Project: Jar",
      description: "An object-oriented programming project in Python that simulates a cookie jar, implementing a class to deposit and withdraw cookies.",
      tags: ["Python", "OOP", "CS50p"],
      link: "#",
    },
    {
      id: 3,
      title: "Final Project Idea",
      description: "A placeholder for a future project. The possibilities are endless, perhaps a full-stack application combining skills from both courses.",
      tags: ["React", "Node.js", "Full-Stack"],
      link: "#",
    },
  ],
};
