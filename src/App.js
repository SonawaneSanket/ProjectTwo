import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Videos from './Components/Videos';
import Upload from './Components/Upload';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Anime from './Components/Anime';
import Metaverse from './Components/Metaverse';
import GameZone from './Components/GameZone';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/videos" element={<Videos></Videos>} />
        <Route path="/upload" element={<Upload></Upload>}></Route>
        <Route path="/anime" element={<Anime></Anime>}></Route>
        <Route path="/gamezone" element={<GameZone></GameZone>}></Route>
        <Route path="/metaverse" element={<Metaverse></Metaverse>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
