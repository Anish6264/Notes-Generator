import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TopicForm from "../components/TopicForm";
import { useSelector } from "react-redux";

import {
  FaCoins,
  FaPlus,
  FaBookOpen,
} from "react-icons/fa6";
import { useState } from "react";

function Notes() {
  const navigate = useNavigate();

  const { userData } = useSelector(
    (state) => state.user
  );

  const credits = userData?.credits || 0;

  const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
      const [error, setError] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4 md:px-6 py-6 md:py-8">
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-10 rounded-3xl bg-black/90 backdrop-blur-2xl border border-white/10 px-6 md:px-8 py-5 md:py-6 shadow-[0_20px_45px_rgba(0,0,0,0.6)] flex items-start md:items-center justify-between gap-5 flex-col md:flex-row relative overflow-visible"
      >
        {/* LEFT SIDE */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer"
        >
          <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Exam Notes AI
          </h1>

          <p className="text-sm text-gray-300 mt-1">
            AI-powered smart notes, revision sheets &
            exam preparation
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          {/* CREDIT CARD */}
          <motion.div
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="relative overflow-hidden flex items-center gap-4 px-4 md:px-5 py-3 rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black border border-cyan-400/10 shadow-[0_15px_45px_rgba(34,211,238,0.12)]"
          >
            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5"></div>

            {/* COIN ICON */}
            <div className="relative flex items-center justify-center">
              <div className="absolute h-12 w-12 rounded-full bg-cyan-400/10 blur-xl"></div>

              <div className="relative h-11 w-11 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 flex items-center justify-center">
                <FaCoins className="text-yellow-400 text-lg" />
              </div>
            </div>

            {/* TEXT */}
            <div className="relative flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Available
              </span>

              <div className="flex items-end gap-1">
                <span className="text-2xl font-black text-white">
                  {credits}
                </span>

                <span className="text-xs text-gray-400 mb-1">
                  credits
                </span>
              </div>
            </div>

            {/* ADD BUTTON */}
            <motion.button
              onClick={() => navigate("/pricing")}
              whileHover={{
                rotate: 90,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="relative h-9 w-9 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white flex items-center justify-center shadow-[0_10px_25px_rgba(34,211,238,0.35)]"
            >
              <FaPlus className="text-sm" />
            </motion.button>

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
              className="absolute top-0 left-0 h-full w-16 bg-white/10 blur-xl rotate-12"
            />
          </motion.div>

          {/* YOUR NOTES BUTTON */}
          <motion.button
            onClick={() => navigate("/history")}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="relative overflow-hidden flex items-center gap-3 px-4 md:px-5 py-3 rounded-3xl bg-gradient-to-r from-black/90 via-black to-gray-900 border border-cyan-400/20 text-white shadow-[0_10px_35px_rgba(34,211,238,0.18)] cursor-pointer"
          >
            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-cyan-500/10 opacity-60"></div>

            {/* ICON */}
            <div className="relative flex items-center justify-center">
              <div className="absolute h-9 w-9 rounded-full bg-cyan-400/20 blur-md"></div>

              <div className="relative h-9 w-9 rounded-full border border-cyan-400/30 bg-cyan-500/10 flex items-center justify-center">
                <FaBookOpen className="text-cyan-400 text-sm md:text-base" />
              </div>
            </div>

            {/* TEXT */}
            <div className="relative flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-wider text-gray-400">
                Workspace
              </span>

              <span className="font-semibold text-xs md:text-sm">
                Your Notes
              </span>
            </div>

            {/* SHINE EFFECT */}
            <motion.div
              animate={{
                x: ["-120%", "220%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-0 h-full w-16 bg-white/10 blur-xl rotate-12"
            />
          </motion.button>
        </div>
      </motion.header>

<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="mb-12"
>
  <TopicForm loading={loading} setResult={setResult} setLoading={setLoading} setError={setError} />
</motion.div>


{!result && <motion.div 
whileHover={{scale:1.02}}
className="h-64 rounded-2xl flex flex-col items-center justify-center bg-white/60 backdrop-blur-lg border border-dashed border-gray-300 text-gray-500 shadow-inner">

 <span className="text-4xl mb-3">  <FaBookOpen className="text-cyan-400 text-sm md:text-base size-10" /></span>
 <p className="text-sm"> Generated Notes Will Appear Here</p>

</motion.div>}

    </div>
  );
}

export default Notes;