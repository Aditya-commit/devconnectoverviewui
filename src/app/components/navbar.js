'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


import Logo from '../icons/logo';
import Setting from '../icons/setting';

import { nunito_sans } from '../fonts/nunito_sans';
import Home from '../icons/home';
import SettingPopup from './settings_popup';




let timeoutid = null;


const Navbar = ({username}) => {


    const [settingDisp , setSettingsDisp] = useState(false);
    const [settingAnimate , setSettingAnimate] = useState(false);


    const toggleSettings = () => {

        clearInterval(timeoutid);

        if(settingDisp){
            
            setSettingAnimate(false);

            timeoutid = setTimeout(()=>setSettingsDisp(false) , 500);
        }
        else{

            setSettingsDisp(true);

            timeoutid = setTimeout(() => setSettingAnimate(true) , 0);
        }
    }

    return(

        <div className={`sticky top-0 bg-white border-b border-gray-100 grid grid-cols-[1fr_max-content_max-content_max-content] items-center z-10 py-3 min-[640px]:py-5 px-5 min-[640px]:px-10 gap-x-4 min-[640px]:gap-x-8`}>

            <Link href='/' className='flex items-center gap-x-2 place-self-start'>
                <Logo style='text-3xl text-yellow-600' />
                <span className={`${nunito_sans.className} font-[700] text-black text-[18px] max-[640px]:hidden`}>DevToConnect</span>
            </Link>

            <Link href='/' className='p-1 rounded-full group'>
                <Home style='text-[25px] group-hover:text-gray-500' />
            </Link>

            <div className='relative'>
                <button className={`outline-none text-black group focus-visible:bg-gray-200 rounded-full p-1 max-[640px]:mt-1`} title='Setting' onClick={toggleSettings}>
                    <Setting style='text-[25px] group-hover:text-gray-500' />
                </button>
                {settingDisp && (
                    <SettingPopup animate={settingAnimate} />
                )}
            </div>

            <button className='flex items-center gap-x-2' title='Profile'>
                <Image
                    src='/default_user.png'
                    width={35}
                    height={35}
                    alt='User Image'
                />
                <span className={`${nunito_sans.className} text-[16px] font-[700] text-black max-[640px]:hidden`}>{username}</span>
            </button>

        </div>
    );
}
export default Navbar;