require('@matterlabs/hardhat-zksync-deploy');
import "@matterlabs/hardhat-zksync-solc";

module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
        libraries:{}, // optional. References to non-inlinable libraries
        isSystem: false, // optional.  Enables Yul instructions available only for zkSync system contracts and libraries
        forceEvmla: false // optional. Falls back to EVM legacy assembly if there is a bug with Yul
    },
  },
  defaultNetwork: 'zkSyncTestnet',
  networks: {
    zkSyncTestnet: {
      url: 'https://zksync2-testnet.zksync.dev',
      ethNetwork: '<$RPC>',
      zksync: true,
    },
  },
  solidity: {
    version: '0.8.16',
  },
};