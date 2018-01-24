import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView  } from 'react-native';
import Album from './src/components/Album';
import AlbumList from './src/components/AlbumList';
import Band from './src/components/Band';
import BandProfile from './src/components/BandProfile';

export default class App extends React.Component {

  render() {

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <AlbumList></AlbumList>
        </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
      flex: 1,
      backgroundColor: '#eee',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
