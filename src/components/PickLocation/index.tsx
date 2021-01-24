import React, { useRef, useState } from "react";
import { Container, MapStyle } from "./style";
import { Dimensions } from "react-native";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { locationTypes } from "../../interface";

interface PickLocationProps {
  onLocationPick: (location: locationTypes) => void;
}

const PickLocation = ({ onLocationPick }: PickLocationProps) => {
  const [location, setLocation] = useState({
    focusedLocation: {
      latitude: 33.589886,
      longitude: -7.603869,
      latitudeDelta: 0.0122,
      longitudeDelta:
        Dimensions.get("window").width / Dimensions.get("window").height,
    },
    locationChosen: false,
  });
  let map: any = useRef();
  const pickLocationHandler = (event: { nativeEvent: { coordinate: any } }) => {
    const coords = event.nativeEvent.coordinate;
    map.animateToRegion({
      ...location.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
    setLocation((prevState) => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
        locationChosen: true,
      };
    });
    onLocationPick({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  let marker = null;
  if (location.locationChosen) {
    marker = <Marker coordinate={location.focusedLocation} />;
  }
  return (
    <Container>
      <MapStyle
        initialRegion={location.focusedLocation}
        region={!location.locationChosen ? location.focusedLocation : undefined}
        onPress={pickLocationHandler}
        ref={(ref) => (map = ref)}
        provider={PROVIDER_GOOGLE}
      >
        {marker}
      </MapStyle>
    </Container>
  );
};

export default PickLocation;
