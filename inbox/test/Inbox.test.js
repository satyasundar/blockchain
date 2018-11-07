const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);
const {interface, bytecode} = require('../compile');

let accounts;
let inbox;
const INITIAL_MESSAGE = 'Hello World'

beforeEach( async () => {
  // Get the list of all Ganache accounts
  accounts = await web3.eth.getAccounts();

  // Deploy the contract using one of the abve account
  inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data:bytecode , arguments:[INITIAL_MESSAGE] })
  .send({ from:accounts[0] , gas:'1000000' });

  inbox.setProvider(provider);
});


describe('Inbox Test Cases', () => {
  it('deploys a contract', () => {
        assert.ok(inbox.options.address);
  });

  it('has a default message', async () => {
      const message = await inbox.methods.message().call();
      assert.equal(message,INITIAL_MESSAGE);
  });

  it('can change the message', async () => {
    await inbox.methods.setMessage('Hello Satya').send({from:accounts[0]});
    const message = await inbox.methods.message().call();
    assert.equal(message,'Hello Satya')
  });
});
