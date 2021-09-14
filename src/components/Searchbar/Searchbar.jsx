import PropTypes from 'prop-types';
import '../../styles/styles.css';


const Searchbar = ({ onSearch }) => {
    const handleSearch = e => {
        e.preventDefault();

        onSearch(e.target.elements.imageName.value);
    };     

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSearch} >
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="imageName"
                />
            </form>
        </header>
    );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;