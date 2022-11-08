import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../utils/Colors';
import {SizeCardProps} from '../utils/Interfaces';

const SizeCard = ({title, amount, active}: SizeCardProps) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: Colors.transparent,
      borderWidth: 1,
      borderColor: active ? Colors.primary : Colors.borderGrey,
      borderRadius: 20,
      width: Dimensions.get('screen').width / 4,
      paddingVertical: 32,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle: {
      width: 16,
      height: 16,
      borderRadius: 8,
      borderColor: active ? Colors.primary : Colors.borderGrey,
      borderWidth: active ? 4 : 2,
    },
    image: {width: 24, height: 24},
    title: {
      fontSize: 10,
      fontWeight: '600',
      color: Colors.grey,
      textAlign: 'center',
      marginTop: 10,
    },
    amount: {fontSize: 12, fontWeight: '700', top: 5},
  });

  return (
    <View style={styles.card}>
      <View style={styles.circle} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>${amount}</Text>
    </View>
  );
};

export default SizeCard;
