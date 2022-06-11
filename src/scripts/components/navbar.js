import renderToDom from '../helpers/renderToDom';

const navbar = () => {
  const string = `
  <div class="btn-group" aria-label="Languages">
  <button type="button" id="all-cards" class="btn btn-primary">All</button>
  <button type="button" id="javascript" class="btn btn-primary">JavaScript</button>
  <button type="button" id="html" class="btn btn-primary">HTML</button>
  <button type="button" id="css"class="btn btn-primary">CSS</button>
\
</div>`;

  renderToDom('#navbar', string);
};

export default navbar;
