import { useContext, useEffect, useState } from "react";
import StyledAbout from "./aboutStyle";
import { ContainerProviderType } from "../../types";
import { ContainerContext } from "../../components/container/containerProvider";

const About = () => {
  const [headerHidden, setHeaderHidden] = useState(true);

  const {
    changeHeaderStatus,
    changeLabelStatus
  }: ContainerProviderType = useContext(ContainerContext);

  useEffect(() => {
    changeHeaderStatus(headerHidden);
    changeLabelStatus("About Page");
    return () => {
      changeHeaderStatus(!headerHidden);
    };
  });

  const toogleNavBar = () => {
    changeHeaderStatus(!headerHidden);
    setHeaderHidden(!headerHidden);
  };

  return (
    <StyledAbout>
      <div className="page-title">About us</div>
      <div className="button" onClick={() => toogleNavBar()}>
        Toogle Header
      </div>
    </StyledAbout>
  );
};

export default About;
