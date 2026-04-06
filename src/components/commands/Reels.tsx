import { ProjectsIntro } from "../styles/Projects.styled";
import { Wrapper } from "../styles/Output.styled";
import styled from "styled-components";

const ReelsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const ReelFrame = styled.iframe`
  border: none;
  border-radius: 8px;
  width: 300px;
  height: 480px;
  flex-shrink: 0;
`;

const reels = [
  { id: 1, shortcode: "DT_6HAEjBuK" },
  { id: 2, shortcode: "DUl5gMdjgrQ" },
  { id: 3, shortcode: "DVpZBfVjHT4" },
];

const Reels: React.FC = () => {
  return (
    <Wrapper data-testid="reels">
      <ProjectsIntro>Here are some of my reels ✌️</ProjectsIntro>
      <ReelsGrid>
        {reels.map(({ id, shortcode }) => (
          <ReelFrame
            key={id}
            src={`https://www.instagram.com/p/${shortcode}/embed/`}
            allowFullScreen
            scrolling="no"
            loading="lazy"
          />
        ))}
      </ReelsGrid>
    </Wrapper>
  );
};

export default Reels;
