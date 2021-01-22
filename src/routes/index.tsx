import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Home from "../pages/Home";
import Product from "../pages/Product";
import SignIn from "../pages/SignIn";

const HomeRoute = createSwitchNavigator(
  {
    Home,
    Product,
  },
  {
    initialRouteName: "Home",
  }
);

const BottomRoutes = createMaterialBottomTabNavigator(
  {
    HomeRoute,
  },
  {
    initialRouteName: "HomeRoute",
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
