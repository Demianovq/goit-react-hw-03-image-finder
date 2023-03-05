import { Component } from 'react';
import { GetImages } from '../GetImages/GetImages';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../ButtonLoadmore/Button';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value !== this.props.value ||
      prevState.page !== this.state.page
    )
      GetImages(this.props.value, this.state.page).then(resp => {
        this.setState({ images: [...prevState.images, ...resp.data.hits] });
      });
  }

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    return (
      <>
        <ul className="ImageGallery">
          {this.state.images.map(image => {
            return <ImageGalleryItem key={image.id} image={image} />;
          })}
        </ul>
        <Button />
      </>
    );
  }
}
