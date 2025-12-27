// --- Portfolio Data ---
// All your personal information, projects, and course details are stored here.

const portfolioData = {
  name: "Marwan Arafa",
  title: "Linux System Administrator & Python Developer",
  email: "marwanarafa206@gmail.com",
  socials: {
    github: "https://github.com/MarwanArafa",
    linkedin: "https://www.linkedin.com/in/marwan-arafa-92803a29b/",
  },
  about: "A results-driven Undergraduate Student and Developer specializing in Linux System Administration and Python Automation. I don't just write code; I build tools that save time and secure servers. My workflow is based in the terminal (Arch Linux), and I am passionate about open-source software, cybersecurity, and backend efficiency.",
  courses: [
    {
      id: "linux101",
      title: "Linux Fundamentals 101",
      institution: "Flex Courses",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mb-4 text-yellow-400">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <polyline points="4 9 9 9 9 4"></polyline>
        </svg>
      ),
      description: "Mastered core Linux concepts including file system hierarchy, permissions (chmod/chown), process management, and bash scripting. Gained proficiency in terminal-based navigation and system configuration.",
    },
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
      description: "A comprehensive introduction to the intellectual enterprises of computer science. Covered C, Python, SQL, and Algorithms, with a focus on memory management and data structures.",
    },
    {
      id: "cs50p",
      title: "CS50p: Programming with Python",
      institution: "Harvard University (edX)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mb-4 text-sky-400">
          <path d="m10.1 8.8-3.4 3.4L12 17.5l5.3-5.3-3.4-3.4-1.9 1.9-1.9-1.9Z" />
          <path d="M12 22a10 10 0 1 0-4.5-8.3" />
          <path d="m2 12 5.3-5.3" />
          <path d="M16.7 6.7 22 12" />
        </svg>
      ),
      description: "A deep dive into Python automation and scripting. Explored object-oriented programming, unit testing, file I/O, regular expressions, and library usage for real-world problem solving.",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Advanced Connect 4 AI",
      description: "A high-performance AI engine built from scratch in C++. It utilizes the Minimax algorithm with Alpha-Beta Pruning to simulate 9 moves into the future. Features a custom heuristic engine that evaluates gravity physics, unstoppable threats, and strategic gap setups.",
      tags: ["C++", "AI", "Minimax", "Game Dev"],
      link: "https://github.com/MarwanArafa/Connect-4",
    },
    {
      id: 2,
      title: "Universal Video Downloader",
      description: "A powerful automation tool designed to scrape and download media from the web. It uses a custom Python web scraper to locate media streams and extract video files from various sources automatically.",
      tags: ["Python", "Web Scraping", "Automation", "CLI"],
      link: "https://github.com/MarwanArafa/universal-video-sniffer",
    },
    {
      id: 3,
      title: "Automated Linux VPS Hardener",
      description: "A Bash script that automatically secures fresh Ubuntu/Debian servers. It updates the system, configures UFW firewalls to block unauthorized ports, and installs Fail2Ban to prevent brute-force attacks.",
      tags: ["Bash", "Linux", "Security", "UFW"],
      link: "https://github.com/MarwanArafa/linux-server-automation",
    },
    {
      id: 4,
      title: "High-Volume Image Optimizer",
      description: "A Python CLI tool designed for bulk image processing. It resizes, converts, and compresses thousands of images in seconds using the Pillow library, optimized for web performance.",
      tags: ["Python", "Automation", "Pillow", "CLI"],
      link: "https://github.com/MarwanArafa/image_optimizer",
    },
    {
      id: 5,
      title: "E-Commerce Web Scraper",
      description: "A data extraction tool built with BeautifulSoup and Requests. It scrapes product data (prices, ratings, stock) from e-commerce sites and exports clean, analyzed data to CSV format.",
      tags: ["Python", "Web Scraping", "Data Mining"],
      link: "https://github.com/MarwanArafa/python-web-scraper",
    },
  ],
};
