import {connect} from 'react-redux';
import Result from '../components/Result';

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Result)