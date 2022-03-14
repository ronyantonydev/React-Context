import { ReactNode } from "react";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import StyledContainer from "./containerStyle";

interface ContainerProps {
  children: ReactNode;
  isHeaderHide: boolean;
  isNavBarHide: boolean;
}

const Container = ({
  isHeaderHide,
  isNavBarHide,
  children
}: ContainerProps) => {
  return (
    <StyledContainer>
      {!isNavBarHide && <Navbar />}
      <div className="container">
        {!isHeaderHide && <Header />}
        <div className="content">{children}</div>
      </div>
    </StyledContainer>
  );
};

export default Container;
