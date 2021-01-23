import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import Toast from "react-native-root-toast";
import { Platform } from "react-native";

const registerForPushNotifications = async () => {
  if (Constants.isDevice) {
    const {
      status: existingStatus,
    } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      Toast.show("Failed to get push token for push notification!", {
        duration: Toast.durations.SHORT,
        position: -75,
        backgroundColor: "green",
        shadow: true,
        hideOnPress: true,
      });
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    Toast.show("Must use physical device for Push Notifications", {
      duration: Toast.durations.SHORT,
      position: -75,
      backgroundColor: "green",
      shadow: true,
      hideOnPress: true,
    });
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
};

export default registerForPushNotifications;
