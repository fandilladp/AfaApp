import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Navbar extends React.Component{
  render(){
    return (
      <View
        style={{height: 49, backgroundColor: '#F4F9F9', flexDirection: 'row'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: 44}}>
            <FontAwesome5 size={35} color={'#AAAAAA'} name={'home'} />
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: 44}}>
            <FontAwesome5 size={35} color={'#AAAAAA'} name={'wrench'} />
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: 44}}>
            <FontAwesome5 size={40} color={'#AAAAAA'} name={'plus-circle'} />
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: 44}}>
            <FontAwesome5 size={35} color={'#AAAAAA'} name={'lightbulb'} />
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: 44}}>
            <FontAwesome5 size={35} color={'#AAAAAA'} name={'user-cog'} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Navbar;
