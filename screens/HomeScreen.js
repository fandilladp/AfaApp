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
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {hardware} from '../model/Hardware';

const HomeScreen = ({navigation}) => {
  const theme = useTheme();

  const initialHardware = {
    hardware,
  };

  const [state, setState] = React.useState(initialHardware);

  return (
    <View style={{flex: 1}}>
      <View style={[styles.section, {height: 250}]}>
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
      <View style={styles.container} />
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
              <View style={styles.button}>
                
                <TouchableOpacity
                
                 onPress={()=> navigation.navigate('CardItemDetails', {itemData: devices})}
                  style={[styles.signIn, {
                    borderColor: 'white',
                    borderWidth: 1,
                    marginTop: 20
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
    backgroundColor: 'grey',
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
