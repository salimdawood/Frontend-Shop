import './App.css';
import './Shop.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from './pages/Error'
import MySheets from './pages/MySheets'
import Home from './pages/Home'
import MyCss from './pages/MyCss'
import Upcoming from './pages/Upcoming'
import { SideBarProvider } from './context/SideBarState';
import Modal from './modal/Modal.jsx'
import combineProviders from './combineProviders'
import { ModalProvider } from './context/Modal';


function App() {
  const Providers = combineProviders([SideBarProvider,ModalProvider])
  //localStorage.setItem('favorites',JSON.stringify([]))
  return (
      <Router>
        <Providers>
          <NavBar/>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="/mysheets" element={<MySheets />}/>
            <Route path="/mycss" element={<MyCss />}/>
            <Route path="/upcoming" element={<Upcoming />}/>
            <Route path="/*" element={<Error />}/>
          </Routes>
          <Modal/>
        </Providers>
      </Router>
  );
}

export default App;
