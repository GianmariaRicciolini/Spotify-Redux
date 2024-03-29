import React, { useState } from "react";
import { Form } from "react-bootstrap";

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim()) {
      const searched = encodeURIComponent(searchValue.trim());
      window.location.href = `/${searched}`;
    }
  };

  return (
    <Form className="input-group mt-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        id="searchField"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
        value={searchValue}
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary btn-sm h-100" type="submit">
          GO
        </button>
      </div>
    </Form>
  );
}

export default SearchBar;
