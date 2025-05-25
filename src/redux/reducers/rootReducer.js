import { combineReducers } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice'
const rootReducer = combineReducers({
    users: usersSlice,

})
export default rootReducer;