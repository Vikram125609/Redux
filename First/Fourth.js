// Synchronus Actions
// As soon as an action was dispatched the state was immediately updated
// If you had dispatch the CAKE_ORDERED the number of cakes will be decremented immediately 

// Asynchronus Actions 
// Asynchronus api calls to fetch the data from an end point and use that data in your application

// Our Application 
// Fetch a list of user from an API end point and store it in the redux store 
// State
// Actions
// Reducers

// State -> 
// const state = {
//     loading: true,
//     data: [],
//     error: ''
// }

// Actions -> So here we have three types of actions 
// FETCH_USERS_REQUESTED - Fetch list of users
// FETCH_USERS_SUCCEEDED - Fetch successfully 
// FETCH_USERS_FAILED - Error when fetching the data

// Reducers
// case: FETCH_USERS_REQUESTED => loading: true
// case: FETCH_USERS_SUCCEEDED => loading: false, users: data
// case: FETCH_USERS_FAILED => loading: false, error: 

const redux = require('redux');
const { createStore, applyMiddleware } = redux;


const state = {
    loading: false,
    data: [],
    error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequested = () => {
    return { type: FETCH_USERS_REQUESTED };
};

const fetchUsersSucceeded = (users) => {
    return { type: FETCH_USERS_SUCCEEDED, payload: users };
}

const fetchUsersFailed = (error) => {
    return { type: FETCH_USERS_FAILED, payload: error };
}

const reducer = (state = state, action) => {
    switch (action?.type) {
        case FETCH_USERS_REQUESTED:
            return { ...state, loading: true };
        case FETCH_USERS_SUCCEEDED:
            return { ...state, data: action?.payload };
        case FETCH_USERS_FAILED:
            return { ...state, error: actions?.payload };
    }
};

const store = createStore(reducer, applyMiddleware);

// How to use action creator with the network request.
// Api call while working with redux 

// Redux-Thunk is from the redux ecosystem and is the standard way to define async action creator
// Redux-Thunk is a middleware we will be applying to the redux store 