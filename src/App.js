import './App.css';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <header>
                <Home />
            </header>
        </div>
    );
}

export default App;
