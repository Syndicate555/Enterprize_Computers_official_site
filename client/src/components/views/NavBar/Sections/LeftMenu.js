import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <h2 style={{ paddingBottom: "10px" }}>
          {" "}
          <a href="/">Home</a>
        </h2>
      </Menu.Item>
      <SubMenu
        title={
          <h2>
            {""}
            <a href="/">More</a>
          </h2>
        }
      >
        <MenuItemGroup title="Business">
          <Menu.Item key="setting:1">Brands</Menu.Item>
          <Menu.Item key="setting:2">Services</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Get in Touch">
          <Menu.Item key="setting:3">About Us</Menu.Item>
          <Menu.Item key="setting:4">Contact</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
