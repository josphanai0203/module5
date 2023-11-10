import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Employee from './employee';
import DetailEmployee from './DetailEmployee';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/employee' element={<Employee/>}/>
            <Route path='/employee/:id' element={<DetailEmployee/>}/>
        </Routes>
    );
};

export default Routers;