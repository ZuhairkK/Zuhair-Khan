import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <EduIntro>Here is my work experience!</EduIntro>
      {experiences.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const experiences = [
  {
    title: "Growth/GTM Intern",
    desc: "Catalyst Labs | Waterloo, Canada | 2025 - Present",
  },
  {
    title: "Marketing Lead",
    desc: "Hack The North | Waterloo, Canada | 2025 - Present",
  },
  {
    title: "Growth Marketing Intern",
    desc: "StudyStream | London, UK | Dec 2025 - Mar 2026",
  },
];

export default Experience;
