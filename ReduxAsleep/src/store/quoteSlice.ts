import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface QuoteState {
    quote: string;
    author: string;
    status: 'idle' | 'loading' | 'failed';
}

// Initial state
const initialState: QuoteState = {
    quote: '',
    author: '',
    status: 'idle',
};

// Define the thunk
export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
    const response = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes');
    return response.data[0];
});


// Create the slice
const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        resetQuote(state) {
            state.quote = '';
            state.author = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuote.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchQuote.fulfilled, (state, action: PayloadAction<{quote:string, author:string}>) => {
            state.status = 'idle';
            state.quote = action.payload.quote;
            state.author = action.payload.author;
        });
        builder.addCase(fetchQuote.rejected, (state) => {
            state.status = 'failed';
        });
    }
});

// Export actions in order to use them in components
export const { resetQuote } = quoteSlice.actions;
// Export reducer in order to use it in store
export default quoteSlice.reducer;