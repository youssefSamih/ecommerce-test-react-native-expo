import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, SafeContainer, Header } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import PickLocation from "../../components/PickLocation";

interface AddressessProps {
  navigation: any;
}

const Addressess = ({ navigation }: AddressessProps) => {
  const { params } = navigation.state;
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
        <PickLocation />
      </Container>
    </SafeContainer>
  );
};

export default Addressess;
