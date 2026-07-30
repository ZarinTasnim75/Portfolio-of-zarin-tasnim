import "./Education.css";
import { motion } from "framer-motion";

function Education() {

    return (

        <motion.section className="education" id="education"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>

            <h2>Education</h2>

            <div className="education-card">

                <h3>Bachelor of Information Technology</h3>

                <p>Institute of Information Technology</p>

                <p>Jahangirnagar University</p>

                <p>2023 - Present</p>

            </div>

        </motion.section>

    )

}

export default Education;