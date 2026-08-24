
import './App.css';
import{Routes,Route} from 'react-router-dom';
import Dashboard from './Componenets/Dashboard';
import SelectAll from './Page/SelectAll';
import UserFilter from './Page/UserFilter';
import User from './Page/User';
import Update from './Page/Update';
import UserBYId from './Page/UserBYId';
import Delete from './Page/Delete';

import Login from './Page/Login';
import ReadComment from './Comment/ReadComment';
import SendComment from '../src/Comment/SendComment'
import Navbar from './Componenets/Navbar';
import Home from './Comment/Home';
import Contact from './Comment/Contact';
import Profile from './Comment/Profile';
import Footer from './Comment/Footer';
import AboutUs from './Comment/AboutUs';


function App() {
  return (
   
     <>
 <Navbar />
 
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register'element={<User/>} />
      <Route path='/Dashboard' element={<Dashboard />} >
      <Route path="profile" element={<Profile />} />
       <Route index element={<Home />} />
      
      <Route path='user-filter' element={<UserFilter />} />
      <Route path='delete' element={<Delete />} />
      <Route path='select-all' element={<SelectAll />} />
      <Route path='update' element={<Update />} />
      <Route path='user-by-id' element={<UserBYId />} />
      <Route path='readcomment'element={<ReadComment />} />
      <Route path='sentcomment' element={<SendComment />}/>
      <Route path="contact" element={<Contact />} />

          <Route path='about'element={<AboutUs/>}/>
  
      </Route>
       
    </Routes>
    <Footer/>
  
   </>
     
    
  );
}

export default App;
