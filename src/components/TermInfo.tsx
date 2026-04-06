import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>zuhair.vercel.app</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
