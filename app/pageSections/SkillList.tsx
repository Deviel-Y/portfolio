import { skill } from "@/prisma/generated/client/client";
import { Skill_Type } from "@/prisma/generated/client/enums";

interface Props {
 skills: skill[];
}

const SkillList = ({ skills }: Props) => {
 const skillTypes = Object.values(Skill_Type);

 return (
  <section className="w-2/3 flex flex-row justify-center shadow-lg border border-[#e0e0e0] p-4 rounded-lg h-64">
   {skillTypes.map((type) => (
    <div
     className={`flex flex-col gap-5 p-3 justify-between items-start w-full m-5 rounded-md ${sectionMapping[type].borderColor} ${sectionMapping[type].backgroundColor} transition-all`}
     key={type}
    >
     {skills.length > 0 ? (
      <>
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
           className={`text-gray-600 text-[15px] ${sectionMapping[type].markerColor}`}
           key={skill.id}
          >
           {skill.name}
          </li>
         ))}
       </ul>
      </>
     ) : (
      <p className={`${sectionMapping[type].titleColor} text-center`}>
       No Skills Found
      </p>
     )}
    </div>
   ))}
  </section>
 );
};

export default SkillList;

const sectionMapping: Record<
 Skill_Type,
 {
  label: "Front-End Development" | "Back-End Development" | "Dev-Ops Skills";
  titleColor: "text-[#2765EB]" | "text-[#9333EA]" | "text-[#0D9488]";
  borderColor: "border-[#BFDBFE]" | "border-[#E9D5FF]" | "border-[#99F6E4]";
  backgroundColor: "bg-[#EFF6FF]" | "bg-[#FAF5FF]" | "bg-[#F0FDFA]";
  markerColor:
   | "marker:text-blue-500"
   | "marker:text-purple-500"
   | "marker:text-green-500";
 }
> = {
 FRONT_END: {
  label: "Front-End Development",
  titleColor: "text-[#2765EB]",
  borderColor: "border-[#BFDBFE]",
  backgroundColor: "bg-[#EFF6FF]",
  markerColor: "marker:text-blue-500",
 },

 BACK_END: {
  label: "Back-End Development",
  titleColor: "text-[#9333EA]",
  borderColor: "border-[#E9D5FF]",
  backgroundColor: "bg-[#FAF5FF]",
  markerColor: "marker:text-purple-500",
 },

 DEV_OPS: {
  label: "Dev-Ops Skills",
  titleColor: "text-[#0D9488]",
  borderColor: "border-[#99F6E4]",
  backgroundColor: "bg-[#F0FDFA]",
  markerColor: "marker:text-green-500",
 },
};
