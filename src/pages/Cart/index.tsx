import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import checkout from "../../../assets/animations/checkout.json";
import CustomText from "../../components/CustomText";
import ProductCart from "../../components/ProductCart";
import { formatPrice } from "../../util/format";
import * as CartActions from "../../store/modules/cart/actions";
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
  TotalContainer,
} from "./styles";

interface CartProps {
  navigation: any;
}

type productParams = { finalPrice: number; amount: number };

const Cart = ({ navigation }: CartProps) => {
  const dispatch = useDispatch();
  const [isCheckout, setIsCheckout] = useState(false);
  const cart = useSelector((state: any) =>
    state.cart.map((product: productParams) => ({
      ...product,
      subtotal: formatPrice(product.finalPrice * product.amount),
    }))
  );
  const total = useSelector((state: any) =>
    formatPrice(
      state.cart.reduce((totalSum: number, product: productParams) => {
        return totalSum + product.finalPrice * product.amount;
      }, 0)
    )
  );
  const handleCheckout = () => {
    dispatch(CartActions.checkoutRequest());

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
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalPrice>{total}</TotalPrice>
            </TotalContainer>
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
