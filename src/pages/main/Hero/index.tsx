import {
  BackgroundContainer,
  ChartContainer,
  Heading,
  InnerContainer,
  MainContainer,
  MobileChartContainer,
  TabletChartContainer,
  Text,
  TextContainer,
} from "./styles";
import Logo from "../../../assets/icons/logo.svg";
import BackgroundIcon from "../../../assets/icons/bg-pattern-header.svg";
import Chart from "../../../assets/icons/illustration-charts.svg";
import SmallChart from "../../../assets/icons/tablet-chart.svg";
import { StyledButton } from "../../../components/Button/styles";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  function handleSignIn() {
    navigate("./sign-in");
  }
  return (
    <MainContainer>
      <Logo />
      <BackgroundContainer>
        <BackgroundIcon />
      </BackgroundContainer>
      <InnerContainer>
        <MobileChartContainer>
          <SmallChart />
        </MobileChartContainer>

        <TextContainer>
          <Heading>A simple solution to complex tasks is coming soon</Heading>
          <Text>
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </Text>
          <StyledButton variant="primary" onClick={handleSignIn}>
            Get Started
          </StyledButton>
        </TextContainer>
        <TabletChartContainer>
          <SmallChart />
        </TabletChartContainer>
        <ChartContainer>
          <Chart />
        </ChartContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default Hero;
