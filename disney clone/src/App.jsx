import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Uncomment and add these if needed */}
          {/* <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
