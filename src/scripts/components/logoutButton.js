import firebase from 'firebase/app';
import 'firebase/auth';
import renderToDom from '../helpers/renderToDom';

const signMeOut = () => {
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-light">Logout</button>';
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
  renderToDom('#logout-button', domString);
};

export default logoutButton;
