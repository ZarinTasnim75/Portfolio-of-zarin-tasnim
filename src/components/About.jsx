import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2>About Me</h2>

      <p>
        Hello! I'm <strong>Zarin Tasnim</strong>, an Information Technology
        student and a passionate Full Stack Developer who enjoys building
        modern, responsive, and user-friendly web applications.
      </p>

      <p>
        My programming journey started with C and C++, which helped me build a
        strong programming foundation. Since then, I have expanded my skills to
        modern web technologies including React, Next.js, TypeScript, Node.js,
        Express.js, MongoDB, and authentication systems. I also enjoy exploring
        tools and technologies such as Tailwind CSS, Framer Motion, TanStack
        Query, Recharts, Better Auth, JWT, Google Authentication, Gemini AI,
        and Figma.
      </p>

      <p>
        I enjoy developing full-stack applications, designing clean user
        interfaces, solving real-world problems, and continuously learning new
        technologies to improve my skills as a developer.
      </p>

      <p>
        Beyond programming, I enjoy painting, exploring creative design ideas,
        and working on personal projects that challenge me to learn something
        new every day.
      </p>
    </motion.section>
  );
}

export default About;