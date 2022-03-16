import { useContext, useEffect, useState } from "react";
import StyledHome from "./homeStyle";
import { ContainerProviderType } from "../../types";
import { ContainerContext } from "../../components/container/containerProvider";

const Home = () => {
  const [navBarHidden, setNavBarHidden] = useState(true);
  const [headerHidden, setHeaderHidden] = useState(true);

  const {
    changeNavBarStatus,
    changeHeaderStatus,
    changeLabelStatus
  }: ContainerProviderType = useContext(ContainerContext);

  useEffect(() => {
    changeNavBarStatus(!navBarHidden);
    changeLabelStatus("Home Page");
  });

  const toogleNavBar = () => {
    changeNavBarStatus!(!navBarHidden);
    setNavBarHidden(!navBarHidden);
  };
  const toogleHeader = () => {
    changeHeaderStatus!(!headerHidden);
    setHeaderHidden(!headerHidden);
  };
  return (
    <StyledHome>
      <div className="page-title">Home</div>
      <div className="button" onClick={() => toogleNavBar()}>
        Toogle - NavBar
      </div>
      <div className="button" onClick={() => toogleHeader()}>
        Toogle - Header
      </div>
    </StyledHome>
  );
};

export default Home;
