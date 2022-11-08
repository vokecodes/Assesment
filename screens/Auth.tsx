import {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import type {ICarouselInstance} from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';
import {Colors} from '../utils/Colors';
import {AuthScreenProps} from '../utils/Interfaces';

const sliderWidth = Dimensions.get('window').width;

const Auth = ({navigation}: AuthScreenProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [activeIndex, setActiveIndex] = useState<Number>(0);
  const ref = useRef<ICarouselInstance>(null);

  const baseOptions = {
    vertical: false,
    width: sliderWidth,
    height: sliderWidth / 2,
  } as const;

  const carouselItems = [
    {
      image: require('../assets/images/invest.png'),
      title: 'Build your savings with ease & \ndiscipline',
    },
    {
      image: require('../assets/images/invest.png'),
      title: 'Invest with ease in verified \nopportunities',
    },
    {
      image: require('../assets/images/invest.png'),
      title: "Lock funds you don't want to \nbe tempted to touch",
    },
    {
      image: require('../assets/images/invest.png'),
      title: "Lock funds you don't want to \nbe tempted to touch",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={Colors.black}
        />
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.selfCenter}
        />
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          {...baseOptions}
          loop
          ref={ref}
          autoPlay
          autoPlayInterval={1000}
          data={carouselItems}
          pagingEnabled
          height={Dimensions.get('screen').height / 2}
          onSnapToItem={index => setActiveIndex(index)}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.carouselImage} />
              <Text style={styles.carouselText}>{item.title}</Text>
            </View>
          )}
        />
        <View style={styles.indicatorRow}>
          {carouselItems?.map((item, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === activeIndex ? styles.activeIndicator : null,
              ]}
            />
          ))}
        </View>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.login]}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.register]}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.black,
  },
  selfCenter: {alignSelf: 'center'},
  flexGrow1: {flexGrow: 1},
  carouselContainer: {
    flexGrow: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {flex: 1, justifyContent: 'center'},
  carouselImage: {
    width: '100%',
    resizeMode: 'contain',
  },
  carouselText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.white,
    textAlign: 'center',
  },
  indicatorRow: {flexDirection: 'row'},
  indicator: {
    width: 16,
    height: 2,
    backgroundColor: Colors.lightGrey,
    marginRight: 10,
  },
  activeIndicator: {backgroundColor: Colors.white},
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: Dimensions.get('screen').width / 2.3,
    padding: 16,
    borderRadius: 5,
  },
  login: {
    backgroundColor: Colors.primaryBlue,
  },
  register: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.white,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});

export default Auth;
