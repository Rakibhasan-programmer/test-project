import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        <div className='flex flex-row gap-6 items-start'>
            <Sidebar />
            <Navbar />
        </div>
    );
};

export default Home;