import Image from 'next/image';
import PropTypes from 'prop-types';



import { nunito_sans } from '@/app/fonts/nunito_sans';



const FeedbackList = ({data}) => {

    return(
        <li className='grid grid-cols-[max-content_1fr] gap-x-3 px-2 py-3 bg-white border border-gray-200 items-start'>
            
            <div className='flex items-center gap-x-2'>
                <Image
                    src='/default_user.png'
                    width={30}
                    height={30}
                    alt='User Image'
                />
                <span className={`${nunito_sans.className} text-[14px] font-[700] text-black`}>{data?.username}</span>
            </div>

            <p className={`text-black text-[14px] whitespace-pre-line`}>{data?.text}</p>

        </li>
    )
}
export default FeedbackList;