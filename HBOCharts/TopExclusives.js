import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis} from "victory-native";

/**
 * This component has the bar chart displaying four top exclusives on HBO Max
 * This data is taken from the streaming service itself with ratings correlating
 * to those from IMDb.  
 */

const data = [
    { series: '1', rating: 8.7 },
    { series: '2', rating: 9.2 },       //data is stored in const data
    { series: '3', rating: 8.6 },
    { series: '4', rating: 7.6 },
   ];

function TopExclusives(props) {
    return (
        <View>
            <VictoryChart
                domainPadding={20}
                height={250}
                >
                <VictoryAxis
                    tickValues={[1,2,3,4]}                          //The name of show and which tick they relate to
                    tickFormat={["Succession", "GOT", "Doctor Who", "Titans"]}
                    />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`${x}`)}
                    />
                <VictoryBar
                    animate={{duration: 2000, onLoad: {duration: 1000}}}    //animates graph when screen is loaded
                    barWidth={(40)}
                    data={data}                                 //Load data into graph
                    style={{
                        data: {fill: "#4C2881"}
                    }}
                    labels={({ datum }) => `${datum.rating}`}   //Display rating on top of bar
                    x="series"
                    y="rating"
                />
            </VictoryChart>
        </View>
    );
}

export default TopExclusives;