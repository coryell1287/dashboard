#!/bin/bash

########################
## Babel dependencies ##
########################
rm -rf node_modules && rm -rf .eslintrc
npm up && npm i

npm i -S @babel/runtime
npm i -D @babel/plugin-transform-runtime
npm i -D @babel/preset-env
npm i -D @babel/plugin-transform-react-jsx
npm i -D @babel/core
npm i -D @babel/cli
npm i -D babel-loader@next
npm i -D @babel/preset-react
npm i -D @babel/plugin-proposal-class-properties
npm i -D @babel/plugin-proposal-object-rest-spread
npm i -D @babel/plugin-transform-react-jsx-source
npm i -D @babel/plugin-transform-react-constant-elements
npm i -D @babel/plugin-transform-react-inline-elements
npm i -D babel-eslint
npm i -D @babel/plugin-proposal-decorators
npm i -D @babel/polyfill
npm i -D @babel/plugin-syntax-async-generators
npm i -D @babel/plugin-transform-regenerator
npm i -D @babel/plugin-proposal-function-sent
npm i -D @babel/plugin-proposal-numeric-separator
npm i -D @babel/plugin-proposal-export-namespace-from
npm i -D @babel/plugin-proposal-throw-expressions
npm i -D @babel/plugin-syntax-dynamic-import
npm i -D @babel/plugin-syntax-import-meta
npm i -D @babel/plugin-proposal-json-strings
npm i -D babel-preset-next


##########################
## Eslint dependencies ##
#########################
npm i -D eslint
npm i -D eslint-plugin-import
npm i -D eslint-plugin-jsx-a11y
npm i -D eslint-plugin-react
npm i -D eslint-plugin-compat


##########################
## Create babelrc file  ##
##########################
echo -e "{
  \"sourceMaps\": true,
  \"plugins\": [
	\"@babel/plugin-transform-react-jsx-source\",
    \"@babel/plugin-syntax-async-generators\",
    \"@babel/plugin-transform-regenerator\",
    \"@babel/plugin-proposal-object-rest-spread\",
	\"@babel/plugin-proposal-function-sent\",
    \"@babel/plugin-proposal-export-namespace-from\",
    \"@babel/plugin-proposal-numeric-separator\",
    \"@babel/plugin-proposal-throw-expressions\",
    \"@babel/plugin-syntax-dynamic-import\",
    \"@babel/plugin-syntax-import-meta\",
    \"@babel/plugin-transform-react-constant-elements\",
    \"@babel/plugin-transform-react-inline-elements\",
     [\"@babel/plugin-proposal-class-properties\", { \"loose\": false }],
    \"@babel/plugin-proposal-json-strings\",
	 [\"@babel/plugin-transform-runtime\", {
      \"corejs\": false,
      \"helpers\": true,
      \"regenerator\": true,
      \"useESModules\": false
    }]
  ],
  \"presets\": [
     \"next\",
	\"@babel/preset-react\",
	[\"@babel/preset-env\", {
		\"debug\": true,
		\"loose\": true,
		\"modules\": false,
		\"useBuiltIns\": \"entry\",
	  }
	]
  ]
}">./.babelrc

#################################
#  Create browserslistrc file   #
#################################
echo -e "last 2 chrome version
last 2 firefox version
last 2 ie version
last 2 safari version
last 2 edge version">./.browserslistrc


#################################
#  Create eslintignore file     #
#################################
echo -e "src/tests/**/*.js">.eslintignore

################################
#  Create the  eslintrc file  #
################################
echo -e "{
  \"parser\": \"babel-eslint\",
  \"extends\": [\"plugin:compat/recommended\", \"eslint:recommended\", \"plugin:react/recommended\", \"plugin:import/errors\"],
  \"parserOptions\": {
    \"ecmaVersion\": 8,
    \"ecmaFeatures\": {
      \"modules\": true
    }
  },
  \"env\": {
    \"browser\": true,
    \"node\": true
  },
  \"rules\": {
    \"quotes\": [
      2,
      \"single\"
    ],
    \"strict\": [
      2,
      \"never\"
    ],
    \"babel/generator-star-spacing\": 1,
    \"babel/new-cap\": 1,
    \"babel/object-shorthand\": 1,
    \"babel/arrow-parens\": 1,
    \"babel/no-await-in-loop\": 1,
    \"react/jsx-uses-react\": 2,
    \"react/prop-types\": 0,
    \"react/jsx-uses-vars\": 2,
    \"react/react-in-jsx-scope\": 2,
    \"react/jsx-filename-extension\": 0,
    \"react/prefer-stateless-function\": 2,
    \"import/no-extraneous-dependencies\": 0,
    \"jsx-a11y/href-no-hash\": \"off\",
    \"import/no-unresolved\": 0,
    \"import/extensions\": [\"error\", \"never\"],
    \"no-underscore-dangle\": [\"error\", { \"allowAfterThis\": true }]
  },
  \"plugins\": [
    \"babel\",
    \"react\",
    \"jsx-a11y\"
  ]
}
">./.eslintrc.json

echo -e "\n\t\t\033[1;35mI'm done\033[0m"

npm start
