import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchNews from "./SearchNews";
function NewsFeed() {
  return (
    <div className="container">
      <div className="row">
        <div className="col ">
          <h4 className="h4 text-center mt-3">Top Business HeadLines</h4>
        </div>
      </div>
      <hr className="bg-dark" />

      <SearchNews />
    </div>
  );
}

export default NewsFeed;
