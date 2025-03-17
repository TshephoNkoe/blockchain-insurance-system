// File: SocialSecurityTest.js
const SocialSecurity = artifacts.require("SocialSecurity");

contract("SocialSecurity", (accounts) => {
    let socialSecurity;

    before(async () => {
        socialSecurity = await SocialSecurity.deployed();
    });

    it("should add employer balance", async () => {
        await socialSecurity.addEmployerBalance(accounts[1], 1000);
        const balance = await socialSecurity.getEmployerBalance(accounts[1]);
        assert.equal(balance.toNumber(), 1000, "Balance not added correctly");
    });

    it("should handle employee insurance", async () => {
        await socialSecurity.bindEmployer(accounts[2], accounts[1]);
        await socialSecurity.handleEmployeeInsurance(accounts[2], 200);
        const balance = await socialSecurity.getEmployeeBalance(accounts[2]);
        assert.equal(balance.toNumber(), 200, "Insurance not handled correctly");
    });

    it("should bind employer to employee", async () => {
        await socialSecurity.bindEmployer(accounts[3], accounts[1]);
        const employee = await socialSecurity.employees(accounts[3]);
        assert.equal(employee.employer, accounts[1], "Employer binding failed");
    });

    it("should transfer social security balance", async () => {
        await socialSecurity.transferAccount(accounts[2], accounts[3]);
        const balanceTo = await socialSecurity.getEmployeeBalance(accounts[3]);
        assert.equal(balanceTo.toNumber(), 200, "Transfer failed");
    });
});
