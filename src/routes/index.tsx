import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Text } from "react-native";
import TabIcon from "../components/TabIcon";
import Home from "../pages/Home";
import Product from "../pages/Product";
import SignIn from "../pages/SignIn";
import colors from "../styles/colors";
import { tabBarOnPressProps } from "./interfaces";

const HomeRoute = createSwitchNavigator(
  {
    Home,
    Product,
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      tabBarOnPress: ({ navigation }: tabBarOnPressProps) => {
        navigation.navigate("Home");
      },
      tabBarColor: colors.primary,
      tabBarLabel: <Text style={{ fontSize: 12 }}>Home</Text>,
      tabBarIcon: (props: any) => <TabIcon name="home" {...props} />,
    },
  }
);

const BottomRoutes = createMaterialBottomTabNavigator(
  {
    HomeRoute,
  },
  {
    initialRouteName: "HomeRoute",
    activeColor: "#fff",
    inactiveColor: "rgba(255,255,255,0.5)",
    labeled: true,
    barStyle: { backgroundColor: colors.primary },
  }
);

const MainEntryPoint = createSwitchNavigator(
  {
    SignIn,
    BottomRoutes,
  },
  {
    initialRouteName: "BottomRoutes",
  }
);
const Routes = createAppContainer(MainEntryPoint);

export default Routes;
