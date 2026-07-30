import "./Skills.css";
import { motion } from "framer-motion";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiPostman,
  SiFigma,
  SiGit,
  SiGithub,
  SiVercel,
  SiGoogle,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js 16", icon: <SiNextdotjs />, featured: true },
      { name: "React", icon: <SiReact />, featured: true },
      { name: "TypeScript", icon: <SiTypescript />, featured: true },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "DaisyUI", icon: "🌼" },
      { name: "TanStack Query", icon: <SiReactquery /> },
       { name: "Bootstrap", icon: "🅱️" },
      { name: "React Hot Toast", icon: "🔥" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, featured: true },
      { name: "Express.js", icon: <SiExpress />, featured: true },
      { name: "MongoDB", icon: <SiMongodb />, featured: true },
      { name: "JWT", icon: <SiJsonwebtokens /> },
      { name: "Google Auth", icon: <SiGoogle /> },
      { name: "Better Auth", icon: "🔐" },
      { name: "Bcrypt", icon: "🛡️" },
    { name: "Gemini AI", icon: "✨" },
    ],
  },
  {
   title: "Development Ecosystem",
  skills: [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "VS Code", icon: "💻" },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Render", icon: "🚀" },
    { name: "npm", icon: "📦" },
  ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <p className="skills-subtitle">
        Technologies I use to build modern, scalable and responsive web
        applications.
      </p>

      <div className="skills-grid">
        {categories.map((category, index) => (
          <motion.div
            className="skill-card"
            key={category.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{category.title}</h3>

            <div className="badge-container">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className={`skill-badge ${
                    skill.featured ? "featured" : ""
                  }`}
                  whileHover={{
                    scale: 1.08,
                    y: -6,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="icon">{skill.icon}</span>

                  <span>{skill.name}</span>

                  {skill.featured && (
                    <span className="new-badge">★</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="exploring">
  <h3> Currently Exploring</h3>

  <div className="exploring-container">

    {[
      "Gemini API",
      "Docker",
      "Redis",
      "PostgreSQL",
      "System Design",
      "AI Engineering"
    ].map((item, index) => (

      <motion.div
        key={item}
        className="explore-badge"
        initial={{
          opacity:0,
          y:25
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{
          delay:index*0.1
        }}
        viewport={{
          once:true
        }}
      >
        {item}
      </motion.div>

    ))}

  </div>
</div>
    </section>
  );
}

export default Skills;