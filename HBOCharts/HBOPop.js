import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryLine, VictoryClipContainer} from "victory-native";

/**
 * This component contains the popularity line chart for HBO Max
 * The data was extracted from google trends and quantifies the popularity
 * rating of HBO Max in the last four months.
 * The data is padded on either end so as not to start at (0,0) and end at (100,0)
 */

const data = [
    {x: 0, y: 0},
    { x: 'Aug', y: 42 },
    { x: 'Sep', y: 44},         //Data stored in const data
    { x: 'Oct', y: 52 },
    { x: 'Nov', y: 45 },
    { x: 100, y:100}
   ];

function HBOPop(props) {
    return (
        <View>
            <VictoryChart>
                <VictoryLine
                    animate={{duration: 2000, onLoad: {duration: 1000}}}                //Animates line chart
                    groupComponent={<VictoryClipContainer clipPadding={{top:5, right:10}}/>}
                    style={{data: {stroke: "#775BBE", strokeWidth: 5, strokeLinecap:"round"}}}  //Stroke determines the look of the brush itself
                    data={data}
                />
            </VictoryChart>
        </View>
    );
}

export default HBOPop;