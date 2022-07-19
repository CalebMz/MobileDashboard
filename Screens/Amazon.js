import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AmazonContent from '../AmazonCharts/AmazonContent';
import AmazonExclusives from '../AmazonCharts/AmazonExclusives';
import AmazonPop from '../AmazonCharts/AmazonPop';

/**This screen is for displaying all graphs with data on Amazon.
 * All charts are imported as components and can be found in the folder AmazonCharts
 */

function Amazon(props) {
    return (
        <View style={styles.background}>
            <View style={styles.contentChart}>
                <AmazonContent></AmazonContent>
            </View>
            <View style={styles.SubChart}>
                <AmazonPop></AmazonPop>
            </View>
            <View style={styles.Exclusives}>
                <AmazonExclusives></AmazonExclusives>
            </View>
            <Text style={styles.content}>Content</Text>
            <Text style={styles.sub}>Popularity Rating</Text>
            <Text style={styles.exclusives}>Top Exclusive Series</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: "#F3F4F5" 
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
        bottom: 200
    },
    Exclusives:{
        justifyContent: 'flex-end',
        alignSelf: 'center',
        bottom: 180,
    },
    SubChart:{
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 150
    },
    sub:{
        position: 'absolute',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        top: 290,
    }
});
export default Amazon;