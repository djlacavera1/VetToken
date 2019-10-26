const VetToken = artifacts.require("./VetToken.sol");
const VetTokenSale = artifacts.require("./VetTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(VetToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(VetTokenSale, VetToken.address, tokenPrice);
  });
};

