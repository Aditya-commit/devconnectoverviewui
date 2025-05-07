'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

import { nunito_sans } from '@/app/fonts/nunito_sans';
import Eye from '@/app/icons/eye';


const AuthInput = ({name , type , value , onChange , placeholder , Icon}) => {

    const [focused , setFocused] = useState(false);

    const onFocus = () => setFocused(true);

    const onBlur = (event) => !event.currentTarget.contains(event.relatedTarget) && setFocused(false);




    const [show , setShow] = useState(false);

    const toggleShow = () => name === 'password' && setShow(!show); // HANDLES PASSWORD TOGGLE ON AND OFF



    return(

        <div className={`grid grid-cols-[1fr_max-content] items-center gap-x-3 w-[80%] transition-color duration-200 ease-in-out border-b-2 ${focused ? 'border-blue-500' : 'border-gray-200'} pr-3 pb-2`} onFocus={onFocus} onBlur={onBlur}>

            <input type={name === 'password' ? show ? 'text' : type : type} name={name} placeholder={placeholder} className={`${nunito_sans.className} font-[600] text-gray-700 caret-blue-500 outline-none px-3 text-[15px]`} value={value} onChange={onChange} />

            {name === 'password'
            ?
            <button className='group' onClick={toggleShow} title={show ? 'Hide' : 'Show'}>
                {show
                ?
                <Eye style='text-gray-400 group-focus-visible:text-black group-hover:text-gray-700' />
                :
                <Icon style='text-gray-400 group-focus-visible:text-black group-hover:text-gray-700' />
                }
            </button>
            :
            <Icon style='text-gray-400' />
            }

        </div>

    );
}
AuthInput.propTypes = {
    name : PropTypes.string.isRequired,
    type : PropTypes.oneOf(['text' ,'password']),
    value : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    placeholder : PropTypes.string.isRequired
}
export default AuthInput;