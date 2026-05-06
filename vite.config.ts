import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'

export default defineConfig({
    plugins: [
        federation({
            name: 'host',
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
                    requiredVersion: '^3.3.2',
                },
                'lit/decorators.js': {
                    singleton: true,
                    requiredVersion: '^3.3.2',
                },
            },
        }),
    ],
})