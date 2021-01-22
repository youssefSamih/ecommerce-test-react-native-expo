import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
import { FontAwesome } from "@expo/vector-icons/";

// import * as CartActions from 'store/modules/cart/actions';
// import * as FavoriteActions from 'store/modules/favorite/actions';
// import { formatPrice } from 'util/format';
// import Rating from 'components/Rating';
// import Discount from 'components/Discount';

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
  FavoriteButton,
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
  const [favorited, setFavorited] = useState(false);
  // const dispatch = useDispatch();

  // const favoritedItem = useSelector((state: any) =>
  //   state.favorite.filter((f: any) => f.id === item.id)
  // );

  // useEffect(() => {
  //   if (favoritedItem >= 0) {
  //     setFavorited(true);
  //   } else {
  //     setFavorited(false);
  //   }
  // }, [favoritedItem]);

  const handleAddProduct = (id: number) => {
    // dispatch(CartActions.addToCartRequest(id));
  };

  const handleFavorite = (product: itemProd) => {
    // dispatch(FavoriteActions.toggleFavorite(product));
  };

  return (
    <ProductItem>
      <LeftContent>
        <ProductImage
          source={{
            uri: `${item.image}`,
          }}
        />
        <FavoriteButton onPress={() => handleFavorite(item)}>
          {!favorited ? (
            <FontAwesome name="heart" color="rgba(255, 0, 0, 0.6)" size={18} />
          ) : (
            <FontAwesome name="heart-o" color="#a4a4a4" size={18} />
          )}
        </FavoriteButton>
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
          <Price>
            {formatPrice(item.price * (item.discount > 0 ? item.discount : 1))}
          </Price>
          <PriceInfo>in sight</PriceInfo>
        </PriceContainer>
        <AddButton onPress={() => handleAddProduct(item.id)}>Add</AddButton>
      </RightContent>
    </ProductItem>
  );
};

export default ProdItem;
