import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = props => {
    return (
        <View style={styles.gridItem}>
            <TouchableNativeFeedback style={styles.touchGrid} onPress={props.onSelectMeal}>
                <View style={{...styles.gridBack, ...{backgroundColor: props.color}}}>
                    <Text style={styles.itemText} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 100
    },
    gridBack: {
        flex:1,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#a33",
        elevation: 5,
        padding: 15,
        justifyContent: 'center'
    },
    itemText: {
        fontFamily: 'open-sans-bold',
        fontSize: 20
    },
    touchGrid: {
        flex: 1
    }
})

export default CategoryGridTile