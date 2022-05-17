const ipfs = require('ipfs')

async function main() {
	var node = await ipfs.create()
	var version = await node.version()

	console.log('node ready, version:', version);
	const content = node.Buffer.from('Hello from JC')
	const results = await node.add(content)
	const hash = results[0].hash
	console.log(hash)

	node.types.Buffer.from
}
main()