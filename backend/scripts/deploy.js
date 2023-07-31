
const hre = require("hardhat");
// 0x0165878A594ca255338adfa4d48449f69242Eb8F
async function main() {
  

  const CrowdFunding= await hre.ethers.deployContract("CrowdFunding");
  const crowdFunding = await CrowdFunding.waitForDeployment();
  const addresso= await crowdFunding.getAddress()
  console.log("CrowdFunding deployed to:",addresso);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
