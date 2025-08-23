"use client";

import { skill } from "@/prisma/generated/client/client";
import { Skill_Type } from "@/prisma/generated/client/enums";
import { motion } from "motion/react";

interface Props {
 skills: skill[];
}

const SkillList = ({ skills }: Props) => {
 const skillTypes = Object.values(Skill_Type);

 return (
  <motion.section
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 0.25, delay: 0.5 }}
   className="w-2/3 flex flex-row justify-center shadow-lg border border-[#e0e0e0] p-4 rounded-lg h-64"
  >
   {skillTypes.map((type) => (
    <motion.div
     initial="initialState"
     whileHover="hoverState"
     transition={{ duration: 0.05, type: "spring" }}
     variants={{
      initialState: {
       borderWidth: 2,
       borderColor: "transparent",
       background: sectionMapping[type].initialBackgroundColor,
      },
      hoverState: {
       borderWidth: 2,
       borderColor: sectionMapping[type].borderColor,
       background: sectionMapping[type].animateBackgroundColor,
      },
     }}
     className={`flex flex-col gap-5 p-3 justify-between items-start w-full m-5 rounded-lg transition-all`}
     key={type}
    >
     {skills.length > 0 ? (
      <div className="flex flex-col gap-5">
       <p
        className={`${sectionMapping[type].titleColor} text-lg font-semibold`}
       >
        {sectionMapping[type].label}
       </p>

       <ul className="text-start list-disc list-inside list">
        {skills
         .filter((s) => s.skillType === type)
         .map((skill) => (
          <li
           className={`text-gray-600 text-[15px] ${sectionMapping[type].bulletColor}`}
           key={skill.id}
          >
           {skill.name}
          </li>
         ))}
       </ul>
      </div>
     ) : (
      <p className={`${sectionMapping[type].titleColor} text-center`}>
       No Skills Found
      </p>
     )}
    </motion.div>
   ))}
  </motion.section>
 );
};

export default SkillList;

const sectionMapping: Record<
 Skill_Type,
 {
  label: "Front-End Development" | "Back-End Development" | "Dev-Ops Skills";
  titleColor: "text-[#2765EB]" | "text-[#9333EA]" | "text-[#0D9488]";
  borderColor:
   | "rgb(191, 219, 254)"
   | "rgb(233, 213, 255)"
   | "rgb(153, 246, 228)";
  initialBackgroundColor: "bg-[#f4f9ff]" | "bg-[#fcf9ff]" | "bg-[#f9fffe]";
  animateBackgroundColor:
   | "rgb(239, 246, 255)"
   | "rgb(250, 245, 255)"
   | "rgb(240, 253, 250)";
  bulletColor:
   | "marker:text-blue-500"
   | "marker:text-purple-500"
   | "marker:text-green-500";
 }
> = {
 FRONT_END: {
  label: "Front-End Development",
  titleColor: "text-[#2765EB]",
  borderColor: "rgb(191, 219, 254)",
  initialBackgroundColor: "bg-[#f4f9ff]",
  bulletColor: "marker:text-blue-500",
  animateBackgroundColor: "rgb(239, 246, 255)",
 },

 BACK_END: {
  label: "Back-End Development",
  titleColor: "text-[#9333EA]",
  borderColor: "rgb(233, 213, 255)",
  initialBackgroundColor: "bg-[#fcf9ff]",
  bulletColor: "marker:text-purple-500",
  animateBackgroundColor: "rgb(250, 245, 255)",
 },

 DEV_OPS: {
  label: "Dev-Ops Skills",
  titleColor: "text-[#0D9488]",
  borderColor: "rgb(153, 246, 228)",
  initialBackgroundColor: "bg-[#f9fffe]",
  bulletColor: "marker:text-green-500",
  animateBackgroundColor: "rgb(240, 253, 250)",
 },
};
