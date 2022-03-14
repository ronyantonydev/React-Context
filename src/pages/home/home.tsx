import { useContext, useEffect, useState } from "react";
import StyledHome from "./homeStyle";
import { ContainerProviderType } from "../../types";
import { ContainerContext } from "../../components/container/containerProvider";

const Home = () => {
  const [navBarHidden, setNavBarHidden] = useState(true);

  const {
    changeNavBarStatus,
    changeHeaderStatus
  }: ContainerProviderType = useContext(ContainerContext);

  useEffect(() => {
    changeNavBarStatus!(navBarHidden);
    changeHeaderStatus!(false);
  });

  const toogleNavBar = () => {
    changeNavBarStatus!(!navBarHidden);
    setNavBarHidden(!navBarHidden);
  };

  return (
    <StyledHome>
      <div className="page-title">Home</div>
      <div className="button" onClick={() => toogleNavBar()}>
        Toogle NavBar
      </div>
    </StyledHome>
  );
};

export default Home;
