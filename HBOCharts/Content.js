import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {VictoryPie} from "victory-native";

/**
 * This component houses the content pie chart for HBO Max
 * The pie chart is divided into movies and series
 */

const data1 = [
    { x: 1, y: 82, label: "Movies" },
    { x: 2, y: 18, label: "Series" },
   ];

function Content(props) {
    return (
        <View>
            <VictoryPie
                animate={{ onEnter: {duration: 500, easing: "bounce" } }}       //Animates the pie chart
                padding={140}
                innerRadius={110}
                data={data1}                            //Load data into the pie chart
                colorScale={["#775BBE","#9286CF"]}
            />
        </View>
    );
}

export default Content;