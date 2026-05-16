import { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../App";
import { AnimatePresence, motion } from "motion/react";
import { FaCoins, FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import FinalResult from "../components/FinalRessult";

function History() {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const credits = userData?.credits || 0;
  const [topics, setTopics] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const[activeNodeId,setActiveNodeId]=useState(null)
  const [selectedNote,setSelectedNote] = useState(null)
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    const myNotes = async () => {
      try {
        const res = await axios.get(serverUrl + "/api/notes/getnotes", {
          withCredentials: true,
        });
        console.log(res.data);
       setTopics(
    Array.isArray(res.data)
        ? res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        : []
);
      } catch (error) {
        error;
      }
    };
    myNotes();
  }, []);

  const openNotes = async (noteId)=>{
    setLoading(true)
    setActiveNodeId(noteId)
    try {
      const res=await axios.get(serverUrl +`/api/notes/${noteId}`,{withCredentials:true})

      setSelectedNote(res.data.content)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsSidebarOpen(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-8">
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
    mb-10
    rounded-2xl
    bg-black/80 backdrop-blur-xl
    border border-white/10
    px-8 py-6 items-start
    flex justify-between md:items-center gap-4 flex-wrap
    shadow-[0_20px_45px_rgba(0,0,0,0.6)]
"
      >
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Exam Notes AI
          </h1>

          <p className="text-sm text-gray-300 mt-1">
            AI-powered smart notes, revision sheets & exam preparation
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-white text-2xl"
            >
              <GiHamburgerMenu />
            </button>
          )}

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
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5"></div>

            <div className="relative flex items-center justify-center">
              <div className="absolute h-12 w-12 rounded-full bg-cyan-400/10 blur-xl"></div>

              <div className="relative h-11 w-11 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 flex items-center justify-center">
                <FaCoins className="text-yellow-400 text-lg" />
              </div>
            </div>

            <div className="relative flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Available
              </span>

              <div className="flex items-end gap-1">
                <span className="text-2xl font-black text-white">
                  {credits}
                </span>

                <span className="text-xs text-gray-400 mb-1">credits</span>
              </div>
            </div>

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
        </div>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed lg:static
        top-0 left-0 z-50 lg:z-auto
        w-72 lg:w-auto
        h-full lg:h-[75vh]
        lg:rounded-3xl
        lg:col-span-1
        bg-black/90 lg:bg-black/80
        backdrop-blur-xl
        border border-white/10
        shadow-[0_20px_45px_rgba(0,0,0,0.6)]
        p-5
        overflow-y-auto"
            >
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden text-white mb-4"
              >
                ⬅️ back
              </button>

              <div className="mb-4 space-y-1">
                <button
                  onClick={() => navigate("/notes")}
                  className="w-full px-3 py-2
        rounded-lg text-sm text-gray-200 bg-white/10
        text-start hover:bg-white/20"
                >
                  ➕ New Notes
                </button>

                <hr className="border-white/10 mb-4" />

                <h2
                  className="mb-4 text-lg font-bold bg-gradient-to-r
        from-white via-gray-300 to-white
        bg-clip-text text-transparent"
                >
                  📚 Your Notes
                </h2>

                {topics.length === 0 && (
                  <p className="text-sm text-gray-400">No Notes created yet</p>
                )}

                <ul className="space-y-3">
                  {topics.map((t, i) => (
                    <li
                      key={i}
                      onClick={()=>(openNotes(t._id))}
                      className={`cursor-pointer rounded-xl p-3 border transition-all
                        ${
                          activeNodeId===t._id
                          ?"bg-indigo-500/30 border-indigo-400 shadow-[0_0_0_1px_rgba(99,102,241,0.6)]"
                          :"bg-white/5 border-white/10 hover:bg-white/10"
                        }
                        `}
                    >
                      <p className="text-sm font-semibold text-white">
                        {t.topic}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-2 text-xs">
                        {t.classLevel && (
                          <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                            ClassLevel : {t.classLevel}
                          </span>
                        )}

                        {t.examType && (
                          <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                            examType: {t.examType}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3 mt-2 text-xs text-gray-300">
                        {t.revisionMode && <span>⚡ Revision</span>}
                        {t.includeDiagram && <span>📊 Diagram</span>}
                        {t.includeChart && <span>📈 Chart</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

<motion.div

    initial={{ opacity: 0, y: -15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className='lg:col-span-3
    rounded-2xl
    bg-white
    shadow-[0_15px_40px_rgba(0,0,0,0.15)]
    p-6
    min-h-[75vh]'

>

    {loading && (
        <p className="text-center text-gray-500">
            Loading notes…
        </p>
    )}

    {!loading && !selectedNote && (
        <div className="h-full flex items-center justify-center text-gray-400">
            Select a topic from the left
        </div>
    )}

    {!loading && selectedNote && <FinalResult result={selectedNote}/>}

</motion.div>


      </div>
    </div>
  );
}

export default History;
