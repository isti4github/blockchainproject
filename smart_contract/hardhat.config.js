require('@nomiclabs/hardhat-waffle');

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/IML0EmJpw3OnhEdccOxSfORcRujJT04W',
      accounts: ['da104231b4c167d4cab40992c2bac6137dc94da9f2503f5e3cadcde4b071b935'],
    },
  },
};