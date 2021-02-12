import React, {Fragment} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
  graphStyle,
} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

const dataPenggunaanAir = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [90, 65, 78, 50, 59, 63],
    },
  ],
};
const dataPenghematanAir = {
  labels: ['D', 'Efisiensi', 'Hemat Air'], // optional
  data: [0.9, 0.7, 0.9],
};
const Tips = () => {
  return (
    <View style={{backgroundColor: '#6201EE', flex: 1}}>
      <View>
        <Text
          style={{
            marginLeft: 10,
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Data Penggunanan Air Tahun ini
        </Text>
        <BarChart
          style={graphStyle}
          data={dataPenggunaanAir}
          width={screenWidth}
          height={250}
          yAxisSuffix="L"
          chartConfig={{
            backgroundColor: '#6201EE',
            backgroundGradientFrom: '#6201EE',
            backgroundGradientTo: '#6201EE',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '3',
              stroke: '#ffa726',
            },
          }}
          verticalLabelRotation={30}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            marginLeft: 10,
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Data Bulan ini
        </Text>
        <ProgressChart
          data={dataPenghematanAir}
          width={screenWidth}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundColor: '#6201EE',
            backgroundGradientFrom: '#6201EE',
            backgroundGradientTo: '#6201EE',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '3',
              stroke: '#ffa726',
            },
          }}
          hideLegend={false}
        />
      </View>
    </View>
  );
};

export default Tips;
