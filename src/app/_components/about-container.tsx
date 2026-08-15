import SectionContainer from "./section-container";
import AvatarContainer from "./avatar-container";
import { UserCircleIcon } from "@hugeicons/core-free-icons";

const AboutContainer = () => {
  return (
    <SectionContainer id="about" title="About me" icon={UserCircleIcon}>
      <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-5">
        <p className="text-justify">{`Hey i'm Arash! a Software Developer with over 4 years of experience in designing and implementing modern web applications.

My expertise lies in utilizing frameworks and technologies such as Next.js, NestJS, TypeScript, Express.js, TypeORM, and PrismaORM. I also possess a comprehensive understanding of Linux systems, Docker, and Git.

I am a team-oriented professional and approach complex technical challenges with persistence and focus to find the optimal solution. My commitment to learning new subjects in the world of technology is a constant motivator, and I have a high capacity for rapid learning. Patience, work ethic, and professional integrity are values I consistently uphold throughout my career path.`}</p>
        <AvatarContainer />
      </div>
    </SectionContainer>
  );
};

export default AboutContainer;
