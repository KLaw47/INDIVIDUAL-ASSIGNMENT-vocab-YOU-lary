import { vocabCards } from '../../api/vocabData';
import { showCards } from '../components/cards';
import dom from '../components/domBuild';
import domEvt from '../components/events/domevt';
import fromEvents from '../components/events/formevents';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';

const startApp = (user) => {
  dom();
  domEvt();
  fromEvents(user.uid);
  navbar();
  logoutButton();
  vocabCards(user.uid).then((cardsArr) => showCards(cardsArr));
};

export default startApp;
