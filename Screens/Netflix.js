import React from 'react';
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { color } from 'react-native-reanimated';
import Content from '../NetflixCharts/Content';
import Popularity from '../NetflixCharts/Popularity';
import TopExclusives from '../NetflixCharts/TopExclusives';

/**This screen is for displaying all graphs with data on Netflix.
 * All charts are imported as components and can be found in the folder NetflixCharts
 */

function Netflix(props) {
    return (
      <View style={styles.background}>
          <View style={styles.contentChart}>
              <Content></Content>
          </View>
          <View style={styles.PopChart}>
              <Popularity></Popularity>
          </View>
          <View style={styles.Exclusives}>
              <TopExclusives></TopExclusives>
          </View>
          <Text style={styles.content}>Content</Text>
          <Text style={styles.pop}>Popularity Rating</Text>
          <Text style={styles.exclusives}>Top Exclusive Series</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: "#FFCCCB",
    },
    contentChart:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    content:{
        position: 'absolute',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        top: 5,
    },
    exclusives:{
        position: 'absolute',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        bottom: 200
    },
    Exclusives:{
        justifyContent: 'flex-end',
        alignSelf: 'center',
        top: -40
    },
    PopChart:{
        justifyContent: 'center',
        alignSelf: 'center',
        top: -50
    },
    pop:{
        position: 'absolute',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        top: 295,
    },
});
export default Netflix;