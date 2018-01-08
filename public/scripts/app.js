'use strict';

console.log('App.js is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'asdfasdfasdfasef'
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Giovanni Gualiato'
    ),
    React.createElement(
        'p',
        null,
        'Age: 20'
    ),
    React.createElement(
        'p',
        null,
        'Location: Santo Andr\xE9'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
