import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Orders from '../Orders/Orders';
import Products from '../Products/Products';
import Profile from '../Profile/Profile';
import Category from '../Category/Category';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#e91e63',
          }}
        >
            <Tab.Screen name="Products" component={Products}

                options={{
                    tabBarLabel: 'Products',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Category" component={Category}


                options={{
                    tabBarLabel: 'Category',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Orders" component={Orders}

                options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={Profile}


                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Home;