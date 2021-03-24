import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

const SearchBar = ({formLabelName, searchTerm, onChange}) => {

    return(
        <div className="searchBar">
            <form>
                <label htmlFor="searchInputValue"> {formLabelName} </label>    
                <input type="text" name="searchInputValue" placeholder="Enter currency.." value = {searchTerm} onChange={onChange}/>
            </form>
        </div>
    );
}

SearchBar.defaultProps = {
    formLabelName: 'Search'
}

SearchBar.propTypes = {
    formLabelName: PropTypes.string.isRequired,
    searchTerm:  PropTypes.string,
    onChange: PropTypes.func
}

export default SearchBar; 
