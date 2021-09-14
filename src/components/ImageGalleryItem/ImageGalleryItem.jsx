import PropTypes from 'prop-types';

export default function ImageGalleryItem({ webformatURL, tags, onClick }) {
    return (
        <li className="ImageGalleryItem">
            <img src={webformatURL}
                alt={tags}
                onClick={onClick}
                className="ImageGalleryItem-image"
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}
