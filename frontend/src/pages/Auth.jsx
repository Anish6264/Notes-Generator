import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import axios from "axios";
import { serverUrl } from "../App";

import {
  FaGift,
  FaBookOpen,
  FaFolderOpen,
  FaChartLine,
  FaFilePdf,
} from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";


function Auth() {
const dispatch=useDispatch()


  const handleGoogleSignIn = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
const name = user.displayName;
const email = user.email;
const image = user.photoURL;

      const result = await axios.post(
  `${serverUrl}/api/auth/google`,
  { name, email, image },
  { withCredentials: true }
);
      console.log(result.data);
        dispatch(setUserData(result.data.user));
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      
    }
  } 

  return (
    <div className="min-h-screen overflow-hidden bg-white text-black px-8 ">
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="max-w-7xl mx-auto mt-8 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-6 shadow-[0_20px_45px_rgba(0,0,0,0.6)]"
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Exam Notes Ai
        </h1>

        <p className="text-sm text-gray-300 mt-1">
          AI-powered smart notes, revision sheets & exam preparation
        </p>
      </motion.header>

      <main className="max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-black/90 via-black/60 to-black/90 bg-clip-text text-transparent">
            Unlock Smart <br /> AI Notes
          </h1>

          <motion.button
          onClick={handleGoogleSignIn}
            whileHover={{
              y: -10,
              rotateX: 8,
              rotateY: -8,
              scale: 1.07,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 18,
            }}
            className=" mt-10 px-10 py-3 rounded-xl flex items-center gap-3 bg-gradient-to-br from-black/90 via-black/80 to-black/90 border border-white/10 text-white font-semibold text-lg shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
          >
            <FcGoogle size={22} />
            Continue with Google
          </motion.button>

          <p className="mt-6 max-w-xl text-lg bg-gradient-to-br from-gray-700 via-gray-500/80 to-gray-700 bg-clip-text text-transparent leading-relaxed">
            Generate high-quality AI-powered exam notes, project summaries,
            flowcharts, mind maps, and downloadable PDFs in seconds — designed
            to help students study smarter and revise faster.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Get instant access with 50 free AI credits • No setup required •
            Upgrade anytime for unlimited note generation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<Feature
  icon={<FaGift className="text-pink-400" />}
  title="50 Free AI Credits"
  des="Start instantly with complimentary AI credits and generate professional academic content without any upfront cost."
/>

<Feature
  icon={<FaBookOpen className="text-blue-400" />}
  title="Exam-Focused Notes"
  des="Generate concise, high-yield revision notes tailored for exams, quick learning, and faster preparation."
/>

<Feature
  icon={<FaFolderOpen className="text-yellow-400" />}
  title="Project Documentation"
  des="Create well-structured project reports, assignment notes, and organized technical documentation effortlessly."
/>

<Feature
  icon={<FaChartLine className="text-green-400" />}
  title="Charts & Visual Diagrams"
  des="Automatically generate graphs, charts, flow diagrams, and visual study materials for better understanding."
/>

<Feature
  icon={<FaFilePdf className="text-red-400" />}
  title="Instant PDF Export"
  des="Download clean, printable, and professionally formatted PDF notes instantly with a single click."
/>
        </div>
      </main>
    </div>
  );
}

function Feature({ icon, title, des }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        rotateX: 8,
        rotateY: -8,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 18,
      }}
      className="relative rounded-2xl p-6 bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.7)] text-white"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="relative z-10"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="text-4xl mb-3 text-white">{icon}</div>

        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        <p className="text-gray-300 text-sm leading-relaxed">{des}</p>
      </div>
    </motion.div>
  );
}

export default Auth;