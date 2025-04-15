# className Prettier Plug In Corrector
This nodule is a plugin designed to work with prettier to fix inncorrect use of css className in React.js that is not picked up by prettier.

# Important notes:
This module was inspired by softonus-io who wrote a module that works with prettier to remove whitespace for className. Their code can be found at https://github.com/softonus-io/prettier-plugin-whitespace-remover/blob/main/index.js

## Installation instructions:

1. To install the code first install the following dependencies:
    
    - npm install prettier
2. Once the dependencies are installed install the className module using the following command in the terminal:
```
npm install classname_corrector_react
```


3. Once installed create a file called .prettierrc outside of the source folder

4. In the .prettierrc file put the following code
```JavaScript
{
  "plugins": ["classname_corrector_react"]
}
```
5. To get the module to work type the code below into the terminal:
```
npx prettier . --write
``` 
The code above will correct any incorrect versions of className and correct it to the React appropriate version and then save it. 

## Prettier
Prettier is a style formatter that helps to maintain code consistency it is required for the module to work

Licensing and Ethics:

Source: npm. (2024). prettier. [online] Available at: https://www.npmjs.com/package/prettier.

Licensing and Ethics: Prettier is under the Mit license which can be found below. As this is an open license there is no ethical concerns about the use of Prettier in this module as I have acknowledged that React is under the MIT license, in accordance with the license requirements.

#### MIT LICENSE:

```
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```