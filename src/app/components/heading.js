import PropTypes from 'prop-types';
import { nunito_sans } from '../fonts/nunito_sans';


const Heading = ({heading}) => <h1 className={`text-[22px] min-[700px]:text-3xl ml-8 min-[700px]:ml-20 mt-6 ${nunito_sans.className} font-[700]`}>{heading}</h1>

Heading.propTypes = {
    heading : PropTypes.string.isRequired
}
export default Heading;