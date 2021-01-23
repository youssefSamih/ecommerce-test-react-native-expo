import React, { useState } from "react";
import { FlatList } from "react-native";
import checkout from "../../../assets/animations/checkout.json";
import CustomText from "../../components/CustomText";
import ProductCart from "../../components/ProductCart";
import {
  ButtonText,
  BuyButton,
  CheckoutAnimation,
  Container,
  FinishButton,
  TotalPrice,
  TotalText,
  TotalWrapper,
  Wrapper,
  WrapperAnimation,
} from "./styles";

interface CartProps {
  navigation: any;
}

const Cart = ({ navigation }: CartProps) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cart: any = [];
  const total = "0";
  const handleCheckout = () => {
    setIsCheckout(true);
    setTimeout(() => {
      setIsCheckout(false);
    }, 1500);
  };
  return (
    <Container>
      {isCheckout && (
        <WrapperAnimation>
          <CheckoutAnimation autoPlay loop source={checkout} />
        </WrapperAnimation>
      )}
      {cart.length > 0 ? (
        <>
          <FlatList
            numColumns={1}
            data={cart}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <ProductCart item={item} />}
          />
          <TotalWrapper>
            <TotalText>
              {`TOTAL
              ${(<TotalPrice>{total}</TotalPrice>)}`}
            </TotalText>
          </TotalWrapper>
          <FinishButton onPress={() => handleCheckout()}>
            <ButtonText>Finalize order</ButtonText>
          </FinishButton>
        </>
      ) : (
        !isCheckout && (
          <Wrapper>
            <CustomText>Not found</CustomText>
            <BuyButton onPress={() => navigation.navigate("HomeRoute")}>
              <ButtonText>Go shopping</ButtonText>
            </BuyButton>
          </Wrapper>
        )
      )}
    </Container>
  );
};

export default Cart;
