import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Qrcode from './components/Qrcode';
import Basicqr from "../src/components/Qrstyles/Basicqr"
import BrownBlack from './components/Qrstyles/BrownBlack';
import SilverGreen from './components/Qrstyles/SilverGreen';



function App() {


  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Qrcode" element={<Qrcode />} />
        <Route path="/Basicqr" element={<Basicqr />} />
        <Route path="/BrownBlack" element={<BrownBlack />} />
        <Route path="/SilverGreen" element={<SilverGreen />} />
      </Routes>

    </Router>
  )
}

export default App
