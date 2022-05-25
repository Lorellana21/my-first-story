
import './App.css';
import MyButton from "./components/MyButton/MyButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          My first story with StoryBook
        </p>
        <MyButton size="large">Hey, it's magic</MyButton>
        <br></br>
        <MyButton secondary>Button secondary</MyButton>
        <br></br>
        <MyButton tertiary>Button tertiary</MyButton>
        
      </header>
    </div>
  );
}

export default App;
