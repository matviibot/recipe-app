import React, { useState } from 'react';
import { SearchInput } from "../../atoms/Input";
import { PrimaryButton } from "../../atoms/Button";
import styles from './SearchBar.module.css'

const SearchBar = ({ setRequest }) => {
    const [value, setValue] = useState('');

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission and page refresh
        setRequest(value);
    };

    return (
        <form onSubmit={handleSubmit} className="container d-flex justify-content-center">
            <div className={styles['search-bar']}>
                <div className="input-group">
          <span className="input-group-text bg-dark text-light border-0">
            <i className="bi bi-search"></i>
          </span>
                    <SearchInput onChange={handleInput} value={value} placeholder="Search for recipes" />
                    <PrimaryButton type="submit">Search</PrimaryButton>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;
