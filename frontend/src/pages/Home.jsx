import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

import {
  FaBookOpen,
  FaFolderOpen,
  FaChartLine,
  FaFilePdf,
  FaArrowRight,
} from "react-icons/fa6";

import img from "../assets/img1.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const nevigate = useNavigate();
  return (
    <div className="min-h-screen overflow-hidden bg-white text-black">
      <NavBar />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ rotateX: 6, rotateY: -6 }}
            className="transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/10 text-sm text-gray-700 mb-6"
              whileHover={{ scale: 1.03 }}
            >
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              AI-powered smart learning platform
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-black via-gray-700 to-black bg-clip-text text-transparent"
              whileHover={{ y: -4 }}
              style={{
                transform: "translateZ(40px)",
                textShadow: "0 19px 40px rgba(0,0,0,0.25)",
              }}
            >
              Create Smart <br /> AI Notes in Seconds
            </motion.h1>

            <motion.p
              className="text-gray-600 mt-6 text-lg leading-relaxed max-w-xl"
              whileHover={{ y: -2 }}
              style={{
                transform: "translateZ(30px)",
                textShadow: "0 19px 40px rgba(0,0,0,0.15)",
              }}
            >
              Revolutionize your study sessions with AI-powered exam notes,
              project summaries, diagrams, charts, and downloadable PDFs —
              designed to help students learn faster and smarter.
            </motion.p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">
              <motion.button
              onClick={()=>nevigate("/notes")}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white font-semibold shadow-[0_20px_60px_rgba(59,130,246,0.35)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Generate Notes

                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </span>

                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="px-8 py-4 rounded-2xl border border-black/10 bg-black/5 backdrop-blur-xl text-black font-medium hover:bg-black/10 transition-all"
              >
                Explore Features
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{
            y: -12,
            rotateX: 8,
            rotateY: -8,
            scale: 1.05,
          }}
          className="transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-gradient-to-br from-black/5 to-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10"></div>

            <img
              src={img}
              alt="AI Notes"
              className="w-full object-cover"
              style={{ transform: "translateZ(35px)" }}
            />
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* FEATURE 1 */}
        <Feature
          initial={{
            opacity: 0,
            y: 80,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          icon={<FaBookOpen className="text-blue-400" />}
          title="Exam Notes"
          des="Generate concise, high-quality AI-powered notes optimized for exams and faster revision."
        />

        {/* FEATURE 2 */}
        <Feature
          initial={{
            opacity: 0,
            x: -80,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          icon={<FaFolderOpen className="text-yellow-400" />}
          title="Project Summaries"
          des="Create structured project documentation, assignments, and technical reports effortlessly."
        />

        {/* FEATURE 3 */}
        <Feature
          initial={{
            opacity: 0,
            y: -80,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          icon={<FaChartLine className="text-green-400" />}
          title="Charts & Diagrams"
          des="Automatically generate graphs, flowcharts, and visual diagrams for better understanding."
        />

        {/* FEATURE 4 */}
        <Feature
          initial={{
            opacity: 0,
            x: 80,
            rotate: 10,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.55,
          }}
          icon={<FaFilePdf className="text-red-400" />}
          title="PDF Downloads"
          des="Download beautifully formatted and printable PDF notes instantly with one click."
        />
      </section>

      <Footer />
    </div>
  );
}

function Feature({
  icon,
  title,
  des,
  initial,
  animate,
  transition,
}) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={{
        y: -12,
        rotateX: 8,
        rotateY: -8,
        scale: 1.05,
      }}
      className="relative rounded-3xl p-7 bg-gradient-to-br from-black/95 via-black/90 to-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.7)] text-white overflow-hidden"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>

      {/* SHINE EFFECT */}
      <motion.div
        animate={{
          x: ["-120%", "220%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 h-full w-24 bg-white/10 blur-2xl rotate-12"
      />

      <div
        className="relative z-10"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* ICON */}
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.12,
          }}
          className="text-5xl mb-5"
        >
          {icon}
        </motion.div>

        {/* TITLE */}
        <h3 className="text-xl font-bold mb-3">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-sm leading-relaxed">
          {des}
        </p>
      </div>
    </motion.div>
  );
}

export default Home;