// Three Core Concepts 
// Store   : Holds the state of your application
// Action  : An action that descirbe what happen in the application
// Reducer : A reducer handle the action and decide how to update the state 
 

// First Principle
// The global state of your application is stored as an object inside a single store 

// Second Principle 
// The only way to change the state is to dispatch an action, an object that describe what happened 

// Third Principle 
// To specify how the state tree is updated based on the action you write pure reducers 
// Pure reducers are the pure function that take the previous state and an action as input and return the next state 
// Pure function the reducer instead of updating the previous state should return the new state 

// Actions 
// The only way the application interact with the store 
// Carry some information from your app to the redux store 
// Actions are plane javascript objects 
// Action have a type property that describe something had happened 
// The type property is typically defined as a string constant 

// Action Creator 
// Action Creator is an fucntion that returns an actions

// Reducers 
// Specify how the application state changes in response to the action sent to the store 
// Action only describe what happen but don't describe how the application state changes reducers are incharge of that 
// Reducer is a function that accept state and action as arguments and returns the next state of the application
// (previousState,action) => newState

// Redux Store
// One Store for the entire application
// Responsibility 
// Hold application state 
// Allow access to state via getState() method 
// Allow state to be updated by the dispatch(action) method 
// Store also allow application to register listener through the subscribe method 
// the subscribe method accepts a fucntion as its argument which is executed anytime the state in the redux store changes 
// You can also unsubscribe to the store by calling the function that was returned by the subscribe method 
