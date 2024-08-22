import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './FoodDelivery/Menu';
import Cart from './FoodDelivery/Cart';
import Profile from './FoodDelivery/Profile';
import Form1 from './FoodDelivery/Form1';
import Form2 from './FoodDelivery/Form2';
import Form3 from './FoodDelivery/Form3';
import { FormProvider } from './FoodDelivery/FormContext';
import { CartProvider } from './FoodDelivery/CartContext';
import { ThemeProvider } from './FoodDelivery/ThemeContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#6200EE',
        inactiveTintColor: '#888',
        style: {
          backgroundColor: '#f8f8f8',
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <FormProvider>
        <CartProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Form1"
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#6200EE',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            >
              <Stack.Screen
                name="Form1"
                component={Form1}
                options={{ title: 'Enter Your Personal Details' }}
              />
              <Stack.Screen
                name="Form2"
                component={Form2}
                options={{ title: 'Enter Your Address' }}
              />
              <Stack.Screen
                name="Form3"
                component={Form3}
                options={{ title: 'Enter Your Card Details' }}
              />
              <Stack.Screen
                name="MainTabs"
                component={MainTabs}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
      </FormProvider>
    </ThemeProvider>
  );
}
