// https://polygonzkevm-cardona.g.alchemy.com/v2/zUcVX47-MCQYeqqOi1TvjlZyP4BxaZI8
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    polygonzkevmCardona: {
      url: 'https://polygonzkevm-cardona.g.alchemy.com/v2/zUcVX47-MCQYeqqOi1TvjlZyP4BxaZI8',
      accounts: ['b0ed0cba1a7ef6f383ed897c9c7db73f17df86e89bfdc7de179afdd44253b230'],
    },

  },
};