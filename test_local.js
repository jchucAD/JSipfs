const Ipfs = require('ipfs-core')
const node = new Ipfs()

node.on('ready', () => {
  console.log('node ready');

  // stopping a node
  node.stop(() => {
    // node is now 'offline'
    console.log('node closed');
  })
})

