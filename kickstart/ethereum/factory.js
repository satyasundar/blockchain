import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa8dEaf046ecFd1D27e3a86f028C5b0fA9bEb591D'
);

export default instance;
