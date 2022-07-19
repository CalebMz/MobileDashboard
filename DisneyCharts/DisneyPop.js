import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryLine, VictoryClipContainer} from "victory-native";

/**
 * This component contains the popularity line chart for Disney+
 * The data was extracted from google trends and quantifies the popularity
 * rating of Disney+ in the last four months.
 * The data is padded on either end so as not to start at (0,0) and end at (100,0)
 */

const data = [
    {x: 0, y: 0},
    { x: 'Aug', y: 57 },
    { x: 'Sep', y: 46 },        //Data is stored in const data
    { x: 'Oct', y: 48 },
    { x: 'Nov', y: 75 },
    { x: 100, y:100}
   ];

function DisneyPop(props) {
    return (
        <View>
            <VictoryChart>
                <VictoryLine
                    animate={{duration: 2000, onLoad: {duration: 1000}}}        //animates the line graph
                    groupComponent={<VictoryClipContainer clipPadding={{top:5, right:10}}/>}
                    style={{data: {stroke: "#42AAC3", strokeWidth: 5, strokeLinecap:"round"}}}  //Stroke determines the look of the line itself 
                    data={data}         //loads the data
                />
            </VictoryChart>
        </View>
    );
}

export default DisneyPop;