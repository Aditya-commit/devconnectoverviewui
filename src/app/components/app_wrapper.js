'use client';

import { useState , useEffect , createContext } from "react";


import { nunito_sans } from "../fonts/nunito_sans";

import Logo from "../icons/logo";
import ExclamationTriangle from "../icons/exclamation_triangle";



import Navbar from "./navbar";


export const UserContext = createContext(null);



import { useGetData } from "../customHooks/useGetData";



const AppWrapper = ({children}) => {


    const { loading , error , data } = useGetData(`auth/myinfo`);
    

    if(loading){

        return(
            <div className='h-screen w-full flex justify-center items-center gap-x-3'>
                <Logo style='text-6xl text-yellow-600' />
                <h1 className={`${nunito_sans.className} text-2xl font-[700] text-black`}>DevToConnect</h1>
            </div>
        )
    }

    if(error && (error.status != 401)){

        return (
            <div className={`w-full h-screen flex justify-center items-center`}>
                <div className={`w-[80vw] sm:w-1/2 h-1/2 border border-gray-200 drop-shadow rounded-sm flex justify-center items-center`}>
                    <ExclamationTriangle style='text-3xl text-red-600' />
                    <h3>Oops! Something went wrong please try again</h3>
                </div>
            </div>
        )
    }

    if(data.id){

        return (
            <UserContext.Provider value={{'userId' : data.id }}>
                <Navbar username={data.username} />
                {children}
            </UserContext.Provider>
        )    
    }
    else{
        return <>{children}</>
    }
}
export default AppWrapper;