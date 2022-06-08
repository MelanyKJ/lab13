import React from 'react'
import Users from './users'
import Contact from './contact'
import Home from './home'
import Notfound from './Notfound'
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
     
      <div>
        <Router>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/usuarios">Users</Link>
        </li>
        <li>
          <Link to="/contactos">Contact</Link>
        </li>
      </ul>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/usuarios/:param" element={<Users/>}/>
            <Route path="/usuarios" element={<Users/>}/>
            <Route path="/contactos" element={<Contact/>}/>
            <Route path='*' element={<Notfound/>}/>
          </Routes>
        </div>
      </Router>
      </div>
    )
  }
   
}
export default App;















