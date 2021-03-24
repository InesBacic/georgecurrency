import React from 'react';
import './CurrencyListView.css';
import SearchBar from '../searchbar/SearchBar';
import {useState, useEffect} from 'react';
import CurrencyList from './CurrencyList';

const CurrencyListView = ({match}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [currencyData, setCurrencyData] = useState([]);
    const dataUrl = "https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343";
  
    useEffect(() => {
        const getCurrencyData = async () => {
        const response = await fetch(dataUrl);
        const data = await response.json();
  
        const filteredData = filterOurRedundantData(data.fx);
        setCurrencyData(filteredData);
        setSearchResult(filteredData);
    };
        getCurrencyData();
    }, []);

    const filterOurRedundantData = (data) => {
        return data.filter(dataItem => dataItem.hasOwnProperty('exchangeRate'));
      }
    
    const searchForCurrencies = (searchValue) => {

        const results = currencyData.filter(currencyItem => currencyItem.currency.toLowerCase().includes(searchValue));
        setSearchResult(results);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        searchForCurrencies(e.target.value);
    }

    return(
        <div className="currencyListView">
            <SearchBar searchTerm = {searchTerm} onChange = {handleChange} />
            <CurrencyList currencyData = {searchResult} />
        </div>
    );
 
}

export default CurrencyListView;