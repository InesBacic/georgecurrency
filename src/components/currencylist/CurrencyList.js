import CurrencyListItem from './currencyListItem/CurrencyListItem';
import './CurrencyList.css';

const CurrencyList = ({currencyData}) => {
    return(
        <div className="currencyList">
            <div className="head">
                <div className="sell">
                    Sell
                </div>
                <div className="buy">
                    Buy
                </div>
            </div>
            {currencyData.map(item => (
                <div key = {item.nameI18N + item.currency}>
                    <CurrencyListItem flag={item.hasOwnProperty('flags')? true : false} 
                                      nameI18N = {item.nameI18N} 
                                      currency = {item.currency} 
                                      exchangeRate = {item.hasOwnProperty('exchangeRate')? (item.exchangeRate) : {}} />
                </div>
            ))}
            
        </div>
    );
}

export default CurrencyList;