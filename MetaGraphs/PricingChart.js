import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis} from "victory-native";

/**
 * Bar Chart to display the price of each streaming service
 */

const data = [                                              //Data is put into constant 'data'
    { service: '1', price: 158 },
    { service: '2', price: 220},
    { service: '3', price: 82 },
    { service: '4', price: 119 }
   ];

function PricingChart(props) {
    return (
        <View>
            
            <VictoryChart 
             domainPadding={40}                                             //Size of chart can be altered with this
            >
                <VictoryAxis
                    tickValues = {[1, 2, 3, 4]}
                    tickFormat = {["Netflix", "HBO", "Amazon Prime", "Disney+"]}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`R${x}`)}                           //Displays the data in a certain format
                />
                <VictoryBar
                    animate={{duration: 2000, onLoad: {duration: 1000}}}    //Animates the bar graph
                    barWidth={(30)}                                         //Changes width of graph
                    data={data}
                    style={{
                        data: {fill: "#3D3D3D"}
                    }}
                    labels={({ datum }) => `R${datum.price}`}
                    x="service"
                    y="price"
                />
            </VictoryChart>
        </View>
    );
}

export default PricingChart;

const styles = StyleSheet.create({
    Heading: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });