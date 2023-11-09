module.exports = {
    "env": {
        "es2021" : true,
        "node"   : true
    },
    "extends"   : "eslint:recommended",
    "overrides" : [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion" : "latest",
        "sourceType"  : "module"
    },
    "rules": {
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "key-spacing": ["error", {
            "align": {
                "afterColon"  : true,
                "beforeColon" : true,
                "on"          : "colon"
            }
        }],
        "no-console"           : "warn",
        "no-debugger"          : "error",
        "no-dupe-keys"         : "error",
        "no-duplicate-imports" : "error",
        "no-empty"             : "error",
        "no-trailing-spaces"   : "error",
        "no-unused-vars"       : "warn",
        "no-var"               : "error",
        "object-curly-newline" : ["error", {
            "ExportDeclaration" : { "consistent": true, "minProperties": 3 },
            "ImportDeclaration" : { "consistent": true, "minProperties": 3 },
            "ObjectExpression"  : { "consistent": true, "minProperties": 3 },
            "ObjectPattern"     : { "consistent": true, "minProperties": 3 }
        }],
        "quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals" : true,
                "avoidEscape"           : true
            }
        ],
        "comma-dangle": ["error", {
            "arrays"    : "never",
            "objects"   : "never",
            "imports"   : "never",
            "exports"   : "never",
            "functions" : "never"
        }],
        "semi"           : ["error", "always"],
        "eqeqeq"         : ["error", "smart"],
        "no-else-return" : "error"
    }
};
