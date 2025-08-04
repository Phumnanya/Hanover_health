import './index.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import OverviewPage from './views/OverviewPage';
import InfoPage from './views/InfoPage';
import Test from './views/Test';

function App() {

  return (
    <>
      <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/overviewpage' element={<OverviewPage />} />
            <Route path='/info/:diseaseName' element={<InfoPage />} />
            <Route path='/test' element={<Test />} />
      </Routes>
    </>
  )
}

export default App
