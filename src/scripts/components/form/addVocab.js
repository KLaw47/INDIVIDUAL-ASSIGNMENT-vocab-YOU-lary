import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addVocabForm = (uid, obj = {}) => {
  clearDom();
  const string = `
  <form>
    <div class="mb-3">
    <label for="title" class="form-label">Plant Name</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3">
    <label for="description" class="form-label">Scientific Name</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group" id="select-family">
      </div>
  </form>`;

  renderToDOM('#form-content', string);
  selectFamily(uid, `${obj.family}`);
};

export default addVocabForm;
