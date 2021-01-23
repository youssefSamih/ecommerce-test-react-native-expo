import React, { ElementType } from 'react';

import { Container, Icon, Wrapper, Title } from './styles';

interface ProfileButtonProps {
  name: string;
  children: ElementType | string;
  margin?: number;
}

const ProfileButton = ({ name, children, margin = 0 }: ProfileButtonProps) => {
  return (
    <Container margin={margin}>
      <Icon name={name} />
      <Wrapper>
        <Title>{children}</Title>
      </Wrapper>
    </Container>
  );
};

export default ProfileButton;
