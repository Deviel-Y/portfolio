import prisma from "@/prisma/client";
import Intuduction from "./pageSections/Intuduction";
import SkillList from "./pageSections/SkillList";

const HomePage = async () => {
 const { skills } = await fetchData();

 return (
  <div className="w-full flex flex-col gap-20 justify-center items-center">
   <Intuduction />
   <SkillList skills={skills} />
  </div>
 );
};

export default HomePage;

const fetchData = async () => {
 const [skills] = await Promise.all([prisma.skill.findMany()]);

 return { skills };
};
