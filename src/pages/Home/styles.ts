import styled from "styled-components/native";
import { ActivityIndicator, Dimensions } from "react-native";
import CustomText from "../../components/CustomText";
import colors from "../../styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
`;

export const DepartmentContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  align-self: center;
  max-height: 100px;
  margin: 0 5px;
`;

export const DepartmentItem = styled.View`
  flex-direction: column;
  margin: 0 5px;
  align-items: center;
  justify-content: center;
`;

export const DepartmentLogo = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: ${colors.primary};
  border-width: 3px;
  border-color: ${colors.white};
  align-items: center;
  justify-content: center;
`;

export const DepartmentImage = styled.Image.attrs({
  resizeMode: "center",
  aspectRatio: 3 / 4,
})`
  flex: 1;
`;

export const DepartmentText = styled.Text`
  font-size: 11px;
  color: ${colors.text};
`;

export const SalesContainer = styled.View`
  flex: 1;
  margin-bottom: 5px;
`;

export const SpinnerLoading = styled(ActivityIndicator).attrs({
  color: "tomato",
  alignSelf: "center",
  marginTop: 20,
  size: "large",
})``;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
