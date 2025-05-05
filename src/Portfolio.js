import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaLinkedin, FaLaptopCode, FaDownload, FaEnvelope, FaPhoneAlt, FaJava, FaPython, FaGitAlt } from "react-icons/fa";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-fuchsia-100 via-sky-100 to-purple-100 p-8 font-sans text-gray-800">
      <section className="text-center mb-16">
        <motion.h1
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Shareena Mohammed
        </motion.h1>
        <motion.p
          className="text-xl font-medium text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          🚀 Frontend Developer | Crafting Elegant Interfaces
        </motion.p>
        <div className="mt-6">
        <a
    href={process.env.PUBLIC_URL + "/Shareena_Resume.pdf"}
    download="Shareena_Mohammed_Resume.pdf"
    className="inline-flex items-center px-6 py-2 text-white bg-purple-600 rounded-full hover:bg-purple-800 transition duration-300"
  >
    <FaDownload className="mr-2" /> Download Resume
  </a>

        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <SectionHeader title="About Me" />
        <p className="text-lg leading-relaxed">
          I specialize in creating vibrant, responsive user interfaces with modern web technologies. From animations to accessibility, I build digital experiences that are engaging and intuitive.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <SectionHeader title="Skills" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <Skill icon={<FaHtml5 />} name="HTML5" color="text-orange-500" />
          <Skill icon={<FaCss3Alt />} name="CSS3" color="text-blue-500" />
          <Skill icon={<FaJs />} name="JavaScript" color="text-yellow-400" />
          <Skill icon={<FaReact />} name="React & React Native" color="text-sky-500" />
          <Skill icon={<FaJava />} name="Java" color="text-red-500" />
          <Skill icon={<FaPython />} name="Python" color="text-blue-400" />
          <Skill icon={<FaGitAlt />} name="Git" color="text-orange-400" />
          <Skill icon={<FaCss3Alt />} name="Tailwind CSS" color="text-cyan-500" />
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <SectionHeader title="Projects" />
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="BingeGala"
            description="Interactive mini-theater platform with Next.js and Tailwind."
            link="https://bingegala.com"
          />
          <ProjectCard
            title="Genetic Disease Detection"
            description="Pupillometry-based ML system for identifying Retinitis Pigmentosa."
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <SectionHeader title="Education" />
        <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Intermediate</h3>
          <p className="text-gray-700">Sri Venkateshwara Junior College , Karimnagar.</p>
          <p className="text-gray-600">Year Of Pass: 2019</p>
          <p className="text-gray-600">Percentage : 92% </p>

        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">BTech in Computer Science and Engineering</h3>
          <p className="text-gray-700"> AVN Institute of Engineering Technology, Hyderabad.</p>
          <p className="text-gray-600">Graduated: 2023</p>
          <p className="text-gray-600">CGPA : 6.75</p>

        </div>
      </section>

      <section className="text-center mt-20">
        <SectionHeader title="Let's Connect" />
        <div className="flex justify-center gap-6 text-3xl mb-4">
          <a href="https://www.linkedin.com/in/shareenamohammad0510/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110" />
          </a>
        </div>
        <div className="text-lg text-gray-700">
          <p className="flex justify-center items-center gap-2"><FaEnvelope /> shareena.osa@gmail.com</p>
          <p className="flex justify-center items-center gap-2 mt-2"><FaPhoneAlt /> +91 7993819812 </p>
        </div>
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
  >
    <FaLaptopCode className="inline-block mr-2 text-purple-400" /> {title}
    <span className="block w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mt-2 mx-auto"></span>
  </motion.h2>
);

const Skill = ({ icon, name, color }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transform hover:scale-105 transition-transform"
    whileHover={{ rotate: [0, 3, -3, 0] }}
  >
    <div className={`text-5xl mb-3 ${color}`}>{icon}</div>
    <p className="text-gray-800 font-semibold">{name}</p>
  </motion.div>
);

const ProjectCard = ({ title, description, link }) => (
  <motion.div
    className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-transform"
    whileHover={{ scale: 1.03 }}
  >
    <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Visit
      </a>
    )}
    <p className="text-gray-700 mt-2">{description}</p>
  </motion.div>
);