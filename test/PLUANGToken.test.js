const PLUANGToken = artifacts.require("PLUANGToken");
contract("PLUANGToken", (accounts) => {
    it("should put 10000 token in the first account", async () => {
        const token = await PLUANGToken.deployed();
        const balance = await token.balanceOf(accounts[0]);
        assert.equal(balance.toNumber(), 10000);
    });
    it("should transfer 100 token from the accounts[0] to accounts[1]", async () => {
        const token = await PLUANGToken.deployed();
        await token.transfer(accounts[1], 100, { from: accounts[0]});
        const balance = await token.balanceOf(accounts[1]);
        assert.equal(balance.toNumber(), 100);
    });
});