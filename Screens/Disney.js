import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import DisneyContent from '../DisneyCharts/DisneyContent';
import DisneyExclusives from '../DisneyCharts/DisneyExclusives';
import DisneyPop from '../DisneyCharts/DisneyPop';

/**This screen is for displaying all graphs with data on Disney+.
 * All charts are imported as components and can be found in the folder DisneyCharts
 */

function Disney(props) {
    return (
        <View style={styles.background}>
            <View style={styles.contentChart}>
                <DisneyContent></DisneyContent>
            </View>
            <View style={styles.PopChart}>
                <DisneyPop></DisneyPop>
            </View>
            <View style={styles.Exclusives}>
                <DisneyExclusives></DisneyExclusives>
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
        backgroundColor: "#e8f4f8" 
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
        bottom: 170,
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
        top: 290,
    }
});

export default Disney;