// Multiple reducers
const redux = require('redux');
const { createStore, combineReducers, bindActionCreators } = redux;

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
const store = createStore(rootReducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
const actions = bindActionCreators({ orderCake, restokeCake, orderIcecream, restokeIcecream }, store?.dispatch);
actions?.orderCake();
actions?.restokeCake();
actions?.orderIcecream();
actions?.restokeIcecream();
unsubscribe();