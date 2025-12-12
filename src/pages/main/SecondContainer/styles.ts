import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const MainContainer = styled.div``;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  width: 100%;
  bottom: 50px;
  position: absolute;
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 85%;
  z-index: 11;
  margin: auto;
  max-width: 90%;
  @media (max-width: 942px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
export const Card = styled.div`
  width: 100%;
  height: 430px;
  background: ${colors.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
`;
export const SmallHeading = styled.h1`
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 140%;
  color: ${colors.secondary02};
  font-weight: bold;
`;
export const BigHeading = styled.h1`
  font-size: 56px;
  letter-spacing: 0px;
  line-height: 64px;
  color: ${colors.secondary02};
  font-weight: bold;
`;
export const Text = styled.p`
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 150%;
  color: ${colors.primary03};
`;
export const SecondText = styled.p`
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 160%;
  color: ${colors.primary03};
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
export const BackgroundContainer = styled.div`
  height: 400px;
  position: relative;
  background: ${colors.primary02};
  @media (max-width: 942px) {
    height: 1000px;
  }
  @media (max-width: 600px) {
    height: 1050px;
  }
`;
export const ImageContainer = styled.div`
  position: absolute;
  top: -800px;
  right: 80px;
`;
export const Span = styled.span`
  color: ${colors.secondary01};
`;
export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  z-index: 11;
  margin: auto;
  max-width: 85%;
  @media (max-width: 942px) {
    display: flex;
    gap: 48px;
    flex-direction: column;
  }
`;
export const BottomHeading = styled.h1`
  font-size: 16px;
  letter-spacing: 5px;
  line-height: 48px;
  color: ${colors.white};
  font-weight: bold;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  @media (max-width: 400px) {
    width: 100%;
  }
`;
export const Box = styled.div`
  border-radius: 12px;
  background: ${colors.secondary02};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Number = styled.h1`
  font-size: 56px;
  letter-spacing: 0px;
  line-height: 120%;
  color: ${colors.white};
  font-weight: bold;
  @media (max-width: 400px) {
    font-size: 40px;
  }
`;
export const Label = styled.p`
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 160%;
  color: ${colors.white};
  opacity: 0.5;
  font-weight: bold;
`;
