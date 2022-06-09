import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addVocabForm = (card = {}) => {
  clearDom();
  const string = `
  <form id="${card.firebaseKey ? `update-card--${card.firebaseKey}` : 'submit-card'}" class="mb-4">
    <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" aria-decribedby="cardTitle" placeholder="Enter Card Title" value="${card.title || ''}" required>
    </div>
    <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" id="description" aria-describedby="description" placeholder="Definition" value="${card.description || ''}" required>
  </div>
  <label for="lang">Language</label>
      <select class="form-select" id="languages">
        <option value="JavaScript">JavaScript</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
    </select>
    <input class="btn btn-primary" type="submit" value="Submit">
    <input class="btn btn-primary" type="reset" value="Cancel">
  </form>`;

  renderToDOM('#form-content', string);
};

export default addVocabForm;
