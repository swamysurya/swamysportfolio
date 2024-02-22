## styled components

package name **styled-components**

order to configure create-react-app with the babel-plugin-styled-components, we have to use craco - Create React App Configuration Override is an easy and comprehensible configuration layer for create-react-app. \* We’ll need to install craco with npm, and then create a craco.config.js at the root of our application, with the content

```
npm install @craco/craco babel-plugin-styled-components

```

Create a craco.config.js file at the root of your project:

```
module.exports = {
  babel: {
    plugins: [
      ['babel-plugin-styled-components',
        {
          displayName: true,
        }
      ],
    ],
  },
};
```

Update the scripts in your package.json

```
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  }
}
```
