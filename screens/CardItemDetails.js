import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import * as Animatable from 'react-native-animatable';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const CardItemDetails = ({route}) => {
  const itemData = route.params.itemData;
  const navTitleView = useRef(null);

  const [servoPosisi, setServoPosisi] = React.useState({
    coordinate: {
      latitude: 0,
      longitude: 0,
    },
    title: '',
    desc: '',
    waterflow: 0,
  });

  const handlerOff = () => {
    axios
      .put('https://afaapp.herokuapp.com/posts/0', {
        coordinate: {
          latitude: 0,
          longitude: 0,
        },
        title: '',
        desc: 'off',
        waterflow: 0,
      })
      .then(function(response) {
        setServoPosisi({
          coordinate: {
            latitude: 0,
            longitude: 0,
          },
          title: '',
          desc: 'off',
          waterflow: 0,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  const handlerLow = () => {
    axios
      .put('https://afaapp.herokuapp.com/posts/0', {
        coordinate: {
          latitude: 0,
          longitude: 0,
        },
        title: '',
        desc: 'low',
        waterflow: 20,
      })
      .then(function(response) {
        setServoPosisi({
          coordinate: {
            latitude: 0,
            longitude: 0,
          },
          title: '',
          desc: 'low',
          waterflow: 20,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  const handlerNormal = () => {
    axios
      .put('https://afaapp.herokuapp.com/posts/0', {
        coordinate: {
          latitude: 0,
          longitude: 0,
        },
        title: '',
        desc: 'normal',
        waterflow: 40,
      })
      .then(function(response) {
        setServoPosisi({
          coordinate: {
            latitude: 0,
            longitude: 0,
          },
          title: '',
          desc: 'normal',
          waterflow: 40,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  const handlerHigh = () => {
    axios
      .put('https://afaapp.herokuapp.com/posts/0', {
        coordinate: {
          latitude: 0,
          longitude: 0,
        },
        title: '',
        desc: 'High',
        waterflow: 60,
      })
      .then(function(response) {
        setServoPosisi({
          coordinate: {
            latitude: 0,
            longitude: 0,
          },
          title: '',
          desc: 'High',
          waterflow: 60,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderImageScrollView
        maxHeight={100}
        minHeight={50}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>{itemData.title}</Text>
          </View>
        )}>
        <View style={[styles.section, {height: 230}]}>
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
              coordinate={itemData.coordinate}
              image={require('../assets/map_marker.png')}
            />
          </MapView>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 50}}>
            {servoPosisi.waterflow} Liter/Menit
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 17,
            flex: 1,
          }}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                handlerOff();
              }}
              style={[
                styles.signIn,
                {
                  borderColor: 'red',
                  borderWidth: 1,
                  marginTop: 20,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: 'red',
                  },
                ]}>
                Off
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlerLow();
              }}
              style={[
                styles.signIn,
                {
                  borderColor: 'blue',
                  borderWidth: 1,
                  marginTop: 20,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: 'blue',
                  },
                ]}>
                LOW
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlerNormal();
              }}
              style={[
                styles.signIn,
                {
                  borderColor: 'green',
                  borderWidth: 1,
                  marginTop: 20,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: 'green',
                  },
                ]}>
                NORMAL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlerHigh();
              }}
              style={[
                styles.signIn,
                {
                  borderColor: 'orange',
                  borderWidth: 1,
                  marginTop: 20,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: 'orange',
                  },
                ]}>
                HIGH
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </HeaderImageScrollView>
    </View>
  );
};

export default CardItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleContainer: {
    backgroundColor: '#8440E6',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    width: 300,
    borderRadius: 8,
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textSign: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
