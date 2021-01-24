import ToastAlert from "./ToastAlert";
import * as Location from "expo-location";

const registerForLocation = async () => {
  let { status } = await Location.requestPermissionsAsync();
  if (status !== "granted") {
    ToastAlert({
      message: "Permission to access location was denied",
      color: "red",
    });
    return;
  }
  if (status === "granted") {
    ToastAlert({
      message: "Permission to access location granted",
    });
  }

  let location = await Location.getCurrentPositionAsync({});
  return location;
};

export default registerForLocation;
