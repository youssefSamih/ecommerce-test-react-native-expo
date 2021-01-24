import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Container, SafeContainer, Header } from "./style";
import { FontAwesome } from "@expo/vector-icons";

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
        <Text>Hello Addressess</Text>
      </Container>
    </SafeContainer>
  );
};

export default Addressess;
