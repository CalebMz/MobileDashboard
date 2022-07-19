import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

import UsersChart from '../MetaGraphs/UsersChart';
import PricingChart from '../MetaGraphs/PricingChart';
import * as RootNavigation from '../RootNavigation';

/**Our home screen is responsible for handling two graphs(Number of users and the price chart)
 * and displaying four buttons that onPress will navigate to the relevant screen
 * This allowed us to display as much information as possible without crowding the users screen with
 * information they may not want to see, therefore giving the user freedom of choice
 * 
 * All components are placed in a parent <View></View> component, with all sub components having
 * their own styles.
 * 
 * Each screen is seperated with all graphs relevant to that screen is placed into a file as a component.
 */

function HomeScreen(props) {
  return (
    <View style={styles.container}>
        <View style={styles.Button}>
            <Button
            color="#D32431"
            title="Netflix"
            onPress={() => RootNavigation.navigate('Netflix')}
            />
            <Button
            color="#775BBE"
            title="HBO Max"
            onPress={() => RootNavigation.navigate('HBO Max')}
            />
            <Button
            color="#B7B9BB"
            title="Amazon"
            onPress={() => RootNavigation.navigate('Amazon')}
            />
            <Button
            color="#86C9D6"
            title="Disney+"
            onPress={() => RootNavigation.navigate('Disney+')}
            />
        </View>
        <View style={styles.PieChart}>
            <UsersChart></UsersChart>
        </View>

        <View style={styles.BarChart}>
            <PricingChart></PricingChart>
        </View>


        <Text style={styles.PricingTitle}> Pricing Per Month </Text>
        <Text style={styles.UserTitle}> Number of Users </Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background:{
      flex:1
  },
  BarChart:{
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    bottom: 25,
    left: 15
  },
  PieChart:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 60,
  },
  PricingTitle:{
    flex: 1,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    bottom: 10,
    left: 140
  },
  UserTitle:{
    flex: 1,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    top: 120,
    left: 140
  },
  Button:{
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  }
});

export default HomeScreen;