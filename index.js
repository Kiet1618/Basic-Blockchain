//npm install --save crypto-js
const Blockchain = require('./blockchain');
const Block = require('./block');

const myChain = new Blockchain();
console.log("mining in progress...");

 // Add block 1
const block1 = new Block(1, "2022-09-06", {
    sender: "Satoshi Nakamoto",
    recipient: "Tokyo",
    quantity: 10
});
myChain.addNewBlock(block1);

 // Add block 2
const block2 = new Block(2, "2022-09-09", {
    sender: "Tran Ngo Tuan Kiet",
    recipient: "Ho Chi Minh",
    quantity: 17
});
myChain.addNewBlock(block2);

// Print out the blockchain
console.log(JSON.stringify(myChain, null, 5))

// Check our chain for validity
console.log("validate Validity:", myChain.validateValidity()) 