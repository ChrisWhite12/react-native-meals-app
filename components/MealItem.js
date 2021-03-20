import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = props => {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImg}>
                        <Text numberOfLines={1} style={styles.title}>
                            {props.title}
                        </Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetails}}>
                        <Text>
                            {props.duration}
                        </Text>
                        <Text>
                            {props.complexity}
                        </Text>
                        <Text>
                            {props.affordability}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        height: 200,
        width: '90%',
        backgroundColor: '#ccc',
        margin: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000',
        overflow: 'hidden',
        alignSelf: 'center'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '80%'
    },
    mealDetails: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '20%'
    },
    bgImg: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        backgroundColor: 'rgba(255,255,255,0.5)',
        textAlign: 'center'
    }
})

export default MealItem