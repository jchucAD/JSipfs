const ipfs = require('ipfs-core')

async function main() {
  var node = await ipfs.create()

  console.log('node ready');

  // stopping a node
  node.stop(() => {
    // node is now 'offline'
    console.log('node closed');
  })
}
main();


