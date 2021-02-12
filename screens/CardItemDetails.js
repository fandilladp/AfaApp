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

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const CardItemDetails = ({route}) => {
  const itemData = route.params.itemData;
  const navTitleView = useRef(null);

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
              latitude: itemData.coordinate.latitude,
              longitude: itemData.coordinate.longitude,
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
          <Text style={{fontSize: 50}}>{itemData.waterflow} Liter/Menit</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 17,
            flex:1
          }}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {}}
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
              onPress={() => {}}
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
              onPress={() => {}}
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
