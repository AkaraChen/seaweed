import {litSsrPlugin} from '@lit-labs/testing/web-test-runner-ssr-plugin.js';
import {esbuildPlugin} from '@web/dev-server-esbuild';

export default {
    plugins: [esbuildPlugin({ts: true}), litSsrPlugin()]
};
