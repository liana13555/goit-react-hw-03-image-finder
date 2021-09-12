import { Component } from 'react';

export default class Searchbar extends Component {
    state = {
        imageName: '',
    }

    handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageName.trim() === '') {
    //   toast.error('Введите имя покемона.');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit} >
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>          
        );
    }
}

