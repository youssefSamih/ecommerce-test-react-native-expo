import styled from "styled-components/native";
import colors from "../../styles/colors";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${colors.white};
  padding: 15px 15px 15px 15px;
`;
