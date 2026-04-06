import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Zuhair Khan</HighlightSpan>!
      </p>
      <p>
        I&apos;m{" "}
        <HighlightAlt>a CS student at the University of Waterloo</HighlightAlt>,
        currently interning at Catalyst Labs and leading marketing at Hack The
        North.
      </p>
      <p>
        I love building products that solve real problems — <br />
        and yes, I do play soccer. ⚽
      </p>
    </AboutWrapper>
  );
};

export default About;
