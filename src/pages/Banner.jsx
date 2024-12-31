import { easeOut, motion } from "framer-motion";
import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 5, repeat: Infinity }}
              src={team1}
              className="max-w-sm w-64 rounded-tl-[40px]  border-l-4 border-b-4 border-blue-700 shadow-2xl"
            />
            <motion.img
              animate={{ x: [50, 100, 50] }}
              transition={{ duration: 5, delay: 5, repeat: Infinity }}
              src={team2}
              className="max-w-sm w-64 rounded-tl-[40px]  border-l-4 border-b-4 border-blue-700 shadow-2xl"
            />
          </div>
          <div>
            <motion.h1
              animate={{ x: 30, color: ["green"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1,
                ease: easeOut,
              }}
              className="text-5xl font-bold"
            >
              Latest{" "}
              <motion.span
                animate={{ color: ["#5b33ff", "#e933ff"] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
              >
                Jobs
              </motion.span>{" "}
              For you!
            </motion.h1>
            <p className="py-8">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut 
              excepturi exercitationem quasi. In deleniti eaque aut
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
