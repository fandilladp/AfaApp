import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Animated,
  Fragment,
  Dimensions
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import {useTheme} from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {hardware} from '../model/Hardware';

const HomeScreen = ({navigation, props}) => {
  const theme = useTheme();

  const initialHardware = {
    hardware,
  };

  const [state, setState] = React.useState(initialHardware);

  return (
    <View style={{flex: 1}}>
      <View style={[styles.section, {height: 170}]}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex: 1}}
          region={{
            latitude: -5.357904019747611,
            longitude: 105.31436540134686,
            latitudeDelta: 0.00864195044303443,
            longitudeDelta: 0.000142817690068,
          }}>
          <MapView.Marker
            coordinate={{
              latitude: -5.357904019747611,
              longitude: 105.31436540134686,
              latitudeDelta: 0.00864195044303443,
              longitudeDelta: 0.000142817690068,
            }}
            image={require('../assets/map_marker.png')}
          />
        </MapView>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={{fontWeight:'bold', marginLeft: 10}}>Debit Air Perhari</Text>
          <LineChart
            data={{
              labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix="L"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#6201EE",
              backgroundGradientFrom: "#6201EE",
              backgroundGradientTo: "#8440E6",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "3",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      </View>
      <View style={{height: 130}}>
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          height={150}
          style={{position: 'absolute', paddingHorizontal: 10}}
          contentInset={{
            // iOS only
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          contentContainerStyle={{
            paddingRight: Platform.OS === 'android' ? 0 : 0,
          }}>
          {state.hardware.map((devices, index) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{devices.title}</Text>
              <Text style={styles.cardKondisi}>{devices.kondisi}</Text>
              <View style={styles.button}>
                
                <TouchableOpacity
                
                 onPress={()=> navigation.navigate('CardItemDetails', {itemData: devices})}
                  style={[styles.signIn, {
                    borderColor: 'white',
                    borderWidth: 1,
                    marginTop: 10
                  }]}
                >
                  <Text style={[styles.textSign, {
                    color: 'white'
                  }]}>Atur Debit Air</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    width: 150,
    height: 100,
    elevation: 2,
    marginTop: 13,
    marginBottom: 2,
    borderRadius: 8,
    backgroundColor: '#FC900D',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    overflow: 'hidden',
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
  },
  cardKondisi: {
    marginTop:5,
    justifyContent:'center',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },
  signIn: {
    width: '80%',
    padding:5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
},
textSign: {
    fontSize: 14,
    fontWeight: 'bold'
}
});