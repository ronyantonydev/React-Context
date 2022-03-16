import StyledHeader from "./headerStyle";
interface HeaderProps {
  headerLabel: string;
}

const Header = ({ headerLabel }: HeaderProps) => {
  return (
    <StyledHeader>
      <div className="title">{headerLabel ? headerLabel : "Header"}</div>
    </StyledHeader>
  );
};

export default Header;
