import { vocabCards } from '../../api/vocabData';
import { showCards } from '../components/cards';
import dom from '../components/domBuild';
import domEvt from '../components/events/domevt';
import fromEvents from '../components/events/formevents';
import navEvt from '../components/events/navevt';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';
import logo from './logo';

const startApp = (user) => {
  dom();
  domEvt(user.uid);
  fromEvents(user.uid);
  navbar();
  logo();
  logoutButton();
  navEvt(user.uid);
  vocabCards(user.uid).then((cardsArr) => showCards(cardsArr));
};

export default startApp;
