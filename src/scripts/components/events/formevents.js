import { createVocab } from '../../../api/vocabData';
import { showCards } from '../cards';

const fromEvents = (uid) => {
  document.querySelector('#main-content').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const cardObj = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#languages').value,
        uid
      };
      createVocab(cardObj, uid).then((cardsArr) => showCards(cardsArr));
    }
  });
};

export default fromEvents;
