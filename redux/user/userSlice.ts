import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userDetails: {
    _id?: string;
    name?: string;
    email?: string;
    role?: string;
  };
}

const initialState: UserState = {
  userDetails: {},
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
