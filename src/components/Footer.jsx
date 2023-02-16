const react = require("react");

function Footer() {
  const currYear = new Date().getFullYear();
  return <footer>copyright @ {currYear}</footer>;
}

export default Footer;
