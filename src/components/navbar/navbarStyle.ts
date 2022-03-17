import styled from "styled-components";

const StyledNavbar = styled.div`
  float: left;
  height: 100vh;
  min-width: 10rem;
  background-color: #ccc;
  .menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    margin-bottom: 4px;
    background-color: #fff;
  }
  .menu-item:hover {
    margin-left: 15px;
    margin-top: 15px;
    cursor: pointer;
  }
  .menu-item:active {
    margin-left: 5px;
    margin-top: 5px;
  }
`;

export default StyledNavbar;
