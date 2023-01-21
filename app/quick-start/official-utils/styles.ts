const StylesCss = `
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: sans-serif;
    font-weight: normal;
  }
  .util {
    color: #3ccaad;
    position: absolute;
    float: inherit;
    left: 1%;
    top: 2%;
  }
  .counter {
    position: relative;
    padding: 10px;
    width: 100vw;
    height: max-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  .counter::after {
    content: '';
    display: block;
    width: 100vw;
    height: 2px;
    background: #efefef;
  }
  .selectAtom {
    position: relative;
    padding: 10px;
    width: 100vw;
    height: max-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  .btn-grp {
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;
  }
  .btn-grp>button {
    font-size: 15px;
    width: 120px;
    height: 45px;
  }
  button {
    height: 45px;
    width: 110px;
    border: 2px solid #4f4e4e;
    cursor: pointer;
    font-size: 17px;
    margin-right: 15px;
  }
`;

const setupStyles = {
  "/styles.css": {
    code: StylesCss,
    hidden: true,
  },
};

export default setupStyles;
