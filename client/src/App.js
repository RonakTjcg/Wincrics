
import './App.css';
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Admin from './pages/adminpages/Admin';
import Video from './pages/adminpages/Video';

function App() {
  return (
    <div className="App">
     

     <BrowserRouter>
      <Routes>
        <Route path= '/admin' element={<Admin /> } >
          <Route path='/admin' element={<Video></Video>}></Route>
        </Route>
       
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
