import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis} from "victory-native";

/**
 * This component has the bar chart displaying four top exclusives on Amazon
 * This data is taken from the streaming service itself with ratings correlating
 * to those from IMDb.  
 */


const data = [
    { series: '1', rating: 8.8 },
    { series: '2', rating: 8.4 },       //Data is loaded into const data
    { series: '3', rating: 8.7 },
    { series: '4', rating: 8.7 },
   ];

function AmazonExclusives(props) {
    return (
        <View>
            <VictoryChart
                domainPadding={22}
                height={250}
            >
                <VictoryAxis
                    tickValues={[1,2,3,4]}                      //The name of show and which tick they relate to
                    tickFormat={["The Boys", "Bosch", "Grand Tour", "Invincible"]}
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
                        data: {fill: "#B7B9BB"}
                    }}
                    labels={({ datum }) => `${datum.rating}`}   //Display rating on top of bar
                    x="series"
                    y="rating"
                />
            </VictoryChart>
        </View>
    );
}

export default AmazonExclusives;