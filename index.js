console.log('from index.js');
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