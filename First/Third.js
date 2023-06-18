// Middleware
// Is the suggested way to extend redux with custom functionality
// Provide a third party extension point between dispatching an action and the moment it reaches the reducer
// Use middleware for logging, crashing reporting, performing asynchronus task etc.
const redux = require('redux');
const { createStore, combineReducers, bindActionCreators } = redux;
const { applyMiddleware } = require('redux');
const logger = require('redux-logger').createLogger();

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOKED = 'CAKE_RESTOKED';

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOKED = 'ICECREAM_RESTOKED';

function orderCake() {
    return { type: CAKE_ORDERED, quantity: 1 };
};
function restokeCake() {
    return { type: CAKE_RESTOKED, quantity: 1 };
};
function orderIcecream() {
    return { type: ICECREAM_ORDERED, quantity: 1 };
};
function restokeIcecream() {
    return { type: ICECREAM_RESTOKED, quantity: 2 };
};

const initialCakeState = {
    numberOfCakes: 10
}
const initialIcecreamState = {
    numberOfIcecream: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action?.type) {
        case CAKE_ORDERED:
            return { ...state, numberOfCakes: state?.numberOfCakes - action?.quantity };
        case CAKE_RESTOKED:
            return { ...state, numberOfCakes: state?.numberOfCakes + action?.quantity };
        default:
            return state;
    }
};
const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action?.type) {
        case ICECREAM_ORDERED:
            return { ...state, numberOfCakes: state?.numberOfIcecream - action?.quantity };
        case ICECREAM_RESTOKED:
            return { ...state, numberOfCakes: state?.numberOfIcecream + action?.quantity };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));
const unsubscribe = store.subscribe(() => {});
const actions = bindActionCreators({ orderCake, restokeCake, orderIcecream, restokeIcecream }, store?.dispatch);
console.log(initialCakeState)
actions?.orderCake();
actions?.restokeCake();
actions?.orderIcecream();
actions?.restokeIcecream();
unsubscribe();