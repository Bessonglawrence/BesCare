import {StyleSheet} from 'react-native';
import React,{useState} from 'react';

const [dimensions, setDimensions] = useState({
    width: 20,
    height: 100,
  });

const buttonHeight = dimensions.height; // Adjust height as needed

const styles = StyleSheet.create({
  tabBar: {
   flexDirection: 'row',
   backgroundColor: 'white',
   justifyContent: 'space-between',
   alignItems: 'center',
   height: 73,
   shadowOffset: {
     width: 0,
     height: 10,
   },
   shadowColor: '#000',
   shadowOpacity: 0.25,
   shadowRadius: 3.5,
   elevation: 5,
  },
  animatedView: {
            position: 'absolute',
            height: buttonHeight,
            backgroundColor: 'brown',
            borderRadius: 40,
            left: 32.5, // Adjust left position to center the indicator
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 3.5,
            elevation: 5,
          }
});
export default styles;