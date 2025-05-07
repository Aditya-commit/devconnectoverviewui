import PropTypes from 'prop-types';

import { nunito_sans } from '@/app/fonts/nunito_sans';
import Spinner from '@/app/icons/spinner';

const SubmitButton = ({loading , text , submitFunc}) => {

    return(

        <div>
            <button className={`w-[120px] flex justify-center items-center h-[40px] ${loading ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600 transition-color duration-200 ease-in-out text-white'} rounded`} onClick={submitFunc}>
                {loading
                ?
                <Spinner style='animate-spin text-2xl text-white' />
                :
                <span className={`${nunito_sans.className} font-[600]`}>{text}</span>
                }
            </button>
        </div>
    )
}
SubmitButton.propTypes = {
    text : PropTypes.string,
    loading : PropTypes.bool,
    submitFunc : PropTypes.func.isRequired
}
export default SubmitButton;