/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu, Icon, Badge } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector((state) => state.user);
  // state = {
  //   name: "",
  // };

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <h2 style={{ paddingTop: "10px" }}>
            <a href="/login">Signin</a>
          </h2>
        </Menu.Item>
        <Menu.Item key="app">
          <h2 style={{ paddingTop: "10px" }}>
            <a href="/register">Signup</a>
          </h2>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="username">
          <h2 style={{ paddingTop: "10px" }}>
            <a href="/product/upload">
              Welcome {user.userData && user.userData.name}!
            </a>
            <Icon name="twitter" />
          </h2>
        </Menu.Item>
        <Menu.Item key="history">
          <h2 style={{ paddingTop: "10px" }}>
            <a href="/history">History</a>
          </h2>
        </Menu.Item>
        <Menu.Item key="upload">
          <h2 style={{ paddingTop: "10px" }}>
            <UploadOutlined style={{ fontSize: "28px" }} />
            <a href="/product/upload">Upload</a>
          </h2>
        </Menu.Item>
        <Menu.Item key="cart">
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" style={{ marginRight: -22, color: "#667777" }}>
              <Icon type="shopping-cart" style={{ fontSize: 33 }} />
            </a>
          </Badge>
        </Menu.Item>
        <Menu.Item key="logout">
          <h2 style={{ paddingTop: "10px" }}>
            <a onClick={logoutHandler}>Logout</a>
          </h2>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
