import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border: 5px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 10px;
    background-color: rgba(24, 21, 40, 0.15);
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  .object-cover {
    object-fit: cover;
  }

  .disabled {
    pointer-events: none;
    touch-action: none;
    opacity: 0.5;
  }

  .cursor-pointer {
    cursor: pointer;
  }
  
  .width-48 {
    min-width: 48px;
  }
  
  .width-83 {
    min-width: 83px;
  }

  .width-100 {
    min-width: 100px;
  }
  
  .width-146 {
    min-width: 146px;
  }

  .width-219 {
    min-width: 219px;
  }

  .width-226 {
    min-width: 226px;
  }

  .width-277 {
    min-width: 277px;
  }

  .width-433 {
    min-width: 433px;
  }
`;

export default GlobalStyles;
