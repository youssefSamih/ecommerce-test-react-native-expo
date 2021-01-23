import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons/";
import { useDispatch } from "react-redux";
import * as CartActions from "../../store/modules/cart/actions";
import {
  ProductItem,
  ProductContent,
  LeftContent,
  ProductImage,
  RightContent,
  Description,
  Wrapper,
  WrapperActions,
  Price,
  Title,
  AmountText,
  IconButton,
} from "./styles";

interface ProductCartProps {
  item: {
    id: number;
    image: string;
    title: string;
    amount: number;
    subtotal: string;
  };
}

type ProductParams = {
  id: any;
  image?: string;
  title?: string;
  amount: any;
  subtotal?: string;
};

const ProductCart = ({ item }: ProductCartProps) => {
  const dispatch = useDispatch();
  const productImage = item.image;

  const handleDeleteProduct = (id: number) => {
    dispatch(CartActions.removeFromCart(id));
  };

  const increment = (product: ProductParams) => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  };

  const decrement = (product: ProductParams) => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  };

  return (
    <ProductItem>
      <ProductContent>
        <LeftContent>
          <ProductImage
            source={{
              uri: `${productImage}`,
            }}
          />
          <WrapperActions>
            <TouchableOpacity onPress={() => handleDeleteProduct(item.id)}>
              <FontAwesome name="trash-o" color="#737373" size={20} />
            </TouchableOpacity>
          </WrapperActions>
        </LeftContent>
        <RightContent>
          <Description>{item.title}</Description>
          <Wrapper>
            <Title>Quantity</Title>
            <WrapperActions>
              <IconButton onPress={() => decrement(item)}>
                <FontAwesome name="minus" color="#fff" size={15} />
              </IconButton>
              <AmountText>{"" + item.amount}</AmountText>
              <IconButton onPress={() => increment(item)}>
                <FontAwesome name="plus" color="#fff" size={15} />
              </IconButton>
            </WrapperActions>
          </Wrapper>
          <Wrapper>
            <Title>Subtotal</Title>
            <Price>{item.subtotal}</Price>
          </Wrapper>
        </RightContent>
      </ProductContent>
    </ProductItem>
  );
};

export default ProductCart;
