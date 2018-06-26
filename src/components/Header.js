import React from "react";
import { Menu } from "semantic-ui-react";
import {Link} from 'react-router-dom';


export default function Header(props) {
  return (
    <Menu>
        <Menu.Item name="home">
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item name="about">
          <Link to="/about">About</Link>
        </Menu.Item>

        <Menu.Item name="Contact">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
    </Menu>
  );
}
