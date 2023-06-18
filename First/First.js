const redux = require('redux');
const { createStore } = redux;
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOKED = 'CAKE_RESTOKED';

function orderCake() {
    return { type: CAKE_ORDERED, quantity: 1 }
}
function restokeCake() {
    return { type: CAKE_RESTOKED, payload: 9 }
}
const initialState = {
    numberOfCakes: 10
}
const reducer = (state = initialState, action) => {
    switch (action?.type) {
        case CAKE_ORDERED:
            return { ...state, numberOfCakes: state?.numberOfCakes - action?.quantity };
        case CAKE_RESTOKED:
            return { ...state, numberOfCakes: state?.numberOfCakes + action?.payload };
    }
};
const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restokeCake());
unsubscribe();