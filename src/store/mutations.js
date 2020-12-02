export default {
    addCount(state,payload){
        payload.count++;
   },
   addTCart(state,payload){
    
    state.cartList.push(payload) 
   }
}