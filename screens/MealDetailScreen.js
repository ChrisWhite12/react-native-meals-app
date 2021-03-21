import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../data/dummy-data";

import CustomHeaderButton from '../components/CustomHeaderButton'

const MealDetailScreen = (props) => {
    // console.log(mealInfo)
    return (
        <View style={styles.screen}>
            <Text>Meal Detail</Text>
        </View>
    );
    
};
    
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam("mealId");
    const mealInfo = MEALS.find((el) => el.id === mealId);
    return {
        headerTitle: mealInfo.title,
        headerRight: () => {
            return  (
            <CustomHeaderButton name="ios-star" onPress={() => {
                console.log('fav')
            }}/>
            // <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            //     <Item title="favorite" name="ios-star" onPress={() => {
            //         console.log('marked')
            //     }} />
            // </HeaderButtons>
            )
        }
        ,
    };
}


{/* <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="favorite" iconName="ios-star" onPress={() => {
                console.log('marked')
            }} />
        </HeaderButtons> */}
export default MealDetailScreen;
