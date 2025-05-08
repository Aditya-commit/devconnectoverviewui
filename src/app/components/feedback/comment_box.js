'use client';


import { useState , useEffect } from 'react';
import PropTypes from 'prop-types';


import { useFormSubmit } from '@/app/customHooks/useformSubmit';

import { nunito_sans } from '@/app/fonts/nunito_sans';


const CommentBox = ({id , refreshList}) => {
    

    const INITIAL_DATA = { 'id' : id , 'feedback' : '' }


    const [refreshKey , setRefreshKey] = useState(0); // THIS WILL UPDATE THE FEED LIST COMPONENT


    const { loading , data , error , response , onChange , submitForm } = useFormSubmit('feedback/add_feedback' , INITIAL_DATA);


    useEffect(()=> {response?.status === 200 && refreshList()},[response]);


    return (

        <>
            <textarea name='feedback' className={`outline-none border-2 border-gray-300 min-[800px]:rounded rounded-b-none px-3 py-2 text-[15px] text-gray-800 font-[600] focus:shadow-[0_0_2px_2px_#bec9ff] focus:border-blue-200 transition-color duration-300 ease-in-out min-h-[100px] w-full p-2 ${nunito_sans.className} font-[600] bg-white`} value={data.feedback} onChange={onChange} placeholder='Give your feedback' style={{scrollbarWidth : 'thin'}}></textarea>
            <div className='flex justify-end px-3 py-1 border-2 border-t-0 rounded-b bg-white border-gray-300'>
                <button className={`px-3 ${nunito_sans.className} font-[600] text-white bg-green-600 rounded py-1`} onClick={submitForm}>Submit</button>
            </div>
        </>
    )
}
CommentBox.propTypes = {
    id : PropTypes.string.isRequired,
    refreshList : PropTypes.func
}
export default CommentBox;