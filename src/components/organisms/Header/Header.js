import React from 'react';
import SearchBar from "../../molecules/SearchBar";

const Header = ({setRequest}) => {
    return (
        <div className='d-flex m-3'>
            <SearchBar setRequest={setRequest}/>
        </div>
    );
};

export default Header;