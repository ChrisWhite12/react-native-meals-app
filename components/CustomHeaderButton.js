import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { IonIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton
        {...props}
        IconComponent={IonIcons}
        iconSize={23}
        color="white"
        />
    );
};

const styles = StyleSheet.create({
    headerButton: {}, 
});

export default CustomHeaderButton;
