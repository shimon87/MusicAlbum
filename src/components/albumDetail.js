import React from 'react';
import { Text, View, Image,Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = ({ album }) => {
  const { img, title, artist, tiny_img, url } = album;
  const { imgContainerStyle,
          textStyle,
          imgStyle,
          headerTextStyle,
          tinyimgStyle
        } = styles;
  return (
    <Card>
    <CardSection>
      <View style={imgContainerStyle}>
        <Image
        style={imgStyle}
        source={{ uri: img }}
        />
      </View>
      <View sytle={textStyle}>
        <Text style={headerTextStyle}> { title} </Text>
        <Text>{ artist}</Text>
      </View>
      </CardSection>

      <CardSection>
        <Image
          style={tinyimgStyle}
         source={{ uri: tiny_img }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} />
      </CardSection>

    </Card>
  );
};

const styles = {
  textStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flexend'
  },
  headerTextStyle: {
    fontSize: 18

  },
  imgStyle: {
      height: 50,
      width: 50
  },
  tinyimgStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  imgContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10

  }
};

export default AlbumDetail;
