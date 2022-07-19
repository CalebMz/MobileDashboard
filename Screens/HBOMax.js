import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import Content from '../HBOCharts/Content';
import TopExclusives from '../HBOCharts/TopExclusives';
import HBOPop from '../HBOCharts/HBOPop';

/**This screen is for displaying all graphs with data on HBOMax.
 * All charts are imported as components and can be found in the folder HBOCharts
 */

function HBOMax(props) {
    return (
        <View style={styles.background}>
            <View style={styles.contentChart}>
                <Content></Content>
            </View>
            <View style={styles.PopChart}>
                <HBOPop></HBOPop>
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
        backgroundColor: "#CBC3E3" 
    },
    contentChart:{
        justifyContent: 'center',
        alignItems: 'center',
        top: -50,
    },
    content:{
        position: 'absolute',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        top: 10,
    },
    exclusives:{
        position: 'absolute',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        bottom: 210
    },
    Exclusives:{
        justifyContent: 'flex-end',
        alignSelf: 'center',
        bottom: 180,
    },
    PopChart:{
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 150
    },
    pop:{
        position: 'absolute',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        top: 280,
    },
});

export default HBOMax;