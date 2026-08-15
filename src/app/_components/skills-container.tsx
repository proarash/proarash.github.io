import { HugeiconsIcon } from "@hugeicons/react";
import {
  ApiIcon,
  CloudServerIcon,
  CodeSquareIcon,
  ComputerTerminal01Icon,
  ContainerIcon,
  CubeIcon,
  DatabaseSyncIcon,
  Layers01Icon,
  ReactIcon,
  ServerStackIcon,
  SourceCodeIcon,
  TypeCursorIcon,
  WebProgrammingIcon,
} from "@hugeicons/core-free-icons";
import SectionContainer from "./section-container";
import SkillCard, { SkillCardProps } from "./skill-card";

const SkillsContainer = () => {
  const skillArray: SkillCardProps[] = [
    {
      icon: <HugeiconsIcon icon={CodeSquareIcon} className="text-blue-500" />,
      title: "Golang",
      progress: 30,
    },
    {
      icon: <HugeiconsIcon icon={WebProgrammingIcon} />,
      title: "Next.js",
      progress: 75,
    },
    {
      icon: <HugeiconsIcon icon={CloudServerIcon} className="text-red-500" />,
      title: "Nest.js",
      progress: 50,
    },
    {
      icon: <HugeiconsIcon icon={ServerStackIcon} className="text-green-500" />,
      title: "Node.js",
      progress: 65,
    },
    {
      icon: <HugeiconsIcon icon={ApiIcon} />,
      title: "Express.js",
      progress: 60,
    },
    {
      icon: <HugeiconsIcon icon={TypeCursorIcon} className="text-blue-500" />,
      title: "Typescript",
      progress: 60,
    },
    {
      icon: <HugeiconsIcon icon={ReactIcon} className="text-sky-500" />,
      title: "React.js",
      progress: 65,
    },
    {
      icon: <HugeiconsIcon icon={DatabaseSyncIcon} className="text-orange-500" />,
      title: "React Query",
      progress: 60,
    },
    {
      icon: <HugeiconsIcon icon={Layers01Icon} className="text-purple-500" />,
      title: "Redux toolkit",
      progress: 50,
    },
    {
      icon: <HugeiconsIcon icon={CubeIcon} className="text-indigo-500" />,
      title: "Zustand",
      progress: 50,
    },

    {
      icon: <HugeiconsIcon icon={ContainerIcon} className="text-blue-500" />,
      title: "Docker",
      progress: 50,
    },
    {
      icon: <HugeiconsIcon icon={ComputerTerminal01Icon} />,
      title: "Linux",
      progress: 70,
    },
  ];
  return (
    <SectionContainer
      id="skills"
      title="Skills"
      icon={SourceCodeIcon}
    >
      <div className="flex flex-wrap w-full md:gap-5 gap-3">
        {skillArray.map((v, i) => (
          <SkillCard key={i} props={v} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default SkillsContainer;
