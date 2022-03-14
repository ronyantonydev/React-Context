import styled from "styled-components";

const StyledAbout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #fff;
  color: darkblue;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .page-title {
    margin-bottom: 2rem;
  }
  .button {
    height: 3rem;
    width: 10rem;
    border-radius: 3rem;
    border: 2px solid darkblue;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: darkblue;
    font-weight: bolder;
    font-size: 0.7rem;
  }
  .button:hover {
    background-color: darkblue;
    color: #fff;
  }
  .button:active {
    background-color: #fff;
    color: darkblue;
  }
`;

export default StyledAbout;
