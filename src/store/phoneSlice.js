import { createSlice } from '@reduxjs/toolkit';

const phoneSlice = createSlice({
    name:"message",
    initialState: {
        message: ""
    },
    reducers: {
        addMessage(state, action) {
            console.log('STATE: ', state);
            console.log('ACTION: ', action);
            state.message.push({
                text: action.payload.text,
            });
        }
    },
})

export const {addMessage} = phoneSlice.actions;
export default phoneSlice.reducer;