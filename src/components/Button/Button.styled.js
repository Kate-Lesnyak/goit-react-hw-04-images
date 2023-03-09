import styled from 'styled-components';

export const StyledButton = styled.button`
padding: 8px 16px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.backgroundBtnAndSearchFormColor};
  transition: ${({ theme }) => `all ${theme.transition}`};
  text-align: center;
  display: inline-block;
  color: ${({ theme }) => theme.colors.bodyAndBtnColor};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.btnBoxShadow};

:hover,
:focus {
  background-color: ${({ theme }) => theme.colors.accentColor};
}
`;
