import styled from 'styled-components';
import React from 'react';

// This is like typical React style components
const Title = styled.h1`
  font-size: 100px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function CSSJS() {
  return <Title>Styled Components</Title>;
}
