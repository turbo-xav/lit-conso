import { defineConfig } from 'vite';
import { federation } from '@module-federation/vite';

export default defineConfig({
    plugins: [
        federation({
            name: 'hostApp',
            remotes: {
                litExpose: {
                    type: 'module',
                    name: 'litExpose',
                    entry: 'http://localhost:4173/remoteEntry.js',
                },
            },
            shared: {
                lit: {
                    singleton: true,
                },
            },
        }),
    ],
    build: {
        target: 'esnext',
    },
});