const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement('h1', {}, 'Hello!!!')
// const reactElement2 = React.createElement('header', {className: 'el'}, reactElement)

const reactElement2 = <header class="el">
<h1>Hello from JSX</h1>
</header>;

root.render(reactElement2);


