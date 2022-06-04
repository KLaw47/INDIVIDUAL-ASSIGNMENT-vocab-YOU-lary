import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  renderToDOM('#button', btnString);
  let string = ' ';
  array.forEach(card => {
    string += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <p>${card.description}</p>
        <hr>
        <i class="fas fa-edit btn btn-info" id="update-author--${item.uid.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${card.uid.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
