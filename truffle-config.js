require('dotenv').config();
// var HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 0xfffffffff,  
    },
    kovan: {
      networkCheckTimeout: 10000,
      // provider: function() {
      //   return new HDWalletProvider(process.env.PRIVATE_KEY_KOVAN, "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY)
      // },
      network_id: 42,
      from: process.env.ADMIN,
      timeoutBlocks: 220
    },
    // mainnet: {
    //   provider: function() {
    //     return new HDWalletProvider(process.env.PRIVATE_KEY_MAINNET, "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY)
    //   },
    //   network_id: 1,
    //   from: process.env.ADMIN,
    //   // gasPrice: 50000000000,
    //   // gas: 12000000,
    //   timeoutBlocks: 220
    // },
  },
  compilers: {
  solc: {
    version: "0.8.6",
    settings: {
    optimizer: {
        enabled: true,
        runs: 200
    }}
  }}
};
