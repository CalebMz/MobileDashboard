import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {VictoryPie} from "victory-native";

/**
 * This component houses the content pie chart for Netflix
 * The pie chart is divided into movies and series
 */

const data1 = [
    { x: 1, y: 70, label: "Movies" },       //data is set here 
    { x: 2, y: 30, label: "Series" },
   ];

function Content(props) {
    return (
        <View>
            <VictoryPie
                animate={{ onEnter: {duration: 500, easing: "bounce" } }}   //Animates the pie chart when changes are made to data
                padding={140}
                innerRadius={125}
                data={data1}                                                //Load data into the chart
                colorScale={['#D32431', '#E88B8B']}
            />
        </View>
    );
}

export default Content;