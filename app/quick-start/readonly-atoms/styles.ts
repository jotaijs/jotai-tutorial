const StylesCss = `
  body {
    font-family: sans-serif;
  }
  .app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    height: 30px;
    font-size: 17px;
    margin-bottom: -10px;
  }
`;

const setupStyles = {
  "/styles.css": {
    code: StylesCss,
    hidden: true,
  },
};

export default setupStyles;
