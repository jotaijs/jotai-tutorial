const StylesCss = `
div.light {
  color: black;
}

div.dark {
  background: black;
  color: white;
}
`

const setupStyles = {
  '/styles.css': {
    code: StylesCss,
    hidden: true
  }
}

export default setupStyles