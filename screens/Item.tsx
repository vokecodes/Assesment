import React, {useRef, useEffect, useCallback} from 'react';
import {
  Animated,
  Easing,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import SizeCard from '../components/SizeCard';
import {Colors} from '../utils/Colors';
import {ItemScreenProps} from '../utils/Interfaces';

const Item = ({navigation, route}: ItemScreenProps) => {
  const {item} = route.params;

  const imageAnim = useRef(new Animated.Value(0)).current;

  const handleAnimation = useCallback(() => {
    Animated.loop(
      Animated.timing(imageAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }, [imageAnim]);

  const stopAnimation = useCallback(() => {
    Animated.timing(imageAnim, {
      toValue: 0,
      useNativeDriver: false,
    }).stop();
  }, [imageAnim]);

  useEffect(() => {
    handleAnimation();

    setTimeout(() => {
      stopAnimation();
    }, 2000);
  }, [handleAnimation, stopAnimation]);

  const imageStyle = {
    width: 180,
    height: 180,
    borderRadius: 90,
    transform: [
      {
        rotate: imageAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={30} color={Colors.white} />
        </TouchableOpacity>
        <Icon name="heart-outline" size={30} color={Colors.white} />
      </View>
      <View style={styles.card}>
        <View style={styles.flexGrow1}>
          <View style={styles.imageContainer}>
            <Animated.Image
              source={{uri: item.strMealThumb}}
              style={imageStyle}
            />
          </View>
          <Text style={styles.title}>{item.strMeal}</Text>
          <Text style={styles.text}>
            <Icon name="pizza" size={14} color={Colors.yellow} /> Pizza Italiano
          </Text>
          <View style={styles.reviewContainer}>
            <View style={styles.duration}>
              <Icon name="time-outline" size={20} color={Colors.black} />
              <Text style={styles.durationText}>15 min</Text>
            </View>
            <Text style={styles.dot}>•</Text>
            <View style={styles.reviewSubContainer}>
              <Icon name="star" size={14} color={Colors.yellow} />
              <Text style={styles.reviewText}> 4.8</Text>
              <Text style={styles.reviewSubText}>(2.2k review)</Text>
              <Icon
                name="chevron-forward-outline"
                size={14}
                color={Colors.grey}
              />
            </View>
          </View>
          <View style={styles.typeContainer}>
            <SizeCard title='Small 8"' amount={9.99} active={false} />
            <SizeCard title='Medium 12"' amount={12.99} active />
            <SizeCard title='Large 18"' amount={16.99} active={false} />
          </View>
          <Text style={styles.description}>
            Melting cheese pizza making with Extra virgin olive oil, Cornmeal,
            beef/chicken, Tomato sauce (smooth or pureed), Firm mozza, 100 gm
            onion, 70 gm chopped capsicum....
            <Text style={styles.primaryColor}>More</Text>
          </Text>
        </View>

        <View>
          <View style={styles.totalRow}>
            <Text style={styles.total}>
              Total: <Text style={styles.primaryColor}>$</Text>12.99
            </Text>
            <View style={styles.countRow}>
              <TouchableOpacity style={styles.countButton}>
                <Text style={styles.countButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={[styles.marginHorizontal15, styles.bold]}>1</Text>
              <TouchableOpacity style={styles.countButton}>
                <Text style={styles.countButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    marginTop: 20,
    marginBottom: 70,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: Colors.white,
    height: Dimensions.get('screen').height / 1.2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingBottom: 80,
    flexDirection: 'column',
  },
  flexGrow1: {flexGrow: 1},
  imageContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    alignSelf: 'center',
    marginTop: -60,
    marginBottom: 30,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.black,
    textAlign: 'center',
  },
  text: {fontSize: 14, textAlign: 'center', marginVertical: 10},
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  duration: {flexDirection: 'row', alignItems: 'center'},
  durationText: {fontSize: 14, color: Colors.black, marginLeft: 5},
  dot: {marginHorizontal: 10, color: Colors.grey},
  reviewSubContainer: {flexDirection: 'row', alignItems: 'center'},
  reviewText: {fontSize: 12, fontWeight: '700'},
  reviewSubText: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.grey,
    marginLeft: 5,
  },
  typeContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 14,
    color: Colors.darkGrey,
    textAlign: 'center',
  },
  totalRow: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {fontSize: 14, fontWeight: '700', color: Colors.black},
  primaryColor: {color: Colors.primary},
  countRow: {flexDirection: 'row', alignItems: 'center'},
  countButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    width: 20,
    height: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countButtonText: {fontSize: 16, color: Colors.grey},
  marginHorizontal15: {marginHorizontal: 15},
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  bold: {fontWeight: '700'},
});

export default Item;
