import {
  getJavascript, getHtml, getCss, vocabCards
} from '../../../api/vocabData';
import signOut from '../../helpers/signOut';
import { showCards } from '../cards';

const navEvt = (uid) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  document.querySelector('#all-cards').addEventListener('click', () => {
    vocabCards(uid).then((cardsArr) => showCards(cardsArr));
  });
  document.querySelector('#javascript').addEventListener('click', () => {
    getJavascript(uid).then((cardsArr) => showCards(cardsArr));
  });
  document.querySelector('#html').addEventListener('click', () => {
    getHtml(uid).then((cardsArr) => showCards(cardsArr));
  });
  document.querySelector('#css').addEventListener('click', () => {
    getCss(uid).then((cardsArr) => showCards(cardsArr));
  });
};

export default navEvt;
