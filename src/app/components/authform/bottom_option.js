import { nunito_sans } from '@/app/fonts/nunito_sans';
import Link from 'next/link';
import PropTypes from 'prop-types';


const BottomOption = ({text, url , prettyText}) => {

    return(

        <div className='border-t border-gray-200 pt-6 w-[80%]'>

            <div className='flex items-center gap-x-2 justify-center'>
                <span className={`${nunito_sans.className} text-gray-500 font-[500] text-[14px]`}>{text}</span>
                <Link href={url} className={`${nunito_sans.className} font-[500] text-blue-600 text-[14px]`}>{prettyText}</Link>
            </div>

        </div>
    )
}
export default BottomOption;