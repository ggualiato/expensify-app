'use strict';

console.log('build-it-visible.js is running');

var appRoot = document.getElementById('app');

var hide = true;

var showDetails = function showDetails() {
    hide = !hide;
    renderVisibleApp();
};

var renderVisibleApp = function renderVisibleApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toogle'
        ),
        React.createElement(
            'button',
            { onClick: showDetails },
            hide ? 'Show details' : 'Hide details'
        ),
        React.createElement(
            'p',
            { hidden: hide },
            'Details Here!!!'
        )
    );

    ReactDOM.render(template, appRoot);
};

renderVisibleApp();
