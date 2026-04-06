import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc in Computer Science",
    desc: "University of Waterloo | 2025 - 2030 (expected)",
  },
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

export default Education;
