import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Paperbase from './Template/Paperbase';
import TipsManagement from './component/TipsManagement';
function AppRouter ()  {
  return (
  <Routes>
  <Route path="/" element={<Paperbase/>} />
  <Route path="/tipsmanagement" element={<TipsManagement/>} />


    </Routes>
  ); 


};

export default AppRouter;
