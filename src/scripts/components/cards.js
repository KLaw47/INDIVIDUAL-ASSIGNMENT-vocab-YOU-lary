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
        <p>${card.language}</p>
        <hr>
        <i class="fas fa-edit btn btn-info" id="update-card--${card.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-card-btn--${card.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
  renderToDom('#cards', string);
};

const noCards = () => {
  document.querySelector('#cards').innerHTML = '<h1>No Cards</h1>';
};

export { showCards, noCards };
