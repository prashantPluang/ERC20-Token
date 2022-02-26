const PLUANGToken = artifacts.require("PLUANGToken");
module.exports = function (deployer) {
    deployer.deploy(PLUANGToken, 10000, "PLUANG Coin", 1, "PLG");
};