import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios"
import { serverUrl } from "../App";

function Pricing() {
  const navigate = useNavigate();

  const [selectedPrice, setSelectedPrice] = useState(null);
  const [paying, setPaying] = useState(false);
  const [payingAmount, setPayingAmount] = useState(null);
  const handelPaying = async (amount) => {
    try {

      setPayingAmount(amount);
      setPaying(true);
      const result = await axios.post(serverUrl+"/api/credit/order",{amount},{withCredentials:true})
      if(result.data.url){
        window.location.href = result.data.url
      }
setPaying(false);
    } catch (error) {
      setPaying(false);
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 px-6 py-10 relative overflow-hidden">
      {/* BG BLUR */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-indigo-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-purple-300/20 blur-3xl rounded-full"></div>

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition"
      >
        ⬅️ Back
      </button>

      {/* HEADING */}
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Upgrade Your Learning
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Unlock AI-powered notes, diagrams, charts, and premium exam
          preparation.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        {/* STARTER */}
        <PricingCard
          title="Starter"
          price="₹100"
          amount={100}
          credits="50 Credits"
          description="Perfect for quick revisions and practice"
          features={[
            "Generate AI notes",
            "Exam-focused answers",
            "Diagram & charts support",
            "Fast generation",
          ]}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          onBuy={handelPaying}
          paying={paying}
          payingAmount={payingAmount}
        />

        {/* STANDARD */}
        <PricingCard
          title="Standard"
          price="₹249"
          amount={249}
          credits="150 Credits"
          description="Best for semester and school preparation"
          features={[
            "Detailed AI notes",
            "Revision mode",
            "Flowcharts & diagrams",
            "PDF export support",
          ]}
          popular={true}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          onBuy={handelPaying}
          paying={paying}
          payingAmount={payingAmount}
        />

        {/* PRO */}
        <PricingCard
          title="Pro"
          price="₹499"
          amount={499}
          credits="400 Credits"
          description="Advanced learning with premium generation"
          features={[
            "Unlimited revisions",
            "Advanced explanations",
            "Priority AI generation",
            "Detailed charts & visuals",
          ]}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          onBuy={handelPaying}
          paying={paying}
          payingAmount={payingAmount}
        />

        {/* ULTIMATE */}
        <PricingCard
          title="Ultimate"
          price="₹999"
          amount={999}
          credits="1000 Credits"
          description="Complete AI study ecosystem for toppers"
          features={[
            "Maximum credits",
            "Full premium experience",
            "Best AI response quality",
            "Perfect for placements & exams",
          ]}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          onBuy={handelPaying}
          paying={paying}
          payingAmount={payingAmount}
        />
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  amount,
  credits,
  description,
  features,
  popular,
  selectedPrice,
  setSelectedPrice,
  onBuy,
  paying,
  payingAmount,
}) {
  const isSelected = selectedPrice === amount;

  const isPayingThisCard = paying && payingAmount === amount;

  return (
    <motion.div
      onClick={() => setSelectedPrice(amount)}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
      }}
      className={`
        relative cursor-pointer
        rounded-3xl p-7 bg-white/90 backdrop-blur-xl
        border shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        transition-all overflow-hidden
        
        ${
          isSelected
            ? "border-black shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
            : popular
              ? "border-indigo-500"
              : "border-gray-200"
        }
      `}
    >
      {/* GLOW */}
      <div className="absolute top-0 right-0 h-28 w-28 bg-indigo-200/30 blur-3xl rounded-full"></div>

      {/* BADGES */}
      {popular && !isSelected && (
        <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
          Most Popular
        </span>
      )}

      {isSelected && (
        <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-black text-white">
          Selected
        </span>
      )}

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
        {description}
      </p>

      {/* PRICE */}
      <div className="mt-6">
        <p className="text-4xl font-black text-gray-900">{price}</p>

        <p className="text-sm text-indigo-600 font-medium mt-1">{credits}</p>
      </div>

      {/* BUTTON */}
      <button
        disabled={isPayingThisCard}
        onClick={(e) => {
          e.stopPropagation();

          onBuy(amount);
        }}
        className={`
          w-full mt-7 py-3 rounded-2xl
          font-semibold transition-all
        
          ${
            isPayingThisCard
              ? "bg-gray-300 cursor-not-allowed text-gray-600"
              : isSelected
                ? "bg-black text-white hover:opacity-90"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg"
          }
        `}
      >
        {isPayingThisCard ? "Redirecting..." : "Buy Now"}
      </button>

      {/* FEATURES */}
      <ul className="mt-7 space-y-3 text-sm text-gray-700">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-green-600 mt-0.5">✔</span>

            <span>{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Pricing;
