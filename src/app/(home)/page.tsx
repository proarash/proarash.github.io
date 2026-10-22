import AboutContainer from "../_components/about-container";
import ContactContainer from "../_components/contact-container";
import SkillsContainer from "../_components/skills-container";

const HomePage = () => {
  return (
    <div className="flex flex-col p-5 gap-5 w-full md:border border-secondary md:rounded-2xl h-full overflow-y-auto">
      <AboutContainer />
      <SkillsContainer />
      <ContactContainer />
    </div>
  );
};

export default HomePage;
