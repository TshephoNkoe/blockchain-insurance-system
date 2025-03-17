module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,        // Ganache default port
      network_id: "1337", // Ganache network ID
      gas: 8000000,      // Increase gas limit to 8,000,000
      gasPrice: 20000000000 // 20 Gwei
    },
  },
  compilers: {
    solc: {
      version: "0.8.21", // Use the correct Solidity version
    },
  },
};
