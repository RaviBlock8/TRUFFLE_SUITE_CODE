const escrow= artifacts.require('./Escrow.sol');

module.exports=(deployer)=>{
    deployer.deploy(escrow);
}