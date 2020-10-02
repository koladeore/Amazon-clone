import React from 'react';
import { Link } from 'react-router-dom';
import './SearchDropdown.css';
const SearchDropdown = ({id, title}) => {
    return (
        <div className="dropdown">
            <Link to={`/searchProduct?id=${id}`}>
                <p>{title}</p>
            </Link>
        </div>
    )
}

export default SearchDropdown;
