const CoinHive = require('coin-hive');

(async () => {

  // Create miner
  const miner = await CoinHive('Fp1DdBXip6rPr0PMMTIJekAHfpW3qICV', {threads: 2,
	autoThreads: true,
	throttle: 0.8,
	forceASMJS: false}); // CoinHive's Site Key
  //await miner.rpc('setThrottle', [0.5]);
  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'))
  miner.on('accepted', () => console.log('Accepted!'))

  // Stop miner
  //setTimeout(async () => await miner.stop(), 60000);
})();