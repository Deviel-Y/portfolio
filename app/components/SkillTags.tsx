import { ReactNode } from "react";

interface Props {
 backgroundColor: string;
 textColor: string;
 children: ReactNode;
}
const SkillTags = ({ children, textColor, backgroundColor }: Props) => {
 return (
  <div
   className={`${textColor} ${backgroundColor} w-fit px-3 py-2 rounded-full opacity-80`}
  >
   <p className="text-sm font-mono">{children}</p>
  </div>
 );
};

export default SkillTags;
