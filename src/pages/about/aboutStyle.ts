import styled from "styled-components";

const StyledAbout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: purple;
  color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .page-title {
    margin-bottom: 2rem;
  }
  .button {
    height: 5rem;
    width: 10rem;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export default StyledAbout;
