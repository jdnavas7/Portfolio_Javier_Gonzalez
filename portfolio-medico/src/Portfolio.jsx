import React, { useState, useEffect } from 'react';
import { BookOpen, Briefcase, User, ChevronDown, ChevronUp, Linkedin, Mail, Phone, Moon, Sun, Stethoscope } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [expanded, setExpanded] = useState({
    about: true,
    experience: false,
    education: false
  });
  
  const [darkMode, setDarkMode] = useState(false);
  
  const aboutRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const educationRef = React.useRef(null);

  const toggleSection = (section) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section]
    });
    setActiveSection(section);
  };
  
  const selectSection = (section) => {
    setExpanded({
      about: section === 'about',
      experience: section === 'experience',
      education: section === 'education'
    });
    setActiveSection(section);
    
    setTimeout(() => {
      if (section === 'about' && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'experience' && experienceRef.current) {
        experienceRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'education' && educationRef.current) {
        educationRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    // Efecto para aplicar la clase al body cuando cambia el modo oscuro
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    // Limpiar el efecto cuando el componente se desmonte
    return () => {
      document.body.classList.remove('dark-mode');
    };
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 shadow-lg text-center relative">
        <div className="absolute left-6 top-6">
          <Stethoscope size={40} className="text-white" />
        </div>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="absolute right-6 top-6 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
          aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Dr. Javier González Martin</h1>
          <p className="text-xl mt-3 text-blue-100 font-light tracking-wide">MD International Advisor | MBA Pharma & Biotech</p>
        </div>
      </header>

      {/* Navegación */}
      <div className={`sticky top-0 z-10 shadow-md py-3 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <nav className="max-w-5xl mx-auto px-6 flex justify-center space-x-6">
          <button 
            onClick={() => selectSection('about')}
            className={`flex items-center px-5 py-2 rounded-full transition-all ${
              activeSection === 'about' 
                ? 'bg-blue-600 text-white shadow-md' 
                : darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <User className="w-5 h-5 mr-2" />
            <span>Sobre mí</span>
          </button>
          <button 
            onClick={() => selectSection('experience')}
            className={`flex items-center px-5 py-2 rounded-full transition-all ${
              activeSection === 'experience' 
                ? 'bg-blue-600 text-white shadow-md' 
                : darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Briefcase className="w-5 h-5 mr-2" />
            <span>Experiencia</span>
          </button>
          <button 
            onClick={() => selectSection('education')}
            className={`flex items-center px-5 py-2 rounded-full transition-all ${
              activeSection === 'education' 
                ? 'bg-blue-600 text-white shadow-md' 
                : darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            <span>Formación</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6">
        {/* Section: Sobre mí */}
        <section 
          ref={aboutRef}
          className={`mb-8 rounded-xl shadow-sm overflow-hidden transition-all duration-300 transform ${
            activeSection === 'about' ? 'scale-100 ring-2 ring-blue-500' : 'scale-99 hover:scale-100'
          } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div 
            className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
            onClick={() => toggleSection('about')}
          >
            <h2 className="text-2xl font-semibold flex items-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <User className="w-6 h-6 mr-3 text-blue-100" />
              Sobre mí
            </h2>
            {expanded.about ? <ChevronUp className="w-6 h-6 text-white" /> : <ChevronDown className="w-6 h-6 text-white" />}
          </div>
          
          {expanded.about && (
            <div className="p-6">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className={`w-full h-64 rounded-xl flex items-center justify-center shadow-inner ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <img src="/javier-gonzalez.jpg" alt="Dr. Javier González Martin" className="rounded-xl object-cover shadow-md" />
                  </div>
                  
                  <div className={`mt-6 rounded-xl p-5 shadow-sm ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>Contacto</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Phone className="w-5 h-5 mr-2 text-blue-600" /> 
                        <a href="tel:+34697664398" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>+34 697 66 43 98</a>
                      </li>
                      <li className="flex items-center">
                        <Mail className="w-5 h-5 mr-2 text-blue-600" /> 
                        <a href="mailto:javiergonzalezmartin1996@gmail.com" className={`transition-colors break-all ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>javiergonzalezmartin1996@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pl-8">
                  <div className="prose max-w-none">
                    <p className={`mb-4 text-lg leading-relaxed font-light ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Soy un médico de 28 años, con experiencia tanto asistencial como en la industria farmacéutica. Esto me aporta una visión global sobre la salud: cómo hacer que llegue a los profesionales y cómo hacer que estos ayuden a los pacientes.
                    </p>
                    <p className={`text-lg leading-relaxed font-light ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Me considero un médico con capacidad de respuesta a ambientes altamente estresantes, con altísima capacidad para el trabajo en equipo, orientado a los resultados y con capacidad resolutiva.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Section: Experiencia Laboral */}
        <section 
          ref={experienceRef}
          className={`mb-8 rounded-xl shadow-sm overflow-hidden transition-all duration-300 transform ${
            activeSection === 'experience' ? 'scale-100 ring-2 ring-blue-500' : 'scale-99 hover:scale-100'
          } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div 
            className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
            onClick={() => toggleSection('experience')}
          >
            <h2 className="text-2xl font-semibold flex items-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <Briefcase className="w-6 h-6 mr-3 text-blue-100" />
              Experiencia Laboral
            </h2>
            {expanded.experience ? <ChevronUp className="w-6 h-6 text-white" /> : <ChevronDown className="w-6 h-6 text-white" />}
          </div>
          
          {expanded.experience && (
            <div className="p-6">
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="md:w-1/4 mb-2 md:mb-0">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">jul. 2024 - actualidad</span>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>Médico Titular del Estado</h3>
                      <p className="text-md text-blue-600 font-medium">Ministerio de Sanidad · Interino</p>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Sevilla, Andalucía, España · Presencial</p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="md:w-1/4 mb-2 md:mb-0">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">nov. 2023 - jul. 2024</span>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>Oncology Medical Affairs Specialist</h3>
                      <p className="text-md text-blue-600 font-medium">MSD España · Jornada completa</p>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Madrid, Comunidad de Madrid, España · Híbrido</p>
                      <p className={`mt-3 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Work based both in offices and in the field. Functions related to compliance and application of the company's medical plan: review of promotional materials, updating of the latest evidence, engagement with SLs, KOLs and KDM, organization of medical education activities, participation in advisory boards, attendance at conferences and relevant scientific events, collecting insights and working cross-functionally with all the company's departments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="md:w-1/4 mb-2 md:mb-0">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">jul. 2023</span>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>Médico</h3>
                      <p className="text-md text-blue-600 font-medium">Cruz Roja Española</p>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Sevilla, Andalucía, España · Presencial</p>
                      <p className={`mt-3 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Médico de emergencias en eventos multitudinarios, donde la capacidad de respuesta y la toma de decisiones debe hacerse en ambiente de alto estrés y en cuestión de segundos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="md:w-1/4 mb-2 md:mb-0">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">oct. 2022 - jun. 2023</span>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>Médico</h3>
                      <p className="text-md text-blue-600 font-medium">Serpresur Servicio de Prevención de Riesgos Laborales · Jornada completa</p>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Utrera, Andalucía, España · Presencial</p>
                      <p className={`mt-3 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Evaluación, diagnóstico y tratamiento de enfermedades profesionales o comunes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="md:w-1/4 mb-2 md:mb-0">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">2022</span>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>Prácticas de medicina</h3>
                      <p className="text-md text-blue-600 font-medium">Hospital Universitario Virgen del Rocío · Contrato de prácticas</p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="md:w-1/4 mb-2 md:mb-0">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">jun. 2016 - abr. 2019</span>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>Técnico en imagen para el diagnóstico</h3>
                      <p className="text-md text-blue-600 font-medium">Hospital Fátima · Autónomo</p>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Sevilla, Andalucía, España</p>
                      <p className={`mt-3 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Realizar pruebas de imagen en servicios de urgencias (radiografías, TC, RM, ecografía).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Section: Formación */}
        <section 
          ref={educationRef}
          className={`mb-8 rounded-xl shadow-sm overflow-hidden transition-all duration-300 transform ${
            activeSection === 'education' ? 'scale-100 ring-2 ring-blue-500' : 'scale-99 hover:scale-100'
          } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div 
            className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
            onClick={() => toggleSection('education')}
          >
            <h2 className="text-2xl font-semibold flex items-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <BookOpen className="w-6 h-6 mr-3 text-blue-100" />
              Formación
            </h2>
            {expanded.education ? <ChevronUp className="w-6 h-6 text-white" /> : <ChevronDown className="w-6 h-6 text-white" />}
          </div>
          
          {expanded.education && (
            <div className="p-6">
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="md:w-1/4 mb-2 md:mb-0">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">may. 2023 - ene. 2024</span>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>MBA, Industria farmacéutica y biotecnológica</h3>
                      <p className="text-md text-blue-600 font-medium">UCAM Universidad Católica San Antonio de Murcia</p>
                      <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>MBA en Industria farmacéutica y biotecnológica exclusivo para médicos</p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="md:w-1/4 mb-2 md:mb-0">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">2016 - 2022</span>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>Grado en Medicina y Cirugía</h3>
                      <p className="text-md text-blue-600 font-medium">Universidad de Sevilla</p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="md:w-1/4 mb-2 md:mb-0">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">sept. 2014 - jun. 2016</span>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>Técnico superior en imagen para el diagnóstico</h3>
                      <p className="text-md text-blue-600 font-medium">Centro de estudios Dr. Arduán</p>
                      <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Ciclo Formativo de Grado Superior</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white text-center p-6 mt-12">
        <div className="flex justify-center items-center mb-4">
          <a href="https://www.linkedin.com/in/javiergonzalezmartinmdandmba/" target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-2 bg-white text-blue-900 px-5 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors shadow-md">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
        <p className="text-blue-200">&copy; {new Date().getFullYear()} Dr. Javier González Martin. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Portfolio;