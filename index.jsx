// Imports a parser that reads React.js code and translates it for prettier to use
const { parsers: javascriptParsers } = require("prettier/parser-babel");

function classNameFixer() {
    // Identifies incoorect use of class including use of space between class and name
    const incorrectPattern = /^(class|class\s*name)\=/i;
    return text.replace(incorrectPattern, (match, classNames) => {
        return "className=";
    });
}

module.exports = {
    parsers: {
        babel: {
            ...javascriptParsers.babel,
            preprocess: classNameFixer,
        },
    },
};
