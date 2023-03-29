import './App.css';
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './component/LandingPage/LandingPage';

import 'primereact/resources/themes/lara-light-indigo/theme.css';   
import 'primereact/resources/primereact.css';                       
import 'primeflex/primeflex.css';     
import ScreenOne from './page/ScreenOne';
import ScreenTwo from './page/ScreenTwo';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/screenone' element={<ScreenOne/>} />
    <Route path='/screentwo' element={<ScreenTwo/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
