
import Home from './pages/Home'
import Signup from './pages/Signup'
import  Login from './pages/Login'
import  Trending from './pages/Trending'
import  Forget from './pages/Forget'
import  Videopage from './pages/Videopage'
import  ChannelPage from './pages/ChannelPage'
import VerifyRegister from './pages/VerifyRegister'
import VerifyLogin from './pages/VerifyLogin'
import Studio from './pages/Studio'
import Mystudio from './pages/Mystudio'
import Content from './pages/Content'
import Resetpass from './pages/Restpass'
import Dashboard from './pages/Dashboard'
import Editvideo from './pages/Editvideo'
import Member from './pages/Member'
import Member2 from './pages/Member2'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    
      <Router>
      <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/Trending" element={<Trending/>}/>    
       <Route path="/VerifyRegister" element={<VerifyRegister/>}/>    
       <Route path="/VerifyLogin" element={<VerifyLogin/>}/>    
       <Route path="/Signup" element={<Signup/>}/> 
       <Route path="/Login" element={<Login/>}/> 
       <Route path="/Forget" element={<Forget/>}/> 
       <Route path="/Videopage/:id" element={<Videopage/>}/> 
       <Route path="/:channel" element={<ChannelPage/>}/> 
       <Route path="/studio" element={<Studio/>}/> 
       <Route path="/mystudio" element={<Mystudio/>}/> 
       <Route path="/member" element={<Member/>}/> 
       <Route path="/member2" element={<Member2/>}/> 
       <Route path="/dashboard" element={<Dashboard/>}/> 
       <Route path="/content" element={<Content/>}/>
       <Route path="/resetpass/:token" element={<Resetpass/>}/>
       <Route path="/Editvideo/:id" element={<Editvideo/>}/>
      </Routes>
      </Router>
      </> 
  );
}  

export default App;


