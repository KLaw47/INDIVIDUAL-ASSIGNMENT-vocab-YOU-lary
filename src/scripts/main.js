// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import dom from './components/domBuild';
import navbar from './components/navbar';

const init = () => {
  dom();
  navbar();
  checkLoginStatus();
};

init();
