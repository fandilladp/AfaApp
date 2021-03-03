import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Navbar from '../component/Navbar';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


class Home extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor: 'pink'}}>
                    <View style={{height:36, backgroundColor: '#F4F9F9', alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold'}}>Institut Teknologi Sumatera</Text>
                    </View>
                    <View style={{height: 390}}>
                    <MapView initialRegion={'ID'}>
                    <Marker draggable
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421}}
                        onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                    />
                    </MapView>
                    </View>
                    <ScrollView>
                    <View style={{backgroundColor: 'blue', height: 100}}></View>
                    <View style={{backgroundColor: 'yellow', height: 100}}></View>
                    <View style={{backgroundColor: 'brown', height: 100}}></View>
                    <View style={{backgroundColor: 'blue', height: 100}}></View>
                    <View style={{backgroundColor: 'yellow', height: 100}}></View>
                    <View style={{backgroundColor: 'brown', height: 100}}></View>
                    </ScrollView>
                </View>
                <View>
                <Navbar/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

})

export default Home;