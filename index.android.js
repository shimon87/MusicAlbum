

import React from 'react';
import {
  View,
  AppRegistry
} from 'react-native';
import './config/ReactotronConfig';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/header';

const App = () => (
  <View>
  <Header headerText={'Albums'} />
  <AlbumList />
  </View>

 );


//render to the screen
AppRegistry.registerComponent('albums', () => App);
