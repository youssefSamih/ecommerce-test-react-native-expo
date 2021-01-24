import Toast from "react-native-root-toast";

interface ToastAlertProps {
  message: string;
  color?: string;
}

const ToastAlert = ({ message, color }: ToastAlertProps) => {
  return Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: -75,
    backgroundColor: color || "green",
    shadow: true,
    hideOnPress: true,
  });
};

export default ToastAlert;
