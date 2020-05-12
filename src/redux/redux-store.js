import {createStore, combineReducers,applyMiddleware} from 'redux'
import profileReducer from './profileReducer';
import sidebarReducer  from './sidebarReducer';
import dialogsReducer  from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import logger from 'redux-logger'


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer
});

let store = createStore(reducers,applyMiddleware(logger));

window.store=store

export default store
