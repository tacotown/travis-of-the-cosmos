const game_show_host = process.env.GAME_SHOW_HOST;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Suck it, ${game_show_host}!`);
    await sleep(5000);
  }
}

main();
