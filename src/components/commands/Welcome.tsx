import {
  Cmd,
  HeroContainer,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
  _____       _           _
 |__  /_ _  | |_  __ _  (_)_ _
   / /| || | | ' \\/ _\` | | | '_|
  /___|\\_,_| |_||_\\__,_| |_|_|
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
  _____  _  _
 |__  / | || |
   / /  | || |
  / /__ |_||_|
 /____|
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to Zuhair&apos;s terminal portfolio.</div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
         _
        | |
     _  | |  _
    / \\_/ \\_/ \\
   /           \\
  |  o       o  |
  |      _      |
  |   \\_____/   |
   \\             /
    \\___________/

  ⚽  zuhair khan
  📍  waterloo, ca
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
