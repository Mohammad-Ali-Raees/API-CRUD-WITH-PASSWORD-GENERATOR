import React from 'react'
import {Routes,Route,Link} from "react-router-dom";
import Home from './Screens/Home';
import { ContextAppProvider } from './App Provider/ContextAppProvider';
import Pass from './Screens/Pass';
import GetData from './API CRUD/GetData';
import SkeletonReact from './Skeleton Loading Project/SkeletonReact';

const App = () => {
  return (
    <>
    <ContextAppProvider>
      <Routes>

        <Route path='/home' element={<Home />} />
        <Route path='/pass' element={<Pass />} />
        <Route path='/getdata' element={<GetData />} />
        <Route path="/skeleton" element={<SkeletonReact/>} />

      </Routes>
      </ContextAppProvider>
    </>
  )
}

export default App