import React from 'react';
import {SearchInput} from "../../atoms/Input";

const SearchBar = () => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="input-group">
            <span className="input-group-text bg-dark text-light border-0">
              <i className="bi bi-search"></i>
            </span>
                <SearchInput placeholder="Search for recipes"/>
            </div>
        </div>
    );
};

export default SearchBar;