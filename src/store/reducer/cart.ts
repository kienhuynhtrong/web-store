import { AnyAction } from "redux";

let initialState = {
  item: [] as any, //mỗi món hàng dc add vào
  lengthItem : 0 as number //số loại món hàng add vao
}
function cartReducer(state = initialState, action: AnyAction) {
  switch(action.type){
    case 'ADD_TO_CART':
      state.item.push(action.data)
      let conditonAddItem = (state.item.findIndex((x:any) => x.id === action.data.id))
      if(conditonAddItem > 0 || state.item.length === 1) {
        state.lengthItem++
      }
      console.log(state.lengthItem)
      return {
        ...state,
      }
    default:
      return state
  }
}

export default cartReducer