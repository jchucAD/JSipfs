const ipfs = require('ipfs')
const node = new ipfs()
const fs = require('fs')
const files = [
  {
    path: 'aDir/aFile',
    content: fs.readFileSync('aDir/aFile')
  }
]
node.on('ready', async () =>  {
  	console.log('node ready');
	node.files.add(files, function (err, files) {
  	console.log(files)
	})

	}
)
