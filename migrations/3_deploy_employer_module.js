const EmployerModule = artifacts.require("EmployerModule");

module.exports = function (deployer) {
  deployer.deploy(EmployerModule);
};

