import fire from '../../images/fire.png';
import renderToDom from './renderToDom';

const logo = () => {
  const string = `
  <img src="${fire}" alt="fire">`;
  renderToDom('#logo', string);
};

export default logo;
