'use client';

import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';


import ArrowLeft from '../icons/arrow_left';



import { nunito_sans } from '../fonts/nunito_sans';






const ModalContainer = ({heading , children}) => {


    const router = useRouter();


    const backFunc = () => router.back();



    return(

        <div className='fixed top-0 left-0 w-full h-screen bg-transparent z-10 backdrop-brightness-[0.5] flex justify-center'>

            <div className={`absolute bg-white max-[699px]:h-full min-[700px]:rounded-lg min-[700px]:top-[10%] w-full min-[700px]:w-[600px] pb-5`}>

                <header className='flex items-center gap-x-2 px-6 py-4 border-b border-gray-200'>

                    <button title='back' onClick={backFunc}>
                        <ArrowLeft style='text-xl' />
                    </button>

                    <h3 className={`${nunito_sans.className} font-[700] text-black text-[18px]`}>{heading}</h3>
                </header>

                {children}

            </div>

        </div>
    )
}

ModalContainer.propTypes = {
    heading : PropTypes.string.isRequired,
}
export default ModalContainer;