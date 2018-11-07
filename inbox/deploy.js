const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile.js');

const provider = new HDWalletProvider(
  'razor bench toward tiger special history sponsor pair pass combine bike mule',
  'https://rinkeby.infura.io/v3/f4926d090861403c9d0731cec7f63cb2'
);

const web3 = new Web3(provider);

const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account : ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy( { data:bytecode, arguments:['Hi Satya !'] })
  .send( { from:accounts[0], gas:'1000000' });

  console.log('Contract deployed in Rinnkeby network at address : ', result.options.address);
  //contract address : 0xF99CBEc8516C331F5b047f91386eC9e25feCDb6C
};

deploy();
