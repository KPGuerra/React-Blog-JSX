import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    React.createElement("div", {class: 'App'}, 
      React.createElement ('h1', null, 'Hello, World!')
    )
  );
}

ReactDOM.render(React.createElement(App),
document.getElementById('root'))










