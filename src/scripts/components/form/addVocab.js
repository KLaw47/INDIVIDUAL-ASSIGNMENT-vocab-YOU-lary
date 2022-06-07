import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addVocabForm = (card = {}) => {
  clearDom();
  const string = `
  <form id="${card.firebaseKey ? `update-card--${card.firebaseKey}` : 'submit-card'}" class="mb-4">
    <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title">
    </div>
    <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" id="description">
  </div>
  <label for="lang">Language</label>
      <select name="languages" id="languages">
        <option value="JavaScript">JavaScript</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
    </select>
      <button type="submit" class="btn btn-primary">Submit Card
      </button>
  </form>`;

  renderToDOM('#form-content', string);
};

export default addVocabForm;
