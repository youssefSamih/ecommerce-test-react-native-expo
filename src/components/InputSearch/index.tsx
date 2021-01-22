import React, { forwardRef } from "react";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons/";

import { Container, TInput } from "./styles";

interface InputSearchProps {
  setSearch: (param: string) => void;
  search: string;
  icon?: string;
  placeholder?: string;
  autoCorrect?: boolean;
  autoCapitalize?: any;
  returnKeyType?: any;
  onSubmitEditing?: () => void;
}

const InputSearch = (
  { setSearch, search, icon, ...rest }: InputSearchProps,
  ref: any
) => {
  return (
    <Container>
      <TInput {...rest} ref={ref} onChangeText={setSearch} value={search} />
      {search.length > 0 ? (
        <RectButton
          onPress={() => {
            setSearch("");
          }}
        >
          <FontAwesome name="close" size={18} color="rgba(255,255,255,0.6)" />
        </RectButton>
      ) : (
        <FontAwesome name="search" size={18} color="rgba(255,255,255,0.6)" />
      )}
    </Container>
  );
};

export default forwardRef(InputSearch);
