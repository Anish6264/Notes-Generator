import { AnimatePresence, motion } from "framer-motion";

import {
  FaCoins,
  FaArrowRightFromBracket,
  FaClockRotateLeft,
} from "react-icons/fa6";

import logo from "../assets/logo.png";

import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";

import { setUserData } from "../redux/userSlice";

import axios from "axios";

import { serverUrl } from "../App";

import { useNavigate } from "react-router-dom";

function NavBar() {
  const { userData } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [showCredits, setShowCredits] = useState(false);

  const [showProfile, setShowProfile] = useState(false);

  const handleCredits = () => {
    setShowCredits(!showCredits);

    setShowProfile(false);
  };

  const handleProfile = () => {
    setShowProfile(!showProfile);

    setShowCredits(false);
  };

  const handleSignOut = async () => {
    try {
      await axios.get(
        serverUrl + "/api/auth/logout",
        {
          withCredentials: true,
        }
      );

      dispatch(setUserData(null));

      navigate("/auth");
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      className="relative z-20 mx-4 md:mx-6 mt-5 md:mt-6 rounded-2xl bg-gradient-to-br from-black via-black/90 to-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_22px_55px_rgba(0,0,0,0.75)] flex items-center justify-between px-4 md:px-8 py-4"
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <motion.img
          whileHover={{
            rotate: 10,
            scale: 1.08,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
          src={logo}
          alt="Logo"
          className="w-10 h-10 md:w-11 md:h-11 rounded-2xl shadow-lg border border-white/10"
        />

        <div>
          <h1 className="text-white font-bold text-base md:text-xl tracking-wide">
            Exam Notes <span className="text-blue-500">AI</span>
          </h1>

          <p className="text-[11px] md:text-xs text-gray-400 hidden md:block">
            AI-powered smart learning & revision platform
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 md:gap-5 relative">
        {/* CREDITS */}
        <div className="relative">
          <motion.div
            onClick={handleCredits}
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="flex items-center gap-3 px-3 md:px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/10 border border-blue-400/20 text-white shadow-[0_10px_35px_rgba(59,130,246,0.25)] cursor-pointer"
          >
            <div className="p-2 rounded-full bg-blue-500/20">
              <FaCoins className="text-yellow-400 text-sm md:text-lg" />
            </div>

            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-wider text-gray-300">
                Credits
              </span>

              <span className="font-bold text-sm md:text-base">
                {userData?.credits || 0}
              </span>
            </div>

            <motion.span
              whileHover={{
                rotate: 90,
              }}
              className="h-5 w-5 hidden md:flex items-center justify-center rounded-full bg-white text-black text-xs font-bold"
            >
              +
            </motion.span>
          </motion.div>

          {/* CREDITS POPUP */}
          <AnimatePresence>
            {showCredits && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 10,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="absolute right-0 mt-4 w-72 rounded-3xl bg-black/95 backdrop-blur-2xl border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.75)] p-5 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-500/20">
                    <FaCoins className="text-yellow-400 text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">
                      AI Credit Balance
                    </h4>

                    <p className="text-sm text-gray-400">
                      Use credits to generate premium AI-powered study notes,
                      summaries, and PDFs.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 mb-4">
                  <p className="text-sm text-gray-400">
                    Available Credits
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    {userData?.credits || 0}
                  </h2>
                </div>

                <motion.button
                  onClick={() => {
                    setShowCredits(false);

                    navigate("/pricing");
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg"
                >
                  Upgrade Credits
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* PROFILE */}
        <div className="relative">
          <motion.div
            onClick={handleProfile}
            whileHover={{
              scale: 1.08,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="h-11 w-11 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg cursor-pointer shadow-[0_10px_35px_rgba(59,130,246,0.35)] border border-white/20"
          >
             {userData?.name?.charAt(0).toUpperCase() || "U"}
          </motion.div>

          {/* PROFILE POPUP */}
          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 10,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="absolute right-0 mt-4 w-64 rounded-3xl bg-black/95 backdrop-blur-2xl border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.75)] overflow-hidden"
              >
                <div className="p-5 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                       {userData?.name?.charAt(0).toUpperCase() || "U"}
                    </div>

                    <div>
                      <h3 className="text-white font-semibold">
                        {userData?.name || "User"}
                      </h3>

                      <p className="text-sm text-gray-400 truncate max-w-[140px]">
                        {userData?.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <MenuItem
                    text="History"
                    icon={
                      <FaClockRotateLeft className="text-cyan-400" />
                    }
                    onClick={() => {
                      setShowProfile(false);

                      navigate("/history");
                    }}
                  />

                  <MenuItem
                    text="Logout"
                    icon={
                      <FaArrowRightFromBracket className="text-red-400" />
                    }
                    onClick={handleSignOut}
                    red
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function MenuItem({
  text,
  icon,
  onClick,
  red,
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        x: 5,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 text-left mb-2
      ${
        red
          ? "hover:bg-red-500/20 text-red-400 hover:text-red-300"
          : "hover:bg-white/10 text-gray-200"
      }`}
    >
      <span className="text-lg">
        {icon}
      </span>

      <span className="font-medium">
        {text}
      </span>
    </motion.button>
  );
}

export default NavBar;