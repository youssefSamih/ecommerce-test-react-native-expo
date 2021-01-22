import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import CustomText from "../../components/CustomText";
import Header from "../../components/Header";
import ProductItem from "../../components/ProductItem";
import api from "../../services/api";
import {
  Container,
  DepartmentContainer,
  DepartmentImage,
  DepartmentItem,
  DepartmentLogo,
  DepartmentText,
  SalesContainer,
  SpinnerLoading,
  Wrapper,
} from "./styles";

interface HomeProps {
  navigation: any;
}

const all = require("../../../assets/icons/online-store.png");
const Home = ({ navigation }: HomeProps) => {
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const loadCategories = useCallback(async () => {
    const response = await api.get("categories");
    setCategories(response.data);
  }, []);
  const loadProducts = useCallback(async () => {
    const response = await api.get("/");
    setProducts(response.data);
  }, []);
  useEffect(() => {
    setLoading(true);
    loadCategories();
    loadProducts();
    setLoading(false);
  }, [loadCategories, loadProducts]);
  return (
    <Container>
      <Header handleSearchSubmit={(search: string) => ({})} />
      <DepartmentContainer>
        {loading ? (
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
        {loading ? (
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
              />
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
