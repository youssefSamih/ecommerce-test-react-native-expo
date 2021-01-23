import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons/";

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
    images: string[];
    title: string;
    amount: number;
    subtotal: string;
  };
}

type ProductParams = {
  id: any;
  images?: string[];
  title?: string;
  amount: any;
  subtotal?: string;
};

const ProductCart = ({ item }: ProductCartProps) => {
  const productImage = { ...item.images };

  const handleDeleteProduct = (id: number) => {};

  const increment = (product: ProductParams) => {};

  const decrement = (product: ProductParams) => {};

  const handleFavorite = (product: ProductParams) => {};

  return (
    <ProductItem>
      <ProductContent>
        <LeftContent>
          <ProductImage
            source={{
              uri: `${productImage[0]}`,
            }}
          />
          <WrapperActions>
            <TouchableOpacity onPress={() => handleFavorite(item)}>
              <FontAwesome name="heart-o" color="#a4a4a4" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteProduct(item.id)}>
              <FontAwesome name="trash-o" color="#737373" size={20} />
            </TouchableOpacity>
          </WrapperActions>
        </LeftContent>
        <RightContent>
          <Description>{item.title}</Description>
          <Wrapper>
            <Title>Quantidade</Title>
            <WrapperActions>
              <IconButton onPress={() => decrement(item)}>
                <FontAwesome name="minus" color="#fff" size={15} />
              </IconButton>
              <AmountText>6</AmountText>
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
