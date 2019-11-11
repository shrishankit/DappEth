var repoBlock = artifacts.require("../contracts/repoBlock.sol");

module.exports = function (deployer) {
  deployer.deploy(repoBlock);
};
