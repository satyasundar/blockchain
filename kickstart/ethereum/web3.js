import Web3 from 'web3';

let web3;
if( typeof window != 'undefined' && typeof window.web3 != 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
}else {
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/f4926d090861403c9d0731cec7f63cb2'
  );
  web3 = new Web3(provider);
}

export default web3;
