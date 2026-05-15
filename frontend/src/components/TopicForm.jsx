import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { generateNotes } from "../services/api";
import { useDispatch } from "react-redux";
import { updateCredits } from "../redux/userSlice";

function TopicForm({ setResult, setLoading, loading, setError }) {
  const [topic, setTopics] = useState("");

  const [classLevel, setClassLevel] = useState("");

  const [examType, setExamType] = useState("");

  const [revisionMode, setRevisionMode] = useState(false);

  const [includeDiagrams, setIncludeDiagrams] = useState(false);

  const [includeCharts, setIncludeCharts] = useState(false);

  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    if (!topic.trim()) {
      setError("please enter the topic");
      return;
    }
    setError("");
    setLoading(true);
    setResult(null);
    try {
      const result = await generateNotes({
        topic,
        classLevel,
        examType,
        revisionMode,
        includeDiagrams,
        includeCharts,
      });

      setResult(result.data);
      setLoading(false);
      setClassLevel("")
      setTopics("")
      setExamType("")
      setIncludeCharts(false)
      setIncludeDiagrams(false)
      setRevisionMode(false)

if(typeof result.creditLeft==="number"){
dispatch(updateCredits(result.creditLeft
))
}

    } catch (error) {
      console.log(error);
      setError("failed to fetch notes from server");
      setLoading(false);
    }
  };

  useEffect(()=>{
if(!loading){
    setProgress(0),
    setProgressText("")
}
let value =0;
const interval=setInterval(()=>{
value+=Math.random()*8

if(value>=95){
    value=95;
    setProgressText("Almost Done...");
    clearInterval(interval);
}else if(value>70){
    setProgressText("finalizing notes...");
}else if(value>40){
    setProgressText("processing content...");
}else{
    setProgressText("Generating notes...")
}

setProgress(Math.floor(value))

},700)

return ()=> clearInterval(interval);

  },[loading])

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-3xl bg-gradient-to-br from-black/95 via-black/90 to-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.75)] p-6 md:p-8 space-y-7 text-white relative overflow-hidden"
    >
      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* HEADING */}
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Generate Smart AI Notes
        </h2>

        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Enter your study requirements and generate professional AI-powered
          notes instantly.
        </p>
      </div>

      {/* TOPIC */}
      <div className="relative z-10">
        <label className="text-sm text-gray-300 mb-2 block font-medium">
          Study Topics
        </label>

        <input
          type="text"
          className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/30 transition-all"
          placeholder="e.g. Operating Systems, DBMS, Machine Learning"
          onChange={(e) => setTopics(e.target.value)}
          value={topic}
        />
      </div>

      {/* CLASS LEVEL */}
      <div className="relative z-10">
        <label className="text-sm text-gray-300 mb-2 block font-medium">
          Academic Level
        </label>

        <input
          type="text"
          className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/30 transition-all"
          placeholder="e.g. Class 12, B.Tech CSE, Competitive Exams"
          onChange={(e) => setClassLevel(e.target.value)}
          value={classLevel}
        />
      </div>

      {/* EXAM TYPE */}
      <div className="relative z-10">
        <label className="text-sm text-gray-300 mb-2 block font-medium">
          Exam Type
        </label>

        <input
          type="text"
          className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/30 transition-all"
          placeholder="e.g. Semester Exam, Mid-Term, Placement Preparation"
          onChange={(e) => setExamType(e.target.value)}
          value={examType}
        />
      </div>

      {/* TOGGLES */}
      <div className="relative z-10 pt-2 flex flex-col md:flex-row gap-4">
        <Toggle
          label="Revision Mode"
          subText="Generate concise revision-focused notes"
          checked={revisionMode}
          onChange={() => setRevisionMode(!revisionMode)}
        />

        <Toggle
          label="Include Diagrams"
          subText="Add visual explanations and flow diagrams"
          checked={includeDiagrams}
          onChange={() => setIncludeDiagrams(!includeDiagrams)}
        />

        <Toggle
          label="Include Charts"
          subText="Generate charts and structured visual summaries"
          checked={includeCharts}
          onChange={() => setIncludeCharts(!includeCharts)}
        />
      </div>

      <motion.button
        onClick={handleSubmit}
        whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
        whileTap={!loading ? { scale: 0.95 } : {}}
        disabled={loading}
        className={`w-full py-3 mt-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition ${
          loading
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-gradient-to-br from-white to gray-200 text-black shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
        }`}
      >
        {loading ? "Generating Notes..." : "Generate Notes"}
      </motion.button>

{loading &&
    <div className="mt-4 space-y-2">
    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
    <motion.div
    initial={{width:0}}
    animate={{width:`${progress}%`}}
    transition={{ease:"easeOut",duration:0.6}}
    className="h-full bg-gradient-to-r from-green-400 via-emerald-400 to-green-500"></motion.div>
    </div>
    <div className="flex justify-between text-xs text-gray-300">
        <span>{progressText}</span>
         <span>{progress}%</span>
    </div>

  <p className="test-xs text-gray-400 text-center">
    this may take up to 2-5 minutes. please do not close or refresh the page 
  </p>
    </div>}

    </motion.div>
  );
}

function Toggle({ label, subText, checked, onChange }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
      }}
      className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 cursor-pointer select-none"
      onClick={onChange}
    >
      {/* TEXT */}
      <div>
        <h4
          className={`font-medium transition-colors ${
            checked ? "text-white" : "text-gray-300"
          }`}
        >
          {label}
        </h4>

        <p className="text-xs text-gray-500 mt-1">{subText}</p>
      </div>

      {/* TOGGLE */}
      <motion.div
        animate={{
          backgroundColor: checked
            ? "rgba(34,197,94,0.35)"
            : "rgba(255,255,255,0.1)",
        }}
        transition={{
          duration: 0.25,
        }}
        className="relative w-14 h-7 rounded-full border border-white/10 backdrop-blur-lg"
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          className="absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
          style={{
            left: checked ? "1.85rem" : "0.20rem",
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TopicForm;
