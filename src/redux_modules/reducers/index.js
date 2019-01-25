import { combineReducers } from 'redux';
import filters from './filters';
import tasks from './tasks';

const rootReducer = combineReducers({ tasks, filters });

export default rootReducer;