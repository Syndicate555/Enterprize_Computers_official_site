import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCartItems } from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import { Result, Empty } from "antd";
import Axios from "axios";
function CartPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    let cartItems = [];
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });
        dispatch(getCartItems(cartItems, props.user.userData.cart));
      }
    }
  }, [props.user.userData]);
  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h1>My Cart</h1>
      <div>
        <UserCardBlock />
        <div style={{ marginTop: "3rem" }}>
          <h2>Total amount: $</h2>
        </div>

        <Result status="success" title="Successfully Purchased Items" />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <br />
        <Empty description={false} />
        <p>No items in the Cart</p>
      </div>
    </div>
  );
}

export default CartPage;
