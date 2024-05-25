import React from "react";
import { useState } from "react";
function Search1(props) {
  function handleSearchTextKeyUp(event) {
    props.onSearchTextKeyUp(event.target.value);
  }
  return (
    <>
      <div className="mb-3">
        <input
          type="text"
          size="80"
          onKeyUp={handleSearchTextKeyUp}
          placeholder="Search a product"
        />
      </div>
    </>
  );
}
export default Search1;
