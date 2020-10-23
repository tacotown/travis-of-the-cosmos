
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const host = process.env.HOST;
  while(true) {
    console.log(`Suck it, ${host}!`);
    await sleep(5000);
  }
}

main();
