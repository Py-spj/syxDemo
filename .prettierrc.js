import prettier from 'prettier';
const { plugins, ...restConf } = prettier;
export default {
    ...restConf,
    plugins: [...plugins, require('prettier-plugin-tailwindcss')],
};
