import React, { useEffect, useState } from "react";
import { Button, Descriptions } from "antd";
import { I18nProvider, LOCALES } from "../../../../i18n";
import translate from "../../../../i18n/translate";

function ProductInfo(props) {
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  const addToCarthandler = () => {
    props.addToCart(props.detail._id);
  };

  return (
    <I18nProvider locale={LOCALES.FRENCH}>
      <div>
        <Descriptions title="Product Info">
          <Descriptions.Item label="Price">{Product.price}</Descriptions.Item>
          <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
          <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {" "}
            {translate("Welcome to the world of computers")}
            {Product.description}
          </Descriptions.Item>
        </Descriptions>

        <br />
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="large"
            shape="round"
            type="primary"
            onClick={addToCarthandler}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </I18nProvider>
  );
}

export default ProductInfo;
