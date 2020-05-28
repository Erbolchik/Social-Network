import {createStore, combineReducers,applyMiddleware} from 'redux'
import profileReducer from './profileReducer';
import sidebarReducer  from './sidebarReducer';
import dialogsReducer  from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware,logger));

window.store=store

export default store
