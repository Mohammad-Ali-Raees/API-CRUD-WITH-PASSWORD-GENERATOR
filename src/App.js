import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from './Screens/Home';
import { ContextAppProvider } from './App Provider/ContextAppProvider';
import Pass from './Screens/Pass';
import GetData from './API CRUD/GetData';
import SkeletonReact from './Skeleton Loading Project/SkeletonReact';
import CustomReact from './Custom Hook/CustomReact';

const App = () => {
  return (
    <>
    <ContextAppProvider>
      <Routes>

        <Route path='/home' element={<Home />} />
        <Route path='/pass' element={<Pass />} />
        <Route path='/getdata' element={<GetData />} />
        <Route path="/skeleton" element={<SkeletonReact/>} />
        <Route path="/reacthook" element={<CustomReact/>} />


      </Routes>
      </ContextAppProvider>
    </>
  )
}

export default App