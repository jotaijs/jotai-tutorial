const StylesCss = `
  * {
    padding: 0;
    margin: 0;
  }
  body {
    font-family: sans-serif;
    font-weight: normal;
  }
  .dark {
    color: white;
    background: black;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .light {
    color: black;
    background: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
  }
  button {
    // margin-left: -40px;
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
