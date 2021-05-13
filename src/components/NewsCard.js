import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const NewsCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.imageUrl}} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.47,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  description: {},
  image: {
    height: Dimensions.get('window').height * 0.25,
    resizeMode: 'center',
    borderRadius: 5,
  },
});

export {NewsCard};
