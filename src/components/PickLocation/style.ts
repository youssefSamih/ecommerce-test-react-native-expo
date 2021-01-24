import MapView from "react-native-maps";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const MapStyle = styled(MapView)`
  width: 100%;
  height: 250px;
`;
