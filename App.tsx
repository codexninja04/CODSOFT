import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Menu, X, Code2, Briefcase, GraduationCap, Award } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-800">Souvik Pal</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 animate-fade-in">
              Souvik Pal
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Front-End Web Developer | Aspiring Software Developer
            </p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
              Building innovative web solutions with modern technologies and creating seamless user experiences
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-slate-50 transition-colors shadow-lg hover:shadow-xl border-2 border-blue-600"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/souvik.professional.jpg"
                    alt="Souvik Pal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-200 rounded-2xl -z-10"></div>
              </div>
            </div>
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I'm a passionate Front-End Web Developer currently pursuing B.Tech in Computer Science Engineering with specialization in IoT, Cyber Security, and Block Chain Technology at the Institution of Engineering & Management, Kolkata.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                With hands-on experience in building responsive websites and a strong foundation in front-end technologies, I've completed internships at Oasis Infobyte and Future Interns, where I honed my skills in web development and design.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I'm particularly interested in AI-powered applications and driver assistance systems, having developed a Smart Overtaking & Driver Safety System that integrates computer vision and machine learning technologies.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-800">Education</p>
                    <p className="text-sm text-slate-600">B.Tech in CSE</p>
                    <p className="text-sm text-slate-500">CGPA: 7.88</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-800">Experience</p>
                    <p className="text-sm text-slate-600">2 Internships</p>
                    <p className="text-sm text-slate-500">Web Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Programming Languages</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Java</li>
                <li>Python</li>
                <li>C</li>
                <li>Matlab</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Web Technologies</h3>
              <ul className="space-y-2 text-slate-600">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Tools & Platforms</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Visual Studio Code</li>
                <li>Git</li>
                <li>Dev-C++</li>
                <li>MySQL</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">AI & ML</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Computer Vision</li>
                <li>Machine Learning</li>
                <li>OpenCV</li>
                <li>PyTorch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Code2 className="w-20 h-20 text-white opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Smart Overtaking & Driver Safety System
                </h3>
                <p className="text-slate-600 mb-4">
                  AI-powered driver assistance prototype integrating mmWave radar, computer vision, and IR-based drowsiness detection. Provides real-time SAFE/UNSAFE overtaking decisions and generates trip safety reports.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">OpenCV</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">PyTorch</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">YOLO</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Raspberry Pi</span>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Real-time sensor fusion and data logging</p>
                  <p>• Eye Aspect Ratio based fatigue detection</p>
                  <p>• Low-cost scalable ADAS solution</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Code2 className="w-20 h-20 text-white opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Responsive Web Applications
                </h3>
                <p className="text-slate-600 mb-4">
                  Developed multiple responsive websites during internships at Oasis Infobyte and Future Interns, applying modern front-end technologies and design principles.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">HTML</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">CSS</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">React</span>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Mobile-first responsive design</p>
                  <p>• Modern UI/UX implementation</p>
                  <p>• Cross-browser compatibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Resume</h2>
          <p className="text-lg text-slate-600 mb-8">
            Download my resume to learn more about my experience, education, and certifications
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <Download className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Souvik Pal - Resume</h3>
            <p className="text-slate-600 mb-6">
              Front-End Web Developer | Aspiring Software Developer
            </p>
            <a
              href="/souvik.professional.jpg"
              download
              className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume (PDF)</span>
            </a>
            <div className="mt-8 grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <p className="text-2xl font-bold text-blue-600">7.88</p>
                <p className="text-sm text-slate-600">CGPA</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">2+</p>
                <p className="text-sm text-slate-600">Internships</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">3+</p>
                <p className="text-sm text-slate-600">Certifications</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-800 mb-2">Certifications</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>Foundations of Cybersecurity</li>
                <li>Solutions Architecture Job Simulation</li>
                <li>Information Theory</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-800 mb-2">Experience</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>Oasis Infobyte Intern</li>
                <li>Future Interns Developer</li>
                <li>Web Development & Design</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-800 mb-2">Awards</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>EY Techathon 6.0 Participant</li>
                <li>Secondary Education: 90%</li>
                <li>Higher Secondary: 63.4%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                  <a href="mailto:psouvik884@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                    psouvik884@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                  <a href="tel:+919679819423" className="text-slate-600 hover:text-green-600 transition-colors">
                    +91 9679819423
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Location</h3>
                  <p className="text-slate-600">
                    Ashray Apartment Housing Society<br />
                    Newtown, Kolkata - 700156<br />
                    West Bengal, India
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-semibold text-slate-800 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Let's Work Together</h3>
              <p className="text-slate-600 mb-6">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Available For</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Full-time positions</li>
                    <li>• Freelance projects</li>
                    <li>• Internship opportunities</li>
                    <li>• Collaborative projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-bold">Souvik Pal</span>
              </div>
              <p className="text-slate-400 text-sm">
                Front-End Web Developer passionate about creating beautiful and functional web experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('skills')} className="hover:text-white transition-colors">
                    Skills
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">
                    Projects
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>psouvik884@gmail.com</li>
                <li>+91 9679819423</li>
                <li>Kolkata, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2025 Souvik Pal. All rights reserved. Built with React and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
