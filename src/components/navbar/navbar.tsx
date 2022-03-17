import { useNavigate } from "react-router-dom";
import StyledNavbar from "./navbarStyle";

const Navbar = () => {
  const navigate = useNavigate();
  const menuItemclick = (item: string) => {
    if (item === "Menu Item 1") {
      navigate("/");
    }
    if (item === "Menu Item 2") {
      navigate("/about");
    }
  };
  return (
    <StyledNavbar>
      <div className="menu-item" onClick={() => menuItemclick("Menu Item 1")}>
        Home Page
      </div>
      <div className="menu-item" onClick={() => menuItemclick("Menu Item 2")}>
        About Page
      </div>
      <div className="menu-item">Menu Item 3</div>
      <div className="menu-item">Menu Item 4</div>
    </StyledNavbar>
  );
};

export default Navbar;
