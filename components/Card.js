import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Card = ({itemData, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{itemData.title}</Text>
          <Text style={styles.cardKondisi}>{itemData.kondisi}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
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
    marginTop: 5,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
