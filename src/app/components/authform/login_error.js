import PropTypes from 'prop-types';


const LoginError = ({bgColor , Icon , children}) => {
    return(
        <div className={`w-full flex items-center p-4 ${bgColor}`}>
            <div className='flex justify-center items-center space-x-3 flex-grow'>
                {Icon}
                {children}
            </div>
        </div>
    )
}

LoginError.propTypes = {
    bgColor : PropTypes.string.isRequired,
    Icon : PropTypes.element.isRequired,
    children : PropTypes.element.isRequired,
}

export default LoginError;