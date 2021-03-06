import React from 'react';

import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
   const { textStyle, viewStyle } = styles;
   return (
     <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
      </View>
    );
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b3b3cc',
    shadowColor: '#ff3333',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    padding: 20,
    height: 30,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20,
  }


};

export default Header;
