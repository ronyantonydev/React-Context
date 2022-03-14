import { ReactNode } from "react";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import StyledContainer from "./containerStyle";

interface ContainerProps {
  children: ReactNode;
  isHeaderHide: boolean;
  isNavBarHide: boolean;
  label: string;
}

const Container = ({
  isHeaderHide,
  isNavBarHide,
  label,
  children
}: ContainerProps) => {
  return (
    <StyledContainer>
      {!isNavBarHide && <Navbar />}
      <div className="container">
        {!isHeaderHide && <Header headerLabel={label} />}
        <div className="content">{children}</div>
      </div>
    </StyledContainer>
  );
};

export default Container;
