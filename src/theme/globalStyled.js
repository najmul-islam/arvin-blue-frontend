import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textPrimery};
        border-color: ${({ theme }) => theme.textSecondery};
        transition: all 0.5s ease-in-out;
    }
    .navmenu{
      background: ${({ theme }) => theme.background};
      transition: all 0.5s ease-in-out;
    }

    .navlink{
      color: ${({ theme }) => theme.textSecondery};
      &:hover{
        color: ${({ theme }) => theme.textSeconderyHover};
      }
    }
    .navactive{
       color: ${({ theme }) => theme.textPrimery};
    }

    .header-bg{
      background: ${({ theme }) => theme.background};
      box-shadow: ${({ theme }) => theme.boxShadow};
    }
    .navafter{
      &:after{
        background: ${({ theme }) => theme.textPrimery};
      }
    }
`;

export const lightTheme = {
  background: "rgb(255, 255, 255)",
  textPrimery: "rgb(0, 0, 0)",
  textSecondery: "rgb(155, 155, 155)",
  textSeconderyHover: "rgb(0, 0, 0)",
  boxShadow: "rgb(0 0 0 / 10%) 0px 0px 10px 0px",
};

export const darkTheme = {
  background: "rgb(27, 31, 33)",
  textPrimery: "rgb(236, 236, 236)",
  textSecondery: "rgb(163, 165, 166)",
  textSeconderyHover: "rgb(236, 236, 236)",
  boxShadow: "rgb(0 0 0 / 40%) 0px 0px 20px",
};
