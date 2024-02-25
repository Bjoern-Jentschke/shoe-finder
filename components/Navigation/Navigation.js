import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <StyledLink href="/">
        <NavItem>Home</NavItem>
      </StyledLink>
      <NavItem>Favorite</NavItem>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: salmon; /* Dark background color */
  color: white; /* Text color */
  position: fixed;
  margin: auto;
  bottom: 0;
  width: 35rem;
  height: 5rem;
`;

const NavItem = styled.div`
  padding: 10px;
  border: solid 2px;
  width: 17.5rem;
  height: 5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border: none;
  color: white;
`;
