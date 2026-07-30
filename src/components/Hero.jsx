import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
    return (
        <motion.section
            className="hero"
            id="home"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="hero-text"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <p className="hello">Hello, I'm</p>

                <h1>Zarin Tasnim</h1>

                <h2>Full Stack Developer</h2>

                <p className="description">
                    I build responsive and user-friendly web applications using React,
                    Node.js, Express, and MongoDB.
                </p>

                <div className="hero-buttons">
                    <a href="/resume.pdf" download className="btn"
                    >
                        Download Resume
                    </a>
                </div>

                <div className="social-icons">
                    <a href="https://github.com/ZarinTasnim75" target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/zarin-tasnim-tsm15" target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                </div>
            </motion.div>

            <motion.div
                className="hero-image"
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                }}
            >
                <img src="/profile.jpg" alt="Profile" />
            </motion.div>
        </motion.section>
    );
}

export default Hero;