import styled from "styled-components/native";

/**
 *
 * {(props) => props.theme.colors.primary};
 * Para aceitar o thema e necessario configurar o contexto do styled-components
 * e declarar novo thema em um arquivo styled.d.ts
 * Após isso conseguimos a tipagem com autocomplete e acesso global em toda
 * aplicação dos temas
 */

export const Container = styled.View`
  flex: 1;
  justify-content: "center";
  align-content: "center";
  /* background-color: ${(props) => props.theme.colors.primary}; */
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.title};
`;
