import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 300px;
  background: ${colors.primary01};
  overflow: hidden;
  @media (max-width: 942px) {
    gap: 750px;
  }
`;
