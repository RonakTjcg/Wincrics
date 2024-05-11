
import './App.css';
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
     

     <BrowserRouter>
      <Routes>
        <Route path= '/admin' element={<Admin /> } ></Route>
       
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
