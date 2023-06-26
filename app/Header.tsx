'use client'
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react';
import Login from './Login/page';
import nft from './Nft/page';
import  WalletConnect  from './WalletConnect/page';
import { useSelector } from 'react-redux';

const Header = () => {
    type userType ={
        isAuth: boolean;
        name:string;
        email: string;
        walletAddress:string;
        token:string;
    }
    const [showPopup, setShowPopup] = useState(false);
    const [user,setUser]=useState({} as userType);
    const [walletPopup,setWalletPopUp]=useState(false)
    const [walletStatus,setWalletStatus]=useState(false);
    let reduxUser:userType=useSelector((state:any)=> state.AuthReducer.value);

    useEffect(() => {
      handleUser(reduxUser);
    
    }, [])
    const handleUser=(e:userType)=>{
        setUser(e)
    }
    const handleWallerStatus=(e:boolean)=>{
      setWalletStatus(e)
    }
    const handleLoginButton = () => {
      setShowPopup(showPopup ? false : true);      
    };
    const handleWalletButton = () => {
      setWalletPopUp(walletPopup ? false : true);      
    };
    
    
  return (
    <header className="fixed top-20 left-1/4 w-1/2 bg-green-500 rounded-full shadow-lg z-50  ease-linear transition-all duration-150">
      <div className=" max-w-7xl mx-auto px-16 py-4 flex justify-between items-center">
        <div className='w-1/4'> <h1 className="text-white text-2xl font-bold inline-block mr-1">Blocks</h1><span className='inline-block text-white font-bold'>trans.</span>
        </div>
        <div className='w-3/4 flex justify-end items-center'>
        <Link href='/' className='hover:shadow-lg ease-linear transition-all duration-150 mx-2 text-white bg-green-500 px-2 py-3  rounded-full  hover:text-green-500 hover:bg-white'>Home</Link>
        <Link href='/Nft' className='hover:shadow-lg ease-linear transition-all duration-150 mx-2 text-white bg-green-500 px-2 py-3  rounded-full  hover:text-green-500 hover:bg-white'>NFTs</Link>
        <Link href='#' className='hover:shadow-lg ease-linear transition-all duration-150 mx-2 text-white bg-green-500 px-2 py-3  rounded-full  hover:text-green-500 hover:bg-white'>Crypto</Link>
        {user.isAuth ?  <Link href='#' className='hover:shadow-lg ease-linear transition-all duration-150 mx-2 text-white bg-green-500 px-2 py-3  rounded-full  hover:text-green-500 hover:bg-white'>{user.name}</Link>:<button onClick={handleLoginButton} className='hover:shadow-lg ease-linear transition-all duration-150 mx-2 text-white bg-green-500 px-2 py-3  rounded-full  hover:text-green-500 hover:bg-white'>Login</button>}
        <button onClick={handleWalletButton} className='hover:shadow-lg ease-linear transition-all duration-150 mx-2 text-white bg-green-500 px-2 py-3  rounded-full  hover:text-green-500 hover:bg-white'>Connect Wallet</button>
        </div>
      </div>
      <Login popup={showPopup}/>
        {walletPopup && <WalletConnect/>}
        
        
    </header>
  );
};

export default Header;