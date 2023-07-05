const { createSlice } = require('@reduxjs/toolkit');
const initialState = {
    noOfIceCreames: 10
};
const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.noOfIceCreames = state.noOfIceCreames - 1;
        },
        restoked: (state, action) => {
            state.noOfIceCreames = state.noOfIceCreames + action.payload;
        }   
    }
})
module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;