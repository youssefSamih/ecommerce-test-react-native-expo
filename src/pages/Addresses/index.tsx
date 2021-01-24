import React, { useState } from "react";
import { Button, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { locationTypes } from "../../interface";
import PickLocation from "../../components/PickLocation";
import Input from "../../components/Input";
import colors from "../../styles/colors";
import { Container, SafeContainer, Header, PlacesContainer } from "./style";
import validate from "../../util/validation";
import { setPlaces } from "../../store/modules/places/actions";
import ProfileButton from "../../components/ProfileButton";

interface AddressessProps {
  navigation: any;
}

const Addressess = ({ navigation }: AddressessProps) => {
  const dispatch = useDispatch();
  const places = useSelector((state: { places: any }) => state.places?.places);
  console.log(places);
  const isEnabled = useSelector((state: any) => state.rtl);
  const [addressData, setAddressData] = useState({
    controls: {
      placeName: {
        value: "",
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true,
        },
      },
      location: {
        value: null,
        valid: false,
      },
    },
  });
  const { params } = navigation.state;
  const onLocationPick = (location: locationTypes) => {
    setAddressData((prevState: any) => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true,
          },
        },
      };
    });
  };
  const placeNameChangedHandler = (val: any) => {
    setAddressData((prevState: any) => {
      return {
        controls: {
          ...prevState.controls,
          placeName: {
            ...prevState.controls.placeName,
            value: val,
            valid: validate(val, prevState.controls.placeName.validationRules),
            touched: true,
          },
        },
      };
    });
  };
  const placeAddedHandler = () => {
    dispatch(
      setPlaces({
        placeName: addressData.controls.placeName.value,
        location: addressData.controls.location.value,
      })
    );
  };
  let submitButton = (
    <Button
      title="Add the Place!"
      onPress={placeAddedHandler}
      disabled={
        !addressData.controls.placeName.valid ||
        !addressData.controls.location.valid
      }
    />
  );
  return (
    <SafeContainer>
      <Container>
        <Header>
          <TouchableOpacity
            onPress={() => navigation.navigate(params.keyScreen)}
          >
            <FontAwesome name="arrow-left" color="#a4a4a4" size={18} />
          </TouchableOpacity>
        </Header>
        <PickLocation {...{ onLocationPick }} />
        <Input
          icon="address-book"
          onChangeText={placeNameChangedHandler}
          value={addressData.controls.placeName.value}
          color={colors.primary}
        />
        {submitButton}
      </Container>
      <PlacesContainer>
        {!places ? (
          <></>
        ) : (
          places?.map((val: { placeName: string }) => (
            <ProfileButton margin={10} title={val?.placeName} rtl={isEnabled} />
          ))
        )}
      </PlacesContainer>
    </SafeContainer>
  );
};

export default Addressess;
