import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useFormSubmit } from "@/app/customHooks/useformSubmit";

import { nunito_sans } from "@/app/fonts/nunito_sans";


import Spinner from "@/app/icons/spinner";


const INITIAL_DATA = {'title' : ''  , 'description' : '' , 'status' : 'complete' , 'link' : ''};

const Container = () => {


    const { loading , data , error , response , submitForm , onChange } = useFormSubmit('projects/add_project' , INITIAL_DATA);

    const router = useRouter();


    useEffect(() => {
        response?.status === 200 && router.back();
    },[response]);

    return(

        <div className='flex flex-col px-6 py-6 gap-y-8'>

            <div className='flex flex-col gap-y-1'>
                
                <label className={`${nunito_sans.className} font-[600] ml-2`}>Title</label>
                <input type='text' name='title' className={`${nunito_sans.className} border-2 border-gray-200 rounded px-3 py-2 text-[15px] text-gray-800 focus:shadow-[0_0_2px_2px_#bec9ff] font-[600] focus:border-blue-400 transition-color duration-300 ease-in-out`} value={data.title} onChange={onChange} placeholder='Enter title' />
            </div>

            <div className='flex flex-col gap-y-1'>
                
                <label className={`${nunito_sans.className} font-[600] ml-2`}>Description</label>
                <textarea name='description' className={`outline-none ${nunito_sans.className} border-2 border-gray-200 rounded px-3 py-2 text-[15px] text-gray-800 font-[600] focus:shadow-[0_0_2px_2px_#bec9ff] focus:border-blue-400 transition-color duration-300 ease-in-out min-h-[100px]`} value={data.description} onChange={onChange} placeholder='Enter description about the project'></textarea>
            </div>

            <div className='flex flex-col gap-y-1'>
                
                <label className={`${nunito_sans.className} font-[600] ml-2`}>Status</label>
                <select name='status' className={`outline-none ${nunito_sans.className} border-2 border-gray-200 rounded px-3 py-2 text-[15px] focus:shadow-[0_0_2px_2px_#bec9ff] font-[500] focus:border-blue-400 transition-color duration-300 ease-in-out`} value={data.status} onChange={onChange} placeholder='Enter link for the project'>
                    <option value='complete'>COMPLETE</option>
                    <option value='pending'>PENDING</option>
                </select>
            </div>

            <div className='flex flex-col gap-y-1'>
                
                <label className={`${nunito_sans.className} font-[600] ml-2`}>Link</label>
                <input type='text' name='link' className={`${nunito_sans.className} border-2 border-gray-200 rounded px-3 py-2 text-[15px] font-[600] focus:shadow-[0_0_2px_2px_#bec9ff] focus:border-blue-400 transition-color duration-300 ease-in-out text-blue-600 caret-blue-500`} value={data.link} onChange={onChange} placeholder='Enter link for the project' />
            </div>

            <button className={`${nunito_sans.className} flex justify-center items-center mt-2 font-[600] bg-green-600 hover:bg-green-500 place-self-center w-[150px] text-white h-[38px] rounded border-2 border-green-600 transition-color duration-300 ease-in-out`} onClick={submitForm}>
                {loading
                ?
                <Spinner style='animate-spin text-white text-xl' />
                :
                <>Add</>
                }
            </button>

        </div>
    );
}
export default Container;