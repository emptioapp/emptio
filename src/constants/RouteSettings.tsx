import { CardStyleInterpolators, StackNavigationOptions } from "@react-navigation/stack"
import { ViewStyle } from "react-native"
import theme from "../theme"

export const tabBarStyle: ViewStyle = {
    backgroundColor: theme.colors.transparent,
    borderTopColor: theme.colors.transparent,
    paddingBottom: 15,
    height: 70,
    elevation: 0,
}

export const stackOptions: StackNavigationOptions = {
    title: "",
    headerShown: false,
    headerTransparent: true,
    headerTintColor: theme.colors.white,
    cardStyle: { backgroundColor: theme.colors.black },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    // headerStyle: { backgroundColor: theme.colors.black },
    headerShadowVisible: false,
}

