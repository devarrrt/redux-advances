import { userSlice } from './../reducers/userSlice';
import { IUser } from './../types';
import { AppDispatch } from './../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//redux-thunk
// export const fetchUsers = () => async(dispatch: AppDispatch) => {
//   try{
//     dispatch(userSlice.actions.usersFetching())
//      const data = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//      dispatch(userSlice.actions.userFetchingSuccess(data.data))
//     } catch (e: any){
//       dispatch(userSlice.actions.userFetchingError(e))
//     }
// }
//redux-toolkit
export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkApi ) => {
  try {
  const data = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    return data.data 
  } catch (e) {
    return thunkApi.rejectWithValue('Error')
  }
  }
)
