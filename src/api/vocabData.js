import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const vocabCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabcards.json?orderBy"uid"&equalTo="${uid}"`)
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

const deleteCard = (uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocabcards/${uid}.json`)
    .then(() => {
      vocabCards(uid).then(resolve);
    })
    .catch((error) => reject(error));
});

const updateCard = (vocabCard) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocabcards/${vocabCard.firebaseKey}.json`, vocabCard)
    .then(() => vocabCards(vocabCard.uid).then(resolve))
    .catch(reject);
});

export {
  vocabCards,
  createVocab,
  getSingleCard,
  deleteCard,
  updateCard,
};
