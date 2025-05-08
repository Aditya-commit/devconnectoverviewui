import { useState , useEffect } from 'react';


import { nunito_sans } from '../fonts/nunito_sans';



import Logout from '../icons/logout';
import LoginActivity from '../icons/login_activity';
import Shield from '../icons/shield';



import { useFormSubmit } from '../customHooks/useformSubmit';






const SettingPopup = ({animate}) => {


    const { loading , error , response , submitForm } = useFormSubmit('auth/signout' , {});

    if(response?.status === 200){
        window.location.replace('/auth/sigin');
    }

    return(
        <div className={`absolute -left-28 min-[640px]:-left-20 ${animate ? 'h-[145px]' : 'h-0'} bg-white border border-gray-300 w-[200px] rounded shadow transition-[height] duration-500 ease-in-out overflow-hidden`}>
            <button className='group hover:bg-gray-100 flex items-center gap-x-3 w-full py-3 px-5 text-center'>
                <Shield style='text-xl text-gray-600' />
                <span className={`${nunito_sans.className} font-[700]`}>Security</span>
            </button>
            <button className='group hover:bg-gray-100 flex items-center gap-x-3 w-full py-3 px-5 text-center'>
                <LoginActivity style='text-xl text-gray-600' />
                <span className={`${nunito_sans.className} font-[700]`}>Login Activity</span>
            </button>
            <button className='group hover:bg-gray-100 flex items-center gap-x-3 w-full py-3 px-5 text-center' onClick={submitForm}>
                <Logout style='text-xl text-gray-600' />
                <span className={`${nunito_sans.className} font-[700]`}>Logout</span>
            </button>
        </div>
    )
}
export default SettingPopup;