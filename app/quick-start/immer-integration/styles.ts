const StylesCss = `
  body {
    font-family: sans-serif;
    font-weight: normal;
  }
  .app {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h3 {
    margin-bottom: 0px;
  }
  button {
    height: 45px;
    width: max-content;
    border: 2px solid #4f4e4e;
    cursor: pointer;
    font-size: 17px;
  }
`;

const setupStyles = {
  "/styles.css": {
    code: StylesCss,
    hidden: true,
  },
};

export default setupStyles;
