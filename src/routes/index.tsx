import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Text } from "react-native";
import TabIcon from "../components/TabIcon";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import colors from "../styles/colors";
import { tabBarOnPressProps } from "./interfaces";
import TabStateIcon from "../components/TabStateIcon";

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

const ProfileRoute = createSwitchNavigator(
  {
    Profile,
  },
  {
    initialRouteName: "Profile",
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 12 }}>Profile</Text>,
      tabBarIcon: (props: any) => <TabIcon name="user" {...props} />,
      tabBarColor: `${colors.primary}`,
    },
  }
);

const CartRoute = createSwitchNavigator(
  {
    Cart,
  },
  {
    initialRouteName: "Cart",
    navigationOptions: {
      tabBarColor: colors.primary,
      tabBarLabel: <Text style={{ fontSize: 12 }}>Cart</Text>,
      tabBarIcon: (props: any) => (
        <TabStateIcon name="shopping-cart" {...props} />
      ),
    },
  }
);

const BottomRoutes = createMaterialBottomTabNavigator(
  {
    HomeRoute,
    ProfileRoute,
    CartRoute,
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
    BottomRoutes,
  },
  {
    initialRouteName: "BottomRoutes",
  }
);
const Routes = createAppContainer(MainEntryPoint);

export default Routes;
