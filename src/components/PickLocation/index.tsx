import React, { useRef, useState } from "react";
import { Container, MapStyle } from "./style";
import { Dimensions } from "react-native";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const PickLocation = () => {
  const [location, setLocation] = useState({
    focusedLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) *
        0.0122,
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
    console.log({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
    // this.props.onLocationPick({
    //   latitude: coords.latitude,
    //   longitude: coords.longitude,
    // });
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
