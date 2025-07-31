import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaLinkedin, FaLaptopCode, FaDownload, FaEnvelope, FaPhoneAlt, FaJava, FaPython, FaGitAlt, FaArrowUp, FaGithub, FaTwitter } from "react-icons/fa";
import { SiExpo } from "react-icons/si";

export default function Portfolio() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-fuchsia-100 via-sky-100 to-purple-100 p-8 font-sans text-gray-800 relative">
      {/* Morphing Background Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-purple-600 rounded-full opacity-30"
          animate={{
            scale: [1, 1.5, 1],
            borderRadius: ["50%", "30%", "50%"],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-pink-600 rounded-full opacity-30"
          animate={{
            scale: [1, 2, 1],
            borderRadius: ["50%", "20%", "50%"],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-600 rounded-full opacity-30"
          animate={{
            scale: [1, 1.8, 1],
            borderRadius: ["50%", "40%", "50%"],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Action Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}

      {/* Hero Section */}
      <section className="text-center mb-16 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-3xl blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.h1
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 mb-4 relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Shareena Mohammed
        </motion.h1>
        
        <motion.p
          className="text-xl font-medium text-gray-600 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          🚀 Frontend Developer | Crafting Elegant Interfaces
        </motion.p>
        
        <motion.div 
          className="mt-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href={process.env.PUBLIC_URL + "/SHAREENA_RESUME.pdf"}
            download="SHAREENA_RESUME.pdf"
            className="inline-flex items-center px-8 py-3 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="mr-2" />
            Download Resume
          </motion.a>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <SectionHeader title="About Me" />
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p className="text-lg leading-relaxed">
            I specialize in creating vibrant, responsive user interfaces with modern web technologies. From animations to accessibility, I build digital experiences that are engaging and intuitive. Passionate about clean code and user-centered design.
          </p>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <SectionHeader title="Skills" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
            { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
            { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
            { icon: <FaReact />, name: "React & React Native", color: "text-sky-500" },
            { icon: <FaJava />, name: "Java", color: "text-red-500" },
            { icon: <FaPython />, name: "Python", color: "text-blue-400" },
            { icon: <FaGitAlt />, name: "Git", color: "text-orange-400" },
            { icon: <FaCss3Alt />, name: "Tailwind CSS", color: "text-cyan-500" },
            { icon: <SiExpo />, name: "Expo Go", color: "text-purple-500" }
          ].map((skill, index) => (
            <Skill 
              key={index}
              icon={skill.icon} 
              name={skill.name} 
              color={skill.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <SectionHeader title="Projects" />
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="BingeGala"
            description="Interactive mini-theater platform with Next.js and Tailwind."
            link="https://bingegala.com"
            tech={["Next.js", "Tailwind CSS", "React"]}
          />
          <ProjectCard
            title="Genetic Disease Detection"
            description="Pupillometry-based ML system for identifying Retinitis Pigmentosa."
            tech={["Python", "Machine Learning", "Data Analysis"]}
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <SectionHeader title="Education" />
        <div className="space-y-6">
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              scale: 1.02,
              x: 10,
            }}
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Intermediate</h3>
            <p className="text-gray-700">Sri Venkateshwara Junior College , Karimnagar.</p>
            <p className="text-gray-600">Year Of Pass: 2019</p>
            <p className="text-gray-600">Percentage : 92% </p>
          </motion.div>
          
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              scale: 1.02,
              x: -10,
            }}
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-2">BTech in Computer Science and Engineering</h3>
            <p className="text-gray-700"> AVN Institute of Engineering Technology, Hyderabad.</p>
            <p className="text-gray-600">Graduated: 2023</p>
            <p className="text-gray-600">CGPA : 6.75</p>
          </motion.div>
        </div>
      </section>

      <section className="text-center mt-20">
        <SectionHeader title="Let's Connect" />
        <motion.div 
          className="flex justify-center gap-6 text-3xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {[
            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/shareenamohammad0510/", color: "text-blue-600 hover:text-blue-800" },
            { icon: <FaGithub />, href: "https://github.com/", color: "text-gray-800 hover:text-gray-900" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-link ${social.color} transition-all duration-300 hover:scale-125`}
              whileHover={{ 
                scale: 1.2,
                y: -5,
              }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-lg text-gray-700 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p 
            className="flex justify-center items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope className="text-purple-600" />
            <a href="mailto:shareena.osa@gmail.com" className="hover:text-purple-600 transition-colors">
              shareena.osa@gmail.com
            </a>
          </motion.p>
          <motion.p 
            className="flex justify-center items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <FaPhoneAlt className="text-purple-600" />
            <a href="tel:+917993819812" className="hover:text-purple-600 transition-colors">
              +91 7993819812
            </a>
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}

const SectionHeader = ({ title }) => (
  <motion.h2
    className="text-4xl font-bold text-purple-600 mb-6 relative inline-block"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.05 }}
  >
    <FaLaptopCode className="inline-block mr-2 text-purple-400" />
    {title}
    <motion.span 
      className="block w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mt-2 mx-auto"
      initial={{ width: 0 }}
      whileInView={{ width: "4rem" }}
      transition={{ duration: 0.8, delay: 0.3 }}
    />
  </motion.h2>
);

const Skill = ({ icon, name, color, delay = 0 }) => (
  <motion.div
    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20"
    whileHover={{ 
      rotate: [0, 3, -3, 0], 
      y: -5,
      scale: 1.05,
    }}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    <motion.div 
      className={`text-5xl mb-3 ${color}`}
      whileHover={{ 
        rotate: [0, 360],
        scale: 1.2,
      }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    <p className="text-gray-800 font-semibold">{name}</p>
  </motion.div>
);

const ProjectCard = ({ title, description, link, tech = [] }) => (
  <motion.div
    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20"
    whileHover={{ scale: 1.03, y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
   
    <p className="text-gray-700 mt-2 mb-4">{description}</p>
    {tech.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {tech.map((techItem, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
          >
            {techItem}
          </span>
        ))}
      </div>
    )}
  </motion.div>
);