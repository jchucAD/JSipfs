const ipfs = require('ipfs-core')
const node = new ipfs()

node.on('ready', async () => {
	console.log('node ready');
	let content = node.types.Buffer.from('Hello from IPFS Session 3');
	let results = await node.files.add(content);
	let hash = results[0].hash;
	console.log(hash);
})
