import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/R2wKs2qadwrI2U9gIyqBRmb0qbASQiab",
      accounts: [
        "e2c53ddcf1fb40dd21b81dbd076ed193ca3121c1199669fffe5984a9a9cae671",
      ],
    },
  },
};

export default config;
