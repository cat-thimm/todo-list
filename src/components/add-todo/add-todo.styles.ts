import styled from "styled-components";

export const Input = styled.input<{ error: boolean }>`
  margin-left: 28px;
  border-color: ${({ error }) => error && "red"};
`;

export const ErrorText = styled.p`
  margin-left: 28px;
  color: red;
`;

export const SubmitButton = styled.button`
  align-self: flex-start;
`;
