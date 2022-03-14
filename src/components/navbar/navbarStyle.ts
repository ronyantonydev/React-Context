import styled from "styled-components";

const StyledNavbar = styled.div`
  float: left;
  height: 100vh;
  min-width: 5rem;
  background-color: yellow;
  .menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    margin-bottom: 4px;
    cursor: pointer;
    background-color: #eee;
  }
`;

export default StyledNavbar;
