// Blockchain Social Security Insurance System Project Code
// Includes smart contracts, front-end, and back-end

// Step 1: Smart Contracts (Solidity)
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract SocialSecurity {
    struct Employer {
        address employerAddress;
        uint256 balance;
    }

    struct Employee {
        address employeeAddress;
        uint256 socialSecurityBalance;
        address employer;
    }

    mapping(address => Employer) public employers;
    mapping(address => Employee) public employees;

    // Add Employer Balance
    function addEmployerBalance(address _employer, uint256 _amount) public {
        employers[_employer].balance += _amount;
    }

    // Handle Employee Insurance
    function handleEmployeeInsurance(address _employee, uint256 _amount) public {
        require(employers[employees[_employee].employer].balance >= _amount, "Insufficient employer balance");
        employers[employees[_employee].employer].balance -= _amount;
        employees[_employee].socialSecurityBalance += _amount;
    }

    // Bind Employee to Employer
    function bindEmployer(address _employee, address _employer) public {
        employees[_employee].employer = _employer;
    }

    // Transfer Social Security Account
    function transferAccount(address _fromEmployee, address _toEmployee) public {
        require(employees[_fromEmployee].socialSecurityBalance > 0, "No balance to transfer");
        employees[_toEmployee].socialSecurityBalance += employees[_fromEmployee].socialSecurityBalance;
        employees[_fromEmployee].socialSecurityBalance = 0;
    }

    // Retrieve Employer Balance
    function getEmployerBalance(address _employer) public view returns (uint256) {
        return employers[_employer].balance;
    }

    // Retrieve Employee Balance
    function getEmployeeBalance(address _employee) public view returns (uint256) {
        return employees[_employee].socialSecurityBalance;
    }

    // Fallback function to accept payments
    receive() external payable {}
}
