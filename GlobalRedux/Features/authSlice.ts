'use client'
import {createSlice,PayloadAction } from '@reduxjs/toolkit'
const localAuthInfo:any= localStorage.getItem('localAuthInfo')
// type InitialState={
//     value:userInfoState;
// }
// type userInfoState={

//     isAuth:boolean;
//     name:string;
//     email:string;
//     walletAddress:string;
//     token:string;
// }
const initialState=localAuthInfo?{value:JSON.parse(localAuthInfo)}:{
    value:{
        isAuth: false,
        name: '',
        email: '',
        walletAddress: '',
        token: '',
    }
}
export const auth=createSlice({
    name:'UserInfo',
    initialState,
    reducers:
    {
        logOut:(state)=>{
            state.value = {
                isAuth: false,
                name: '',
                email: '',
                walletAddress: '',
                token: '',
              };
            localStorage.removeItem('localAuthInfo');
            
        },
        logIn:(state,action)=>{
            const { isAuth, name, email, walletAddress, token } = action.payload;
            state.value = { isAuth, name, email, walletAddress, token };
            localStorage.setItem('localAuthInfo', JSON.stringify(state.value));
            
        },
    },
});
export const{logIn,logOut}=auth.actions;
export default auth.reducer;