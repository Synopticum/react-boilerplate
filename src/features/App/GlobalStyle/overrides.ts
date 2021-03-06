import theme from 'src/features/App/GlobalStyle/theme';

const overrides = `
  *, *:before, *:after { box-sizing: inherit; }

  html {
    height: 100%;
    overflow: auto;
  }

  body {
    font-family: Times New Roman, serif;
    box-sizing: border-box;
    word-break: break-word;
    overflow: auto;
    height: 100%;
    padding: 0;
    background: ${theme.colors.white.a};
    line-height: 1.4;
  }

  #main {
    min-height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    border-radius: 5px 0 0 5px;
  }

  a {
    color: ${theme.colors.blue.a};
  }

  input, textarea, button { font-family: Times New Roman, "Helvetica Neue", sans-serif; }
  input:active, textarea:active, button:active, input:focus, textarea:focus, button:focus { outline: none; }

  input[type=text]::-ms-clear {
    display: none;
  }
  input[type=password]::-ms-reveal {
    display: none;
  }
`;

export default overrides;
