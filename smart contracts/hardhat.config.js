//https://eth-ropsten.alchemyapi.io/v2/a01W3ygt3VDxbMHm6TBfO6wlZHp858uc

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/a01W3ygt3VDxbMHm6TBfO6wlZHp858uc",
      accounts: ['452aca53cfc74744fc7beea05f4de9bd5493c0419b66db112b431b282c8bfbe5']
    }
  }
};
