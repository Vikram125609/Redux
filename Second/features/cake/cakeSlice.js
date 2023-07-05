const { createSlice } = require('@reduxjs/toolkit');
const initialState = {
    noOfCake: 10
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.noOfCake = state.noOfCake - 1;
        },
        restoked: (state, action) => {
            state.noOfCake = state.noOfCake + action?.payload;
        }
    }
});
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;