'use client'

import Image from "next/image";



import { nunito_sans } from "@/app/fonts/nunito_sans";



import ProjectFeedbackContainer from '@/app/components/feedback/project_feedback_container';
import { useGetData } from '@/app/customHooks/useGetData';
import { useParams } from "next/navigation";









export default function Project(){

    const params = useParams();

    const { loading , data , error } = useGetData(`projects/${params.id}`)


    if(!loading && !error){

        const date = new Date(parseFloat(data?.date ? data.date : 0));

        const dateString = `${date?.getDate()}/${date?.getMonth()}/${date?.getFullYear()}`;


        return(
            <div className='grid min-[800px]:grid-cols-2 min-[1000px]:grid-cols-[60%_40%] min-[800px]:pb-10'>


            {/* PROJECT DETAILS */}
            <div className='mt-5 max-[799px]:mb-8 min-[800px]:mt-10 max-[799px]:px-2 min-[800px]:pl-5 min-[1000px]:pl-10 min-[1300px]:pl-20 w-full'>
                <div className='border border-gray-300 min-[800px]:border-gray-100 bg-white p-4 rounded-lg overflow-none flex flex-col gap-y-4 pt-3 min-[800px]:pt-5 pb-10 px-4 min-[800px]:px-10'>
                    <div className='grid grid-cols-[max-content_1fr_max-content] gap-x-3 border-b border-gray-200 py-5 mb-5'>
                        <Image
                            src='/default_user.png'
                            width={30}
                            height={30}
                            alt='User Image'
                        />
                        <span className={`${nunito_sans.className} font-[700] text-black`}>{data[0]?.username}</span>
                        <span className={`${nunito_sans.className} font-[500] ${data[0]?.status === 'complete' ? 'bg-green-500' : 'bg-purple-400'} self-start text-[12px] text-white bg-green px-3 py-1 rounded-full`}>{data[0]?.status?.toUpperCase()}</span>
                    </div>
                    <h1 className={`${nunito_sans.className} font-[700] text-black text-2xl`}>Project Title</h1>
                    <p className={`${nunito_sans.className} font-[500] text-gray-800`}>{data[0]?.content}</p>

                    <div className='grid grid-cols-[1fr_max-content] items-center'>
                        <a href={data[0]?.link} target='_blank' className={`place-self-start ${nunito_sans.className} font-[600] bg-[#0391da] text-white hover:bg-white hover:text-[#0391da] border-3 border-[#0391da] px-3 py-1 rounded text-[15px] transition-color duration-300 ease-in-out`}>View Site</a>
                        <span className={`text-gray-500 ${nunito_sans.className} text-[13px] font-[500]`}>{dateString}</span>
                    </div>
                </div>
            </div>
            {/* PROJECT DETAILS */}


            {/* FEEDBACKS */}
            <ProjectFeedbackContainer id={params.id} />
            {/* FEEDBACKS */}

            </div>
        )
    }

    if(error && !error.ok){

        if(error.status === 401){

            window.location.replace('/auth/signin');
        }

        return <span>Error Occured</span>
    }

}