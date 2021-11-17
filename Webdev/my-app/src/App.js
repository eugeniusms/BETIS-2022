import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Bimbingan belajar tanpa biaya.';
  const likes = 50;

  return (
    <div className = "App">
      <Navbar />
      <div className = "flex-container">
        <div className = "flex-child content"> 
          <img src={require("./png/papan_tulis.jpg").default} height={400} width={468} />
        </div>
        <div className = "flex-child titlecase">
          <br/>
          <br/>
          <br/>
          <h1>{ title }</h1>
          <p>Liked { likes } times</p>  
          <br></br>
        </div>
      </div>
      <Home /> 
    </div>
  );
}

export default App;
