const host = process.env.HOST;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Suck it, ${host}!`);
    await sleep(5000);
  }
}

main();
