const Attend=artifacts.require("./Attend.sol")

module.exports=(deployer)=>{
    deployer.deploy(Attend)
}