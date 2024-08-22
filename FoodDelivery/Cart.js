import React, { useContext } from 'react';
import { View, Text, Image, FlatList, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { CartContext } from './CartContext';
import { useTheme } from './ThemeContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const { theme } = useTheme();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    Alert.alert('Checkout was successful', 'Thank you for your purchase!');
    clearCart();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={[styles.cartItemName, { color: theme.textColor }]}>{item.name}</Text>
              <Text style={[styles.cartItemPrice, { color: theme.textColor }]}>R{item.price.toFixed(2)}</Text>
              <View style={styles.quantityContainer}>
                <Button title="-" onPress={() => updateQuantity(item.id, item.quantity - 1)} color={theme.buttonColor} />
                <Text style={[styles.quantity, { color: theme.textColor }]}>{item.quantity}</Text>
                <Button title="+" onPress={() => updateQuantity(item.id, item.quantity + 1)} color={theme.buttonColor} />
              </View>
              <Button title="Remove" onPress={() => removeFromCart(item.id)} color={theme.dangerColor} />
            </View>
          </View>
        )}
      />
      <Text style={[styles.totalPrice, { color: theme.textColor }]}>Total: R{totalPrice.toFixed(2)}</Text>
      <TouchableOpacity style={[styles.checkoutButton, { backgroundColor: theme.buttonColor }]} onPress={handleCheckout}>
        <Text style={[styles.checkoutButtonText, { color: theme.buttonTextColor }]}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
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
  details: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
  },
  checkoutButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
