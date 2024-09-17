module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        sourceType: "module",
    },
    extends: ["airbnb", "airbnb/hooks", "plugin:import/recommended", "prettier"],
    plugins: ["react", "jsx-a11y", "import", "prettier", "simple-import-sort"],
    ignorePatterns: [".eslintrc.js"],
    rules: {
        "import/prefer-default-export": "off",
        "react/prop-types": "off",
        "default-param-last": "off",
        "react/jsx-props-no-spreading": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                mjs: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "prettier/prettier": ["error"],
        "no-console": ["warn", { allow: ["warn", "error", "dir"] }],
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": ["error", { extensions: [".jsx"] }],
        "react/function-component-definition": [
            "off",
            {
                namedComponents: "function-expression",
                unnamedComponents: "function-expression",
            },
        ],
    },
    overrides: [
        {
            files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
            rules: {
                "simple-import-sort/imports": [
                    "warn",
                    {
                        groups: [
                            // `react` first, `next` second, then packages starting with a character
                            ["^react$", "^[a-z]", "^@reduxjs"],
                            // Packages starting with `@`
                            ["^@"],
                            // Packages starting with `~`
                            ["^~"],
                            // Imports starting with `../`
                            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                            // Imports starting with `./`
                            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                            // Style imports
                            ["^.+\\.s?css$"],
                            // Side effect imports
                            ["^\\u0000"],
                        ],
                    },
                ],
            },
        },
    ],
};
