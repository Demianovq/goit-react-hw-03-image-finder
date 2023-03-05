import { Modal } from './Modal';

export const ImageGalleryItem = ({
  image: { id, webformatURL, largeImageURL, tags },
}) => {
  return (
    <div>
      <li key={id} className="ImageGalleryItem">
        {/* <Modal image={largeImageURL} /> */}
        <img
          src={webformatURL}
          alt={tags}
          width="300px"
          className="ImageGalleryItem-image"
        />
      </li>
    </div>
  );
};
