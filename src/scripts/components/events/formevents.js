import { createVocab, updateCard } from '../../../api/vocabData';
import { showCards } from '../cards';

const fromEvents = (uid) => {
  document.querySelector('#main-content').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const cardObj = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#languages').value,
        uid,
        date: new Date().toLocaleString()
      };
      createVocab(cardObj, uid).then((cardsArr) => showCards(cardsArr));
    }

    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const cardObj = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#languages').value,
        firebaseKey,
        uid
      };

      updateCard(cardObj, uid).then(showCards);
    }
  });
};

export default fromEvents;
