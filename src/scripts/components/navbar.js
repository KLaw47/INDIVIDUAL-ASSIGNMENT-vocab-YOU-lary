import renderToDOM from '../helpers/renderToDom';

const navbar = () => {
  const string = `
  <div class="btn-group" role="group" aria-label="Plant families">
  <button type="button" class="btn btn-primary">1</button>
  <button type="button" class="btn btn-primary">2</button>
  <button type="button" class="btn btn-primary">3</button>
  <button type="button" class="btn btn-primary">4</button>
  <button type="button" class="btn btn-primary">5</button>
  <button type="button" class="btn btn-primary">6</button>
  <button type="button" class="btn btn-primary">7</button>
  <button type="button" class="btn btn-primary">8</button>
  <button type="button" class="btn btn-primary">9</button>
  <button type="button" class="btn btn-primary">10</button>
  <button type="button" class="btn btn-primary">11</button>
  <button type="button" class="btn btn-primary">12</button>
  <button type="button" class="btn btn-primary">13</button>
  <button type="button" class="btn btn-primary">14</button>
  <button type="button" class="btn btn-primary">15</button>
  <button type="button" class="btn btn-primary">16</button>
  <button type="button" class="btn btn-primary">17</button>
  <button type="button" class="btn btn-primary">18</button>
</div>`;

  renderToDOM('#navbar', string);
};

export default navbar;
