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
  
  // EXPANDED BIO: To perfectly balance the terminal UI height and highlight your true goals
  about: "A results-driven Undergraduate Computer Science student and Developer specializing in backend efficiency, system automation, and secure networking. I don't just write code; I build tools that save time and harden servers. My daily workflow is entirely terminal-based, powered by a highly customized Arch Linux setup that I maintain myself.\n\nBeyond standard development, I have a deep passion for cybersecurity, specifically web penetration testing and reverse engineering. I am actively working through the PortSwigger Web Security Academy and transitioning my focus from high-level Python scripting down to low-level C and C++ memory management. Whether I'm configuring a secure proxy, hunting for vulnerabilities, or building a browser from scratch, my ultimate goal is to understand exactly how systems work under the hood.",
  
  skills: ["C / C++", "Python", "Bash Scripting", "Linux Server Admin", "Arch Linux", "Networking (TCP/IP)", "Git", "Automation"],
  
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
    {
      id: "cs50w",
      title: "CS50w: Web Programming",
      institution: "Harvard University (edX)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mb-4 text-orange-400">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      description: "[Currently Pursuing] Learning to build and deploy scalable, secure web applications using Django, JavaScript, React, and modern API design principles.",
    },
    {
      id: "cs50sql",
      title: "CS50 SQL: Databases with SQL",
      institution: "Harvard University (edX)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mb-4 text-emerald-400">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      description: "[Currently Pursuing] Deepening my knowledge of database architecture, query optimization, and data management using SQLite, PostgreSQL, and MySQL.",
    }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Web Scraper",
      description: "A data extraction tool built with BeautifulSoup and Requests. It scrapes product data (prices, ratings, stock) from e-commerce sites and exports clean, analyzed data to CSV format.",
      tags: ["Python", "Web Scraping", "Data Mining"],
      link: "https://github.com/MarwanArafa/python-web-scraper",
      inProgress: false
    },
    {
      id: 2,
      title: "High-Volume Image Optimizer",
      description: "A Python CLI tool designed for bulk image processing. It resizes, converts, and compresses thousands of images in seconds using the Pillow library, optimized for web performance.",
      tags: ["Python", "Automation", "Pillow", "CLI"],
      link: "https://github.com/MarwanArafa/image_optimizer",
      inProgress: false
    },
    {
      id: 3,
      title: "Automated Linux VPS Hardener",
      description: "A Bash script that automatically secures fresh Ubuntu/Debian servers. It updates the system, configures UFW firewalls to block unauthorized ports, and installs Fail2Ban to prevent brute-force attacks.",
      tags: ["Bash", "Linux", "Security", "UFW"],
      link: "https://github.com/MarwanArafa/linux-server-automation",
      inProgress: false
    },
    {
      id: 4,
      title: "Universal Video Downloader",
      description: "A powerful automation tool designed to scrape and download media from the web. It uses a custom Python web scraper to locate media streams and extract video files from various sources automatically.",
      tags: ["Python", "Web Scraping", "Automation", "CLI"],
      link: "https://github.com/MarwanArafa/universal-video-sniffer",
      inProgress: false
    },
    {
      id: 5,
      title: "Advanced Connect 4 AI",
      description: "A high-performance AI engine built from scratch in C++. It utilizes the Minimax algorithm with Alpha-Beta Pruning to simulate 9 moves into the future. Features a custom heuristic engine that evaluates gravity physics, unstoppable threats, and strategic gap setups.",
      tags: ["C++", "AI", "Minimax", "Game Dev"],
      link: "https://github.com/MarwanArafa/Connect-4",
      inProgress: false
    },
    {
      id: 6,
      title: "Encrypted SOCKS5 Proxy Server",
      description: "Building a custom encrypted SOCKS5 proxy server from scratch to bypass ISP visibility. Currently working through core socket programming concepts, including echo servers, forwarders, and protocol implementation (RFC 1928).",
      tags: ["C", "Socket Programming", "Networking", "SOCKS5"],
      link: "https://github.com/MarwanArafa",
      inProgress: true,
      expectedDate: "April 2026"
    },
    {
      id: 7,
      title: "Custom Web Browser",
      description: "A lightweight, high-performance web browser built from scratch. Features include 'playable' tab groups and a lag-reducing minimal mode. Currently in the architecture and C++ mastery phase.",
      tags: ["C++", "Qt Framework", "QtWebEngine", "UI/UX"],
      link: "https://github.com/MarwanArafa", 
      inProgress: true,
      expectedDate: "Q4 2026"
    }
  ],
};
