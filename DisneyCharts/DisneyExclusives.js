import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis} from "victory-native";

/**
 * This component has the bar chart displaying four top exclusives on Disney+
 * This data is taken from the streaming service itself with ratings correlating
 * to those from IMDb.  
 */


const data = [
    { series: '1', rating: 8.8 },
    { series: '2', rating: 8.6 },       //data is stored in const data
    { series: '3', rating: 8.0 },
    { series: '4', rating: 8.3 },
   ];

function DisneyExclusives(props) {
    return (
        <View>
            <VictoryChart
                domainPadding={22}
                height={250}
            >
                <VictoryAxis
                    tickValues={[1,2,3,4]}                           //The name of show and which tick they relate to
                    tickFormat={["Mandalorian", "Loki", "WandaVision", "Bad Batch"]}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`${x}`)}
                />
                <VictoryBar
                    animate={{duration: 2000, onLoad: {duration: 1000}}}    //animates the graph on load
                    barWidth={(40)}
                    data={data}                                 //Load data into graph
                    style={{
                        data: {fill: "#72bcd4"}
                    }}
                    labels={({ datum }) => `${datum.rating}`}   //Display rating on top of bar
                    x="series"
                    y="rating"
                />
            </VictoryChart>
        </View>
    );
}

export default DisneyExclusives;