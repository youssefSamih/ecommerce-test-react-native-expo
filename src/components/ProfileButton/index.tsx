import React, { ReactNode } from "react";
import { Container, Icon, Wrapper, Title } from "./styles";

interface ProfileButtonProps {
  name: string;
  children?: ReactNode;
  margin?: number;
  title: string;
  onPress?: () => void;
  rtl?: boolean;
}

const ProfileButton = ({
  name,
  children,
  title,
  margin = 0,
  rtl,
  onPress,
}: ProfileButtonProps) => {
  return (
    <Container {...{ margin, onPress, rtl }}>
      <Icon {...{ name }} />
      <Wrapper {...{ rtl }}>
        <Title>{title}</Title>
        {children}
      </Wrapper>
    </Container>
  );
};

export default ProfileButton;
