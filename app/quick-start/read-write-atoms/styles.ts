const StylesCss = `
  body {
    font-family: sans-serif;
  }
  .app {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    // margin-left: -40px;
    height: 45px;
    width: 100px;
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
