if (typeof web3 !== 'undefined') {
	// Dont loose an existing web3 provider like Mist or Metamask
	web3 = new Web3(web3.currentProvider);
} else {
	//Set the provider you want fomr local
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.getCoinbase(function(err,coinbase){
	if (err) {
		console.error(err);
	} else {
		console.log("Coinbase :: " + coinbase);
	}
});

const faucetAddress = "0x44473ada272c1113f3d32a9bf9460e045a6021bf";
const faucetContractFactory = web3.eth.contract( JSON.parse(faucetCompiled.contracts["/home/eagle/b9lab/Faucet.sol:Faucet"].abi) );
const faucetInstance = faucetContractFactory.at(faucetAddress);

//Query to get eth balance
web3.eth.getBalance(faucetAddress, function(err, balance){
	if (err) {
		console.error(err);
	}else {
		console.log("Contract Balance :: " + balance);
	}
});

//Query the contract directly
faucetInstance.getBalance.call( function(err,balance) {
	if (err) {
		console.error(err);
	} else {
		console.log("Faucet Balance :: " + balance);
	}
} );

function topup() {
	web3.eth.getCoinbase( function(err,coinbase){
		if (err) {
			console.error(err);
		} else {
			web3.eth.sendTransaction( {
				from: coinbase,
				to: faucetAddress,
				value: web3.toWei(1,"ether")
			}, function(err, txn) {
				if (err) {
					console.error(err);
				} else {
					console.log("top up transaction :: " + txn);
				}
			} );
		}
	});
}

function sendWei() {
	web3.eth.getCoinbase( function(err, coinbase){
		if (err){
			console.error(err);
		} else {
			web3.eth.getAccounts(function(err,accounts){
				if (err) {
					console.error(err);
				} else {
					const targetAccount = accounts[2];
					faucetInstance.sendWei( targetAccount, { from: coinbase }, function(err, txn){
							if (err) {
								console.error(err);
							} else {
								console.log(" SendWei Transaction :: " + txn);
							}
					} );
				}
			});
		}
	});
}