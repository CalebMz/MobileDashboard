import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryLine, VictoryClipContainer} from "victory-native";

/**
 * This component contains the popularity line chart for Amazon Prime
 * The data was extracted from google trends and quantifies the popularity
 * rating of Amazon Prime in the last four months.
 * The data is padded on either end so as not to start at (0,0) and end at (100,0)
 */

const data = [
    {x: 0, y: 0},
    { x: 'Aug', y: 13 },
    { x: 'Sep', y: 13 },        //Data is stored in const data
    { x: 'Oct', y: 13 },
    { x: 'Nov', y: 12 },
    { x: 100, y:100}
   ];

function AmazonSub(props) {
    return (
        <View>
            <VictoryChart>
                <VictoryLine
                    animate={{duration: 2000, onLoad: {duration: 1000}}}                        //animates the line graph
                    groupComponent={<VictoryClipContainer clipPadding={{top:5, right:10}}/>}
                    style={{data: {stroke: "#A6AAAF", strokeWidth: 5, strokeLinecap:"round"}}}  //Stroke determines the look of the line itself
                    data={data}     //Load the data
                />
            </VictoryChart>
        </View>
    );
}

export default AmazonSub;