import React from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Colors} from '../utils/Colors';
import {CartProps} from '../utils/Interfaces';

const Cart = ({items}: CartProps) => {
  return (
    <>
      <View style={styles.curve}>
        <View style={styles.hrLine} />
      </View>
      <View style={styles.card}>
        <View>
          <Text style={styles.cart}>Cart</Text>
          <Text style={styles.items}>
            {`${items?.length} item${items?.length > 1 ? 's' : ''}`}
          </Text>
        </View>
        <View style={styles.cartItemsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items?.length > 0 &&
              items?.map(({strMealThumb, idMeal}) => (
                <View key={idMeal} style={styles.itemContainer}>
                  <Animated.Image
                    source={{uri: strMealThumb}}
                    style={styles.itemImage}
                  />
                </View>
              ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  curve: {
    backgroundColor: Colors.white,
    width: 70,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    top: 8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  hrLine: {backgroundColor: Colors.secondaryGrey, width: 20, height: 2, top: 5},
  card: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cart: {fontSize: 18, fontWeight: '700', color: Colors.white},
  items: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.secondaryGrey,
    marginTop: 5,
  },
  row: {flexDirection: 'row'},
  itemContainer: {
    backgroundColor: Colors.white,
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  itemImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  cartItemsContainer: {width: Dimensions.get('screen').width / 1.7},
});

export default Cart;
