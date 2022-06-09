import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const vocabCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabcards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createVocab = (vocabCard, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocabcards.json`, vocabCard)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocabcards/${response.data.name}.json`, payload)
        .then(() => {
          vocabCards(uid).then(resolve);
        });
    }).catch((error) => reject(error));
});

const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabcards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteCard = (uid, firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocabcards/${firebaseKey}.json`)
    .then(() => {
      vocabCards(uid).then((cardsArr) => resolve(cardsArr));
    })
    .catch((error) => reject(error));
});

const updateCard = (vocabCard) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocabcards/${vocabCard.firebaseKey}.json`, vocabCard)
    .then(() => vocabCards(vocabCard.uid).then(resolve))
    .catch(reject);
});

const getHtml = (uid) => new Promise((resolve, reject) => {
  vocabCards(uid)
    .then((cardsArr) => {
      const htmlCards = cardsArr.filter((card) => card.language === 'HTML');
      resolve(htmlCards);
    }).catch((error) => reject(error));
});

const getJavascript = (uid) => new Promise((resolve, reject) => {
  vocabCards(uid)
    .then((cardsArr) => {
      const javascriptCards = cardsArr.filter((card) => card.language === 'JavaScript');
      resolve(javascriptCards);
    }).catch((error) => reject(error));
});

const getCss = (uid) => new Promise((resolve, reject) => {
  vocabCards(uid)
    .then((cardsArr) => {
      const cssCards = cardsArr.filter((card) => card.language === 'CSS');
      resolve(cssCards);
    }).catch((error) => reject(error));
});

export {
  vocabCards,
  createVocab,
  getSingleCard,
  deleteCard,
  updateCard,
  getHtml,
  getJavascript,
  getCss,
};
