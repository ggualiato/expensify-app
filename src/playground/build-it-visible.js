class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleShowDetails = this.handleShowDetails.bind(this)
        this.state = {
            hide: true
        }
    }
    handleShowDetails() {
        this.setState((prevState) => {            
            return {
                hide: !prevState.hide
            }
        })
    }    
    render() {
        return (            
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.handleShowDetails}>{this.state.hide ? 'Show details' : 'Hide details'}</button>
                <p hidden={this.state.hide}>Details Here!!!</p>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

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