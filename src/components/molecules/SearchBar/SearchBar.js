import React, {useState} from 'react';
import {SearchInput} from "../../atoms/Input";
import {PrimaryButton} from "../../atoms/Button";
import styles from './SearchBar.module.css'

const SearchBar = ({setRequest}) => {
    const [value, setValue] = useState('')
    const handleInput = (e) => {

        setValue(e.target.value)
    }
    const handleSubmit = () => {
        console.log(value)
        setRequest(value)
    }
    return (
        <div className={styles['search-bar']}>
            <div className="input-group">
            <span className="input-group-text bg-dark text-light border-0">
              <i className="bi bi-search"></i>
            </span>
                <SearchInput onChange={e => handleInput(e)} value={value} placeholder="Search for recipes"/>
                <PrimaryButton onClick={handleSubmit} >Search</PrimaryButton>
            </div>

        </div>
    );
};

export default SearchBar;