const redux = require('redux');
const createStore = redux.createStore
// Actions the only way application can interact with store.
// carry some information form application to the store.
// plain jS objects.
// have a 'type' property that describes something that happend in the application.
// type property defined as string constants.
// Example of Cake Shop Actions
const CAKE_ORDERED = 'CAKE_ORDERED';
function orderCake(){
    return {
        type:CAKE_ORDERED,
        quantity: 1,
    } 
}
// Reducers : It specify how apps state changes in response to actions sent to the store.
// Reducer is a function that accepts state and action as arguments and returns next state 
// of the application.
// (previousState,action) => newState
const initialState = {
    numOfCakes :10,
    // anotherProperty:0
}
const reducer =(state=initialState,action)=>{
    switch (action.type) {
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes:state.numOfCakes-1
            }
            
        default:
            return state
            
    }
}
// Redux Store 
// one store for entire application 
// Responsibilities : holds application state 
// Allows access to state by getState(),
// Allows state to update by dispatch(action)
// registers listners via subscribe(listener)
const store = createStore(reducer)
console.log('initial State', store.getState());
 const unsubscribe = store.subscribe(()=>console.log('updated State' , store.getState()));
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
unsubscribe();

