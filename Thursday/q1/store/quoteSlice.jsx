import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuotes = createAsyncThunk(
  "quotes/fetchQuotes",
  async () => {
    const res = await fetch("https://dummyjson.com/quotes");
    const data = await res.json();
    return data.quotes;
  }
);

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.loading = false;
        state.quotes = action.payload;
      });
  },
});

export default quotesSlice.reducer;
