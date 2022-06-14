import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
// import Hooks from './components/Hooks';
// import Photos from './components/Photos/Photos';

// import ClassComponent from './components/ClassComponent';

// import Studentintro from './components/StudentIntro';

// import Counter from './components/Counter';

// import Bulb from './components/Bulb';

// import ChildComponent2 from './components/ChildComponent2';
// import Signup from './components/Photos/Signup/Signup'
import NavbarComponent from './components/NavbarComponent';
import Photos1 from './components/Photos/Photos';
import Login from './components/Photos/Login';
import Signupvalid from './components/Photos/Signup/Signupvalid'
import Error404 from './components/Error404';
import PhotosEngl from './components/Photos/PhotosEngl';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">

      <Router>

        {/* <ChildComponent chapter={1} hobbies={['acting','dancing']} names={{'firstname':'kamal', 'lastname':'kumar'}} image='https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/check_user_man-512.png'/>
      <ChildComponent chapter={2} hobbies={['swimming','playing']} names={{'firstname':'vibhor','lastname':'chaudhary'}} image='https://image.shutterstock.com/image-vector/medical-professional-doctor-nurse-doing-260nw-1773473690.jpg'/> */}
        {/* <Studentintro firstname='shubham ' lastname='singh' hobbies={['gaming','walking','sleeping','biking','bcing']} />
      <Studentintro firstname='shubh ' hobbies={['gaming','walking','sleeping']} /> */}

        {/* <ClassComponent message='hello there'/> */}

        {/* <Counter /> */}

        {/* <Bulb/> */}

        {/* <ChildComponent2/> */}

        <NavbarComponent />
        <Routes>
          
          <Route path='/' element={<Photos1/>} />
          <Route path='/photos' element={<Photos1/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signupvalid />} />
          <Route path='/contact' element={<Contact/>} />

          <Route path='/about' element={<About/>} />
          
          {/* <Route path='/feature' element={<Feature/>} />
          <Route path='/pricing' element={<Pricing/>} /> */}

          <Route path='/Photos1/:id' element={<PhotosEngl/>} />
          
          <Route path='*' element={<Error404/>} />
          {/* no match route */}
        </Routes>
        
      </Router>
      

    </div>
  );
}

export default App;
