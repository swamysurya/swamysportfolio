import { Intro, MainContainer, OutlineIntro } from "./styleComponents";

const Introduction = () => (
  <MainContainer>
    <Intro>Introduction</Intro>
    <Intro outline>Introduction</Intro>
    <OutlineIntro>Introduction</OutlineIntro>
  </MainContainer>
);

export default Introduction;
