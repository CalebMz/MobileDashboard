import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryLabel, VictoryChart, VictoryLine, VictoryClipContainer, VictoryZoomContainer} from "victory-native";

/**
 * This component contains the popularity line chart for Netflix
 * The data was extracted from google trends and quantifies the popularity
 * rating of Netflix in the last four months.
 * The data is padded on either end so as not to start at (0,0) and end at (100,0)
 */

const data = [
    {x: 0, y: 0},
    { x: 'Aug', y: 66 },        //Data held in const data
    { x: 'Sep', y: 69},
    { x: 'Oct', y: 67 },
    { x: 'Nov', y: 64 },
    { x: 100, y: 100}
   ];

function Popularity(props) {
    return (
        <View>
            <VictoryChart>
                <VictoryLine
                    animate={{duration: 2000, onLoad: {duration: 1000}}}
                    groupComponent={<VictoryClipContainer clipPadding={{top:5, right:10}}/>}
                    style={{data: {stroke: "#c43a31", strokeWidth: 5, strokeLinecap:"round"}}}  //Stroke determines how the line itself looks
                    data={data}
                />
            </VictoryChart>
        </View>
    );
}

export default Popularity;