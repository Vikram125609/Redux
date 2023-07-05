const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions;
const unsubscribe = store.subscribe(() => {})
store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restoked(3));
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restoked(10));
unsubscribe();