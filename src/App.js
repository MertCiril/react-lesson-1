import './App.css';
import Header from './components/Header';
import User from './components/User';
//const isLoggedIn = false;
//const a = 5;
//const name = "Mehmet";
//      <p>{isLoggedIn ? `Benim adım ${name}` : "Giriş yapmadınız"}</p>
function App() {
  return (
    <div>
      <Header />

      <User name ="Mehmet" isLoggedIn = {true} friends = {["Mert","Ali","Fatih","Talha"]} />

    </div>
    
  );
}

export default App;
