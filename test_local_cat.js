const ipfs = require('ipfs')
const node = new ipfs()
const validCID = 'QmQ2r6iMNpky5f1m4cnm3Yqw8VSvjuKpTcK1X7dBR1LkJF'; //directory
const validCID2 = 'QmaA5URXp66LRCqeGrG1pw5EfJAvakk4tmvhxp4gAaSmEE'; //text
node.on('ready', async () =>  {
  	console.log('node ready');
	node.files.cat(validCID2, function (err, file) {
	if (err) {
	    throw err
	}
  console.log(file.toString('utf8'))
})
})
