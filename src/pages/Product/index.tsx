import React from "react";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons/";

import { formatPrice } from "../../util/format";
import * as CartActions from "../../store/modules/cart/actions";

import {
  Header,
  Container,
  ProductInfo,
  Name,
  PriceOriginal,
  PriceContainer,
  Price,
  ProductFinish,
  Description,
  AddButton,
  ContainerImage,
  ProductImage,
  SafeContainer,
} from "./styles";

interface ProductProps {
  navigation: any;
}

const Product = ({ navigation }: ProductProps) => {
  const product = navigation.getParam("product");
  const { params } = navigation.state;
  const dispatch = useDispatch();

  const handleAddProduct = (id: any) => {
    dispatch(CartActions.addToCartRequest(id));
  };

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
        <ContainerImage>
          <ProductImage source={{ uri: product.image }} />
        </ContainerImage>
        <ProductInfo>
          <Name>{product.title}</Name>

          <ProductFinish>
            <PriceContainer>
              <Price>only</Price>
              <PriceOriginal>{formatPrice(product.price)}</PriceOriginal>
            </PriceContainer>

            <AddButton onPress={() => handleAddProduct(product.id)}>
              Add
            </AddButton>
          </ProductFinish>
          <Description>{product.description}</Description>
        </ProductInfo>
      </Container>
    </SafeContainer>
  );
};

export default Product;
