import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return(
        <div className="header">
            <div className="headerTitle">{title}</div>
        </div>
    );

}

Header.defaultProps = {
    title: "George FE Test"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;