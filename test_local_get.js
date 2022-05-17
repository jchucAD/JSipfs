const ipfs = require('ipfs')
const node = new ipfs()

const validCID = 'QmWx5VkWitNcH635aZp2cwgHeMu2Xrm6jcV2QHqreeiSzr';
node.on('ready', () => {
	console.log('node ready');
	node.files.get(validCID, function (err, files) {
		files.forEach((file) => {
			console.log(file.path)
			console.log(file.content.toString('utf8'))
		})
	})

})
