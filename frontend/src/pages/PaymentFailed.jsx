import { motion } from "framer-motion";

import {
  FaCircleXmark,
  FaTriangleExclamation,
  FaArrowRotateLeft,
} from "react-icons/fa6";

import {
  useNavigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

function PaymentFailed() {

  const navigate = useNavigate();

  const [countdown, setCountdown] =
    useState(5);

  // AUTO REDIRECT
  useEffect(() => {

    const timer = setInterval(() => {

      setCountdown((prev) => {

        if (prev <= 1) {

          clearInterval(timer);

          navigate("/pricing");

          return 0;
        }

        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(timer);

  }, [navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-rose-100 flex items-center justify-center px-6 py-10">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 h-80 w-80 bg-red-300/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 bg-rose-300/20 blur-3xl rounded-full"></div>

      {/* FLOATING SHAPES */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
        }}

        className="absolute top-20 left-16 h-24 w-24 rounded-full bg-red-200/20"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -8, 0],
        }}

        transition={{
          duration: 7,
          repeat: Infinity,
        }}

        className="absolute bottom-20 right-16 h-32 w-32 rounded-full bg-rose-200/20"
      />

      {/* CARD */}
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

        className="relative z-10 w-full max-w-2xl rounded-[2.5rem] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_30px_90px_rgba(239,68,68,0.18)] overflow-hidden"
      >

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-52 w-52 bg-red-300/20 blur-3xl rounded-full"></div>

        {/* CONTENT */}
        <div className="relative z-10 p-10 md:p-14 text-center">

          {/* FAILED ICON */}
          <motion.div
            initial={{
              scale: 0,
              rotate: 180,
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

            className="relative mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-red-400 via-rose-500 to-red-600 flex items-center justify-center shadow-[0_25px_70px_rgba(239,68,68,0.35)]"
          >

            {/* PULSE RING */}
            <motion.div
              animate={{
                scale: [1, 1.18, 1],
                opacity: [0.6, 0.2, 0.6],
              }}

              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}

              className="absolute inset-0 rounded-full border-4 border-red-300"
            />

            <FaCircleXmark className="text-white text-7xl" />
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

            className="mt-10 text-5xl font-black bg-gradient-to-r from-red-600 via-rose-500 to-red-700 bg-clip-text text-transparent"
          >
            Payment Failed
          </motion.h1>

          {/* SUBTEXT */}
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
            Your transaction could not be completed.
            This may happen due to network issues,
            payment cancellation, or card verification
            failure.
          </motion.p>

          {/* WARNING BOX */}
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

            className="mt-10 rounded-[2rem] bg-gradient-to-r from-red-100 to-rose-100 border border-red-200 p-7"
          >

            <div className="flex items-center justify-center gap-3">

              <div className="h-14 w-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
                <FaTriangleExclamation className="text-red-600 text-2xl" />
              </div>

              <div className="text-left">
                <p className="text-sm uppercase tracking-wider text-red-700 font-semibold">
                  Transaction Incomplete
                </p>

                <h2 className="text-2xl font-black text-red-700 mt-1">
                  No Credits Were Deducted
                </h2>
              </div>
            </div>
          </motion.div>

          {/* REDIRECT TEXT */}
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
                rotate: [0, 180, 360],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <FaArrowRotateLeft className="text-red-600" />
            </motion.div>

            <p className="text-base font-medium">
              Redirecting to pricing page in{" "}
              <span className="font-black text-red-600 text-xl">
                {countdown}
              </span>{" "}
              seconds...
            </p>
          </motion.div>

          {/* PROGRESS BAR */}
          <div className="mt-6 h-3 w-full rounded-full bg-red-100 overflow-hidden">

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

              className="h-full rounded-full bg-gradient-to-r from-red-500 to-rose-500"
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
                navigate("/pricing")
              }

              className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-red-500 via-rose-500 to-red-600 text-white font-semibold shadow-[0_15px_40px_rgba(239,68,68,0.35)]"
            >
              Try Again
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

export default PaymentFailed;