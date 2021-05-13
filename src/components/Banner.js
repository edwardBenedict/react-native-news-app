import React from 'react';
import {ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import {dummyData} from '../helpers/DummyData';

const Banner = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{borderColor: 'black', borderWidth: 1, padding: 3}}>
      {dummyData.map(item => {
        return (
          <Image
            style={styles.bannerStyle}
            source={{uri: item.imageUrl}}
            key={item.id}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bannerStyle: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.25,
    margin: 5,
    borderRadius: 5,
  },
});

export {Banner};
