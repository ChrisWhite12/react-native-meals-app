import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

import React from 'react'

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories',
            headerLeft: <Ionicons name="menu" size={20} color='white'/>
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: {
        screen: MealDetailScreen
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        }
    }
})

const FavoritesNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            headerTitle: "Your Favorites"
        }
    },
    MealDetail: {
        screen: MealDetailScreen
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        }
    }
})

const MealsTabNavigator = createBottomTabNavigator({
    AllMeals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Meals',
            tabBarIcon: (tabIcon) => {
                return <Ionicons name="ios-restaurant" size={20} color={tabIcon.tintColor}/>
            }
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabIcon) => {
                return <Ionicons name="ios-star" size={20} color={tabIcon.tintColor}/>
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.secondaryColor,
        activeBackgroundColor: "#ddd",
        inactiveTintColor: 'white',
        inactiveBackgroundColor: Colors.primaryColor
    }
})

const filterNavigator = createStackNavigator({
    Filters: {
        screen: FiltersScreen,
        navigationOptions: {
            headerTitle: "Filter Options"
        }
    }
})

const MainNavigator = createDrawerNavigator({
    MealsFavs: MealsTabNavigator,
    Filters: filterNavigator
})

export default createAppContainer(MainNavigator)