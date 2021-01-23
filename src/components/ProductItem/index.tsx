import React from "react";
import { useDispatch } from "react-redux";

import * as CartActions from "../../store/modules/cart/actions";

import {
  ProductItem,
  LeftContent,
  ProductImage,
  RightContent,
  Title,
  PriceContainer,
  Price,
  PriceInfo,
  AddButton,
} from "./styles";
import { formatPrice } from "../../util/format";

interface ProdItemProps {
  navigation: {
    navigate: (
      screenName: string,
      params: { product: any; keyScreen: any }
    ) => any;
    state?: {};
  };
  item: itemProd;
}

type itemProd = {
  id: number;
  image: string | string[];
  title: string;
  rating: number;
  numrating: number;
  discount: number;
  price: number;
};

const ProdItem = ({ navigation, item }: ProdItemProps) => {
  const dispatch = useDispatch();

  const handleAddProduct = (id: number) => {
    dispatch(CartActions.addToCartRequest(id));
  };

  return (
    <ProductItem>
      <LeftContent>
        <ProductImage
          source={{
            uri: `${item.image}`,
          }}
        />
      </LeftContent>
      <RightContent>
        <Title
          onPress={() =>
            navigation.navigate("Product", {
              product: item,
              keyScreen: (navigation.state as { key: any }).key,
            })
          }
        >
          {item.title}
        </Title>

        <PriceContainer>
          <Price>{formatPrice(item.price)}</Price>
        </PriceContainer>
        <AddButton onPress={() => handleAddProduct(item.id)}>Add</AddButton>
      </RightContent>
    </ProductItem>
  );
};

export default ProdItem;
