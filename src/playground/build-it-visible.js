console.log('build-it-visible.js is running')

const appRoot = document.getElementById('app');

let hide = true

const showDetails = () => {
    hide = !hide
    renderVisibleApp()
}

const renderVisibleApp = () => {
    const template = (
        <div>
            <h1>Visibility Toogle</h1>
            <button onClick={showDetails}>{hide ? 'Show details' : 'Hide details'}</button>
            <p hidden={hide}>Details Here!!!</p>
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}

renderVisibleApp()