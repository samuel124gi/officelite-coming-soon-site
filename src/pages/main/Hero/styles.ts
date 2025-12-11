import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const MainContainer = styled.div`
  display: flex;
  width: 85%;
  gap: 100px;
  margin: auto;
  padding-top: 50px;
  max-width: 85%;
  flex-direction: column;
  position: relative;
`;
export const BackgroundContainer = styled.div`
  position: absolute;
  bottom: 100px;
  right: -300px;
`;
export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 11;
  @media (max-width: 768px) {
    gap: 50px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 540px;
  @media (max-width: 768px) {
    gap: 16px;
  }
  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;
export const Heading = styled.h1`
  font-size: 56px;
  letter-spacing: 0px;
  line-height: 120%;
  color: ${colors.primary02};
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;
export const Text = styled.p`
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 150%;
  color: ${colors.primary03};
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const ChartContainer = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const MobileChartContainer = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;
export const TabletChartContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
