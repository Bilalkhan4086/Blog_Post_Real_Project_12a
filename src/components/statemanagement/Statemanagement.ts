import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: {
    login : false,
    data : {}
  },
  reducers: {
    signin: (state) => {
      state.login = true
    },
    signout: (state) => {
      state.login = false
    },
    conveyData : (state,actions)=>{
      state.data = actions.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { signin, signout, conveyData } = loginSlice.actions

export default loginSlice.reducer