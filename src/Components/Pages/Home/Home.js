import React from 'react';
import img from '../../../images/to-do-img.jpg'

const Home = () => {
    return (
        <div>
            <img src={img} alt="" className='w-100' style={{ height: '100vh' }} />
        </div>
    );
};

export default Home;