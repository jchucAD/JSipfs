const ipfs = require('ipfs-core')

const fs = require('fs')
const files = [
	{
		path: 'aDir/aFile',
		content: fs.readFileSync('aDir/aFile')
	}
]
async function main() {
	var node = await ipfs.create()
	var version = await node.version()

	console.log('node ready, version:', version)
	node.files.add(files, function (err, files) {
		console.log(files)
	})

}

main()
