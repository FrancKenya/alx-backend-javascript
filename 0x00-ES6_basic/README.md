# ES6 Basics Project

This project is a simple introduction to ES6 features like block-scoped variables, destructuring, arrow functions, and more. It includes several functions demonstrating these concepts.
## Features Covered

- **Block-scoped variables** (`let` and `const`)
- **Arrow functions** and default parameters
- **Rest and spread function parameters**
- **String templating**
- **Object creation** and destructuring
- **Iterators and for-of loops**

## How to Run

### Prerequisites

- **Node.js** (version 12.x)
- **npm** (Node Package Manager)
- **Jest** (for running unit tests)
- **ESLint** (for linting)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd project_folder

2. **Install dependencies**

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

install Jest, Babel and ESList by using the supplied package.json and run npm install.

- **package.json** 

{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

- **babel.config.js**

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

- **.eslintrc.js**


module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

- **Install npm**
RUN npm install
