import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../utils/Colors';
import {CategoryCardProps} from '../utils/Interfaces';

const CategoryCard = ({title, image, active, onPress}: CategoryCardProps) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: active ? Colors.primary : Colors.transparent,
      borderWidth: 1,
      borderColor: Colors.borderGrey,
      borderRadius: 20,
      width: 80,
      paddingVertical: 18,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    image: {width: 24, height: 24},
    text: {
      fontSize: 12,
      fontWeight: '700',
      color: active ? Colors.white : Colors.black,
      textAlign: 'center',
      marginTop: 10,
    },
  });

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress()}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
