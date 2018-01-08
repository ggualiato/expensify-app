console.log('App.js is running')

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>asdfasdfasdfasef</p>
    </div>);

var templateTwo = (
    <div>
        <h1>Giovanni Gualiato</h1>
        <p>Age: 20</p>
        <p>Location: Santo André</p>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
