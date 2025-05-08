import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';



import { nunito_sans } from '../fonts/nunito_sans';



const ProjectCard = ({data}) => {

    const date = new Date(parseFloat(data?.date));

    const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    return(

        <div className={`flex flex-col px-4 py-6 rounded-full bg-white rounded-lg`}>

            <span className={`${nunito_sans.className} font-[500] ${data?.status === 'complete' ? 'bg-green-500' : 'bg-purple-400'} self-start text-[12px] text-white bg-green px-3 py-1 rounded-full`}>{data?.status.toUpperCase()}</span>

            <Link href={`/project/${data?.id}`} className={`${nunito_sans.className} font-[700] text-black text-[19px] mt-8 mb-2 max-[640px]:underline max-[640px]:underline-offset-5 decoration-gray-500 min-[640px]:hover:underline min-[640px]:hover:underline-offset-3`}>{data?.title}</Link>
            <p className={`w-full ${nunito_sans.className} font-[500] text-gray-600 truncate`} style={{whiteSpace : 'nowrap'}}>{data?.description}</p>

            <div className='grid grid-cols-[1fr_max-content] mt-10 items-center px-1 mb-6'>
                <Link href='/' className={`${nunito_sans.className} place-self-start font-[600] flex items-center gap-x-1`}>
                    <Image
                        src='/default_user.png'
                        alt='Could not load image'
                        width={30}
                        height={30}
                    />
                    {data.username}
                </Link>
                <span className={`text-gray-500 ${nunito_sans.className} text-[13px] font-[500]`}>{dateString}</span>
            </div>

            <div className='flex items-center gap-x-3 mt-3'>
                <a href={`${data?.link}`} target='_blank' className={`${nunito_sans.className} font-[600] bg-[#0391da] text-white hover:bg-white hover:text-[#0391da] border-3 border-[#0391da] px-3 py-1 rounded text-[15px] transition-color duration-300 ease-in-out`}>View Site</a>
                <Link href={`?feedback=${data?.id ? data.id : ''}`} className={`${nunito_sans.className} font-[600] bg-[#0391da] text-white hover:bg-white hover:text-[#0391da] border-3 border-[#0391da] px-3 py-1 rounded text-[15px] transition-color duration-300 ease-in-out`}>Feedback ({data?.feedback_counts})</Link>
            </div>
        </div>
    );
}
ProjectCard.propTypes = {
    data : PropTypes.object
}
export default ProjectCard;