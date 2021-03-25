import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";
import { useDispatch } from 'react-redux'
import { setFilters } from '../store/actions/meals'

const FilterSwitch = (props) => {
    return (
        <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
            value={props.stateVar}
            thumbColor="white"
            trackColor={{ true: Colors.secondaryColor, false: '#ddd'}}
            onValueChange={props.onChange}
            style={styles.switch}
        />
        </View>
    );
};

const FiltersScreen = (props) => {
    const { navigation } = props

    const [glutenFree, setGlutenFree] = useState(false);
    const [lactoseFree, setLactoseFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);

    const dispatch = useDispatch()

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree,
            lactoseFree,
            vegan,
            vegetarian
        }

        console.log(appliedFilters)
        dispatch(setFilters(appliedFilters))
    },[glutenFree,lactoseFree,vegan,vegetarian])

    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        })
    },[saveFilters])

    return (
        <View style={styles.screen}>
        <Text style={styles.title}>Filters</Text>
        <FilterSwitch
            label="Gluten-Free"
            stateVar={glutenFree}
            onChange={(newVal) => setGlutenFree(newVal)}
        />
        <FilterSwitch
            label="Lactose-Free"
            stateVar={lactoseFree}
            onChange={(newVal) => setLactoseFree(newVal)}
        />
        <FilterSwitch
            label="Vegan"
            stateVar={vegan}
            onChange={(newVal) => setVegan(newVal)}
        />
        <FilterSwitch
            label="Vegetarian"
            stateVar={vegetarian}
            onChange={(newVal) => setVegetarian(newVal)}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        margin: 20,
        textAlign: "center",
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "70%",
        margin: 15
    },
});

FiltersScreen.navigationOptions = (navigationData) => {
    return {
        headerLeft: (
            <CustomHeaderButton
                name="menu"
                onPress={() => {
                    navigationData.navigation.toggleDrawer();
                }}
            />
        ),
        headerRight: (
            <CustomHeaderButton
                name="checkmark"
                onPress={
                    navigationData.navigation.getParam('save')
                }
            />
        )
    };
};

export default FiltersScreen;
