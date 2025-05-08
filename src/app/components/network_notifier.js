import PropTypes from 'prop-types';


const NetworkNotifier = ({Icon , children , bgColor}) => {

    return(
        <div className='fixed bottom-20 w-full z-10 flex justify-center items-center'>
            <div className={`flex items-center gap-x-3 ${bgColor}`}>
                {Icon}
                {children}
            </div>
        </div>
    )
}
export default NetworkNotifier;