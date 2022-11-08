import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Item: {item: ItemProps};
};

export type AuthScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Auth'
>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type HomeScreenNavigationProp = HomeScreenProps['navigation'];

export type ItemScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Item'
>;

export interface ItemProps {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
}
export interface CartItemProps {
  idMeal: number;
  strMealThumb: string;
}
export interface CartProps {
  items: CartItemProps[];
}

export interface CategoryProps {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
}

export interface CategoryCardProps {
  title: string;
  image: string;
  active: boolean;
  onPress: Function;
}

export interface ItemCardProps {
  title: string;
  amount: number;
  image: string;
  calories: number;
  duration: number;
  onPress: Function;
  onPressCart: Function;
}

export interface SizeCardProps {
  title: string;
  amount: number;
  active: boolean;
}

export interface ItemsReducerProps {
  selectedCategory: string;
  categories: CategoryProps[];
  items: ItemProps[];
  cartItems: CartItemProps[];
}
export interface HomeProps {
  navigation: HomeScreenNavigationProp;
  itemsReducer: ItemsReducerProps;
  setCategory: Function;
  getCategories: Function;
  getItems: Function;
  setCart: Function;
}
