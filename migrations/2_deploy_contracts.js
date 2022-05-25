
// Import a JavaScript version of the Token contract
const Token = artifacts.require("Token")
// Import a JavaScript version of the EthSwap contract
const EthSwap = artifacts.require("EthSwap");

module.exports = async function (deployer) {
    // Deploy Token
    await deployer.deploy(Token)
    // Fetch the token from the blockchain
    const token = await Token.deployed()

    // Deploy WthSwap
    await deployer.deploy(EthSwap, token.address)
    // Fetch the ethSwap from the blockchain
    const ethSwap = await EthSwap.deployed()

    // Transfer all tokens to EthSwap (1 Million)
    await token.transfer(ethSwap.address, '1000000000000000000000000')
};