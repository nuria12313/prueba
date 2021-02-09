function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Los gatos dominaran el mundo');
    await sleep(2000);
  }
}

main();
