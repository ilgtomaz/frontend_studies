import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Header, MenuIcon, MenuList, MenuItem } from "./style";


function Menu() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  return (
    <Header>
      <MenuIcon
        onClick={(event) => {
          setIsDisplayed(!isDisplayed);
        }}
      >
        <FaBars />
      </MenuIcon>
      <MenuList isDisplayedMenu={isDisplayed} >
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/novoPost">Novo Post</Link>
        </MenuItem>
      </MenuList>
    </Header>
  );
}

export default Menu;
