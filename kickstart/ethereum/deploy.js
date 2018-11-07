const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'razor bench toward tiger special history sponsor pair pass combine bike mule',
  'https://rinkeby.infura.io/v3/f4926d090861403c9d0731cec7f63cb2'
);

const web3 = new Web3(provider);

const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account : ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy( { data: compiledFactory.bytecode })
  .send( { from:accounts[0], gas:'1603620' });

  console.log('Contract deployed in Rinnkeby network at address : ', result.options.address);
  // 0x95Ae4DEF01C6d4682E9da4d30cD32feE19939e27
};

deploy();
