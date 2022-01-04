//https://eth-ropsten.alchemyapi.io/v2/dUhgWm3s5KU6PdwabHJ0w3lTFh5mdijB

require('@nomiclabs/hardhat-waffle')

module.exports ={
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/dUhgWm3s5KU6PdwabHJ0w3lTFh5mdijB',
            accounts: ['8ac6835c89986bc2e219ca525a08472026a0c7224f4aa15f4efbbc93a49c7259']
        }
    }
}