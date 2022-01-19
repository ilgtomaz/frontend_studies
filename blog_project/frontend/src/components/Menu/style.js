import styled from "styled-components";

export const Header = styled.header`
  background-color: #FFFFFF;
  border: 1px solid #000000;
`;

export const MenuIcon = styled.div`
  margin: 5px 0 0 10px;
`;

export const MenuList = styled.ul`
  ${(props) => (props.isDisplayedMenu ? `
    visibility: visible;
    height: auto;
    opacity: 1;
  ` : `
    visibility: hidden;
    height: 0;
    opacity: 0;
  `)};
  margin: 0%;
  padding: 0;
  transition: visibility 0s, opacity 0.5s linear;
`;

export const MenuItem = styled.li`
  border: 1px solid #000000;
  font-weight: bold;
  list-style: none;
  margin: 0;
  padding: 5px;

  a {
    color: #000000;
    text-decoration: none;
  }
`;