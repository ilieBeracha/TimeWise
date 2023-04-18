import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  const authSlice = useSelector((state: any) => state.auth);
  const loggedSlice = useSelector((state: any) => state.logged);

  return (
    <div className="App">
      <Routes>
        {
          !loggedSlice ?
            <Route path="*" element={<LandingPage />} />
            :
            <Route path="*" element={<Home />} />
        }
      </Routes>
    </div>
  )
}

export default App
