import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
    return {
        test: {
            environment: 'node',
        },
        build: {
            lib: {
                name: 'cpp-in-node',
                fileName: 'cpp-in-node',
                entry: './index.js',
            },
        },
    };
});
