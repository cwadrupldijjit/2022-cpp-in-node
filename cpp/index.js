import { dirname, join } from 'path';
import { dlopen } from 'process';

// Since __dirname doesn't exist in esm:
const __dirname = new URL(dirname(import.meta.url)).pathname.slice(process.platform == 'win32' ? 1 : 0);

// it currently only supports commonjs export format, so this is created just so that we can use the default imports
const importedAddonModule = {
    exports: {},
};

dlopen(
    importedAddonModule,
    join(
        __dirname,
        '..',
        'build',
        process.env.DEBUG == 'true' ? 'Debug' : 'Release',
        'my_node_addon.node',
    ),
);

export default importedAddonModule.exports;
