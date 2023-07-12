import React from "react";
import Link from "next/link";
import styled from "styled-components"; 

interface Navlink {
  label: string;
  url: string;
}

const navLinks: Navlink[] = [
  { label: "About", url: "/service" },
  { label: "login", url: "/login" },
  { label: "product", url: "/product" }
];
const Navbar = () => {

  const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 32px;
    background: #ccc;
  `;

  const Logo = styled.div``;

  const Menu = styled.div``;

  const MenuLink = styled.span`
    margin-right: 20px;
  `;

  return (
    <>
      <HeaderContainer>
        <Logo>Logo here</Logo>

        <Menu>
          {navLinks.map((link, index) => (
            <MenuLink>
              <Link href={link.url}>{link.label}</Link>
            </MenuLink>
          ))}
        </Menu>
      </HeaderContainer>
    </>
  );
};

export default Navbar;
