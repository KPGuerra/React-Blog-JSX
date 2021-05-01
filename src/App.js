import './App.css';

function App() {
  
  //Created a function with the string
  const helloWorld = () => {
    return <h1> Hello, World!</h1>
  }
  return (

    //In our return, we use JSX to create "React Elements"
    <div className="App">

      {/* We can return expressions within brackets */}
      {helloWorld()}
    </div>
  );
}

export default App;






