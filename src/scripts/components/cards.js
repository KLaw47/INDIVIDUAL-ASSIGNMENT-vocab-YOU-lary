import clearDom from '../helpers/clearDom';
import renderToDom from '../helpers/renderToDom';

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>';

  renderToDom('#button', btnString);
  let string = ' ';
  array.forEach((card) => {
    string += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <p>${card.description}</p>
        <hr>
        <i class="fas fa-edit btn btn-info" id="update-author--${card.uid.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${card.uid.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
  renderToDom('#main-content', string);
};

const noCards = () => {
  clearDom();
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>';
  const string = '<h1>No Cards</h1>';
  renderToDom('#button', btnString);
  renderToDom('#main-content', string);
};

export { showCards, noCards };
