var rootElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement('h1', {}, 'Hello!!!')
// const reactElement2 = React.createElement('header', {className: 'el'}, reactElement)

var reactElement2 = React.createElement(
  "header",
  { "class": "el" },
  React.createElement(
    "h1",
    null,
    "Hello from JSX"
  )
);

root.render(reactElement2);