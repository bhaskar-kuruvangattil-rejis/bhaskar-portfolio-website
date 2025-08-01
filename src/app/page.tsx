'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Home() {
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  const skills = [
    { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-900' },
    { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-800' },
    { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-green-700' },
    { name: 'Python', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-blue-500' },
    { name: 'Git', level: 87, color: 'from-orange-500 to-red-500' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and PostgreSQL.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      image: '/project1.jpg',
      github: 'https://github.com/bhaskar-kuruvangattil-rejis',
      demo: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image: '/project2.jpg',
      github: 'https://github.com/bhaskar-kuruvangattil-rejis',
      demo: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      image: '/project3.jpg',
      github: 'https://github.com/bhaskar-kuruvangattil-rejis',
      demo: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <TypeAnimation
              sequence={[
                'Hi, I\'m Bhaskar B',
                2000,
                'Full-Stack Developer',
                2000,
                'Software Engineer',
                2000,
                'React.js Expert',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Full-Stack Developer & Software Engineer
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating innovative web applications and solving complex problems 
            with clean, efficient code. Specialized in React, Next.js, TypeScript, and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6" ref={skillsRef}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`rounded-lg p-6 text-center bg-gradient-to-r ${skill.color} shadow-lg hover:shadow-2xl transition-shadow cursor-pointer`}
                >
                  <div className="mb-4">
                    <span className="block text-lg font-semibold text-white">{skill.name}</span>
                    <span className="block text-sm text-gray-100">Level: {skill.level}%</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
                    <motion.div
                      className="bg-white h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={projectsRef}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">{project.title}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gray-900 dark:bg-gray-700 text-white text-center py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                      >
                        GitHub
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      [0m<section id="contact" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div ref={contactRef} className="max-w-4xl mx-auto ">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Contact Me
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="p-3 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="p-3 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="4"
                  className="p-3 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  required
                />
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none transition"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
              {submitStatus && <p className="text-green-500 text-center mt-4">{submitStatus}</p>}
            </form>
          </div>
        </div>
      </section>
        
[0m

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I'm a passionate software developer with a strong foundation in full-stack development. 
              I enjoy building scalable web applications and am always eager to learn new technologies 
              and tackle challenging problems. My experience spans frontend development with React and Next.js, 
              backend development with Node.js and Python, and working with modern development tools and practices.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/bhaskar-kuruvangattil-rejis-a0452330a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/bhaskar-kuruvangattil-rejis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:bkuruvangattilrejis@gmail.com"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
