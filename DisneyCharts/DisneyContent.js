import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {VictoryPie} from "victory-native";

/**
 * This component houses the content pie chart for Disney
 * The pie chart is divided into movies and series
 */

const data1 = [
    { x: 1, y: 72, label: "Movies" },
    { x: 2, y: 28, label: "Series" },
   ];

function DisneyContent(props) {
    return (
        <View>
            <VictoryPie
                animate={{ onEnter: {duration: 500, easing: "bounce" } }}       //Animates the pie chart
                padding={140}
                innerRadius={125}
                data={data1}                                        //Load data into pie chart
                colorScale={["#add8e6","#86C9D6"]}
            />
        </View>
    );
}

export default DisneyContent;