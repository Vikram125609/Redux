const { configureStore } = require('@reduxjs/toolkit');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/icecream/icecreamSlice');
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
module.exports = store;