import renderToDOM from '../../helpers/renderToDom';
import vocabCards from '../../../api/vocabData';

const selectFamily = (uid, family) => {
  let string = `<label for="family">Select a Family</label>
  <select class="form-control" id="family" required>
  <option value="">Select an Family</option>`;

  vocabCards(uid).then((vocabArr) => {
    vocabArr.foreach((card) => {
      string += `
      <option
            value="${card.firebaseKey}"
            ${family === card.firebaseKey ? 'selected' : ''}>
              ${card.family}
          </option>`;
    });
    string += '</select>';

    renderToDOM('#select-family', string);
  });
};

export default selectFamily;
