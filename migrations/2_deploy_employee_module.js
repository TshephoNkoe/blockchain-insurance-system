// Import the EmployeeModule contract
const EmployeeModule = artifacts.require("EmployeeModule");

module.exports = function (deployer) {
  // Deploy the EmployeeModule contract
  deployer.deploy(EmployeeModule);
};

