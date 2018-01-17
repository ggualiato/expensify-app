'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.handleShowDetails = _this.handleShowDetails.bind(_this);
        _this.state = {
            hide: true
        };
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: 'handleShowDetails',
        value: function handleShowDetails() {
            this.setState(function (prevState) {
                return {
                    hide: !prevState.hide
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toogle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleShowDetails },
                    this.state.hide ? 'Show details' : 'Hide details'
                ),
                React.createElement(
                    'p',
                    { hidden: this.state.hide },
                    'Details Here!!!'
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));

// console.log('build-it-visible.js is running')

// const appRoot = document.getElementById('app');

// let hide = true

// const showDetails = () => {
//     hide = !hide
//     renderVisibleApp()
// }

// const renderVisibleApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toogle</h1>
//             <button onClick={showDetails}>{hide ? 'Show details' : 'Hide details'}</button>
//             <p hidden={hide}>Details Here!!!</p>
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// renderVisibleApp()
