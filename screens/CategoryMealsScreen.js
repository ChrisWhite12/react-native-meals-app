import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderTitle } from "react-navigation-stack";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam("categoryId");
    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );

    const renderMealItem = (itemData) => {
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
                        mealId: itemData.item.id
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
            data={displayedMeals}
            renderItem={renderMealItem}
            style={styles.mealsFlat}
        />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selCategory = CATEGORIES.find((cat) => cat.id === catId);
    return {
        headerTitle: selCategory.title,
    };
    };

    const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default CategoryMealsScreen;
