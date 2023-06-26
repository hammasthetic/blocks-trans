'use client'
import React, { useEffect, useState } from 'react';
import { logIn,logOut } from '@/GlobalRedux/Features/authSlice';
import { useDispatch } from 'react-redux'; 
import { AppDispatch } from '@/GlobalRedux/store';
import { useRouter } from 'next/navigation';
const Login = (props:any) => {
    const dispatch=useDispatch<AppDispatch>();
  const [popup,setPopup]=useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router=useRouter();

  const handleLogin = () => {
    const signIn = async () => {
        try {
          const response = await fetch('http://localhost:5000/signIn', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
      
          if (response.ok) {
            
            const resData = await response.json();
            console.log(resData.user.name);
            const user=resData.user;
            
            dispatch(logIn(user));
            router.push('/');
            // Perform any necessary actions with the response data
          } else {
            // Handle error response
            const errorData = await response.json();
            // Handle error or display error message
          }
        } catch (error) {
          // Handle network error
          console.error('An error occurred:', error);
          // Display or handle the error as needed
        }
      };
      signIn();
      
   setPopup(false);
  };
  const SetPopup =(e:boolean)=>{
    setPopup(e)
  };
  useEffect(() => {
    SetPopup(props.popup);
    
  }, [props.popup]);

  return (
    <div>
     

      {popup && (
        <div className="fixed top-64 right-96 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 shadow-xl rounded-b-3xl z-50 text-white">
          <div className="p-6">
            
            <form>
              <div className="mb-4">
               
                <input
                  type="email"
                  id="email"
                  placeholder='Enter Email'
                  className="w-full px-3 py-2 bg-green-500 border-2 rounded-full placeholder:text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                
                <input
                  type="password"
                  id="password"
                  placeholder='Enter Password'
                  className="w-full px-3 py-2 bg-green-500 border-2 rounded-full placeholder:text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="text-white bg-green-500 px-4 py-2 border-2 border-white rounded-full hover:text-green-500 hover:bg-white"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
