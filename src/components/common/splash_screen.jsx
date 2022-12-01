import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import { Home } from "./home";

export const SplashScreen = () => {
    const navigation = useNavigation();
    return (
        <LottieView 
        source={require("../../assets/hamster.json")}
        autoPlay
        loop={true}
        onAnimationFinish={() => {
            navigation.navigate('Home')
        }}
        />
    )
}