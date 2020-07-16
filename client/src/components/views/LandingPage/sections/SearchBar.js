import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchBar(props) {
  const [SearchTerms, setSearchTerms] = useState("");

  const onChangeSearch = (event) => {
    setSearchTerms(event.currentTarget.value);

    props.refreshFunction(event.currentTarget.value);
  };

  return (
    <div>
      <Search
        value={SearchTerms}
        onChange={onChangeSearch}
        placeholder="Search the Enterpize Directory......"
      />
    </div>
  );
}

export default SearchBar;