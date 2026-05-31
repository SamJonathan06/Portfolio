import { useEffect, useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header>
        <div className="header-container">
            <div className="logo">Portfolio</div>
            <nav>
                <ul className={menuOpen ? 'active' : ''} id="nav-menu">
                    <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMenu}>About</a></li>
                    <li><a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={closeMenu}>Projects</a></li>
                    <li><a href="#certifications" className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`} onClick={closeMenu}>Certifications</a></li>
                    <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <i className="fas fa-bars"></i>
            </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
          <div className="container">
              <div className="hero-content">
                  <h1>Sam Jonathan J</h1>
                 <p style={{marginBottom: '0.5rem'}}>Aspiring Data Analyst | AI & ML Enthusiast | Data Scientist</p>
                  <p>Building intelligent data driven solutions with Deep Learning and AI techniques</p>
                  <div className="cta-buttons">
                      <a href="#projects" className="btn btn-primary">View My Work</a>
                      <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                      <a href="/Resume (1).pdf" download className="btn btn-secondary">Download CV</a>
                  </div>
              </div>
              <div className="hero-avatar">
                  <img src="/london-sam.jpg" alt="Sam Jonathan J" />
              </div>
          </div>
      </section>

      {/* About Section */}
      <section id="about">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate developer crafting digital solutions</p>
          <div className="about-container">
              <div className="about-content">
                  <h3>Who Am I</h3>
                  <p>
                      I'm an aspiring data analyst based in Salem, India with a solid foundation in data analytics, machine learning, and AI. Currently pursuing B.Tech in Computer Science and Engineering at Karunya Institute of Technology and Sciences. Passionate about extracting insights from structured and unstructured data and building data driven solutions using deep learning and generative AI techniques.
                  </p>
                  <p>
                      With hands on experience in Python, SQL, R, and predictive modeling, I combine technical excellence with problem solving skills to deliver impactful AI powered solutions. I'm committed to continuous learning and staying at the forefront of data science innovations.
                  </p>
                  <h3 style={{marginTop: '1.5rem'}}>Technical Skills</h3>
                  <div className="about-skills">
                      <span className="skill-tag">Python</span>
                      <span className="skill-tag">SQL</span>
                      <span className="skill-tag">R</span>
                      <span className="skill-tag">Machine Learning</span>
                      <span className="skill-tag">Deep Learning</span>
                      <span className="skill-tag">Tableau</span>
                      <span className="skill-tag">Excel</span>
                      <span className="skill-tag">Data Analytics</span>
                  </div>
              </div>
              <div className="about-image">
                  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=60" alt="About Sam Jonathan J" />
              </div>
          </div>
      </section>

      {/* Skills/Services Section */}
      <section id="skills">
          <h2 className="section-title">Services & Skills</h2>
          <p className="section-subtitle">What I offer to help your project succeed</p>
          <div className="skills-grid">
              <div className="skill-card">
                  <i className="fas fa-brain"></i>
                  <h3>Machine Learning</h3>
                  <p>Building predictive models and statistical analysis solutions using Python, scikit-learn, and advanced algorithms.</p>
              </div>
              <div className="skill-card">
                  <i className="fas fa-network-wired"></i>
                  <h3>Deep Learning</h3>
                  <p>Developing AI-powered solutions using neural networks, CNNs, and state-of-the-art deep learning frameworks.</p>
              </div>
              <div className="skill-card">
                  <i className="fas fa-database"></i>
                  <h3>Data Analytics</h3>
                  <p>Extracting insights from complex datasets using SQL, R, and data visualization tools like Tableau.</p>
              </div>
              <div className="skill-card">
                  <i className="fas fa-code"></i>
                  <h3>Python Programming</h3>
                  <p>Proficient in Python for data science, AI development, and building automation tools with strong OOP foundations.</p>
              </div>
              <div className="skill-card">
                  <i className="fas fa-chart-bar"></i>
                  <h3>Data Visualization</h3>
                  <p>Creating compelling visual representations of data insights using Tableau, Excel, and Python visualization libraries.</p>
              </div>
              <div className="skill-card">
                  <i className="fas fa-cogs"></i>
                  <h3>AI & GenAI</h3>
                  <p>Building generative AI solutions and implementing state-of-the-art transformer models for NLP and automation tasks.</p>
              </div>
          </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my best work and technical expertise</p>
          <div className="projects-grid">
              <div className="project-card">
                  <div className="project-image">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Detected-with-YOLO--Schreibtisch-mit-Objekten.jpg" alt="Pathfinder Project" />
                  </div>
                  <div className="project-content">
                      <h3>Pathfinder: AI-Powered Obstacle Detection</h3>
                      <p>An intelligent obstacle detection and navigation system using advanced deep learning techniques. Enables users to navigate safely and independently in real-world scenarios with auditory feedback.</p>
                      <div className="project-tags">
                          <span className="project-tag">YOLOv8</span>
                          <span className="project-tag">CNN</span>
                          <span className="project-tag">Deep Learning</span>
                      </div>
                      <a href="#" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                  </div>
              </div>

              <div className="project-card">
                  <div className="project-image" style={{background: '#f8fafc'}}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube Transcript Summarizer" style={{objectFit: 'contain', padding: '3rem'}} />
                  </div>
                  <div className="project-content">
                      <h3>YouTube Transcript Summarizer</h3>
                      <p>An intelligent tool that extracts and summarizes YouTube video transcripts using advanced transformer models. Helps users quickly understand long videos without watching the entire content.</p>
                      <div className="project-tags">
                          <span className="project-tag">BART</span>
                          <span className="project-tag">NLP</span>
                          <span className="project-tag">Hugging Face</span>
                      </div>
                      <a href="#" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                  </div>
              </div>

              <div className="project-card">
                  <div className="project-image">
                      <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=60" alt="CISCO Internship" />
                  </div>
                  <div className="project-content">
                      <h3>CISCO - Python Programming Essentials</h3>
                      <p>Completed a 3-month intensive internship on PCAP (Python Essentials). Developed strong foundations in Python 3, OOP, data structures, and problem-solving methodologies.</p>
                      <div className="project-tags">
                          <span className="project-tag">Python</span>
                          <span className="project-tag">OOP</span>
                          <span className="project-tag">Internship</span>
                      </div>
                      <a href="#" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                  </div>
              </div>

              <div className="project-card">
                  <div className="project-image">
                      <img src="/chatbot_ui.png" alt="Offline ChatBot" />
                  </div>
                  <div className="project-content">
                      <h3>Offline - ChatBot</h3>
                      <p>A fully functional, 100% offline AI chatbot equipped with voice recognition and Text-to-Speech (TTS) capabilities. It utilizes local LLMs for inference, ensuring that conversations remain entirely private and accessible.</p>
                      <div className="project-tags">
                          <span className="project-tag">Streamlit</span>
                          <span className="project-tag">Ollama</span>
                          <span className="project-tag">Python</span>
                      </div>
                      <a href="#" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                  </div>
              </div>

              <div className="project-card">
                  <div className="project-image">
                      <img src="/workout_tracker_ui.png" alt="Workout Tracker" />
                  </div>
                  <div className="project-content">
                      <h3>Workout - Tracker</h3>
                      <p>A dynamic frontend web application designed to help users log, track, and visualize their daily fitness routines and workout sessions with a streamlined, interactive interface.</p>
                      <div className="project-tags">
                          <span className="project-tag">React</span>
                          <span className="project-tag">TypeScript</span>
                          <span className="project-tag">CSS</span>
                      </div>
                      <a href="https://workout-trackerrr.netlify.app/" className="project-link" target="_blank" rel="noreferrer">View Project <i className="fas fa-arrow-right"></i></a>
                  </div>
              </div>
          </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind? Let's work together</p>
          <div className="contact-container">
              <form className="contact-form" id="contact-form" action="https://formsubmit.co/sam.jonathanj06@gmail.com" method="POST">
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input type="text" id="subject" name="subject" required />
                  </div>
                  <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
              </form>

              <div className="contact-info">
                  <div className="contact-item">
                      <i className="fas fa-envelope"></i>
                      <div>
                          <h4>Email</h4>
                          <p><a href="mailto:sam.jonathanj06@gmail.com" style={{color: 'var(--text-muted)', textDecoration: 'none'}}>sam.jonathanj06@gmail.com</a></p>
                      </div>
                  </div>

                  <div className="contact-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <div>
                          <h4>Location</h4>
                          <p>Salem, India</p>
                      </div>
                  </div>

                  <div className="contact-item">
                      <i className="fas fa-phone"></i>
                      <div>
                          <h4>Phone</h4>
                          <p>+91 8220918068</p>
                      </div>
                  </div>

                  <div>
                      <h4 style={{color: 'var(--accent-light)', marginBottom: '1rem'}}>Connect With Me</h4>
                      <div className="social-links">
                          <a href="https://www.linkedin.com/in/sam-jonathan-bb7497297/" className="social-link" title="LinkedIn" target="_blank" rel="noreferrer">
                              <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href="https://github.com/samjonathan06" className="social-link" title="GitHub" target="_blank" rel="noreferrer">
                              <i className="fab fa-github"></i>
                          </a>
                          <a href="mailto:sam.jonathanj06@gmail.com" className="social-link" title="Email" target="_blank" rel="noreferrer">
                              <i className="fas fa-envelope"></i>
                          </a>
                          <a href="https://www.kaggle.com/" className="social-link" title="Kaggle" target="_blank" rel="noreferrer">
                              <i className="fab fa-kaggle"></i>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">Industry recognized credentials and professional development</p>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem'}}>
                  {[
                    { title: "Google - Professional Certificate", subtitle: "Google Data Analytics" },
                    { title: "IBM - AI Developer", subtitle: "Professional Development in Artificial Intelligence" },
                    { title: "Google - Introduction to Artificial Intelligence", subtitle: "Fundamentals of AI and Machine Learning" },
                    { title: "Google - Python for Data Science, AI and Development", subtitle: "Advanced Python Programming for Data Science" },
                    { title: "OpenEDG - Python Programming Essentials", subtitle: "PCAP Certification - Python 3 Essentials" },
                  ].map((cert, i) => (
                    <div key={i} className="cert-card">
                        <h3 style={{color: 'var(--accent-light)', marginBottom: '0.5rem'}}>{cert.title}</h3>
                        <p style={{color: 'var(--text-muted)'}}>{cert.subtitle}</p>
                    </div>
                  ))}
              </div>
          </div>
      </section>

      <footer>
          <div className="footer-content">
              <div className="footer-links">
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
              </div>
              <p>&copy; {new Date().getFullYear()} Sam Jonathan J. All rights reserved.</p>
          </div>
      </footer>
    </>
  );
}