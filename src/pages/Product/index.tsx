import React, { useState, useEffect, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons/";

import { formatPrice } from "../../util/format";

// import * as FavoriteActions from 'store/modules/favorite/actions';
// import * as CartActions from 'store/modules/cart/actions';

import {
  Header,
  Container,
  ProductInfo,
  ProductHeader,
  Name,
  PriceOriginal,
  PriceContainer,
  Price,
  ProductFinish,
  Description,
  AddButton,
  FavoriteButton,
  ContainerImage,
  ProductImage,
  SafeContainer,
} from "./styles";

// import Carousel from "../../components/Carousel";

interface ProductProps {
  navigation: any;
}

const Product = ({ navigation }: ProductProps) => {
  const product = navigation.getParam("product");
  const { params } = navigation.state;
  const [favorited, setFavorited] = useState(false);
  // const dispatch = useDispatch();

  // const favoritedItem = useSelector((state: any) =>
  //   state.favorite.filter((f: { id: any }) => f.id === product.id)
  // );

  // useEffect(() => {
  //   if (favoritedItem >= 0) {
  //     setFavorited(true);
  //   } else {
  //     setFavorited(false);
  //   }
  // }, [favoritedItem]);

  const handleAddProduct = (id: any) => {
    // dispatch(CartActions.addToCartRequest(id));
  };

  const handleFavorite = (prod: any) => {
    // dispatch(FavoriteActions.toggleFavorite(prod));
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
          <ProductHeader>
            <FavoriteButton onPress={() => handleFavorite(product)}>
              {!favorited ? (
                <FontAwesome
                  name="heart"
                  color="rgba(255, 0, 0, 0.6)"
                  size={20}
                />
              ) : (
                <FontAwesome name="heart-o" color="#a4a4a4" size={20} />
              )}
            </FavoriteButton>
          </ProductHeader>
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
