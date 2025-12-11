import Hero from "./Hero";
import SecondContainer from "./SecondContainer";
import { MainContainer } from "./styles";

const Main = () => {
  return (
    <MainContainer>
      <Hero />
      <SecondContainer />
    </MainContainer>
  );
};

export default Main;
