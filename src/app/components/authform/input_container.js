import PropTypes from 'prop-types';



const InputContainer = ({children}) => {

    return(

        <div className='mt-5 mb-4 flex flex-col gap-y-10 justify-center items-center'>
            {children}
        </div>
    )
}
export default InputContainer;