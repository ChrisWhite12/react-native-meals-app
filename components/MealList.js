import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import MealItem from './MealItem'

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favMeals)

    const renderMealItem = (itemData) => {
        const isFav = favoriteMeals.find(meal => meal.id = itemData.item.id)
        return (
        <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: "MealDetail",
                    params: {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFav
                    }
                })
            }}
        />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                style={{ width: "95%" }}
                data={props.listData}
                renderItem={renderMealItem}
                style={styles.mealsFlat}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default MealList