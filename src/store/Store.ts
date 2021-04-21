import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../components/statemanagement/Statemanagement';

export default configureStore({
  reducer: {
    loginSlice : loginReducer,
  },
})