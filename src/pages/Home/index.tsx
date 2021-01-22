import React from "react";
import { Text } from "react-native";
import Header from "../../components/Header";
import { Container } from "../../components/Input/styles";

const Home = () => {
  return (
    <Container>
      <Header handleSearchSubmit={(search: string) => ({})} />
      <Text>Home</Text>
    </Container>
  );
};

export default Home;
