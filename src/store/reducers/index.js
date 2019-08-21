import { combineReducers } from 'redux';
import auth from '@reducers/Auth';

const reducers = combineReducers({
    auth,
});

export default reducers;
