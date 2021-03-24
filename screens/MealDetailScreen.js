import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView} from "react-native";

import CustomHeaderButton from '../components/CustomHeaderButton'
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = (props) => {

    const mealId = props.navigation.getParam("mealId");
    console.log('mealDetail mealId', mealId)

    const availMeals = useSelector((state) => state.meals.allMeals )

    const mealInfo = availMeals.find((meal) => meal.id === mealId);
    const isFavoriteMeal = useSelector((state) => state.meals.favMeals.find(meal => meal.id === mealId))
    console.log(mealInfo.title)
    console.log(availMeals.find((meal) => meal.id === 'm7').title)

    const dispatch = useDispatch()

    const toggleFavHandler = useCallback(() => {
        console.log('toggle - ', mealId)
        dispatch(toggleFavorite(mealId))
    },[dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavHandler})
    },[toggleFavHandler])

    useEffect(() => {
        props.navigation.setParams({isFav: isFavoriteMeal})
    },[isFavoriteMeal])

    const checkDietary = (val) => {
        return val ? <Ionicons name='checkmark-circle' size={20} color='green' /> : <Ionicons name='close-circle' size={20} color='red' />
    }

    // console.log(mealInfo)
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.screen}>
                
                    <View>
                        <ImageBackground source={{uri: mealInfo.imageUrl}} style={styles.bgImg} />
                    </View>
                    <View style={styles.info1}>
                        <Text>
                            {mealInfo.duration} mins
                        </Text>
                        <Text>
                            {mealInfo.complexity}
                        </Text>
                        <Text>
                            {mealInfo.affordability}
                        </Text>
                    </View>

                    <View style={styles.info2}>
                        <View style={styles.dietaryInfo}>
                            <Text>
                                Vegitarian
                            </Text>
                            {checkDietary(mealInfo.isVegetarian)}
                        </View>
                        <View style={styles.dietaryInfo}>
                            <Text>
                                Vegan
                            </Text>
                            {checkDietary(mealInfo.isVegan)}
                        </View>
                        <View style={styles.dietaryInfo}>
                            <Text>
                                Gluten Free
                            </Text>
                            {checkDietary(mealInfo.isGlutenFree)}
                        </View>
                        <View style={styles.dietaryInfo}>
                            <Text>
                                Lactose Free
                            </Text>
                            {checkDietary(mealInfo.isLactoseFree)}
                        </View>
                    </View>
                    <View style={styles.info3}>
                        {mealInfo.ingredients.map((el,ind) => {
                            return (
                                <Text key={`${ind}_ing`}> - {el}</Text>
                            )
                        })}
                    </View>
                    <View>
                        {mealInfo.steps.map((el,ind) => {
                            return (
                                <Text key={`${ind}_step`} style={{...styles.steps, backgroundColor: (ind%2)? '#ccc' : '#999'}}> Step {ind + 1}:   {el}</Text>
                            )
                        })}
                    </View>
            </View>
        </ScrollView>
    );
    
};
    
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    bgImg: {
        width: 200,
        height: 200,
        borderRadius: 10,
        borderWidth: 1,
        overflow:"hidden",
        margin: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        backgroundColor: 'rgba(255,255,255,0.5)',
        textAlign: 'center'
    },
    info1: {
        flexDirection: "row",
        justifyContent: 'space-around',
        margin: 10,
        width: '100%'
    },
    info2: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: '100%',
        margin: 20
    },
    info3: {
        padding: 20,
        backgroundColor: '#ccc',
        width: '100%',
        paddingLeft: 40
    },
    dietaryInfo: {
        alignItems: 'center'
    },
    steps: {
        padding: 10
    },
    scroll: {
        flex: 1
    }
});

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    // const mealInfo = MEALS.find((el) => el.id === mealId);
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    const isFavorite = navigationData.navigation.getParam('isFav')

    return {
        headerTitle: mealTitle,
        headerRight: () => {
            return  (
                <CustomHeaderButton name={isFavorite ? "ios-star" : "ios-star-outline"} onPress={toggleFavorite}/>
            )
        }
        ,
    };
}
export default MealDetailScreen;
