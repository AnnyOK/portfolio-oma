import React from 'react'
import Navbar from '../components/navbar';
import styles from '../styles.module.css'
import '../index.css'
export const Home = () => {
  return <div className={`bg-cover bg-center text-white -300 h-[800px] ${styles.radial} `} >
    <Navbar/>
    <div className=''>
      <h1 className='text-blue-200 text-[100px] text-center font-extrabold outline-5'>
        Frontend Developer 
        
      </h1>
      <p>Hi, my name is</p>
      <p>User.name</p>
    </div>
    </div>;
};
