import React, { useRef, useState } from "react";
import { ActivityIndicator } from "react-native";
import Input from "../../components/Input";
import { ButtonText, Container, Label, LoginButton, Wrapper } from "./styles";

interface SignInProps {
  navigation: {
    navigate: (p: string) => void;
  };
}

const SignIn = ({ navigation }: SignInProps) => {
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  function handleLogin() {
    setLoading(true);
    setTimeout(() => {
      return navigation.navigate("BottomRoutes");
    }, 50);
    setLoading(false);
  }
  return (
    <Container>
      <Wrapper>
        <Label>E-mail</Label>
        <Input
          icon="envelope"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          placeholder="Type your e-mail"
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current?.focus()}
          value={email}
          onChangeText={setEmail}
        />
      </Wrapper>
      <Wrapper>
        <Label>password</Label>
        <Input
          icon="lock"
          returnKeyType="send"
          placeholder="Type your password"
          secureTextEntry
          ref={passwordRef}
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleLogin}
        />
      </Wrapper>
      <LoginButton onPress={() => handleLogin()}>
        {!loading ? (
          <ButtonText>Login</ButtonText>
        ) : (
          <ActivityIndicator color="tomato" size="large" />
        )}
      </LoginButton>
    </Container>
  );
};

export default SignIn;
