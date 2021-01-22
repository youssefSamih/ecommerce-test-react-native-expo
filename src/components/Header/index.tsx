import React, { useState } from "react";

import InputSearch from "../InputSearch";
import { Container, Logo } from "./styles";

interface HeaderProps {
  handleSearchSubmit: (search: string) => {};
}

const Header = ({ handleSearchSubmit }: HeaderProps) => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <InputSearch
        placeholder="Product name"
        icon="search"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="send"
        onSubmitEditing={() => handleSearchSubmit(search)}
        search={search}
        setSearch={setSearch}
      />
    </Container>
  );
};

export default Header;
