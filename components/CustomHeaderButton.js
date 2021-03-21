import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
    return (
        // <HeaderButton
        // {...props}
        // IconComponent={Ionicons}
        // iconSize={23}
        // color="white"
        // />
        <View style={styles.headerButton}>
            <Ionicons name={props.name} size={32} color="white" />
        </View>
    );
};

const styles = StyleSheet.create({
    headerButton: {
        marginHorizontal: 10
    }, 
});

export default CustomHeaderButton;
