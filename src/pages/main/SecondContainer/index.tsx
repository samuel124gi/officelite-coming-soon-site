import {
  BackgroundContainer,
  BigHeading,
  BottomContainer,
  BottomHeading,
  Box,
  BoxContainer,
  Card,
  CardsContainer,
  Container,
  ImageContainer,
  InnerContainer,
  Label,
  LeftContainer,
  ListContainer,
  MainContainer,
  Number,
  SecondText,
  SmallHeading,
  Span,
  Text,
} from "./styles";
const items = [
  {
    type: "Basic",
    price: "Free",
    feature: "Up to 5 users for free",
    importance1: "Basic document collaboration",
    importance2: "2 GB storage",
    importance3: "Great security and support",
  },
  {
    type: "Pro",
    price: "$9.99",
    feature: "Per user, billed monthly",
    importance1: "All essential integrations",
    importance2: "50 GB storage",
    importance3: "More control and insights",
  },
  {
    type: "Ultimate",
    price: "$19.99",
    feature: "Per user, billed monthly",
    importance1: "Robust work management",
    importance2: "100 GB storage",
    importance3: "VIP support",
  },
];
const lists = [
  {
    number: "47",
    label: "days",
  },
  {
    number: "07",
    label: "hours",
  },
  {
    number: "56",
    label: "min",
  },
  {
    number: "14",
    label: "sec",
  },
];
import BackgroundImage from "../../../assets/icons/bg-pattern-footer.svg";
import { StyledButton } from "../../../components/Button/styles";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const SecondContainer = () => {
  const navigate = useNavigate();
  function handleSignIn() {
    navigate("./sign-in");
  }
  return (
    <MainContainer>
      <BackgroundContainer>
        <ImageContainer>
          <BackgroundImage />
        </ImageContainer>
        <InnerContainer>
          <CardsContainer>
            {items.map((item) => {
              return (
                <Card key={item.type}>
                  <SmallHeading>{item.type}</SmallHeading>
                  <Container>
                    <BigHeading>{item.price}</BigHeading>
                    <Text>{item.feature}</Text>
                  </Container>
                  <ListContainer>
                    <SecondText>{item.importance1}</SecondText>
                    <SecondText>{item.importance2}</SecondText>
                    <SecondText>{item.importance3}</SecondText>
                  </ListContainer>
                  <Button variant="secondary">Try for Free</Button>
                </Card>
              );
            })}
          </CardsContainer>
          <BottomContainer>
            <LeftContainer>
              <BottomHeading>
                COMING
                <Span>4 NOV 2020</Span>
              </BottomHeading>
              <BoxContainer>
                {lists.map((list) => {
                  return (
                    <Box key={list.number}>
                      <Number>{list.number}</Number>
                      <Label>{list.label}</Label>
                    </Box>
                  );
                })}
              </BoxContainer>
            </LeftContainer>
            <StyledButton variant="primary" onClick={handleSignIn}>
              Get Started
            </StyledButton>
          </BottomContainer>
        </InnerContainer>
      </BackgroundContainer>
    </MainContainer>
  );
};

export default SecondContainer;
