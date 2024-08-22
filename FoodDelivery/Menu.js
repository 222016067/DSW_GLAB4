import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Button, Alert } from 'react-native';
import { CartContext } from './CartContext';
import { useTheme } from './ThemeContext';

const foodItems = [
  {
    id: '1',
    name: 'Cheese Burger Meal',
    price: 79.99,
    image: require('../assets/burger.webp'),
  },
  {
    id: '2',
    name: 'BBQ Chicken Pizza',
    price: 89.99,
    image: require('../assets/bbq-chicken-pizza.jpg'),
  },
  {
    id: '3',
    name: 'Sushi',
    price: 97.99,
    image: require('../assets/sushi.webp'),
  },
  {
    id: '4',
    name: 'Full Chicken Meal',
    price: 149.99,
    image: require('../assets/full-chicken.jpeg'),
  },
  {
    id: '5',
    name: 'Kota',
    price: 29.99,
    image: require('../assets/kota.jpg'),
  },
  {
    id: '6',
    name: 'Braai Platter',
    price: 199.99,
    image: require('../assets/braai.webp'),
  },
  {
    id: '7',
    name: 'Bunny Chow',
    price: 34.00,
    image: require('../assets/bunny-chow.jpg'),
  },
];

export default function Menu() {
  const { addToCart } = useContext(CartContext);
  const { theme } = useTheme();

  const handleAddToCart = (item) => {
    addToCart(item);
    Alert.alert('Added to Cart', `${item.name} has been added to your cart.`);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Menu</Text>
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={[styles.itemName, { color: theme.textColor }]}>{item.name}</Text>
              <Text style={[styles.itemPrice, { color: theme.textColor }]}>R{item.price.toFixed(2)}</Text>
              <Button
                title="Add to Cart"
                onPress={() => handleAddToCart(item)}
                color={theme.buttonColor}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
});
