import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './Component/Home'
import AboutPage from './Component/About'
import ContactPage from './Component/Contact'
import Header from "./Component/Header";
function App() {
  return (
    <div className="App">
      <Header/>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>


          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/contact"} element={<ContactPage />} />
          </Routes><br/>
      <Header/>
    </div>
  );
}

export default App;
