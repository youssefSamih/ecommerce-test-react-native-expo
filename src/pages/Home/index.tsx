import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import CustomText from "../../components/CustomText";
import ProductItem from "../../components/ProductItem";
import api from "../../services/api";
import registerForPushNotifications from "../../util/registerForPushNotifications";
import { SpinnerLoading } from "../sharedStyle";
import {
  Container,
  DepartmentContainer,
  DepartmentImage,
  DepartmentItem,
  DepartmentLogo,
  DepartmentText,
  SalesContainer,
  Wrapper,
} from "./styles";

interface HomeProps {
  navigation: any;
}

const all = require("../../../assets/icons/online-store.png");

const Home = ({ navigation }: HomeProps) => {
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [category, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPagination] = useState({ previousLimit: 6, newLimit: 6 });
  const loadCategories = useCallback(async () => {
    const response = await api.get("categories");
    setCategories(response.data);
  }, []);
  const loadProducts = useCallback(async () => {
    const response = await api.get(`/?limit=${page.newLimit}`);
    setProducts(response.data);
  }, []);
  useEffect(() => {
    setLoading(true);
    loadCategories();
    loadProducts();
    registerForPushNotifications();
    setLoading(false);
  }, [loadCategories, loadProducts, registerForPushNotifications]);
  useEffect(() => {
    if (page.previousLimit < page.newLimit) {
      setLoadingMore(true);
      loadProducts();
      setLoadingMore(false);
    }
  }, [loadProducts, page.previousLimit, page.newLimit]);
  useMemo(async () => {
    setLoading(true);
    let response;
    response = await api.get(`category/${department}`);
    const data = response.data;
    setProducts(data);
    setLoading(false);
  }, [department]);
  const onRefresh = React.useCallback(() => {
    setLoading(true);
    loadProducts();
    setLoading(false);
  }, []);
  const LoadMoreData = () => {
    setPagination((prev) => ({
      previousLimit: prev.newLimit,
      newLimit: prev.newLimit + 6,
    }));
  };
  const renderFooter = () => {
    if (loadingMore) {
      return <SpinnerLoading />;
    }
    return <></>;
  };
  return (
    <Container>
      <DepartmentContainer>
        {loading && !category ? (
          <SpinnerLoading />
        ) : (
          category.map((cat) => (
            <DepartmentItem key={cat}>
              <DepartmentLogo
                onPress={() => {
                  setDepartment(cat);
                }}
              >
                <DepartmentImage source={all} />
              </DepartmentLogo>
              <DepartmentText>{cat}</DepartmentText>
            </DepartmentItem>
          ))
        )}
      </DepartmentContainer>
      <SalesContainer>
        {loading && !products ? (
          <SpinnerLoading />
        ) : (
          <>
            {products.length > 0 ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={products}
                keyExtractor={(item: any) => String(item.id)}
                renderItem={({ item }) => (
                  <ProductItem item={item} navigation={navigation} />
                )}
                refreshControl={
                  <RefreshControl refreshing={loading} onRefresh={onRefresh} />
                }
                onEndReachedThreshold={0}
                onEndReached={() => LoadMoreData()}
                ListFooterComponent={renderFooter}
              />
            ) : loading ? (
              <SpinnerLoading />
            ) : (
              <Wrapper>
                <CustomText>Not found</CustomText>
              </Wrapper>
            )}
          </>
        )}
      </SalesContainer>
    </Container>
  );
};

export default Home;
