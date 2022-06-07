import { showCards } from '../cards';
import { deleteCard } from '../../../api/vocabData';
import addVocabForm from '../form/addVocab';

const domEvt = (uid) => {
  document.querySelector('#main-content').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete Card?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteCard(firebaseKey, uid).then((cardsArr) => showCards(cardsArr));
      }
    }
    if (e.target.id.includes('add-card-btn')) {
      addVocabForm(uid);
    }
  });
};

export default domEvt;
