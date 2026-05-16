import { motion } from "framer-motion";

import {
  FaCircleCheck,
  FaArrowRight,
  FaStar,
} from "react-icons/fa6";

import {
  useNavigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";


function PaymentSuccess() {

  const navigate = useNavigate();
  const [countdown, setCountdown] =
    useState(5);
  // AUTO REDIRECT
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }

        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(timer);

  }, [navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-6 py-10">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 h-80 w-80 bg-green-300/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 bg-emerald-300/20 blur-3xl rounded-full"></div>

      {/* FLOATING ORBS */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
        }}

        className="absolute top-16 left-12 h-24 w-24 rounded-full bg-green-200/20 backdrop-blur-xl"
      />

      <motion.div
        animate={{
          y: [0, 22, 0],
          rotate: [0, -8, 0],
        }}

        transition={{
          duration: 7,
          repeat: Infinity,
        }}

        className="absolute bottom-16 right-12 h-32 w-32 rounded-full bg-emerald-200/20 backdrop-blur-xl"
      />

      {/* MAIN CARD */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.88,
          y: 40,
        }}

        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}

        transition={{
          duration: 0.7,
          type: "spring",
        }}

        className="relative z-10 w-full max-w-2xl rounded-[2.5rem] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_30px_90px_rgba(16,185,129,0.18)] overflow-hidden"
      >

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-52 w-52 bg-green-300/20 blur-3xl rounded-full"></div>

        {/* CONTENT */}
        <div className="relative z-10 p-10 md:p-14 text-center">

          {/* SUCCESS BADGE */}
          <motion.div
            initial={{
              scale: 0,
              rotate: -180,
            }}

            animate={{
              scale: 1,
              rotate: 0,
            }}

            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 180,
            }}

            className="relative mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 flex items-center justify-center shadow-[0_25px_70px_rgba(16,185,129,0.4)]"
          >

            {/* RING */}
            <motion.div
              animate={{
                scale: [1, 1.18, 1],
                opacity: [0.6, 0.2, 0.6],
              }}

              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}

              className="absolute inset-0 rounded-full border-4 border-green-300"
            />

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <FaCircleCheck className="text-white text-7xl" />
            </motion.div>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 15,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.35,
            }}

            className="mt-10 text-5xl font-black bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent"
          >
            Payment Successful
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.5,
            }}

            className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto"
          >
            Your premium credits have been added
            successfully. You now have access to
            AI-powered smart notes, advanced
            diagrams, revision sheets, and detailed
            exam preparation tools.
          </motion.p>

          {/* SUCCESS INFO BOX */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              delay: 0.7,
            }}

            className="mt-10 rounded-[2rem] bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 p-7"
          >

            <div className="flex items-center justify-center gap-3">

              <div className="h-14 w-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
                <FaStar className="text-green-600 text-2xl" />
              </div>

              <div className="text-left">
                <p className="text-sm uppercase tracking-wider text-green-700 font-semibold">
                  Premium Features Activated
                </p>

                <h2 className="text-2xl font-black text-green-700 mt-1">
                  Credits Added Successfully 🎉
                </h2>
              </div>
            </div>
          </motion.div>

          {/* REDIRECT INFO */}
          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 0.9,
            }}

            className="mt-8 flex items-center justify-center gap-3 text-gray-600"
          >

            <motion.div
              animate={{
                x: [0, 6, 0],
              }}

              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <FaArrowRight className="text-green-600" />
            </motion.div>

            <p className="text-base font-medium">
              Redirecting to home page in{" "}
              <span className="font-black text-green-600 text-xl">
                {countdown}
              </span>{" "}
              seconds...
            </p>
          </motion.div>

          {/* PROGRESS BAR */}
          <div className="mt-6 h-3 w-full rounded-full bg-green-100 overflow-hidden">

            <motion.div
              initial={{
                width: "100%",
              }}

              animate={{
                width: "0%",
              }}

              transition={{
                duration: 5,
                ease: "linear",
              }}

              className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
            />
          </div>

          {/* BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 1,
            }}

            className="mt-10 flex flex-col sm:flex-row gap-4"
          >

            <motion.button
              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: 0.97,
              }}

              onClick={() =>
                navigate("/notes")
              }

              className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-semibold shadow-[0_15px_40px_rgba(16,185,129,0.35)]"
            >
              Generate Notes
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: 0.97,
              }}

              onClick={() =>
                navigate("/")
              }

              className="flex-1 py-4 rounded-2xl border border-gray-200 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition"
            >
              Back To Home
            </motion.button>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}

export default PaymentSuccess;