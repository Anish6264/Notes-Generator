import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-gradient-to-br from-black via-black/95 to-black/90 text-white mt-24">
      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <motion.h1
              whileHover={{ scale: 1.03 }}
              className="text-3xl font-black tracking-tight"
            >
              Exam Notes <span className="text-blue-500">AI</span>
            </motion.h1>

            <p className="mt-5 text-gray-400 leading-relaxed text-sm">
              AI-powered learning platform designed to help students generate
              smart notes, summaries, visual diagrams, and downloadable PDFs in
              seconds.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-6">
              <SocialIcon
                icon={<FaGithub />}
                link="https://github.com"
              />

              <SocialIcon
                icon={<FaLinkedin />}
                link="https://linkedin.com"
              />

              <SocialIcon
                icon={<FaInstagram />}
                link="https://instagram.com"
              />

              <SocialIcon
                icon={<FaXTwitter />}
                link="https://x.com"
              />
            </div>
          </div>

          {/* FEATURES */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Features
            </h3>

            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              <FooterLink
                text="AI Exam Notes"
                onClick={() => navigate("/notes")}
              />

              <FooterLink
                text="Project Summaries"
                onClick={() => navigate("/notes")}
              />

              <FooterLink
                text="Flowcharts & Diagrams"
                onClick={() => navigate("/notes")}
              />

              <FooterLink
                text="PDF Downloads"
                onClick={() => navigate("/notes")}
              />

              <FooterLink
                text="AI Revision Sheets"
                onClick={() => navigate("/notes")}
              />
            </div>
          </div>

          {/* PLATFORM */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Platform
            </h3>

            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              <FooterLink
                text="Home"
                onClick={() => navigate("/")}
              />

              <FooterLink
                text="Notes"
                onClick={() => navigate("/notes")}
              />

              <FooterLink
                text="History"
                onClick={() => navigate("/history")}
              />

              <FooterLink
                text="Pricing"
                onClick={() => navigate("/pricing")}
              />
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Have questions, suggestions, or feedback? Reach out anytime and
              we’ll be happy to help.
            </p>

            <motion.a
              href="mailto:notes@gmail.com"
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white font-medium shadow-[0_15px_45px_rgba(59,130,246,0.35)]"
            >
              <FaEnvelope />

              notes@gmail.com
            </motion.a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Exam Notes AI. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <motion.span
              whileHover={{
                color: "#ffffff",
              }}
              onClick={() => navigate("/")}
              className="cursor-pointer transition-colors"
            >
              Privacy
            </motion.span>

            <motion.span
              whileHover={{
                color: "#ffffff",
              }}
              onClick={() => navigate("/")}
              className="cursor-pointer transition-colors"
            >
              Terms
            </motion.span>

            <motion.span
              whileHover={{
                color: "#ffffff",
              }}
              onClick={() => navigate("/")}
              className="cursor-pointer transition-colors"
            >
              Support
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ text, onClick }) {
  return (
    <motion.span
      onClick={onClick}
      whileHover={{
        x: 5,
        color: "#ffffff",
      }}
      className="cursor-pointer transition-all duration-300"
    >
      {text}
    </motion.span>
  );
}

function SocialIcon({ icon, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -4,
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
    >
      {icon}
    </motion.a>
  );
}

export default Footer;