import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Reactotron from 'reactotron-react-native';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    axios.get('https://peaceful-ocean-86957.herokuapp.com/albums')
    .then(response =>
      this.setState({ albums: response.data.album })
      );
  }

  renderAlbums() {
       return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />
       );
  }

  render() {
  return (
    <ScrollView>
      {this.renderAlbums()}
    </ScrollView>
    );
  }
}

export default AlbumList;
