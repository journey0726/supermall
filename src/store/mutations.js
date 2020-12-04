export default {
    addCount(state,payload){
        payload.count++;
   },
   addTCart(state,payload){
    payload.checked = true
    state.cartList.push(payload) 
   }
}