import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from './pages/adminpages/Admin';
import Video from './pages/adminpages/Video';
import Packages from './pages/adminpages/AdminPackages'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />}>
            {/* <Route path="/admin" element={<Video />} /> */}
            <Route path="/admin" element={<Packages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
