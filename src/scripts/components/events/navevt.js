import { vocabCards } from '../../../api/vocabData';
import { showCards } from '../cards';

const navEvt = (uid) => {
  document.querySelector('#all-cards').addEventListener('click', () => {
    console.warn('click');
    vocabCards(uid).then((cardsArr) => showCards(cardsArr));
  });
};

export default navEvt;
