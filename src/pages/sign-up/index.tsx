import {
  BottomContainer,
  BottomHeading,
  Box,
  BoxContainer,
  Container,
  Form,
  FormContainer,
  FormLabel,
  FormText,
  Heading,
  ImageContainer,
  InnerContainer,
  Input,
  Label,
  LeftContainer,
  Line,
  MainContainer,
  MainInnerContainer,
  Number,
  SideContainer,
  Span,
  Text,
  TextContainer,
} from "./styles";
import Logo from "../../assets/icons/logo.svg";
import BackgroundImage from "../../assets/icons/bg-pattern-side.svg";
import Button from "../../components/Button";
const lists = [
  {
    number: 47,
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

const formItems = [
  "Name",
  "Email Adress",
  "Profession",
  "Phone Number",
  "Company",
];
const SignUp = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <MainInnerContainer>
          <Logo />
          <Container>
            <LeftContainer>
              <TextContainer>
                <Heading>Work smarter. Save time.</Heading>
                <Text>
                  Easily manage your projects. Get on the list and receive
                  in-app perks available only to early subscribers. We are
                  moving into final development and getting ready for official
                  launch soon.
                </Text>
              </TextContainer>
              <BottomContainer>
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
              </BottomContainer>
            </LeftContainer>
            <Form>
              <FormContainer>
                {formItems.map((formItem) => {
                  return (
                    <FormLabel>
                      <FormText>{formItem}</FormText>
                      <Input />
                      <Line />
                    </FormLabel>
                  );
                })}
              </FormContainer>
              <Button variant="tertiary">Get on the list</Button>
            </Form>
          </Container>
        </MainInnerContainer>
      </InnerContainer>
      <SideContainer>
        <ImageContainer>
          <BackgroundImage />
        </ImageContainer>
      </SideContainer>
    </MainContainer>
  );
};

export default SignUp;
