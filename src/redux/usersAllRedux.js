import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: [],
    isFetching: false,
    error: false,
  },
  reducers: {
      // Define new actions for getting and deleting users
    //GET ALL
    getUsersStart: (state) => {
      state.isFetching = true;
      },
      getUsersSuccess: (state, action) => {
          state.isFetching = false;
          state.allUsers = action.payload;
      },
      getUsersFailure: (state) => {
          state.isFetching = false;
          state.error = true;
      },
  
      deleteUserStart: (state) => {
          state.isFetching = true;
      },
      deleteUserSuccess: (state, action) =>{
          state.isFetching = false;
          // Remove the deleted user from the list
          state.allUsers.splice(
            state.allUsers.findIndex((user) => user._id === action.payload),
            1
          );
      },
      deleteUserFailure: (state)=> {
          state.isFetching = false;
          state.error = true;
      }
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure 
} = usersSlice.actions;

export default usersSlice.reducer;