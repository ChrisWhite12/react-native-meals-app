import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomHeaderButton from '../components/CustomHeaderButton'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'


const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2' )
    return (
        <MealList listData={favMeals} navigation={props.navigation}/>
    )
}

FavoritesScreen.navigationOptions = navigationData => {
    return {
        headerLeft: (
            <CustomHeaderButton name="menu" onPress={()=> {
                navigationData.navigation.toggleDrawer()
            }}/>
        )
    }
}

export default FavoritesScreen     