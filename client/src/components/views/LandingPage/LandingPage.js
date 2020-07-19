import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import Axios from "axios";
import ImageSlider from "../../utils/ImageSlider";
import { categories, price } from "./sections/Datas";
import { Icon, Col, Card, Row, Button } from "antd";
import CheckBox from "./sections/CheckBox";
import RadioBox from "./sections/RadioBox";
import SearchBar from "./sections/SearchBar";
import { I18nProvider, LOCALES } from "../../../i18n";
import { FormattedMessage } from "react-intl";
import translate from "../../../i18n/translate";
const { Meta } = Card;

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(12);
  const [PostSize, setPostSize] = useState(0);
  const [SearchTerms, setSearchTerms] = useState("");
  const [locale, setlocale] = useState();

  const [Filters, setFilters] = useState({
    categories: [],
    price: [],
  });

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };
    getProducts(variables);
  }, []);

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={4} md={12} xs={20}>
        <Card
          hoverable={true}
          cover={
            <a href={`/product/${product._id}`}>
              <ImageSlider images={product.images} />
            </a>
          }
        >
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  const getProducts = (variables) => {
    Axios.post("/api/product/getProducts", variables).then((response) => {
      if (response.data.success) {
        if (variables.loadMore) {
          setProducts([...Products, ...response.data.products]);
        } else {
          setProducts(response.data.products);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("Failed to fetch product data");
      }
    });
  };

  const loadMore = () => {
    let skip = Skip + Limit;
    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
      searchTerm: SearchTerms,
    };
    getProducts(variables);
    setSkip(skip);
  };

  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };
    getProducts(variables);
    setSkip(0);
  };
  const handlePrice = (value) => {
    const data = price;
    let array = [];
    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };

  const updateSearchTerms = (newSearchTerm) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };

    setSkip(0);
    setSearchTerms(newSearchTerm);

    getProducts(variables);
  };
  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };
    newFilters[category] = filters;

    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }
    showFilteredResults(newFilters);
    setFilters(newFilters);
  };
  return (
    <I18nProvider locale={LOCALES.FRENCH}>
      <div style={{ width: "75%", margin: "3rem auto" }}>
        <div style={{ textAlign: "center" }}>
          <h1>
            {translate("Welcome to the world of computers")}
            <Icon type="rocket" />{" "}
          </h1>
        </div>

        {/* Filters */}

        <Row style={{ paddingLeft: "520px" }} gutter={[10, 10]}>
          <Col lg={12} xs={20}>
            <SearchBar refreshFunction={updateSearchTerms} />
          </Col>
        </Row>
        <br />
        <br />

        <Row gutter={[16, 16]}>
          <Col lg={12} xs={24}>
            <CheckBox
              list={categories}
              handleFilters={(filters) => handleFilters(filters, "categories")}
            />
          </Col>
          <Col lg={12} xs={24}>
            <RadioBox
              list={price}
              handleFilters={(filters) => handleFilters(filters, "price")}
            />
          </Col>
        </Row>
        <Button>Translate </Button>
        <hr />
        <br />
        {Products.length === 0 ? (
          <div
            style={{
              display: "flex",
              height: "300px",
              alignItems: "center",
              paddingLeft: "400px",
            }}
          >
            <h2>No post yet...</h2>
          </div>
        ) : (
          <div>
            <Row gutter={[16, 16]}>{renderCards}</Row>
          </div>
        )}

        <br />
        <br />
        {PostSize >= Limit && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={loadMore}>Load More</button>
          </div>
        )}
      </div>
    </I18nProvider>
  );
}

export default LandingPage;
