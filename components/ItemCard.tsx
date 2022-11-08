import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../utils/Colors';
import {ItemCardProps} from '../utils/Interfaces';

const ItemCard = ({
  title,
  amount,
  image,
  calories,
  duration,
  onPress,
  onPressCart,
}: ItemCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress()}>
      <View style={styles.flexGrow1}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>
          $ <Text style={styles.amountValue}>{amount}</Text>
        </Text>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.bottom}>
        <View>
          <Text style={styles.calories}>
            <Text style={styles.fontSize12}>🔥</Text> {calories} Calories
          </Text>
          <Text style={styles.duration}>
            <Icon name="time-outline" size={12} color={Colors.grey} />{' '}
            {duration} min
          </Text>
        </View>
        <TouchableOpacity style={styles.cart} onPress={() => onPressCart()}>
          <Icon name="cart-outline" size={26} color={Colors.black} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.backgroundGrey,
    width: Dimensions.get('screen').width / 1.7,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginEnd: 20,
    flexDirection: 'column',
  },
  flexGrow1: {flexGrow: 1},
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
    textAlign: 'center',
  },
  amount: {
    marginVertical: 10,
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primary,
    textAlign: 'center',
  },
  amountValue: {color: Colors.black},
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginVertical: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calories: {fontSize: 12, fontWeight: '700'},
  duration: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.grey,
    marginTop: 10,
  },
  cart: {
    backgroundColor: Colors.white,
    width: 40,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontSize12: {fontSize: 12},
});

export default ItemCard;
