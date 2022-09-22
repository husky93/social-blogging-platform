import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  loading: boolean,
  users: null | object
  error: string
}

const initialState: InitialState = {
  loading: false,
  users: null,
  error: ''
}


export const fetchUser = createAsyncThunk('user/fetchUser', () => {
  //... async logic
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUser.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, action:PayloadAction) => {
      state.loading = true
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUser.rejected, (state, action:PayloadAction) => {
      state.loading = false
      state.users = null
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export default userSlice.reducer