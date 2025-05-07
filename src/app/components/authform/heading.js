import PropTypes from 'prop-types';


import { nunito_sans } from '@/app/fonts/nunito_sans';



const AuthHeading = ({heading , Icon , subHeading=null}) => {

    return(
        <div className='w-full flex flex-col justify-center items-center pt-10 pb-10'>
            <Icon style='text-[29px] text-blue-600' />
            <h1 className={`${nunito_sans.className} font-[700] mt-2 text-[30px] text-black`}>{heading}</h1>
            {subHeading && (
                <h3 className={`${nunito_sans.className} text-gray-400 text-[15px] font-[500]`}>{subHeading}</h3>
            )}
        </div>
    )
}
AuthHeading.propTypes = {
    heading : PropTypes.string.isRequired,
    Icon : PropTypes.element.isRequired,
}
export default AuthHeading;