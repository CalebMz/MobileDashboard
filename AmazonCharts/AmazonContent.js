import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {VictoryPie} from "victory-native";

/**
 * This component houses the content pie chart for Amazon
 * The pie chart is divided into movies and series
 */

const data1 = [
    { x: 1, y: 81, label: "Movies" },
    { x: 2, y: 19, label: "Series" },
   ];

function AmazonContent(props) {
    return (
        <View>
            <VictoryPie
                animate={{ onEnter: {duration: 500, easing: "bounce" } }}       //Animates the chart for when changes are made
                padding={140}
                innerRadius={110}
                data={data1}                                                //Load data into the chart
                colorScale={["#B7B9BB","#C7C9C8"]}
            />
        </View>
    );
}

export default AmazonContent;