import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomHeaderButton from '../components/CustomHeaderButton'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import { useSelector } from 'react-redux'

const FavoritesScreen = props => {
    const favMeals = useSelector((state) => state.meals.favMeals)
    if (favMeals.length === 0 || !favMeals){
        return(
        <View style={styles.content}>
            <Text>No Favorites</Text>
        </View>
        )
    }
    else{
        return (
            <MealList listData={favMeals} navigation={props.navigation}/>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

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