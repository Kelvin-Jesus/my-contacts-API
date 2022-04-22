module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 13,
    },
    rules: {
        'linebreak-style': 0,
        'class-methods-use-this': 'off',
        'no-promise-executor-return': 'off',
        indent: ['error', 4],
        camelcase: 'off',
        'object-curly-newline': ['error', { multiline: true }],
    },
};
