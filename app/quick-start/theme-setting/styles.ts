const StylesCss = `
  body {
    font-family: sans-serif;
    font-weight: normal;
  }
  .dark {
    color: white;
    background: black;
  }
  .light {
    color: black;
    background: white;
  }
  button {
  }
`;

const setupStyles = {
  "/styles.css": {
    code: StylesCss,
    hidden: true,
  },
};

export default setupStyles;
