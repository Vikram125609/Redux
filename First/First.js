const redux = require('redux');
const { createStore, bindActionCreators } = redux;
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

// Helpher function that redux provides that is bind action creator function 
// Bind action creator is not really necessary 
const actions = bindActionCreators({ orderCake, restokeCake }, store?.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restokeCake();
unsubscribe();
