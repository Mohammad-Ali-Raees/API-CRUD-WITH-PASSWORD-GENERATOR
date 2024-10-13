import React from 'react'
import {Routes,Route,Link} from "react-router-dom";
import Home from './Screens/Home';
import { ContextAppProvider } from './App Provider/ContextAppProvider';
import Pass from './Screens/Pass';
import GetData from './API CRUD/GetData';

const App = () => {
  return (
    <>
    <ContextAppProvider>
      <Routes>

        <Route path='/home' element={<Home />} />
        <Route path='/pass' element={<Pass />} />
        <Route path='/getdata' element={<GetData />} />

      </Routes>
      </ContextAppProvider>
    </>
  )
}

export default App