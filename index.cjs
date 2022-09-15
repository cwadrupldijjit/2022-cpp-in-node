const { join } = require('path');

const { doThing } = require(join(
    __dirname,
    'build',
    process.env.DEBUG == 'true' ? 'Debug' : 'Release',
    'my_node_addon.node',
));

console.log(doThing());
