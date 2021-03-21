import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderTitle } from "react-navigation-stack";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";


const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam("categoryId");
    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );

    

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selCategory = CATEGORIES.find((cat) => cat.id === catId);
    return {
        headerTitle: selCategory.title,
    };
    };



export default CategoryMealsScreen;
