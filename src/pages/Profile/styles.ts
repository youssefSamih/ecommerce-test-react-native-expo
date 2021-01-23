import styled from "styled-components/native";
import CustomText from "../../components/CustomText";
import colors from "../../styles/colors";

export const Container = styled.ScrollView.attrs({
  showVerticalScroll: false,
})`
  flex: 1;
`;

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;
