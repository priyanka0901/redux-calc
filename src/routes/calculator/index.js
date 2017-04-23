import { injectReducer } from '../../store/reducers';
// import Calculator from './components/Calculator';

// Sync route definition
export default (store) => ({
    path : 'calculator',

    getComponent (nextState, cb) {
        require.ensure([], (require) => {

            const Calculator = require('./containers/CalculatorContainer').default
            const reducer = require('./modules/calculator').default

            injectReducer(store, {key: 'calculator', reducer})
            cb(null, Calculator)

        },'Calculator')
    }
}) 