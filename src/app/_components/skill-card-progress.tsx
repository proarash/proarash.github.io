import { Progress } from "@/components/ui/progress";
import { SkillCardProps } from "./skill-card";
import { Label } from "@/components/ui/label";

const SkillCardProgress = ({ props }: { props: SkillCardProps }) => {
  return (
    <div className="flex gap-3 items-center justify-between">
      <div className="flex gap-2 items-center w-1/2">
        <Progress value={props.progress} />
      </div>
      <div className="flex items-center gap-2">
        <Label>{props.title}</Label>
        <span className="text-[22px]">{props.icon}</span>
      </div>
    </div>
  );
};

export default SkillCardProgress;
