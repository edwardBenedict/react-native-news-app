import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
} from 'react-native';
import {dummyData} from './helpers/DummyData';
import {NewsCard, Banner} from './components';
import newsPaper from './assets/newspaper.png';

const News = () => {
  const renderData = ({item}) => <NewsCard item={item} />;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fffbdf'}}>
      <View style={styles.containerStyle}>
        <Image style={styles.imgStyle} source={newsPaper} />
        <Text style={styles.mainTitle}>News App</Text>
      </View>
      <FlatList
        data={dummyData}
        renderItem={renderData}
        keyExtractor={(item, id) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={Banner}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderWidth: 1,
    padding: 5,
    borderColor: 'grey',
    borderRadius: 5,
  },
  mainTitle: {
    fontSize: 50,
  },
  imgStyle: {
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').height * 0.1,
    resizeMode: 'contain',
  },
});

export default News;
