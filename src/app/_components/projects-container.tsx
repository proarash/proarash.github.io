import SectionContainer from "./section-container";
import ProjectCard, { ProjectCardProps } from "./project-card";
import otolmeImg from "@/assets/otolme.png";
import kartiamImg from "@/assets/kartiam.png";
import radbarImg from "@/assets/radbar.png";
import { DashboardSquare01Icon } from "@hugeicons/core-free-icons";

const ProjectsContainer = () => {
  const projectArray: ProjectCardProps[] = [
    {
      title: "Otolme",
      url: "https://otolme.ir",
      image: otolmeImg,
    },
    {
      title: "Kartiam",
      url: "https://kartiam.com/",
      image: kartiamImg,
    },
    {
      title: "Radbar24",
      url: "https://radbar24.ir",
      image: radbarImg,
    },
  ];
  return (
    <SectionContainer id="projects" title="Portfolio" icon={DashboardSquare01Icon}>
      <div className="grid md:grid-cols-3 grid-cols-2 w-full justify-items-center gap-5">
        {projectArray.map((v, i) => (
          <ProjectCard key={i} props={v} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsContainer;
