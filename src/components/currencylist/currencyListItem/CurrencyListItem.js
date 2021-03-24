import React from 'react';
import './CurrencyListItem.css'
import PropTypes from 'prop-types';

class CurrencyListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isFlagProvided: props.flag,
            nameI18N: props.nameI18N,
            currency: props.currency,
            exchangeRate: props.exchangeRate
        }
    }

    render(){
        return(
            <div className="currencyListItem">
                <div className="flag">
                    <img src={`/flags/flags/${this.state.currency.substr(0,2).toLowerCase()}.png`} alt={this.state.currency} />
                </div>
                <p className="nameI18n">
                    {this.state.nameI18N}
                </p>
                <p className="currency">
                    {this.state.currency}
                </p>
                <p className="exchangeRateBuy">
                    {this.state.exchangeRate.buy}
                </p>
                <p className="exchangeRateSell">
                    {this.state.exchangeRate.sell}
                </p>
            </div>
        );
    }
}

CurrencyListItem.defaultProps = {
    isFlagProvided: false,
    nameI18N: 'N/A',
    currency: 'N/A',
    exchangeRate: {}
}

CurrencyListItem.propTypes = {
    isFlagProvided: PropTypes.bool,
    nameI18N: PropTypes.string,
    currency: PropTypes.string,
    exchangeRate: PropTypes.object
}

export default CurrencyListItem;