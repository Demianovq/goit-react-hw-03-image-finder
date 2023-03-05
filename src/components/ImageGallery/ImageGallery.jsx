import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../ButtonLoadmore/Button';
import { GetImages } from '../GetImages/GetImages';
import { Loader } from '../Loader/Loader';

export class ImageGallery extends Component {
  state = {
    images: [],
    isMore: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { textSearch, page } = this.props;
    if (
      prevProps.textSearch !== textSearch ||
      (prevProps.page !== page && page !== 1)
    ) {
      this.setState({
        isLoading: true,
      });
      GetImages(textSearch, page).then(resp => {
        if (prevProps.textSearch !== textSearch) {
          this.setState({ images: [...resp.data.hits] });
        } else {
          this.setState({
            images: [...prevState.images, ...resp.data.hits],
          });
        }
        if (resp.data.hits.length > 11) {
          this.setState({
            isMore: true,
          });
          this.setState({
            isLoading: false,
          });
        }
      });
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading && <Loader />}
        <ul className="ImageGallery">
          {this.state.images.map(image => {
            return <ImageGalleryItem key={image.id} image={image} />;
          })}
        </ul>
        {this.state.isMore && <Button onClick={this.props.handleLoadMore} />}
      </>
    );
  }
}
