import renderToDom from '../helpers/renderToDom';

const navbar = () => {
  const string = `
  <div class="btn-group" role="group" aria-label="Languages">
  <button type="button" class="btn btn-primary">All</button>
  <button type="button" class="btn btn-primary">JavaScript</button>
  <button type="button" class="btn btn-primary">HTML</button>
  <button type="button" class="btn btn-primary">CSS</button>
</div>`;

  renderToDom('#navbar', string);
};

export default navbar;
