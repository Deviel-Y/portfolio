"use client";

import { motion, MotionConfig } from "motion/react";
import SkillTags from "../components/SkillTags";

const Intuduction = () => {
 return (
  <motion.section
   initial={{ opacity: 0, y: -30 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{
    type: "spring",
    stiffness: 700,
    damping: 25,
   }}
   className="flex flex-col gap-5 w-full justify-center items-center pt-10"
  >
   <div className="flex flex-row justify-center gap-10 items-center">
    <MotionConfig transition={{ delay: 0.5, duration: 0.45, ease: "easeOut" }}>
     <motion.p
      initial={{ x: 40 }}
      animate={{ x: 0 }}
      className="inline-block text-7xl font-bold bg-radial from-[#4A49D7] from-40% to-[#8734E1] bg-clip-text text-transparent py-1"
     >
      Daniel Yadghar
     </motion.p>

     <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-20 h-20 rounded-full bg-blue-300 "
     />
    </MotionConfig>
   </div>

   <p className="text-4xl font-bold">Full Stack Web Developer</p>

   <p className="text-gray-600 text-xl w-1/2 text-center px-10">
    I craft end-to-end web solutions with years of experience building scalable
    applications using modern frameworks and tools.
   </p>

   <div className="flex flex-row gap-3 justify-center items-center">
    {skils.map((skill, index) => (
     <SkillTags
      key={index}
      backgroundColor={skill.style.backgroundColor}
      textColor={skill.style.textColor}
     >
      {skill.name}
     </SkillTags>
    ))}
   </div>
  </motion.section>
 );
};

export default Intuduction;

const skils: {
 name: string;
 style: { textColor: string; backgroundColor: string };
}[] = [
 {
  name: "JavaScript",
  style: { backgroundColor: "bg-yellow-200", textColor: "text-yellow-900" },
 },

 {
  name: "TypeScript",
  style: { backgroundColor: "bg-blue-300", textColor: "text-blue-950" },
 },

 {
  name: "Node.JS",
  style: { backgroundColor: "bg-green-200", textColor: "text-green-900" },
 },

 {
  name: "Next.Js",
  style: { backgroundColor: "bg-gray-300", textColor: "text-gray-900" },
 },
];
