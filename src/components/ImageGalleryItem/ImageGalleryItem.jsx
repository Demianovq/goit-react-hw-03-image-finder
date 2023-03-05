import { Modal } from './Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  renderAModal = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div>
        <li key={this.props.id} className="ImageGalleryItem">
          {this.state.isOpen && (
            <Modal image={this.props.image.largeImageURL} />
          )}

          <img
            onClick={this.renderAModal}
            src={this.props.image.webformatURL}
            alt={this.props.image.tags}
            width="300px"
            className="ImageGalleryItem-image"
          />
        </li>
      </div>
    );
  }
}
