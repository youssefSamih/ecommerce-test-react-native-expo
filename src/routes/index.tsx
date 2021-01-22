import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SignIn from "../pages/SignIn";

const MainEntryPoint = createSwitchNavigator({
  SignIn,
});
const Routes = createAppContainer(MainEntryPoint);

export default Routes;
