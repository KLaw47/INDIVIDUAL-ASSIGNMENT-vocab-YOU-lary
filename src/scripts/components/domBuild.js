import renderToDOM from '../helpers/renderToDom';

const dom = () => {
  const string = `
  <div id="navbar"></div>
  <div id="main-content">
  <div id="button"></div>
    <div id="cards"></div>
    <div id="form-content"></div>
  </div>`;

  renderToDOM('#app', string);
};

export default dom;
