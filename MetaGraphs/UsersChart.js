import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {VictoryPie} from "victory-native";

/**
 * Pie Chart to display the amount of users using the Victory Chart Library
 */

const data1 = [
    { x: 1, y: 241000000, label: "Netflix" },
    { x: 2, y: 73000000, label: "HBO" },
    { x: 3, y: 200000000, label: "Amazon" },
    { x: 4, y: 116000000, label: "Disney+" }
   ];

function UsersChart(props) {
    
    return (
        <View>
            <VictoryPie
            animate={{ onLoad: {duration: 500, easing: "bounce" } }}    //Provides animation for the graph
            padAngle={10}                                               //Angle of seperation between sections
            innerRadius= {100}                                          //Inner radius size
            padding={80}                                                //Size of chart
            data={data1}                                                //Load data into chart
            colorScale={["#D32431","#775BBE","#B7B9BB","#86C9D6"]}      //Color scale, one color to each attribute in dataset
            />
        </View>
    );
}

export default UsersChart;