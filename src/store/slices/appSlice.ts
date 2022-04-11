import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const AppStatePathName = 'app';

export interface AppState {
  isLoaded: boolean;
  isLoading: boolean;
}

const initialState: AppState = {
  isLoaded: false,
  isLoading: false,
};

export const fetchCount = (amount = 1) => {
  return new Promise<{ data: number }>((resolve) => setTimeout(() => resolve({ data: amount }), 500));
};

export const exampleAsync = createAsyncThunk(`${AppStatePathName}/fetchExample`, async (amount: number) => {
  const response = await fetchCount(amount);

  return response.data;
});

export const counterSlice = createSlice({
  name: AppStatePathName,
  initialState,
  reducers: {
    changeAppIsLoadedState: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(exampleAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(exampleAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoaded = true;
      })
      .addCase(exampleAsync.rejected, (state) => {
        state.isLoading = false;
        state.isLoaded = true;
      });
  },
});

export const { changeAppIsLoadedState } = counterSlice.actions;
export default counterSlice.reducer;
