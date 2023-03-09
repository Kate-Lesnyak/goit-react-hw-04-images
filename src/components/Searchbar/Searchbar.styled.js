import styled from 'styled-components';

export const StyledSearchbar = styled.header`
top: 0;
left: 0;
position: sticky;
z-index: 1100;
display: flex;
justify-content: center;
align-items: center;
min-height: 64px;
padding-right: 24px;
padding-left: 24px;
padding-top: 12px;
padding-bottom: 12px;
color: ${({ theme }) => theme.colors.bodyAndBtnColor};
background-color: ${({ theme }) => theme.colors.backgroundBtnAndSearchFormColor};
box-shadow: ${({ theme }) => theme.searchBarBoxShadow};
`;

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.bodyAndBtnColor};
  border-radius: 3px;
  overflow: hidden;
`;

export const StyledSearchFormButton = styled.button`
display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: ${({ theme }) => `opacity ${theme.transition}, color ${theme.transition}`};

  cursor: pointer;
  outline: none;

  :hover {
  opacity: 1;
  color: ${({ theme }) => theme.colors.accentColor}
  }
`;

export const StyledInput = styled.input`
display: inline - block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

::placeholder {
  font: inherit;
  font-size: 18px;
}
`;
