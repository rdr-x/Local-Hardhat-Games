// add the game address here and update the contract name if necessary
const gameAddr = "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318";
const contractName = "Game2";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  const tx = await game.setX(25);
  await tx.wait();

  const tx2 = await game.setY(25);
  await tx2.wait();
  // do whatever you need to do to win the game here:
  const tx3 = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx3.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
