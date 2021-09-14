import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import fetchImages from './services/pixabay-api';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Button from './components/Button/Button.jsx';
import Modal from './components/Modal/Modal.jsx';

export default class App extends Component {
  state = {
    imageName: '',
    images: [],
    reqStatus: 'idle',
    page: 1,
    showModal: false,
    modalImage: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const nextQuery = this.state.imageName;
    const nextPage = this.state.page;

    if (prevState.imageName !== nextQuery || prevState.page !== nextPage) {
      const images = await fetchImages(nextQuery, nextPage);
      this.setState({ images });
    }
  }

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSelectedImage = largeImage => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      modalImage: largeImage,
    }));
  };

  render() {
    const { images, showModal, modalImage } = this.state;

    const showButton = images.length >= 1;
    return (
      <div>
        <Searchbar onSearch={this.handleFormSubmit} />
        <ImageGallery
          images={images}
          toggleModal={this.toggleModal}
          largeImage={this.handleSelectedImage}
        />
        {showButton && <Button onClick={this.loadMoreBtn} />}
        {showModal && <Modal modalImage={modalImage} onClose={this.toggleModal} />}
      </div>
    );
  }
}
