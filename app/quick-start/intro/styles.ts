const StylesCss = `
  body {
    width: 100vw;
    font-family: sans-serif;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    margin-left: -40px;
    height: 45px;
    width: 100px;
    border: 2px solid #e8e7e7;
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
