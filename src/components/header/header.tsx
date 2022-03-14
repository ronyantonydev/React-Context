import StyledHeader from "./headerStyle";
interface HeaderProps {
  headerLabel: string;
}

const Header = ({ headerLabel }: HeaderProps) => {
  return (
    <StyledHeader>
      {headerLabel ? (
        <div className="title">{headerLabel}</div>
      ) : (
        <div className="title">Header</div>
      )}
    </StyledHeader>
  );
};

export default Header;
