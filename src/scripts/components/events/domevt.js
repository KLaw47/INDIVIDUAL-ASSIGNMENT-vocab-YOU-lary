import { showCards } from '../cards';
import { deleteCard, getSingleCard } from '../../../api/vocabData';
import addVocabForm from '../form/addVocab';

const domEvt = (uid) => {
  document.querySelector('#main-content').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete Card?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteCard(uid, firebaseKey).then((cardsArr) => showCards(cardsArr));
      }
    }
    if (e.target.id.includes('add-card-btn')) {
      addVocabForm(uid);
    }
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleCard(firebaseKey).then((cardObj) => addVocabForm(cardObj));
    }
  });
};

export default domEvt;
