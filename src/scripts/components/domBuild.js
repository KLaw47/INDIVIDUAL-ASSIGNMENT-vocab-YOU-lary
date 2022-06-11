import renderToDOM from '../helpers/renderToDom';

const dom = () => {
  const string = `
  <div class="navbar" id="navbar"></div>
  <div id="container">
    <div id="main-content">
      <div id="button"></div>
      <div class="cards" id="cards"></div>
     <div id="form-content"></div>
    </div>
  <div id="logo"class="logo"></div>
  </div>`;

  renderToDOM('#app', string);
};

export default dom;
