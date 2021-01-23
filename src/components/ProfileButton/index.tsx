import React, { ElementType } from "react";

import { Container, Icon, Wrapper, Title } from "./styles";

interface ProfileButtonProps {
  name: string;
  children: ElementType | string;
  margin?: number;
  onPress?: () => void;
}

const ProfileButton = ({
  name,
  children,
  margin = 0,
  onPress,
}: ProfileButtonProps) => {
  return (
    <Container {...{ margin, onPress }}>
      <Icon {...{ name }} />
      <Wrapper>
        <Title>{children}</Title>
      </Wrapper>
    </Container>
  );
};

export default ProfileButton;
