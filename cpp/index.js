import { dirname, join } from 'path';
import { createRequire } from 'module';

// Since __dirname doesn't exist in esm:
const __dirname = new URL(dirname(import.meta.url)).pathname.slice(process.platform == 'win32' ? 1 : 0);

// node addons currently only support being "require"d in CommonJS, so since ESM doesn't have a
// "require" function, we have to create our own "require" function in order to open it.
// the require function will run the node internal "dlopen" function on the node addon so you
// don't have to do it manually
const require = createRequire(import.meta.url);

export default require(
    join(
        __dirname,
        '..',
        'build',
        process.env.DEBUG == 'true' ? 'Debug' : 'Release',
        'my_node_addon.node',
    )
);
