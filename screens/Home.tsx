import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {setCategory, getCategories, getItems, setCart} from '../actions/items';
import CategoryCard from '../components/CategoryCard';
import ItemCard from '../components/ItemCard';
import Cart from '../components/Cart';
import {
  CategoryProps,
  HomeProps,
  ItemProps,
  CartItemProps,
} from '../utils/Interfaces';
import {Colors} from '../utils/Colors';
import {RootState} from '../store';

const Home = ({
  navigation,
  itemsReducer,
  setCategory,
  getCategories,
  getItems,
  setCart,
}: HomeProps) => {
  // const navigation =
  //   useNavigation<NativeStackScreenProps<RootStackParamList>>();
  const {categories, selectedCategory, items, cartItems} = itemsReducer;
  useEffect(() => {
    if (!categories) {
      getCategories();
    }
  }, [categories, getCategories]);

  const [categoriesItems, setCategoriesItems] = useState(categories);
  const categoriesResult = categoriesItems || categories;
  const [searchCount, setSearchCount] = useState(0);

  const handleSelectCategory = (category: string) => {
    setCategory(category);
    getItems(category);
  };

  const handleAddToCart = (selectedItem: ItemProps) => {
    const cart = [...cartItems];

    const isItemInCart = cart.find(
      (c: CartItemProps) => c.idMeal === selectedItem.idMeal,
    );
    if (isItemInCart) {
      const arr = removeFromCart(cart, selectedItem);
      setCart(arr);
    } else {
      cart.push(selectedItem);
      setCart(cart);
    }
  };

  const removeFromCart = (cart: CartItemProps[], selectedItem: ItemProps) => {
    return cart.filter((c: CartItemProps) => c.idMeal !== selectedItem.idMeal);
  };

  const handleSearch = (text: string) => {
    if (text !== '') {
      const searchCategories = categories.filter(c =>
        c.strCategory.includes(text.toLowerCase()),
      );
      if (searchCategories.length > 0) {
        setCategoriesItems(searchCategories);
        setSearchCount(searchCategories.length);
        return;
      }
    }
    setSearchCount(0);
    setCategoriesItems(categories);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexGrow1}>
        <View style={[styles.header, styles.paddingEnd20]}>
          <View>
            <Text style={styles.hiText}>Hi Rakib</Text>
            <Text style={styles.hungryText}>Hungry Now? 🔥</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/man.png')}
              style={styles.image}
            />
          </View>
        </View>
        <View style={[styles.marginTop20, styles.paddingEnd20]}>
          <Icon
            name="search"
            size={24}
            color={Colors.blue}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search..."
            style={styles.textInput}
            onChangeText={text => handleSearch(text)}
          />
          <View style={styles.cogIcon}>
            <View style={styles.cogTextBg}>
              <Text style={styles.cogText}>{searchCount}</Text>
            </View>
            <Icon name="reorder-three-outline" color={Colors.blue} size={30} />
          </View>
        </View>
        <View style={styles.marginVertical20}>
          {categoriesResult?.length > 0 ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categoriesResult?.map((category: CategoryProps) => (
                <CategoryCard
                  key={category.idCategory}
                  title={category.strCategory}
                  image={category.strCategoryThumb}
                  active={category.strCategory === selectedCategory}
                  onPress={() => handleSelectCategory(category.strCategory)}
                />
              ))}
            </ScrollView>
          ) : (
            <ActivityIndicator size="large" color={Colors.primary} />
          )}
        </View>
        <View>
          <View style={styles.popularContainer}>
            <Text style={styles.popularText}>Popular Items</Text>
            <Text style={styles.hiText}>See All</Text>
          </View>
          <View style={styles.marginVertical20}>
            {items?.length > 0 ? (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items?.map((item: ItemProps) => (
                  <ItemCard
                    key={item.idMeal}
                    title={item.strMeal}
                    image={item.strMealThumb}
                    amount={9.99}
                    calories={44}
                    duration={20}
                    onPress={() => navigation.navigate('Item', {item})}
                    onPressCart={() => handleAddToCart(item)}
                  />
                ))}
              </ScrollView>
            ) : (
              <Text style={styles.emptyText}>Select a category</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.paddingEnd20}>
        <Cart items={cartItems} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingStart: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  paddingEnd20: {paddingEnd: 20},
  flexGrow1: {flexGrow: 1},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hiText: {fontSize: 14, fontWeight: '600', color: Colors.grey},
  hungryText: {fontSize: 22, fontWeight: '700', marginTop: 8},
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 30, height: 30},
  textInput: {
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    borderRadius: 15,
    height: 50,
    paddingHorizontal: 40,
    fontSize: 14,
  },
  marginTop20: {marginTop: 20},
  marginVertical20: {marginVertical: 20},
  popularContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginEnd: 20,
  },
  popularText: {fontSize: 18, fontWeight: '700', color: Colors.black},
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 40,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: 12,
  },
  cogIcon: {
    position: 'absolute',
    right: 30,
    top: 12,
    flexDirection: 'row',
  },
  cogTextBg: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    right: 0,
    top: 0,
  },
  cogText: {fontSize: 8, color: Colors.white},
});

const mapStateToProps = (state: RootState) => ({
  itemsReducer: state.itemsReducer,
});

export default connect(mapStateToProps, {
  setCategory,
  getCategories,
  getItems,
  setCart,
})(Home);
