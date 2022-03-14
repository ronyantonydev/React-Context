import { BrowserRouter as Router } from "react-router-dom";
import { ContainerContextProvider } from "./components/container/containerProvider";
import AppRoutes from "./navigations/appRoutes";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <ContainerContextProvider>
        <AppRoutes />
      </ContainerContextProvider>
    </Router>
  );
}
