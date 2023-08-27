const StylesCss = `
  body {
    font-family: sans-serif;
    font-weight: normal;
  }
  .app {
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  span {
    font-size: 25px;
  }
  button {
    margin-left: 10px;
    height: 45px;
    width: 80px;
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
