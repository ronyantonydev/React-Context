import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  .container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .content {
    flex: 1;
    width: 100%;
    height: 100%;
  }
`;

export default StyledContainer;
