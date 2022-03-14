import { useState, useCallback, createContext, ReactNode } from "react";
import Container from "./container";
import { ContainerProviderType } from "../../types";

interface ContextProps {
  children: ReactNode;
}

export const ContainerContext = createContext<ContainerProviderType>({});

export const ContainerContextProvider = ({ children }: ContextProps) => {
  const [navBarHidden, setNavBarHidden] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const changeNavBarStatus = useCallback((value) => setNavBarHidden(value), []);
  const changeHeaderStatus = useCallback((value) => setHeaderHidden(value), []);

  return (
    <ContainerContext.Provider
      value={{ changeHeaderStatus, changeNavBarStatus }}
    >
      <Container isHeaderHide={headerHidden} isNavBarHide={navBarHidden}>
        {children}
      </Container>
    </ContainerContext.Provider>
  );
};
