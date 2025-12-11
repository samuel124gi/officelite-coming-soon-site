import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  background: ${colors.primary01};
  position: relative;
  @media (max-width: 942px) {
    justify-content: flex-end;
    flex-direction: column;
    height: 100vh;
    align-items: flex-end;
  }
`;
export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 50px 0px 0px 0px;
  justify-content: center;
  position: absolute;
`;
export const MainInnerContainer = styled.div`
  width: 85%;
  max-width: 85%;
  display: flex;
  gap: 50px;
  flex-direction: column;
  @media (max-width: 942px) {
    gap: 20px;
  }
`;
export const SideContainer = styled.div`
  width: 350px;
  height: 100vh;
  overflow: hidden;
  background: ${colors.primary02};
  @media (max-width: 942px) {
    width: 100vw;
    height: 400px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  left: 100px;
  bottom: -600px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  @media (max-width: 942px) {
    flex-direction: column;
    gap: 50px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 942px) {
    text-align: center;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 540px;
  @media (max-width: 942px) {
    align-items: center;
  }
`;
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (max-width: 942px) {
    align-items: center;
  }
`;
export const BoxContainer = styled.div`
  display: grid;
  height: 129px;
  width: 448px;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  @media (max-width: 600px) {
    width: 400px;
  }
`;
export const Box = styled.div`
  border-radius: 12px;
  background: ${colors.secondary03};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Number = styled.h1`
  font-size: 56px;
  letter-spacing: 0px;
  line-height: 120%;
  color: ${colors.secondary01};
  font-weight: bold;
`;
export const Label = styled.p`
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 160%;
  color: ${colors.secondary02};
  opacity: 0.5;
  font-weight: bold;
`;
export const BottomHeading = styled.h1`
  font-size: 16px;
  letter-spacing: 5px;
  line-height: 48px;
  color: ${colors.secondary02};
  font-weight: bold;
`;
export const Span = styled.span`
  color: ${colors.secondary01};
`;
export const Heading = styled.h1`
  font-size: 56px;
  letter-spacing: 0px;
  line-height: 120%;
  color: ${colors.secondary02};
  font-weight: bold;
  @media (max-width: 942px) {
    font-size: 40px;
  }
`;
export const Text = styled.p`
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 28px;
  color: ${colors.primary03};
`;
export const Form = styled.form`
  display: flex;
  height: 470px;
  background: ${colors.white};
  width: 445px;
  border-radius: 12px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 942px) {
    height: 450px;
  }
`;
export const FormContainer = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 11;
`;
export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
export const FormText = styled.p`
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 28px;
  opacity: 0.7;
  color: ${colors.primary03};
`;
export const Input = styled.input`
  width: 100%;
  cursor: pointer;
  border: none;
  outline: none;
`;
export const Line = styled.hr`
  width: 100%;
  opacity: 0.5;
  height: 1px;
  background: ${colors.primary03};
`;
