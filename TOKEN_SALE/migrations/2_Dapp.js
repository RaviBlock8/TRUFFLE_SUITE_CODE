const Dapp=artifacts.require("./DappToken.sol")

module.exports=(deployer)=>{
    deployer.deploy(Dapp)
}