import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import CreatorList from './components/CreatorsList';
import LoginPage from './components/LoginPage';
import CreatorProfile from './components/CreatorProfile';
import CreatorAnalytics from './components/CreatorAnalytics';
//import creators from './data/creators';
const creators = [
  {
      "id":1  ,
      "name" :'Naveen Reddy' ,
      "address" : 'abcxd:',
      "socials" : {
          "fb": 'fb',
          "yt" : 'yt',
          "linkedIn": 'ln',
      },
      "photoURl" : 'img',
      "website" : 'telusko.com'
  },
  {
      "id":1  ,
      "name" :'Naveen Reddy' ,
      "address" : 'abcxd:',
      "socials" : {
          "fb": 'fb',
          "yt" : 'yt',
          "linkedIn": 'ln',
      },
      "photoURl" : 'img',
      "website" : 'telusko.com'
  }
]

function App() {
  return(
    <div className=''>
      
      <Routes>
        <Route exact path='/' element={<LoginPage/>}></Route>
        <Route path ='/user' element={<CreatorList/>}> </Route>
        <Route  path = '/creator' element={<CreatorProfile/>}></Route>
        <Route path='/creator/analytics' element={<CreatorAnalytics/>}> </Route>
      </Routes>
      
    </div>
  )
}

export default App;
