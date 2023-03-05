import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    textSearch: '',
    page: 1,
  };

  handleSubmit = textSearch => {
    this.setState({ textSearch, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    return (
      <div>
        <Searchbar onSearch={this.handleSubmit} />
        <ImageGallery
          textSearch={this.state.textSearch}
          page={this.state.page}
          handleLoadMore={this.handleLoadMore}
        />
        <ToastContainer />
      </div>
    );
  }
}
