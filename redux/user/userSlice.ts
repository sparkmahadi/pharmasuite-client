import { UserState } from '@/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
  userDetails: {
    _id:"",
    name:"",
    email:"",
    role:"",
    password:"",
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCred(state, action: PayloadAction<UserState['userDetails']>) {
      state.userDetails = action.payload;
    },
    clearUserCred(state) {
      state.userDetails = {};
    },
  },
});

export const { setUserCred, clearUserCred } = userSlice.actions;
export default userSlice.reducer;
