// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract EmployerModule {
    struct Employer {
        address employerAddress;
        uint256 balance;
    }

    mapping(address => Employer) public employers;

    function addEmployerBalance(address _employer, uint256 _amount) public {
        employers[_employer].balance += _amount;
    }

    function getEmployerBalance(address _employer) public view returns (uint256) {
        return employers[_employer].balance;
    }
}

