import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import hooksPlugin  from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            "react-hooks": hooksPlugin
        }
    },
    {
        rules: {
            "react/jsx-indent": [2, 4],
            'indent': [2, 4],
            'react/react-in-jsx-scope': 'off', 
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["warn"],
            ...hooksPlugin.configs.recommended.rules,
        },
    },
];