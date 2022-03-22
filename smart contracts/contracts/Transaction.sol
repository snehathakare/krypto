//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Transaction {
    uint transactionCount;
    event Transfer(address from, address receiver,uint amount,uint timestamp,string keyword,string message )

    struct TransferStruct {
       address from;
       address receiver;
       uint amount;
       uint timestamp;
       string keyword;
       string message;
   }
   Transfer[] transactions;

    function addToBlockchain(address payable receiver,uint amount,uint timestamp,string memory keyword,string memory message) public {
        transactionCount += 1;
        transactions.push(msg.sender, receiver, amount, block.timestamp, keyword, message);
        emit Transfer(msg.sender, receiver, amount, block.timestamp, keyword, message);
    }

    function getAllTransactions() public view returns(TransferStruct[] memory){
        return transactions;
    }

    function getTransactionCount() public view returns(uint) {
        return transactionCount;
    }
}
