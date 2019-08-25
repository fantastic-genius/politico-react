import { combineReducers } from 'redux';
import auth from '@reducers/Auth';
import vote from '@reducers/Vote';
import office from '@reducers/Office';

const reducers = combineReducers({
    auth,
    vote,
    office,
});

export default reducers;
